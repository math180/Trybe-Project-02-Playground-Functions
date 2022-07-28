// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('Olá. tudo bem?'));

// Desafio 4
function concatName(array) {
  let newArray = array[array.length - 1] + ', ' + array[0];
  return newArray;
}
console.log(concatName(['Lucas', 'Ana', 'Matheus']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6

function highestCount(array) {
  let maiorNumero = array[0];
  let repeticoes = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= maiorNumero) {
      maiorNumero = array[i];
    } //inserir if aq
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}
console.log(highestCount([6, 10, 9, 1, 20, 20, 20]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let currentPositionCat1 = Math.abs(cat1 - mouse);
  let currentPositionCat2 = Math.abs(cat2 - mouse);

  if (currentPositionCat1 === currentPositionCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (currentPositionCat2 < currentPositionCat1) {
    return 'cat2';
  } else if (currentPositionCat1 < currentPositionCat2) {
    return 'cat1';
  }
}
console.log(catAndMouse(-1, 4, 4));

// Desafio 8
function fizzBuzz(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      numbers[i] = 'fizzBuzz';
    } else if (numbers[i] % 5 === 0) {
      numbers[i] = 'buzz';
    } else if (numbers[i] % 3 === 0) {
      numbers[i] = 'fizz';
    } else {
      numbers[i] = 'bug!';
    }
  }
  return numbers;
}

// Desafio 9
function encode(string) {
  let newString = ['']
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      newString[i] = 1
    } else if (string[i] === 'e') {
      newString[i] = 2
    } else if (string[i] === 'i') {
      newString[i] = 3
    } else if (string[i] === 'o') {
      newString[i] = 4
    } else if (string[i] === 'u') {
      newString[i] = 5
    } else {
      newString[i] = string[i]
    }
  } return newString.join('');
}
console.log(encode('Matheus'));

function decode(string) {
  let newString = ['']
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      newString[i] = 'a'
    } else if (string[i] === '2') {
      newString[i] = 'e'
    } else if (string[i] === '3') {
      newString[i] = 'i'
    } else if (string[i] === '4') {
      newString[i] = 'o'
    } else if (string[i] === '5') {
      newString[i] = 'u'
    } else {
      newString[i] = string[i]
    }
  } return newString.join('');
} console.log(decode('M1th25s'));

// Desafio 10
function techList(array, string) {
  let ordenados = array.sort();
  if (array.length === 0 || string.length === 0) {
    return 'Vazio!';
  } else {
    let result = [];
    for (let i = 0; i < array.length; i += 1) {
      result.push({
        tech: ordenados[i],
        name: string,
      });
    }
    return result;
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
