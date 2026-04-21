const finnishRussianWords = [
  {finnish: "kyllä", russian: ["да", "конечно", "ага", "именно"]},
  {finnish: "ei", russian: ["нет", "не",]},
  {finnish: "kiitos", russian: ["спасибо", "благодарю"]},
  {finnish: "ole hyvä", russian: ["пожалуйста", "прошу"]},
  {finnish: "ei kestä", russian: ["не стоит", "не за что"]},
  {finnish: "terve", russian: ["привет", "здравствуй", "здрасте", "здарова"]},
  {finnish: "arvoisa", russian: ["уважаемый", "почтенный", "дорогой"]},
  {finnish: "hyvää päivää", russian: ["добрый день"]},
  {finnish: "hyvää yötä", russian: ["спокойной ночи", "доброй ночи"]},
  {finnish: "näkemiin", russian: ["до свидания", "увидимся"]},
  {finnish: "minä", russian: ["я"]},
  {finnish: "sinä", russian: ["ты"]},
  {finnish: "hän", russian: ["он", "она", "он она"]},
  {finnish: "me", russian: ["мы"]},
  {finnish: "te", russian: ["вы"]},
  {finnish: "he", russian: ["они"]},
  {finnish: "mies", russian: ["мужчина", "муж"]},
  {finnish: "nainen", russian: ["женщина", "дама"]},
  {finnish: "lapsi", russian: ["ребенок", "дитя"]},
  {finnish: "poika", russian: ["мальчик"]},
  {finnish: "tyttö", russian: ["девочка"]},
  {finnish: "perhe", russian: ["семья", "родственники"]},
  {finnish: "isä", russian: ["отец", "папа", "батя", "папочка"]},
  {finnish: "äiti", russian: ["мама", "мать", "мамочка"]},
  {finnish: "veli", russian: ["брат", "братишка"]},
  {finnish: "sisko", russian: ["сестра", "сестричка"]},
  {finnish: "koti", russian: ["дом", "жилище", "домик"]},
  {finnish: "huone", russian: ["комната", "помещение", "номер"]},
  {finnish: "keittiö", russian: ["кухня", "кухонная"]},
  {finnish: "makuuhuone", russian: ["спальня", "комната для сна"]},
  {finnish: "kylpyhuone", russian: ["ванная", "ванная комната", "санузел"]},
  {finnish: "pöytä", russian: ["стол"]},
  {finnish: "tuoli", russian: ["стул"]},
  {finnish: "sänky", russian: ["кровать"]},
  {finnish: "ovi", russian: ["дверь"]},
  {finnish: "ikkuna", russian: ["окно"]},
  {finnish: "valo", russian: ["свет"]},
  {finnish: "ruoka", russian: ["еда", "пища"]},
  {finnish: "juoma", russian: ["напиток", "питье"]},
  {finnish: "vesi", russian: ["вода", "водичка"]},
  {finnish: "leipä", russian: ["хлеб", "буханка"]}, // исправлено
  {finnish: "liha", russian: ["мясо", "мясное"]},
  {finnish: "kala", russian: ["рыба", "рыбка"]},
  {finnish: "kana", russian: ["курица"]},
  {finnish: "kasvikset", russian: ["овощи"]},
  {finnish: "hedelmät", russian: ["фрукты"]},
  {finnish: "omena", russian: ["яблоко"]},
  {finnish: "banaani", russian: ["банан"]},
  {finnish: "appelsiini", russian: ["апельсин"]},
  {finnish: "peruna", russian: ["картофель", "картошка"]},
  {finnish: "tomaatti", russian: ["помидор", "томат"]},
  {finnish: "sipuli", russian: ["лук", "репчатый лук"]},
  {finnish: "maito", russian: ["молоко", "молочный"]}, // исправлено
  {finnish: "juusto", russian: ["сыр", "сырок"]},
  {finnish: "voi", russian: ["масло", "сливочное масло"]}, // исправлено
  {finnish: "kananmuna", russian: ["яйцо"]},
  {finnish: "kahvi", russian: ["кофе", "кофейный"]},
  {finnish: "tee", russian: ["чай", "чайный"]},
  {finnish: "olut", russian: ["пиво", "пивной"]},
  {finnish: "viini", russian: ["вино"]},
  {finnish: "auto", russian: ["автомобиль", "машина"]},
  {finnish: "bussi", russian: ["автобус"]},
  {finnish: "juna", russian: ["поезд"]},
  {finnish: "lentokone", russian: ["самолет", ]},
  {finnish: "polkupyörä", russian: ["велосипед"]},
  {finnish: "moottoripyörä", russian: ["мотоцикл", "мотор"]},
  {finnish: "katu", russian: ["улица"]},
  {finnish: "tie", russian: ["дорога"]},
  {finnish: "silta", russian: ["мост"]},
  {finnish: "kaupunki", russian: ["город"]},
  {finnish: "maa", russian: ["страна", "земля", "территория"]},
  {finnish: "meri", russian: ["море"]},
  {finnish: "järvi", russian: ["озеро"]},
  {finnish: "joki", russian: ["река", "ручей"]},
  {finnish: "metsä", russian: ["лес"]},
  {finnish: "puu", russian: ["дерево"]},
  {finnish: "kukka", russian: ["цветок", "цветочек"]},
  {finnish: "ruoho", russian: ["трава"]},
  {finnish: "kivi", russian: ["камень"]},
  {finnish: "hiekka", russian: ["песок", "песочек"]},
  {finnish: "tulipalo", russian: ["пожар"]},
  {finnish: "ilma", russian: ["воздух"]},
  {finnish: "päivä", russian: ["день", "сутки"]},
  {finnish: "yö", russian: ["ночь"]},
  {finnish: "aamu", russian: ["утро"]},
  {finnish: "ilta", russian: ["вечер"]},
  {finnish: "aurinko", russian: ["солнце"]},
  {finnish: "kuu", russian: ["луна"]},
  {finnish: "tähti", russian: ["звезда"]},
  {finnish: "pilvi", russian: ["облако", "туча"]},
  {finnish: "sade", russian: ["дождь"]},
  {finnish: "lumi", russian: ["снег"]},
  {finnish: "tuuli", russian: ["ветер"]},
  {finnish: "kylmä", russian: ["холодный"]},
  {finnish: "kuuma", russian: ["горячий", "жаркий"]},
  {finnish: "lämmin", russian: ["теплый", "тепло"]},
  {finnish: "kova", russian: ["твердый"]},
  {finnish: "pehmeä", russian: ["мягкий"]},
  {finnish: "iso", russian: ["большой"]},
  {finnish: "pieni", russian: ["маленький"]},
  {finnish: "hyvä", russian: ["хороший"]},
  {finnish: "paha", russian: ["плохой"]},
  {finnish: "kaunis", russian: ["красивый", "прекрасный"]},
  {finnish: "ruma", russian: ["уродливый", "урод"]},
  {finnish: "nopea", russian: ["быстрый"]},
  {finnish: "hidas", russian: ["медленный"]},
  {finnish: "numero", russian: ["номер", "число", "цифра"]},
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