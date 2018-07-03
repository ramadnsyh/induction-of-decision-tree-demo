const sorting = (windy, humidity, temperature, outlook) => {
  let data = [{
    name: 'windy',
    value: windy
  }, {
    name: 'humidity',
    value: humidity
  }, {
    name: 'temperature',
    value: temperature
  }, {
    name: 'outlook',
    value: outlook
  }]
  let maxValue = data[0]
  for ( let i = 1; i < data.length; i++ ) {
    if ( data[i].value > maxValue.value ) {
      maxValue = data[i]
    }
  }
  return maxValue
}

module.exports = sorting