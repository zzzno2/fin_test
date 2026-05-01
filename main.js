const finnishRussianWords = [
  { finnish: "kyllä", russian: ["да", "конечно", "именно"] },
  { finnish: "ole hyvä", russian: ["пожалуйста"] }, 
  { finnish: "ei kestä", russian: ["не за что", "не стоит", "пустяки"] },
  { finnish: "arvoisa", russian: ["уважаемый", "почтенный"] },
  { finnish: "he", russian: ["они"] },
  { finnish: "naapuri", russian: ["сосед", "соседка"] },
  { finnish: "keittiö", russian: ["кухня"] },
  { finnish: "makuuhuone", russian: ["спальня"] },
  { finnish: "kylpyhuone", russian: ["ванная", "ванная комната"] },
  { finnish: "kasvikset", russian: ["овощи"] },
  { finnish: "hedelmät", russian: ["фрукты"] },
  { finnish: "tee", russian: ["чай"] },
  { finnish: "olut", russian: ["пиво"] },
  { finnish: "viini", russian: ["вино"] },
  { finnish: "moottoripyörä", russian: ["мотоцикл"] },
  { finnish: "katu", russian: ["улица"] },
  { finnish: "silta", russian: ["мост"] },
  { finnish: "ruoho", russian: ["трава"] },
  { finnish: "hiekka", russian: ["песок"] },
  { finnish: "ilma", russian: ["воздух", "погода"] },
  { finnish: "kuu", russian: ["луна", "месяц"] },
  { finnish: "pilvi", russian: ["облако", "туча"] },
  { finnish: "sade", russian: ["дождь"] },
  { finnish: "lumi", russian: ["снег"] },
  { finnish: "pohjoinen", russian: ["север"] },
  { finnish: "itä", russian: ["восток"] },
  { finnish: "etelä", russian: ["юг"] },
  { finnish: "länsi", russian: ["запад"] },
  { finnish: "päivä", russian: ["день", "сутки"] },
  { finnish: "yö", russian: ["ночь"] },
  { finnish: "aamu", russian: ["утро"] },
  { finnish: "ilta", russian: ["вечер"] },
  { finnish: "aina", russian: ["всегда", "постоянно"] },
  { finnish: "usein", russian: ["часто"] },
  { finnish: "joskus", russian: ["иногда", "порой"] },
  { finnish: "harvoin", russian: ["редко"] },
  { finnish: "ei koskaan", russian: ["никогда"] },
  { finnish: "kylmä", russian: ["холодный", "холодно"] },
  { finnish: "kuuma", russian: ["горячий", "жаркий", "жарко"] },
  { finnish: "lämmin", russian: ["теплый", "тепло"] },
  { finnish: "kova", russian: ["твердый", "жесткий", "громкий"] },
  { finnish: "pehmeä", russian: ["мягкий"] },
  { finnish: "iso", russian: ["большой", "крупный"] },
  { finnish: "pieni", russian: ["маленький"] },
  { finnish: "hyvä", russian: ["хороший", "добрый"] },
  { finnish: "paha", russian: ["плохой", "злой"] },
  { finnish: "kaunis", russian: ["красивый", "прекрасный"] },
  { finnish: "ruma", russian: ["некрасивый", "уродливый"] },
  { finnish: "nopea", russian: ["быстрый", "скорый"] },
  { finnish: "hidas", russian: ["медленный"] },
  { finnish: "ostaa", russian: ["покупать", "купить"] },
  { finnish: "säästää", russian: ["экономить", "копить", "сберегать"] },
  { finnish: "sitten", russian: ["затем", "потом", "тогда"] },
  { finnish: "myös", russian: ["также", "тоже"] },
  { finnish: "totta", russian: ["правда", "верно"] },
  { finnish: "todella", russian: ["действительно", "очень", "на самом деле"] },
  { finnish: "jotain", russian: ["что-то", "что-нибудь"] },
  { finnish: "erittäin", russian: ["очень", "крайне", "весьма"] },
  { finnish: "muu", russian: ["другой", "иной", "прочий"] },
  { finnish: "numero", russian: ["номер", "число", "цифра"] },
  {finnish: "ajatella", russian: ["думать"]},
  {finnish: "kiire", russian: ["торопится", "спешить"]},
  { finnish: "pohjoinen", russian: ["север"] },
  { finnish: "itä", russian: ["восток"] },
  { finnish: "etelä", russian: ["юг"] },
  { finnish: "länsi", russian: ["запад"] },
  { finnish: "naapuri", russian: ["сосед", "соседка"] },
  { finnish: "muu", russian: ["другой", "иной", "прочий"] },
  { finnish: "ostaa", russian: ["покупать", "купить"] },
  { finnish: "säästää", russian: ["экономить", "сберегать", "копить"] },
  { finnish: "sitten", russian: ["затем", "потом", "тогда"] },
  { finnish: "myös", russian: ["также", "тоже", "ещё"] },
  { finnish: "totta", russian: ["правда", "истина", "верно"] },
  { finnish: "todella", russian: ["действительно", "на самом деле", "очень"] },
  { finnish: "jotain", russian: ["что-то", "что-нибудь", "кое-что"] },
  { finnish: "erittäin", russian: ["очень", "крайне", "весьма"] },
  { finnish: "aina", russian: ["всегда", "постоянно"] },
  { finnish: "usein", russian: ["часто"] },
  { finnish: "joskus", russian: ["иногда", "порой", "временами"] },
  { finnish: "harvoin", russian: ["редко"] },
  { finnish: "ei koskaan", russian: ["никогда"] }
];


