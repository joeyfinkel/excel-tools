/**
 * Gets the index of each search value provided from `headers`.
 * @param {string[]} headers List of headers from the uploaded sheet.
 * @param  {...any} searchValue Names of headers to search for and get their indices.
 * @returns {number[]} List of the searchValues's indices.
 */
export const getIndicesToSwap = (headers, ...searchValue) => {
  const indexList = [];

  searchValue.forEach((value) => indexList.push(headers.indexOf(value)));

  return indexList;
};

/**
 * Swaps `valueA` with `valueB`.
 * @param {*[]} row Row from the uploaded sheet.
 * @param {number} valueA Index from the row to swap.
 * @param {number} valueB Index from the row to swap.
 */
export const swap = (row, valueA, valueB) => {
  const temp = row[valueA];

  row[valueA] = row[valueB];
  row[valueB] = temp;
};

export const insertColumnAt = (data, from, to) =>
  data.forEach((row) => row.splice(to, 0, row.splice(from, 1)[0]));
