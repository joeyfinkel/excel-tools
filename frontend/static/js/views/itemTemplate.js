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
  toRename: {
    asin: 'ASIN',
    model: 'SKU',
    description: 'Marketing Copy',
    upcList: 'UPC',
  },
};

/**
 * Creates the `item template` view.
 * @returns {string} The HTML for the `item template` view.
 */
export const itemTemplateView = () => createView(itemTemplate);

/**
 * Gets a list of headers for every header keyword.
 * @param {string[]} headers List of headers from the uploaded sheet.
 * @param {...any} listOfHeaders The headers to look for
 * @returns {string[]} Array with the headers to look for.
 */
export const getRemainingHeaders = (headers, ...listOfHeaders) => {
  const remainingHeaders = [];

  /**
   * Gets all the bullet headers and adds them to an array.
   * @param {string} headerToGet Teh header to look for.
   * @returns {string[]} Array with all the bullet headers.
   */
  const getHeaders = (headerToGet) => {
    const headersList = [];

    headers.forEach(
      (header) => header.includes(headerToGet) && headersList.push(header)
    );

    return headersList;
  };

  listOfHeaders.forEach((header) =>
    remainingHeaders.push(...getHeaders(header))
  );

  return remainingHeaders;
};
