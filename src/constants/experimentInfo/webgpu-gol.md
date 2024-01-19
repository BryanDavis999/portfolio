---
title: 'WebGPU Game of Life'
date: '2020-01-01'
---

# WebGPU Game of Life Simulation

--- 

## What is the Game of Life?
The Game of Life is a cellular automaton created by John Horton Conway in 1970.  
&nbsp;  
It consists of a two-dimensional grid of square cells. Each square is in one of two states: "Alive" or "Dead".  
&nbsp;  
Every cell interacts with its eight neighbors to determine whether it lives or dies based on the following rules:  
- Any live cell with fewer than 2 or greater than 3 live neighbors will die.
- Any live cell with 2 or 3 neighbors lives on to the next generation.
- Any dead cell with exactly 3 neighbors becomes a live cell.

---

## Simulation Details
The Simulation is a simple implementation of the above rules using WebGPU based on [Google's WebGPU tutorial](https://codelabs.developers.google.com/your-first-webgpu-app)  

---