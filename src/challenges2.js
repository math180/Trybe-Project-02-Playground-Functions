// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i2] === i) {
        count += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}
console.log(generatePhoneNumber([1, 4, 2, 3, 5, 6, 7, 8, 9, 0, 2]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (
    Math.abs(lineA < lineB - lineC) ||
    Math.abs(lineB < lineA - lineC) ||
    Math.abs(lineC < lineA - lineB)
  ) {
    return false;
  } else if (
    (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) ||
    (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) ||
    (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB))
  ) {
    return true;
  }
}
triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(string) {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (!isNaN(parseInt(string[i]))) {
      count += parseInt(string[i]);
    }
  }
  if (count === 1) {
    return '1 copo de água';
  } else if (count > 1) {
    return `${count} copos de água`;
  }
}
console.log(hydrate('0 cerveja e 1 goró'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
