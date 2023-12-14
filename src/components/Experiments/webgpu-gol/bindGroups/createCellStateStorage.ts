const createCellStateStorage = ({device, storageSize}: any) => {
  // Create an array representing the active state of each cell.
  const cellStateArray = new Uint32Array(storageSize);

  // Create a storage buffer to hold the cell state.
  const cellStateStorage = [
    device.createBuffer({
      label: "Cell State A",
      size: cellStateArray.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    }),
    device.createBuffer({
      label: "Cell State B",
      size: cellStateArray.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    })
  ];

  // Set each cell to a random state, then copy the JavaScript array into storage buffer A.
  for (let i = 0; i < cellStateArray.length; ++i) {
    cellStateArray[i] = Math.random() > 0.6 ? 1 : 0;
  }
  device.queue.writeBuffer(cellStateStorage[0], 0, cellStateArray);

  return cellStateStorage;
}

export default createCellStateStorage