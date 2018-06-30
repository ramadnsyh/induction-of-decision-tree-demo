const entropy = require('./entropy')

const gain = (data) => {

  let total = 0
  let result = 0
  for (const iterator of Object.keys(data)) {
    for (const value of Object.keys(data[iterator])) {
      total += data[iterator][value]
    }
  }
  for (const iterator of Object.keys(data)) {
    let temptTotal = 0
    for (const value of Object.keys(data[iterator])) {
      temptTotal += data[iterator][value]
    }
    result += ((temptTotal / total) * entropy(data[iterator]))
  }

  return result
}

module.exports = gain