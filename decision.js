const decision = (data, point, target) => {
  let objSummary = {}

  for (const iterator of data) {
    if ( objSummary[iterator[point]] === undefined ) {
      objSummary[iterator[point]] = {
        yes:  data.filter(activity => activity[point] === iterator[point] && activity.play === 'Yes').length,
        no:  data.filter(activity => activity[point] === iterator[point] && activity.play === 'No').length,
      }
    }
  }
  if ( objSummary[target[point]].yes === 0 ) {
    return 'No'
  } else if ( objSummary[target[point]].no === 0 ) {
    return 'Yes'
  } else {
    let newArr = data.filter( data => data[point] === target[point])
    return newArr
  }
}

module.exports = decision