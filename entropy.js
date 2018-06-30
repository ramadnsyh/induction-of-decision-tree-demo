const entropy = (data) => {
  let result = 0,
      total = 0
  for (const iterator of Object.keys(data)) {
    total += data[iterator]
  }
  for (const iterator of Object.keys(data)) {
    if ( data[iterator] > 0 ) {
      result += ((-data[iterator] / total) * Math.log2(data[iterator] / total))
    }
  }
  return parseFloat(result)
}

module.exports = entropy