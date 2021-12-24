/**
 * Renames the dimension headers by searching for a value (`'item' || 'package'`).
 * @param {[*[]]} data Data for the new sheet.
 * @param {string} searchValue Value to search for. Used to check if the header includes this value.
 * @param {string} replaceValue Value to replace search value with..
 */
export const renameDims = (data, searchValue, replaceValue) => {
  const lastChar = searchValue.slice(-1);
  const headers = data[0];

  headers.forEach((header) => {
    if (header.includes(searchValue)) {
      const wordAfterLastChar = header.substring(header.indexOf(lastChar) + 1);
      headers.splice(
        headers.indexOf(header),
        1,
        `${replaceValue} ${wordAfterLastChar}`
      );
    }
  });
};

/**
 * Changes the headers that include the word `feature` to `Bullet` and adds a number after.
 * @param {[*[]]} data Data for the new sheet.
 */
export const renameFeatures = (data) => {
  const headers = data[0];
  let count = 1;

  headers.forEach(
    (header) =>
      header.includes('feature') &&
      headers.splice(headers.indexOf(header), 1, `Bullet ${count++}`)
  );
};

/**
 * Renames headers based on an object's key values pairs.
 * @param {[*[]]} data Data for new sheet.
 * @param {Object.<string>} headersObj Object of headers to rename. The keys are how the headers appear
 * in the original sheet and the values are how they should be renamed to.
 */
export const renameHeadersObj = (data, headersObj) => {
  const headers = data[0];
  for (const key in headersObj)
    headers.splice(headers.indexOf(key), 1, headersObj[key]);
};
