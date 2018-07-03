const fs = require('fs')
      data = JSON.parse(fs.readFileSync('data.json', 'utf8')),
      entropy = require('./entropy'),
      gain = require('./gain'),
      sorting = require('./sorting'),
      decision = require('./decision')

function dataMining(data, target) {
  let outlookSummary = {
    sunny: {
      yes:  data.filter(activity => activity.outlook === 'Sunny' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.outlook === 'Sunny' && activity.play === 'No').length,
    },
    overcast: {
      yes:  data.filter(activity => activity.outlook === 'Overcast' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.outlook === 'Overcast' && activity.play === 'No').length,
    },
    rainy: {
      yes:  data.filter(activity => activity.outlook === 'Rainy' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.outlook === 'Rainy' && activity.play === 'No').length,
    }
  }
  
  let tempSummary = {
    hot: {
      yes:  data.filter(activity => activity.temperature === 'Hot' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.temperature === 'Hot' && activity.play === 'No').length,
    },
    mild: {
      yes:  data.filter(activity => activity.temperature === 'Mild' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.temperature === 'Mild' && activity.play === 'No').length,
    },
    cool: {
      yes:  data.filter(activity => activity.temperature === 'Cool' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.temperature === 'Cool' && activity.play === 'No').length,
    }
  }
  
  let humiditySummary = {
    high: {
      yes:  data.filter(activity => activity.humidity === 'High' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.humidity === 'High' && activity.play === 'No').length,
    },
    normal: {
      yes:  data.filter(activity => activity.humidity === 'Normal' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.humidity === 'Normal' && activity.play === 'No').length,
    }
  }
  
  let windySummary = {
    strong: {
      yes:  data.filter(activity => activity.windy === 'Strong' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.windy === 'Strong' && activity.play === 'No').length,
    },
    weak: {
      yes:  data.filter(activity => activity.windy === 'Weak' && activity.play === 'Yes').length,
      no:  data.filter(activity => activity.windy === 'Weak' && activity.play === 'No').length,
    }
  }
  
  let playSummary = {
    yes: data.filter(activity => activity.play === 'Yes').length,
    no: data.filter(activity => activity.play === 'No').length,
  }
  
  if ( target['windy'] === undefined ) {
    windySummary = 0
  }
  if ( target['humidity'] === undefined ) {
    humiditySummary = 0
  }
  if ( target['temperature'] === undefined ) {
    tempSummary = 0
  }
  if ( target['outlook'] === undefined ) {
    outlookSummary = 0
  }

  let entropyValue = entropy(playSummary)
  let windyGain = entropyValue - gain(windySummary)
  let humidityGain = entropyValue - gain(humiditySummary)
  let temperatureGain = entropyValue - gain(tempSummary)
  let outlookGain = entropyValue - gain(outlookSummary)
  let point = sorting(windyGain, humidityGain, temperatureGain, outlookGain).name
  let predict = decision(data, point, target)

  if ( typeof predict === 'string' ) {
    return predict
  } else {
    delete target[point]
    return dataMining(predict, target)
  }
}

console.log(dataMining(data, {
  outlook: 'Sunny',
  humidity: 'High',
  temperature: 'Hot',
  windy: 'Strong'
}
))