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

/**
 *
 * @param {*[]} data Data to write to the new sheet.
 * @returns {[*[]]} Array of the data rearranged to follow the order of {@link newOrder}.
 */
export const rearrangeData = (data) => {
  const headers = data[0];
  /** The array for the new order of the headers. */
  const newOrder = [
    'UPC',
    'SKU',
    'ASIN',
    'manufacturer',
    'brand',
    'title',
    'Marketing Copy',
    ...getRemainingHeaders(headers, 'Bullet', 'Item', 'Package'),
  ];
  const finalData = [];

  /**
   * Gets the index of every header that is in {@link newOrder} from {@link data}.
   * @returns {number[]} An array with all the indices of the headers in {@link newOrder}.
   */
  const getHeaderIndex = () => {
    const index = [];

    data.forEach((row) =>
      newOrder.forEach(
        (header) => row.indexOf(header) > -1 && index.push(row.indexOf(header))
      )
    );

    return index;
  };

  /**
   * Adds all the data from the uploaded sheet into an array in the order of {@link newOrder}.
   * @returns {*[]} An ordered array with the data that is needed from the uploaded sheet.
   */
  const getValueByIndex = () => {
    const index = getHeaderIndex();
    const newData = [];

    data.forEach((row) => index.forEach((value) => newData.push(row[value])));

    return newData;
  };

  // Creates an array for every row.
  getValueByIndex().forEach(() => {
    const newRow = [];
    let count = 0;

    while (count < getValueByIndex().length) {
      // Adding each row's data to a new array
      newRow.push(getValueByIndex().slice(count, count + newOrder.length));
      count += newOrder.length;
    }

    finalData.push(newRow);
  });

  return finalData[0];
};
