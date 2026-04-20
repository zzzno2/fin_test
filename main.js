const finnishRussianWords = [
  {finnish: "kyllä", russian: ["да", "конечно", "ага", "именно"]},
  {finnish: "ei", russian: ["нет", "не", "ни"]},
  {finnish: "kiitos", russian: ["спасибо", "благодарю", "спасибо большое"]},
  {finnish: "ole hyvä", russian: ["пожалуйста", "не за что", "прошу"]},
  {finnish: "terve", russian: ["привет", "здравствуй", "здрасте"]},
  {finnish: "arvoisa", russian: ["уважаемый", "почтенный", "дорогой"]},
  {finnish: "hyvää päivää", russian: ["добрый день", "здравствуйте"]},
  {finnish: "hyvää yötä", russian: ["спокойной ночи", "доброй ночи"]},
  {finnish: "näkemiin", russian: ["до свидания", "пока", "увидимся"]},
  {finnish: "minä", russian: ["я", "меня", "мне"]},
  {finnish: "sinä", russian: ["ты", "тебя", "тебе"]},
  {finnish: "hän", russian: ["он", "она", "он/она"]},
  {finnish: "me", russian: ["мы", "нас", "нам"]},
  {finnish: "te", russian: ["вы", "вас", "вам"]},
  {finnish: "he", russian: ["они", "им"]},
  {finnish: "mies", russian: ["мужчина", "муж", "человек"]},
  {finnish: "nainen", russian: ["женщина", "дама"]},
  {finnish: "lapsi", russian: ["ребенок", "малыш", "дитя"]},
  {finnish: "poika", russian: ["мальчик", "сын"]},
  {finnish: "tyttö", russian: ["девочка", "дочь"]},
  {finnish: "perhe", russian: ["семья", "родственники"]},
  {finnish: "isä", russian: ["отец", "папа", "батя"]},
  {finnish: "äiti", russian: ["мама", "мать", "мамочка"]},
  {finnish: "veli", russian: ["брат", "братишка"]},
  {finnish: "sisko", russian: ["сестра", "сестричка"]},
  {finnish: "koti", russian: ["дом", "жилище", "домик", "квартира"]},
  {finnish: "huone", russian: ["комната", "помещение", "номер"]},
  {finnish: "keittiö", russian: ["кухня", "кухонная"]},
  {finnish: "makuuhuone", russian: ["спальня", "комната для сна"]},
  {finnish: "kylpyhuone", russian: ["ванная", "ванная комната", "санузел"]},
  {finnish: "pöytä", russian: ["стол", "парта"]},
  {finnish: "tuoli", russian: ["стул", "сиденье"]},
  {finnish: "sänky", russian: ["кровать", "лежак"]},
  {finnish: "ovi", russian: ["дверь", "врата"]},
  {finnish: "ikkuna", russian: ["окно", "форточка"]},
  {finnish: "valo", russian: ["свет", "освещение", "луч"]},
  {finnish: "ruoka", russian: ["еда", "пища", "блюдо"]},
  {finnish: "juoma", russian: ["напиток", "жидкость", "питье"]},
  {finnish: "vesi", russian: ["вода", "водичка"]},
  {finnish: "leipä", russian: ["хлеб", "буханка"]}, // исправлено
  {finnish: "liha", russian: ["мясо", "мясное"]},
  {finnish: "kala", russian: ["рыба", "рыбка"]},
  {finnish: "kana", russian: ["курица", "цыпленок"]},
  {finnish: "kasvikset", russian: ["овощи", "растения"]},
  {finnish: "hedelmät", russian: ["фрукты", "плоды"]},
  {finnish: "omena", russian: ["яблоко", "яблочко"]},
  {finnish: "banaani", russian: ["банан", "бананчик"]},
  {finnish: "appelsiini", russian: ["апельсин", "апельсинка"]},
  {finnish: "peruna", russian: ["картофель", "картошка"]},
  {finnish: "tomaatti", russian: ["помидор", "томат"]},
  {finnish: "sipuli", russian: ["лук", "репчатый лук"]},
  {finnish: "maito", russian: ["молоко", "молочный"]}, // исправлено
  {finnish: "juusto", russian: ["сыр", "сырок"]},
  {finnish: "voi", russian: ["масло", "сливочное масло"]}, // исправлено
  {finnish: "kananmuna", russian: ["яйцо", "яичко"]},
  {finnish: "kahvi", russian: ["кофе", "кофейный"]},
  {finnish: "tee", russian: ["чай", "чайный"]},
  {finnish: "olut", russian: ["пиво", "пивко"]},
  {finnish: "viini", russian: ["вино", "винцо"]},
  {finnish: "auto", russian: ["автомобиль", "машина", "кар"]},
  {finnish: "bussi", russian: ["автобус", "бас"]},
  {finnish: "juna", russian: ["поезд", "железнодорожный транспорт"]},
  {finnish: "lentokone", russian: ["самолет", "авиалайнер"]},
  {finnish: "polkupyörä", russian: ["велосипед", "байк"]},
  {finnish: "moottoripyörä", russian: ["мотоцикл", "мотор"]},
  {finnish: "katu", russian: ["улица", "дорога"]},
  {finnish: "tie", russian: ["дорога", "путь"]},
  {finnish: "silta", russian: ["мост", "переправа"]},
  {finnish: "kaupunki", russian: ["город", "населенный пункт"]},
  {finnish: "maa", russian: ["страна", "земля", "территория"]},
  {finnish: "meri", russian: ["море", "океан"]},
  {finnish: "järvi", russian: ["озеро", "водоем"]},
  {finnish: "joki", russian: ["река", "ручей", "поток"]},
  {finnish: "metsä", russian: ["лес", "роща"]},
  {finnish: "puu", russian: ["дерево", "растение"]},
  {finnish: "kukka", russian: ["цветок", "цветочек"]},
  {finnish: "ruoho", russian: ["трава", "зеленая трава"]},
  {finnish: "kivi", russian: ["камень", "камушка"]},
  {finnish: "hiekka", russian: ["песок", "песочек"]},
  {finnish: "tulipalo", russian: ["огонь", "пламя", "пожар"]},
  {finnish: "ilma", russian: ["воздух", "атмосфера"]},
  {finnish: "päivä", russian: ["день", "сутки"]},
  {finnish: "yö", russian: ["ночь", "ночное время"]},
  {finnish: "aamu", russian: ["утро", "утреннее время"]},
  {finnish: "ilta", russian: ["вечер", "вечернее время"]},
  {finnish: "aurinko", russian: ["солнце", "солнышко"]},
  {finnish: "kuu", russian: ["луна", "месяц"]},
  {finnish: "tähti", russian: ["звезда", "звездочка"]},
  {finnish: "pilvi", russian: ["облако", "туча"]},
  {finnish: "sade", russian: ["дождь", "ливень"]},
  {finnish: "lumi", russian: ["снег", "снежок"]},
  {finnish: "tuuli", russian: ["ветер", "порыв"]},
  {finnish: "kylmä", russian: ["холодный", "студеный", "прохладный"]},
  {finnish: "kuuma", russian: ["горячий", "жаркий"]},
  {finnish: "lämmin", russian: ["теплый", "тепло"]},
  {finnish: "kova", russian: ["твердый", "жесткий"]},
  {finnish: "pehmeä", russian: ["мягкий", "пушистый"]},
  {finnish: "iso", russian: ["большой", "огромный", "великий"]},
  {finnish: "pieni", russian: ["маленький", "небольшой"]},
  {finnish: "hyvä", russian: ["хороший", "отличный", "прекрасный"]},
  {finnish: "paha", russian: ["плохой", "дурной"]},
  {finnish: "kaunis", russian: ["красивый", "прекрасный", "симпатичный"]},
  {finnish: "ruma", russian: ["уродливый", "урод", "непривлекательный"]},
  {finnish: "nopea", russian: ["быстрый", "скорый", "шустрый"]},
  {finnish: "hidas", russian: ["медленный", "тугой"]},
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