import { headers } from '../views/itemTemplate.js';

/**
 * Renames the dimension headers, feature headers, and the rest of the headers.
 * @param {[*[]]} data Data for the new sheet.
 */
export const renameHeaders = (data) => {
  const dimSearchValues = ['item', 'package'];

  /**
   * Renames the dimension headers by searching for a value (`'item' || 'package'`).
   * @param {string} searchValue Value to search for. Used to check if the header includes this value.
   */
  const renameDims = (searchValue) => {
    const firstChar = searchValue[0];
    const lastChar = searchValue.slice(-1);
    const _headers = data[0];
    const replaceValue = searchValue.replace(
      firstChar,
      firstChar.toUpperCase()
    );

    _headers.forEach((header) => {
      if (header.includes(searchValue)) {
        const wordAfterLastChar = header.substring(
          header.indexOf(lastChar) + 1
        );
        _headers.splice(
          _headers.indexOf(header),
          1,
          `${replaceValue} ${wordAfterLastChar}`
        );
      }
    });
  };

  /** Changes the headers that include the word `feature` to `Bullet` and adds a number after. */
  const renameFeatures = () => {
    const _headers = data[0];
    let count = 1;

    _headers.forEach(
      (header) =>
        header.includes('feature') &&
        _headers.splice(_headers.indexOf(header), 1, `Bullet ${count++}`)
    );
  };

  /** Renames headers based on an object's key values pairs. */
  const renameHeadersObj = () => {
    const headersObj = headers.toRename;
    const _headers = data[0];

    for (const key in headersObj)
      _headers.splice(_headers.indexOf(key), 1, headersObj[key]);
  };

  renameHeadersObj();
  dimSearchValues.forEach((searchValue) => renameDims(searchValue));
  renameFeatures();
};
