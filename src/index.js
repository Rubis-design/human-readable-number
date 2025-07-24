function toReadable(number) {
  const numberUpToNineteen = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return numberUpToNineteen[number];
  }

  if (number < 100) {
    const tensDigit = Math.floor(number / 10);
    const units = number % 10;

    return units === 0
      ? tens[tensDigit - 2]
      : `${tens[tensDigit - 2]} ${numberUpToNineteen[units]}`;
  }

  const hundreds = Math.floor(number / 100);
  const remainder = number % 100;
  const result = `${numberUpToNineteen[hundreds]} hundred`;

  return remainder === 0 ? result : `${result} ${toReadable(remainder)}`;
}

module.exports = toReadable;

