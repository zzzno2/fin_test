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
  {finnish: "nainen", russian: ["женщина", "дама", "женщина"]},
  {finnish: "lapsi", russian: ["ребенок", "малыш", "дитя"]},
  {finnish: "poika", russian: ["мальчик", "сын"]},
  {finnish: "tyttö", russian: ["девочка", "дочь"]},
  {finnish: "perhe", russian: ["семья", "родственники"]},
  {finnish: "isä", russian: ["отец", "папа", "батя"]},
  {finnish: "äiti", russian: ["мама", "мать", "мамочка"]},
  {finnish: "veli", russian: ["брат", "братишка"]},
  {finnish: "sisko", russian: ["сестра", "сестричка"]},
  {finnish: "koti", russian: ["дом", "жилище", "домик", "квартира", "жилище"]},
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
  {finnish: "leipa", russian: ["хлеб", "буханка"]},
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
  {finnish: "maistraatti", russian: ["молоко", "молочный"]},
  {finnish: "juusto", russian: ["сыр", "сырок"]},
  {finnish: "vooi", russian: ["масло", "сливочное масло"]},
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
  {finnish: "paha", russian: ["плохой", "дурной", "злой"]},
  {finnish: "kaunis", russian: ["красивый", "прекрасный", "симпатичный"]},
  {finnish: "ruma", russian: ["уродливый", "непривлекательный"]},
  {finnish: "nopea", russian: ["быстрый", "скорый", "шустрый"]},
  {finnish: "hidas", russian: ["медленный", "тугой"]},
  {finnish: "numero", russian: ["номер", "число", "цифра"]},
  {finnish: "yksi", russian: ["один", "1"]},
  {finnish: "kaksi", russian: ["два", "2"]},
  {finnish: "kolme", russian: ["три", "3"]},
  {finnish: "neljä", russian: ["четыре", "4"]},
  {finnish: "viisi", russian: ["пять", "5"]}
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function normalizeTranslations(words) {
  for (const item of words) {
    if (!Array.isArray(item.russian)) {
      item.russian = [item.russian];
    }
  }
}

function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function similarity(a, b) {
  const lowerA = a.toLowerCase();
  const lowerB = b.toLowerCase();
  if (lowerA.length < lowerB.length - 1) return 0;
  let matches = 0;
  for (let char of lowerA) {
    if (lowerB.includes(char)) {
      matches++;
    }
  }
  return lowerA.length === 0 ? 1 : matches / lowerA.length;
}

function hasTypo(userAnswer, answers) {
  const answerLower = userAnswer.toLowerCase();
  return answers.some((answer) => {
    const sim = similarity(answerLower, answer.toLowerCase());
    return sim >= 0.6 && sim < 0.8;
  });
}

function hasCloseMatch(userAnswer, answers) {
  const answerLower = userAnswer.toLowerCase();
  return answers.some((answer) => similarity(answerLower, answer.toLowerCase()) >= 0.7);
}

normalizeTranslations(finnishRussianWords);
shuffleArray(finnishRussianWords);

let currentIndex = 0;
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

let canSubmit = true;

function showCurrentWord() {
  if (currentIndex >= finnishRussianWords.length) {
    resultElement.textContent = `Все слова пройдены! Правильных ответов: ${correctCount} из ${finnishRussianWords.length}`;
    resultElement.style.color = "blue";
    wordElement.textContent = "";
    return;
  }

  wordElement.textContent = finnishRussianWords[currentIndex].finnish;
  currentElement.textContent = currentIndex + 1;
  inputElement.value = '';
  resultElement.textContent = '';
  historyElement.innerHTML = '';
  attempts = 3;
  canSubmit = true;
}

showCurrentWord();

inputElement.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  if (!canSubmit) return;

  const userAnswer = inputElement.value.trim().toLowerCase();
  const correctAnswers = finnishRussianWords[currentIndex].russian.map(answer => answer.toLowerCase());

  if (correctAnswers.includes(userAnswer)) {
    resultElement.textContent = "верно";
    resultElement.style.color = "green";
    correctCount++;
    counterElement.textContent = `${correctCount} / ${finnishRussianWords.length}`;
    currentIndex++;

    if (currentIndex < finnishRussianWords.length) {
      setTimeout(showCurrentWord, 1000);
    } else {
      resultElement.textContent = `Все слова пройдены! Правильных ответов: ${correctCount} из ${finnishRussianWords.length}`;
      resultElement.style.color = "blue";
      wordElement.textContent = "";
    }

    return;
  }

  if (hasCloseMatch(userAnswer, finnishRussianWords[currentIndex].russian)) {
    resultElement.textContent = "верно";
    resultElement.style.color = "green";
    correctCount++;
    counterElement.textContent = `${correctCount} / ${finnishRussianWords.length}`;
    currentIndex++;

    if (currentIndex < finnishRussianWords.length) {
      setTimeout(showCurrentWord, 1000);
    } else {
      resultElement.textContent = `Все слова пройдены! Правильных ответов: ${correctCount} из ${finnishRussianWords.length}`;
      resultElement.style.color = "blue";
      wordElement.textContent = "";
    }

    return;
  }

  if (hasTypo(userAnswer, finnishRussianWords[currentIndex].russian)) {
    attempts--;
    if (attempts > 0) {
      resultElement.textContent = `написано не верно. Осталось попыток: ${attempts}`;
      resultElement.style.color = "red";
      return;
    }
    wrongCount++;
    wrongCountElement.textContent = wrongCount;
    resultElement.textContent = "написано не верно. Слово не засчитано.";
    historyElement.innerHTML = `<div class="history-item"><div>прошлый вопрос: ${finnishRussianWords[currentIndex].finnish}</div><div>а правильный ответ: ${finnishRussianWords[currentIndex].russian.join(', ')}</div></div>`;
    resultElement.style.color = "red";
    canSubmit = false;
    currentIndex++;

    if (currentIndex < finnishRussianWords.length) {
      setTimeout(showCurrentWord, 2000);
    } else {
      resultElement.textContent = `Все слова пройдены! Правильных ответов: ${correctCount} из ${finnishRussianWords.length}`;
      resultElement.style.color = "blue";
      wordElement.textContent = "";
    }
    return;
  }

  attempts--;
  if (attempts > 0) {
    resultElement.textContent = `не верно. Осталось попыток: ${attempts}`;
    resultElement.style.color = "red";
  } else {
    wrongCount++;
    wrongCountElement.textContent = wrongCount;
    resultElement.textContent = "не верно. Слово не засчитано.";
    historyElement.innerHTML = `<div class="history-item"><div>прошлый вопрос: ${finnishRussianWords[currentIndex].finnish}</div><div>а правильный ответ: ${finnishRussianWords[currentIndex].russian.join(', ')}</div></div>`;
    resultElement.style.color = "red";
    canSubmit = false;
    currentIndex++;

    if (currentIndex < finnishRussianWords.length) {
      setTimeout(showCurrentWord, 2000);
    } else {
      resultElement.textContent = `Все слова пройдены! Правильных ответов: ${correctCount} из ${finnishRussianWords.length}`;
      resultElement.style.color = "blue";
      wordElement.textContent = "";
    }
  }
});
