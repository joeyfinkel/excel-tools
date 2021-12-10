import { dataAttributes } from '../../../utils/utils';

/**
 * Creates the back button to go to back to the previous view.
 * @returns {string} A font awesome icon of a right arrow.
 */
export const createBackButton = () => `
    <i
        id="previousView"
        class="fas fa-arrow-left fa-lg"
        ${dataAttributes.backButton}
    ></i>
`;

// TODO #3 Work on back button.
const backButtonEvent = () =>
{
    // Logic goes here.
}
