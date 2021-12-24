/**
 * Returns the index of the headers provided.
 * @param {string[]} headers List of headers to check.
 * @param {string[]} finalHeaders List of final headers.
 * @param {string} templateType The type of template the function is implemented on.
 * @returns {number[]} A list of numbers representing the indices of the non selected headers.
 */
export const headerIndex = (headers, finalHeaders, templateType) => {
  /** @type {number[]} Array containing the indexes of the non selected headers. */
  const index = [];

  headers.filter((header) => {
    if (templateType === 'column-remover')
      !finalHeaders.includes(header) && index.push(headers.indexOf(header));
    else finalHeaders.includes(header) && index.push(headers.indexOf(header));
  });

  return index;
};

export const indicesToRemove = (headers, finalHeaders, templateType) =>
  headerIndex(headers, finalHeaders, templateType);

/**
 * Removes the non selected header's indices from the data.
 * @param {[any[]]} dataFromStorage The data from the selected sheet.
 * @param {number[]} indices List of indices to remove from original data.
 * @returns {number[]} The new data to be used for the new sheet.
 */
export const removeData = (dataFromStorage, indices) => {
  const row = [];

  dataFromStorage.forEach((entry) => {
    const newEntry = [];

    entry.forEach((val, idx) => {
      if (!indices.includes(idx)) newEntry.push(val);
    });

    row.push(newEntry);
  });

  return row;
};

/**
 * Takes each cell in the row and turns it into an object.
 * @param {any[]} row Each row from {@link dataFromStorage}.
 * @returns {[[{value: string|number}]]} Each cell in the row as an object in the row array.
 */
export const transformData = (row) =>
  row.map((value) => {
    return { value };
  });
