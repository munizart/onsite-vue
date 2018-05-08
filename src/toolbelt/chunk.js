export const chunk = function (array, chunkSize = 1, chunks = null, index = 0, chunkIndex = 0) {
  if (!array.length) {
    return []
  } else {
    chunks = chunks || Array(Math.ceil(length / chunkSize))
    if (index < array.length) {
      chunks[chunkIndex] = array.slice(index, index + chunkSize)
      return chunk(array, chunkSize, chunks, index + chunkSize, chunkIndex + 1)
    } else {
      return chunks
    }
  }
}