function normalizeTranslations(words) {
  for (const item of words) {
    if (!Array.isArray(item.russian)) {
      item.russian = [item.russian];
    }
  }
}

normalizeTranslations(finnishRussianWords);

// 👉 новый массив без повторов
const remainingWords = [...finnishRussianWords];

let currentWord = null;
let correctCount = 0;
let wrongCount = 0;
let attempts = 3;

const wordElement = document.getElementById('word');
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('result');
const currentElement = document.getElementById('current');
const totalElement = document.getElementById('total');
const counterElement = document.getElementById('counter');
const wrongCountElement = document.getElementById('wrong-count');
const historyElement = document.getElementById('history');

totalElement.textContent = finnishRussianWords.length;
counterElement.textContent = `${correctCount} / ${finnishRussianWords.length}`;
wrongCountElement.textContent = wrongCount;

function getRandomWord() {
  const index = Math.floor(Math.random() * remainingWords.length);
  return remainingWords.splice(index, 1)[0];
}

function similarity(a, b) {
  const lowerA = a.toLowerCase();
  const lowerB = b.toLowerCase();
  if (lowerA.length < lowerB.length - 1) return 0;
  let matches = 0;
  for (let char of lowerA) {
    if (lowerB.includes(char)) matches++;
  }
  return lowerA.length === 0 ? 1 : matches / lowerA.length;
}

function hasTypo(userAnswer, answers) {
  return answers.some(answer => {
    const sim = similarity(userAnswer, answer);
    return sim >= 0.6 && sim < 0.8;
  });
}

function hasCloseMatch(userAnswer, answers) {
  return answers.some(answer => similarity(userAnswer, answer) >= 0.7);
}

function showCurrentWord() {
  if (remainingWords.length === 0) {
    resultElement.textContent = `Все слова пройдены! Правильных ответов: ${correctCount} из ${finnishRussianWords.length}`;
    resultElement.style.color = "blue";
    wordElement.textContent = "";
    return;
  }

  currentWord = getRandomWord();

  wordElement.textContent = currentWord.finnish;
  currentElement.textContent = finnishRussianWords.length - remainingWords.length;

  inputElement.value = '';
  resultElement.textContent = '';
  historyElement.innerHTML = '';
  attempts = 3;
}

showCurrentWord();

inputElement.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;

  const userAnswer = inputElement.value.trim().toLowerCase();
  const correctAnswers = currentWord.russian.map(a => a.toLowerCase());

  if (correctAnswers.includes(userAnswer) || hasCloseMatch(userAnswer, correctAnswers)) {
    resultElement.textContent = "верно";
    resultElement.style.color = "green";

    correctCount++;
    counterElement.textContent = `${correctCount} / ${finnishRussianWords.length}`;

    setTimeout(showCurrentWord, 800);
    return;
  }

  if (hasTypo(userAnswer, correctAnswers)) {
    attempts--;
    if (attempts > 0) {
      resultElement.textContent = `опечатка. Осталось попыток: ${attempts}`;
      resultElement.style.color = "orange";
      return;
    }
  } else {
    attempts--;
  }

  if (attempts > 0) {
    resultElement.textContent = `неверно. Осталось попыток: ${attempts}`;
    resultElement.style.color = "red";
  } else {
    wrongCount++;
    wrongCountElement.textContent = wrongCount;

    resultElement.textContent = "неверно";
    historyElement.innerHTML = `
      <div>
        слово: ${currentWord.finnish}<br>
        ответ: ${correctAnswers.join(", ")}
      </div>
    `;

    setTimeout(showCurrentWord, 1500);
  }
});