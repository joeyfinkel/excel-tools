/**
 * Creates the HTML that will display titles and the drag and drop component.
 * This can be used for every view.
 * @param {string[]} pageTitles Array of the headings that are shown on the every page.
 * @param {string} dragDropComponent The drag and drop component.
 * @returns {string} The HTML template of the titles and drag drop component
 * that is shown on every page.
 */
export const templateMainSection = (pageTitles, dragDropComponent) => `
    <div class="main-section">
        <div class="title pt-2">
            ${pageTitles}
        </div>${dragDropComponent}</div>
    </div>
    `;
