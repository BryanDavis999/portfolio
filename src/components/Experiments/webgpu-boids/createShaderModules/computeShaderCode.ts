import { WORKGROUP_SIZE } from "../constants"

const createComputeShaderModule = /* wgsl */`
  struct SimParams {
    boidSpeed : f32,
    cohesionDistance : f32,
    separationDistance : f32,
    alignmentDistance : f32,
    cohesionScale : f32,
    separationScale : f32,
    alignmentScale : f32,
  }

  struct Particle {
    pos : vec2<f32>,
    vel : vec2<f32>,
  }

  struct Particles {
    particles : array<Particle>,
  }

  @binding(0) @group(0) var<uniform> params : SimParams;
  @binding(1) @group(0) var<storage, read> particlesA : Particles;
  @binding(2) @group(0) var<storage, read_write> particlesB : Particles;

  @compute @workgroup_size(${WORKGROUP_SIZE})
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    // Initialize target to modify
    var targetIndex = GlobalInvocationID.x;
    var targetPosition = particlesA.particles[targetIndex].pos;
    var targetVelocity = particlesA.particles[targetIndex].vel;

    // Initialize bulk values
    var cohesionVector = vec2(0.0);
    var cohesionCounter = 0u;
    var alignmentVector = vec2(0.0);
    var alignmentCount = 0u;
    var separationVector = vec2(0.0);

    // Loop though every neighbor and update the bulk values
    var pos : vec2<f32>;
    var vel : vec2<f32>;
    var dis : f32;
    for (var i = 0u; i < arrayLength(&particlesA.particles); i++) {
      if (i == targetIndex) {
        continue;
      }

      pos = particlesA.particles[i].pos.xy;
      vel = particlesA.particles[i].vel.xy;
      dis = distance(pos, targetPosition);
      if (dis < params.cohesionDistance) {
        cohesionVector += pos;
        cohesionCounter++;
      }
      if (dis < params.separationDistance) {
        separationVector -= pos - targetPosition;
      }
      if (dis < params.alignmentDistance) {
        alignmentVector += vel;
        alignmentCount++;
      }
    }

    // Normalize the cohesion & alignment vectors
    if (cohesionCounter > 0) {
      cohesionVector = (cohesionVector / vec2(f32(cohesionCounter))) - targetPosition;
    }
    if (alignmentCount > 0) {
      alignmentVector = alignmentVector / f32(alignmentCount);
    }

    // Calculate new target velocity & clamp it
    targetVelocity +=
      (cohesionVector * params.cohesionScale) +
      (separationVector * params.separationScale) +
      (alignmentVector * params.alignmentScale);
    targetVelocity = normalize(targetVelocity) * clamp(length(targetVelocity), 0.0, 0.1); // clamped between 0 & 1
    
    // kinematic update
    targetPosition = targetPosition + (targetVelocity * params.boidSpeed);

    // Wrap around boundary
    if (targetPosition.x < -1.0) {
      targetPosition.x = 1.0;
    }
    if (targetPosition.x > 1.0) {
      targetPosition.x = -1.0;
    }
    if (targetPosition.y < -1.0) {
      targetPosition.y = 1.0;
    }
    if (targetPosition.y > 1.0) {
      targetPosition.y = -1.0;
    }
    // Write back
    particlesB.particles[targetIndex].pos = targetPosition;
    particlesB.particles[targetIndex].vel = targetVelocity;
  }
`

export default createComputeShaderModule