---
title: 'WebGPU Boids'
date: '2020-01-01'
---

# WebGPU Boids Simulation
&nbsp;
## What are Boids?
&nbsp;
"Boid" or "Bird-oid Object" is a simple artificial life simulation created by Craig Reynolds in 1986.
It simulates the flocking behavior of birds, fishes, herd animals and other similar creatures.
\
All the Boids shown on the left move forward with a constant velocity but steer themselves based on 3 simple rules :
- Separation: A Boid will steer to avoid crowding its neighbors.
- Alignment: A Boid will align itself towards the average heading of its neighbors.
- Cohesion: A Boid will move itself towards the center of its neighbors.
\
## Simulation Details
\
The Simulation allows for the modification of the strength and distance of all three parameters.
It also allows for the modification of the Boid velocity.
\
Each Boid cycles through colors based on its angle to allow for easier identification of its alignment compared to its neighbors.