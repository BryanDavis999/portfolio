---
title: 'WebGPU Boids'
date: '2020-01-01'
---

# WebGPU Boids Simulation

---

## What are Boids?
"Boid" or "Bird-oid Object" is a simple artificial life simulation created by Craig Reynolds in 1986.  
&nbsp;  
It simulates the flocking behavior of birds, fishes, herd animals and other similar creatures.  
&nbsp;  
All the Boids shown on the left move forward with a constant velocity but steer themselves based on 3 simple rules :
- Separation: A Boid will steer to avoid crowding its neighbors.
- Alignment: A Boid will align itself towards the average heading of its neighbors.
- Cohesion: A Boid will move itself towards the center of its neighbors.

---

## Simulation Details
The Simulation allows for the modification of the strength and distance of all three parameters.  
&nbsp;  
It also allows for the modification of the Boid velocity.  
&nbsp;  
Each Boid cycles through colors based on its angle to allow for easier identification of its alignment compared to its neighbors.  