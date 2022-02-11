module.exports = function toReadable(number) {
  let ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let digit = 0;
  if (number < 20) return ones[number];
  if (number < 100) {
    digit = number % 10;
    return (
      tens[Math.floor(number / 10) - 2] + " " + (digit > 0 ? ones[digit] : "")
    );
  }
  if (number < 1000) {
    return (
      ones[Math.floor(number / 100)] +
      " hundred " +
      (number % 100 > 0 ? toReadable(number % 100) : "")
    );
  }
  if (number < 100000) {
    return (
      toReadable(Math.floor(number / 1000)) +
      " thousand " +
      (number % 1000 > 0 ? toReadable(number % 1000) : "")
    );
  }
  if (number < 10000000) {
    return (
      toReadable(Math.floor(number / 100000)) +
      " lakh " +
      (number % 100000 > 0 ? toReadable(number % 100000) : "")
    );
  }
  return (
    toReadable(Math.floor(number / 10000000)) +
    " crore " +
    (number % 10000000 > 0 ? toReadable(number % 10000000) : "")
  );
};
