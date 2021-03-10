import { createPhoto } from './data.js';

const createPhotosList = function (requiredQuantity) {
  const usedId = [];
  const cards = [];
  while (cards.length < requiredQuantity) {
    const oneCard = createPhoto(25);
    if (!usedId.includes(oneCard.id)) {
      cards.push(oneCard);
      usedId.push(oneCard.id);
    }
  }

  return cards;
};

export { createPhotosList };
