const btn = document.querySelector('#send')

btn.addEventListener('click', function (e) {
  e.preventDefault()

  const espessura = document.querySelector('#find-exp')

  const value = espessura.value

  // console.log(value)

  const array = [
    { id: 3.18, id2: '1/8' },
    { id: 4.76, id2: '3/16' },
    { id: 6.35, id2: '1/4' },
    { id: 7.94, id2: '5/16' },
    { id: 9.53, id2: '3/8' },
    { id: 12.7, id2: '1/2' },
    { id: 15.88, id2: '5/8' },
    { id: 19.05, id2: '3/4' },
    { id: 22.22, id2: '7/8' },
    { id: 25.4, id2: '1' },
    { id: 28.58, id2: '1.1/8' },
    { id: 30.16, id2: '1.3/16' },
    { id: 31.75, id2: '1.1/4' },
    { id: 33.34, id2: '1.5/16' },
    { id: 34.93, id2: '1.3/8' },
    { id: 38.1, id2: '1.1/2' },
    { id: 41.28, id2: '1.5/8' },
    { id: 44.45, id2: '1.3/4' },
    { id: 47.63, id2: '1.7/8' },
    { id: 50.8, id2: '2' },
    { id: 53.98, id2: '2.1/8' },
    { id: 57.15, id2: '2.1/4' },
    { id: 60.33, id2: '2.3/8' },
    { id: 63.5, id2: '2.1/2' },
    { id: 66.68, id2: '2.5/8' },
    { id: 69.85, id2: '2.3/4' },
    { id: 73.03, id2: '2.7/8' },
    { id: 76.2, id2: '3' },
    { id: 79.38, id2: '3.1/8' },
    { id: 82.55, id2: '3.1/4' },
    { id: 85.73, id2: '3.3/8' },
    { id: 88.9, id2: '3.1/2' },
    { id: 92.08, id2: '3.5/8' },
    { id: 95.25, id2: '3.3/4' },
    { id: 98.43, id2: '3.7/8' },
    { id: 101.6, id2: '4' },
    { id: 107.95, id2: '4.1/4' },
    { id: 114.3, id2: '4.1/2' },
    { id: 120.65, id2: '4.3/4' },
    { id: 127, id2: '5' },
    { id: 133.35, id2: '5.1/4' },
    { id: 139.7, id2: '5.1/2' },
    { id: 146.05, id2: '5.3/4' },
    { id: 152.4, id2: '6' },
    { id: 158.75, id2: '6.1/4' },
    { id: 165.1, id2: '6.1/2' },
    { id: 171.45, id2: '6.3/4' },
    { id: 177.8, id2: '7' },
    { id: 190.5, id2: '7.1/2' },
    { id: 203.2, id2: '8' },
    { id: 215.9, id2: '8.1/2' },
    { id: 228.6, id2: '9' },
    { id: 241.3, id2: '9.1/2' },
    { id: 254, id2: '10' },
    { id: 266.7, id2: '10.1/2' },
    { id: 279.4, id2: '11' },
    { id: 292.1, id2: '11.1/2' },
    { id: 304.8, id2: '12' },
    { id: 317.5, id2: '12.1/2' },
    { id: 330.2, id2: '13' },
    { id: 342.9, id2: '13.1/2' },
    { id: 355.6, id2: '14' },
    { id: 368.3, id2: '14.1/2' },
    { id: 381, id2: '15' },
    { id: 393.7, id2: '15.1/2' },
    { id: 406.4, id2: '16' },
    { id: 419.1, id2: '16.1/2' },
    { id: 431.8, id2: '17' },
    { id: 444.5, id2: '17.1/2' },
    { id: 457.2, id2: '18' },
    { id: 469.9, id2: '18.1/2' },
    { id: 482.6, id2: '19' },
    { id: 495.3, id2: '19.1/2' },
    { id: 508, id2: '20' },
    { id: 520.7, id2: '20.1/2' },
    { id: 533.4, id2: '21' }
  ]

  function findClosest(x) {
    return array.reduce((best, current) => {
      return current.id >= x && (!best || current.id < best.id) ? current : best
    }, undefined)
  }

  console.log(findClosest(value))

  var resultado = findClosest(value)

  console.log(resultado)

  alert(
    'A espessura mais próxima é igual a ' +
      resultado.id +
      'mm ou ' +
      resultado.id2 +
      '" Pol.'
  )
})
