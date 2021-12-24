import { getRemainingHeaders } from '../views/itemTemplate.js';

/**
 * Moves the column to a new position in the array.
 * @param {*[] } data Data to write to ne sheet.
 * @param {number} from Index to get column from.
 * @param {number} to Index to move column to.
 */
export const insertColumnAt = (data, from, to) => {
  data.forEach((row) => row.splice(to, 0, row.splice(from, 1)[0]));
};

export const rearrangeData = (data) => {
  const newOrder = [
    'UPC',
    'SKU',
    'ASIN',
    'manufacturer',
    'brand',
    'title',
    'Marketing Copy',
    ...getRemainingHeaders(data[0], 'Bullet', 'Item', 'Package'),
  ];
  console.log(newOrder);
  newOrder.forEach((header, idx) =>
    insertColumnAt(data, newOrder.indexOf(header), idx)
  );
};
