import {getRandomPositiveInteger} from './utils.js';

const photoDescriptions = [
  'Я, снова я и опять я',
  'Просто я',
  'Но сначала селфи!',
  'Типичный я',
  'Мы сделали это!',
  'Сначала мы работали тяжело, а потом стали работать еще тяжелее',
  'Когда мечты становятся реальностью',
  'Говори да, рискуй и живи по своим правилам',
  'Невозможное возможно',
  'Да или нет?',
  'Что вы об этом думаете?',
  'Разве не потрясающе?',
  'На какие вопросы мне ответить?',
  'Чем бы вы хотели заняться прямо сейчас?',
  'Мой город',
  'Говорю “да” новым приключениям',
  'Калории, набранные в отпуске, не считаются',
  'Оставил здесь частицу души',
  'Запасаюсь воспоминаниями',
  'Готов путешествовать за еду (и закаты)',
  'Лучшие моменты ждут вас за пределами зоны комфорта',
  'В поисках захватывающих пейзажей',
  'Я следую зову сердца... и часто оказываюсь в аэропорту',
  'Нельзя купить счастье, но можно купить билеты на самолет',
  'Отпуск не ждет',
];

const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentatorNames = [
  'Гриша',
  'Петя',
  'Сара',
  'Джой',
  'Васек',
];

const createComments = (amount, prepareId) =>
  new Array(amount).fill(null).map((currentValue, index) => ({
    id: prepareId + index,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: commentMessages[getRandomPositiveInteger(0, commentMessages.length-1)],
    name: commentatorNames[getRandomPositiveInteger(0, commentatorNames.length-1)],
  }));

const createPosts = (amount) =>
  new Array(amount).fill(null).map((currentValue, index) => ({
    id: ++index,
    url: `photos/${index}.jpg`,
    description: photoDescriptions[getRandomPositiveInteger(0, 24)],
    likes: getRandomPositiveInteger(15, 200),
    comments: createComments(getRandomPositiveInteger(1, 15), index),
  }));

export {createPosts};
