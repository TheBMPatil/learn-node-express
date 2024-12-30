function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celTOFe(cel) {
  return (cel * 9) / 5 + 32;
}

//Common js syntax
module.exports = { generateRandomNumber, celTOFe };
