const finnishRussianWords = [
  { finnish: "kyllä", russian: ["да", "конечно", "именно"] },
  { finnish: "ei", russian: ["нет", "не"] },
  { finnish: "kiitos", russian: ["спасибо", "благодарю"] },
  { finnish: "ole hyvä", russian: ["пожалуйста"] }, 
  { finnish: "ei kestä", russian: ["не за что", "не стоит", "пустяки"] },
  { finnish: "terve", russian: ["привет", "здравствуй", "здрасте"] },
  { finnish: "arvoisa", russian: ["уважаемый", "почтенный"] },
  { finnish: "hyvää päivää", russian: ["добрый день"] },
  { finnish: "hyvää yötä", russian: ["спокойной ночи", "доброй ночи"] },
  { finnish: "näkemiin", russian: ["до свидания", "увидимся"] },
  { finnish: "minä", russian: ["я"] },
  { finnish: "sinä", russian: ["ты"] },
  { finnish: "hän", russian: ["он", "она"] },
  { finnish: "me", russian: ["мы"] },
  { finnish: "te", russian: ["вы"] },
  { finnish: "he", russian: ["они"] },
  { finnish: "mies", russian: ["мужчина", "муж"] },
  { finnish: "nainen", russian: ["женщина", "дама"] },
  { finnish: "lapsi", russian: ["ребенок", "дитя"] },
  { finnish: "poika", russian: ["мальчик", "парень", "сын"] },
  { finnish: "tyttö", russian: ["девочка", "девушка", "дочь"] },
  { finnish: "perhe", russian: ["семья"] },
  { finnish: "isä", russian: ["отец", "папа"] },
  { finnish: "äiti", russian: ["мать", "мама"] },
  { finnish: "veli", russian: ["брат"] },
  { finnish: "sisko", russian: ["сестра"] },
  { finnish: "naapuri", russian: ["сосед", "соседка"] },
  { finnish: "koti", russian: ["дом", "жилище"] },
  { finnish: "huone", russian: ["комната", "помещение", "номер"] },
  { finnish: "keittiö", russian: ["кухня"] },
  { finnish: "makuuhuone", russian: ["спальня"] },
  { finnish: "kylpyhuone", russian: ["ванная", "ванная комната"] },
  { finnish: "pöytä", russian: ["стол"] },
  { finnish: "tuoli", russian: ["стул"] },
  { finnish: "sänky", russian: ["кровать", "постель"] },
  { finnish: "ovi", russian: ["дверь"] },
  { finnish: "ikkuna", russian: ["окно"] },
  { finnish: "valo", russian: ["свет"] },
  { finnish: "ruoka", russian: ["еда", "пища"] },
  { finnish: "juoma", russian: ["напиток", "питьё"] },
  { finnish: "vesi", russian: ["вода"] },
  { finnish: "leipä", russian: ["хлеб"] },
  { finnish: "liha", russian: ["мясо"] },
  { finnish: "kala", russian: ["рыба"] },
  { finnish: "kana", russian: ["курица", "курятина"] },
  { finnish: "kasvikset", russian: ["овощи"] },
  { finnish: "hedelmät", russian: ["фрукты"] },
  { finnish: "omena", russian: ["яблоко"] },
  { finnish: "banaani", russian: ["банан"] },
  { finnish: "appelsiini", russian: ["апельсин"] },
  { finnish: "peruna", russian: ["картофель", "картошка"] },
  { finnish: "tomaatti", russian: ["помидор", "томат"] },
  { finnish: "sipuli", russian: ["лук"] },
  { finnish: "maito", russian: ["молоко"] },
  { finnish: "juusto", russian: ["сыр"] },
  { finnish: "voi", russian: ["масло", "сливочное масло"] },
  { finnish: "kananmuna", russian: ["яйцо"] },
  { finnish: "kahvi", russian: ["кофе"] },
  { finnish: "tee", russian: ["чай"] },
  { finnish: "olut", russian: ["пиво"] },
  { finnish: "viini", russian: ["вино"] },
  { finnish: "auto", russian: ["автомобиль", "машина"] },
  { finnish: "bussi", russian: ["автобус"] },
  { finnish: "juna", russian: ["поезд"] },
  { finnish: "lentokone", russian: ["самолет"] },
  { finnish: "polkupyörä", russian: ["велосипед", "велик"] },
  { finnish: "moottoripyörä", russian: ["мотоцикл"] },
  { finnish: "katu", russian: ["улица"] },
  { finnish: "tie", russian: ["дорога", "путь"] },
  { finnish: "silta", russian: ["мост"] },
  { finnish: "kaupunki", russian: ["город"] },
  { finnish: "maa", russian: ["страна", "земля", "почва"] },
  { finnish: "meri", russian: ["море"] },
  { finnish: "järvi", russian: ["озеро"] },
  { finnish: "joki", russian: ["река"] },
  { finnish: "metsä", russian: ["лес"] },
  { finnish: "puu", russian: ["дерево"] },
  { finnish: "kukka", russian: ["цветок"] },
  { finnish: "ruoho", russian: ["трава"] },
  { finnish: "kivi", russian: ["камень"] },
  { finnish: "hiekka", russian: ["песок"] },
  { finnish: "ilma", russian: ["воздух", "погода"] },
  { finnish: "aurinko", russian: ["солнце"] },
  { finnish: "kuu", russian: ["луна", "месяц"] },
  { finnish: "tähti", russian: ["звезда"] },
  { finnish: "pilvi", russian: ["облако", "туча"] },
  { finnish: "sade", russian: ["дождь"] },
  { finnish: "lumi", russian: ["снег"] },
  { finnish: "tuuli", russian: ["ветер"] },
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
  { finnish: "numero", russian: ["номер", "число", "цифра"] }
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