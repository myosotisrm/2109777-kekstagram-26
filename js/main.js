function getRandomIntInclusive(min, max) {
  if (max > min && min >= 0) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 'Используй другие числа';
}

console.log(getRandomIntInclusive(2, 4));

function countSimbols (message, maxSimbols) {
if (message.length >= maxSimbols) {
  return false;
} return true;
}

console.log(countSimbols ('1234', 10))

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
// Другой источник: Моя подруга
