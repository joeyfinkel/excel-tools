import { templateTypes } from '../utils/text.js';
import { createView } from './views.js';

const { itemTemplate } = templateTypes;

/** Object to help with the header manipulation. */
export const headers = {
  /** List of headers to remove from the original uploaded sheet. */
  toRemove: [
    'isAdultProduct',
    'isEligibleForTradeIn',
    'isEligibleForSuperSaverShipping',
    'salesRanks',
    'salesRankReference',
    'salesRankReferenceHistory',
    'hasReviews',
    'liveOffersOrder',
    'buyBoxSellerIdHistory',
    'offersSuccessful',
    'type',
    'eanList',
    'variations',
  ],
  /** The keywords to search for when renaming select headers. */
  toRename: ['item', 'package', 'feature', 'asin', 'model', 'upcList'],
};

/**
 * Creates the `item template` view.
 * @returns {string} The HTML for the `item template` view.
 */
export const itemTemplateView = () => createView(itemTemplate);

/**
 * Renames certain headers and returns an array of them rearranged.
 * @param {string} header Array of headers from the uploaded sheet.
 * @returns {string[]} An array of the headers in the following order:
 *
 * `[UPC, SKU, ASIN, Bullets, Item Dimensions, Package Dimensions]`
 */
export const renameHeaders = (header) => {
  const words = ['item', 'package', 'feature'];
  const renamedHeaders = [];

  /**
   * Rename headers. Used to rename asin, model, and upcList.
   * @returns {string[]} Array with the renamed headers.
   */
  const generalRename = () => {
    const newHeaders = [];

    switch (header) {
      case 'asin':
        newHeaders.push('ASIN');
        break;
      case 'model':
        newHeaders.push('SKU');
        break;
      case 'upcList':
        newHeaders.push('UPC', 'Id');
        break;
      default:
        break;
    }

    return newHeaders;
  };

  /**
   * Renames all the headers that relate to dimensions.
   * @param {string} word The word to rename.
   * @returns {string[]} Array with the renamed headers.
   */
  const renameDims = (word) => {
    const newHeaders = [];

    if (header.includes(word)) {
      const lastChar = word.slice(-1);
      const wordAfterLastChar = header.substring(header.indexOf(lastChar) + 1);
      const finalStr = `${word[0].toUpperCase()}${word.slice(
        1,
        word.length
      )} ${wordAfterLastChar}`;

      newHeaders.push(finalStr);
    }

    return newHeaders;
  };

  /**
   * Renames all the feature headers to bullet.
   * @param {string} word The word to rename.
   * @returns {string[]} Array with the renamed headers.
   */
  const renameBullets = (word) => {
    const newHeaders = [];
    const renamedBullets = [];

    header.includes(word) && newHeaders.push(word);
    newHeaders.forEach((_, idx) => renamedBullets.push(`Bullet ${idx + 1}`));

    return renamedBullets;
  };

  words.forEach((word) =>
    word === 'feature'
      ? renamedHeaders.push(renameBullets(word))
      : renamedHeaders.push(renameDims(word))
  );

  return [
    generalRename()[3],
    generalRename()[2],
    generalRename()[1],
    generalRename()[0],
    ...renameHeaders(header)[2],
    ...renameHeaders(header)[0],
    ...renameHeaders(header)[1],
  ];
};

export const arrangeColumns = (dataFromStorage) => {
  // Return an array with the rearranged columns
  // Order of array: [Id, UPC, SKU, ASIN, Brand, Manufacturer, Title, New Title, Description, Bullets, Item Dimensions, Package Dimensions]
  // Notes:
  //  Id = UPC (Just make a copy of the UPC column)
  //  New Title -> New empty row for the new titles
};
