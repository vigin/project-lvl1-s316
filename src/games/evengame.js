#!/usr/bin/env node
import readlineSync from 'readline-sync';

// возвращает случайное число от min до max
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// возвращает случайное число от 1 до 20
const getNumber = () => getRandom(1, 20);

export const playEvenGame = () => {
  // приглашение в игру
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  // пустая строка
  console.log();

  // приветствие + правила
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);

  let attempt = 0;
  let Number;
  let Answer;

  // проверка количества правильных попыток
  while (attempt < 3) {
    Number = getNumber();

    // задать вопрос
    console.log(`Question: ${Number}`);

    // получить ответ
    Answer = readlineSync.question('Your answer: ');

    // проверить ответ
    if ((Number % 2 === 0 && Answer === 'yes') || (Number % 2 === 1 && Answer === 'no')) {
      // еще одна правильная попытка
      attempt += 1;
    } else {
    // если неправильная вывести правильный ответ и выйти из игры
      console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${((Number % 2 === 0) ? 'yes' : 'no')}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
  }

  // сообщение победителю
  console.log(`Congratulations, ${gamerName}!`);
};

export default playEvenGame;