import { getRandomPositiveInteger } from './util';

//Шаблон для фотографии случайного пользователя
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');

//Собираем данные сюда, чтобы потом добавить Fragment к общим данным
const photosFragment = document.createDocumentFragment();

//Находим, куда добавить Fragment - в блок .pictures
const photos = document.querySelector('.pictures');

//Создаём DOM-элементы, соответствующие фотографиям
const createPhotos = (photo) => {
  photo.forEach(({url, likes, comments}) => {
    const photoElement = photosTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photosFragment.appendChild(photoElement);
  });
  return photosFragment;
};

const addPhotos = () => {
  const mocPhotos = `photos/${getRandomPositiveInteger(1, 25)}.jpg`;
  createPhotos(mocPhotos);
  photos.appendChild(photosFragment);
};

export { addPhotos };
