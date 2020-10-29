console.log('A-Hoy-Hoy')

const grainsSquare = function (square) {
  let grains = 1
  for (i = 2; i <= square; i++ ) {
    grains = grains * 2
  }
  return grains
}


const grainsEachSquare = function() {
  let grains = 1
  console.log('Square 1: 1')
  for (i = 2; i <= 64; i++ ) {
    grains = grains * 2
    console.log(`Square ${i}: ${grains}`)
  }
}

const grainsAllSquares = function() {
  let grains = 1
  console.log('Square 1: 1')
  for (i = 2; i <= 64; i++ ) {
    grains += grains * 2
  }
  return grains
}


console.log(grainsSquare(5))
grainsEachSquare()
console.log(grainsAllSquares())
