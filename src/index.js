module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    if (number === 0) return units[0];

    let result = [];

    if (number >= 100) {
        result.push(hundreds[Math.floor(number / 100)]);
        number = number % 100;
    }

    if (number >= 20) {
        result.push(tens[Math.floor(number / 10)]);
        number = number % 10;
    } else if (number >= 10) {
        result.push(teens[number - 10]);
        number = 0;
    }

    if (number > 0) {
        result.push(units[number]);
    }

    return result.join(' ');
}