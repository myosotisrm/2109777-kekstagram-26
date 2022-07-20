<<<<<<< HEAD
// Создаёт данные для страницы

import { NAMES, DESCS, MESSAGES } from "./moc-data";
import { getRandomPositiveInteger } from "./util";

const commentIds = [];

const createPost = () => {
  const createComment = () => {
    const commentId = commentIds.length + 1;
    commentIds.push(1);
    return {
      id: commentId,
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
    };
  };
  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
    description: DESCS[getRandomPositiveInteger(0, DESCS.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 50)}, createComment),
  };
};

export {createPost};
=======
export {NAMES, DESCS, MESSAGES, MAXS_POSTS, commentIds};

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCS = [
  'Люблю фоточки',
  'Хочу на море',
  'Котики - моя жизнь',
  'Стакан наполовину полон',
  'Стакан наоплоивну пуст',
  'Пустышка этот стакан',
  'Стакан не пустой',
  'Жизнь продолжается',
];

const MESSAGES = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MAXS_POSTS = 25;

const commentIds = [];
>>>>>>> 90b41a65dec863a0dd5325e9041e60accfd076a7
