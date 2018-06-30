const fs = require('fs')
      data = JSON.parse(fs.readFileSync('data.json', 'utf8')),
      entropy = require('./entropy')

let outlookSummary = {
  sunny: data.filter(activity => activity.outlook === 'Sunny').length,
  overcast: data.filter(activity => activity.outlook === 'Overcast').length,
  rainy: data.filter(activity => activity.outlook === 'Rainy').length
}

let tempSummary = {
  hot: data.filter(activity => activity.temperature === 'Hot').length,
  mild: data.filter(activity => activity.temperature === 'Mild').length,
  cool: data.filter(activity => activity.temperature === 'Cool').length,
}

let humiditySummary = {
  high: data.filter(activity => activity.humidity === 'High').length,
  normal: data.filter(activity => activity.humidity === 'Normal').length,
}

let windySummary = {
  strong: data.filter(activity => activity.windy === 'Strong').length,
  weak: data.filter(activity => activity.windy === 'Weak').length,
}

let playSummary = {
  yes: data.filter(activity => activity.play === 'Yes').length,
  no: data.filter(activity => activity.play === 'No').length,
}

console.log(entropy(playSummary))