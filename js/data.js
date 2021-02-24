import { getRandom } from './util.js';

const NAMES = [
  'Иван',
  'Андрей',
  'Мария',
  'Виктор',
  'Юлия',
  'Ксения',
  'Антон',
  'Юлия',
  'Михаил',
  'Екатерина',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTO_DESCRIPTION = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Quidem aut animi reprehenderit commodi incidunt rerum tempora facere modi',
  'eveniet placeat, autem aperiam obcaecati libero ipsam quasi!',
  'Facilis dolores velit exercitationem?',
];

const getUrl = function (index) {
  return 'photos/' + index + '.jpg';
};

const createComment = function () {
  return {
    id: getRandom(1, 25),
    avatar: 'img/avatar-' + getRandom(1, 6) + '.svg',
    message: MESSAGES[getRandom(0, MESSAGES.length - 1)],
    name: NAMES[getRandom(0, NAMES.length - 1)],
  };
};

const createCommentsArray = function(max){
  return new Array(getRandom(0,max)).fill(null).map(() => createComment());
}

const createPhoto = function (maxId) {
  let userId = getRandom(1, maxId);
  return {
    id: userId,
    url: getUrl(userId),
    description: PHOTO_DESCRIPTION[getRandom(0, PHOTO_DESCRIPTION - 1)],
    likes: getRandom(15, 200),
    comments: createCommentsArray(10),
  };
};

export { createPhoto };
