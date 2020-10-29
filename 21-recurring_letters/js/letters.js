console.log('A-Hoy-Hoy')

const recurringLetter = function ( str ) {
  const letterArr = str.toLowerCase().split(' ').join('').split('').sort();
  console.log(letterArr)
  let count = 1
  let record = 0
  let frequentLetter = ''
  for (i = 0; i < letterArr.length; i ++) {
    if (letterArr[i] === letterArr[i + 1]) {
      count++
      console.log(`${count} letter ${letterArr[i]}'s'`)
    } else if (record < count) {
      record = count
      count = 1
      frequentLetter = letterArr[i]
      console.log(`New most frequent letter: ${record} ${frequentLetter}'s `)
    } else {
      count = 1
    }
  }
  console.log(`The recurring letter of "${str}" is ${frequentLetter}`)
  return frequentLetter
}

recurringLetter('just a simple sentence chilling');

const capiitaliseLetter = function (str) {
  const arr = str.split('')
  const letter = recurringLetter(str)
  let output = ''
  for (i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() === letter.toUpperCase()) {
      output = output + arr[i].toUpperCase()
    } else {
      output = output + arr[i]
    }
  }
  return output
}

console.log(capiitaliseLetter('just a simple sentence chilling'))
