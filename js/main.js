// Функция для получения случайного числа взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandom = function (min, max) {
  if (min > max) {
    let swap = min;
    min = max;
    max = swap;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCommentLength = function (currentLength, maxLength) {
  if (currentLength <= maxLength) {
    return true;
  } else {
    return false;
  }
};

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

const getUrl = function (index){
  return 'photos/' + index + '.jpg'
};

const PHOTO_DESCRIPTION = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Quidem aut animi reprehenderit commodi incidunt rerum tempora facere modi',
  'eveniet placeat, autem aperiam obcaecati libero ipsam quasi!',
  'Facilis dolores velit exercitationem?',
];

const createComment = function() {
  return {
    id: getRandom(1, 25),
    avatar: 'img/avatar-' + getRandom(1, 6) + '.svg',
    message: MESSAGES[getRandom(0, MESSAGES.length - 1)],
    name: NAMES[getRandom(0, NAMES.length - 1)],
  };
};

const createPhoto = function() {
  let userId = getRandom(1, 25);
  return {
    id: userId,
    url: getUrl(userId),
    description: PHOTO_DESCRIPTION[getRandom(0, PHOTO_DESCRIPTION - 1)],
    likes: getRandom(15, 200),
    comments: createComment(3),
  };

};

const createPhotosList = function(requiredQuantity){
  const usedId = [];
  const cards = [];
  while(cards.length < requiredQuantity){
    const oneCard = createPhoto();
    if(!usedId.includes(oneCard.id)){
      cards.push(oneCard);
      usedId.push(oneCard.id);
    }
  }
  return cards;
};

getCommentLength();
createPhotosList();
