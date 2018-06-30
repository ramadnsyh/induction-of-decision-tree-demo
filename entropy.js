const entropy = (data) => {
  let result = 0
  for (const iterator of Object.keys(data)) {
    result = result +  ((-data[iterator] / (data.yes + data.no)) * Math.log2(data[iterator] / (data.yes + data.no)))
  }
  return parseFloat(result)
}

module.exports = entropy