import { templateTypes } from '../../utils/text.js';

/**
 * Creates the sidebar content.
 * @param {string} logoLink The link for the logo image.
 * @returns {string} The HTML for the sidebar.
 */
export const sidebarContent = (logoLink) => {
  const listItemStyle =
    'btn-nav list-group-item bg-transparent py-2 my-2 border-bottom-0';
  /**
   * Creates a nave button for every view.
   * @returns {string} The HTML for the nave button.
   */
  const createNavButton = () => {
    let button = '';

    // Creating a button for every view except main and tutorial.
    for (const templates in templateTypes) {
      const template = templateTypes[templates];
      const { type, navbarAttributes } = template;

      if (type === 'main') continue;

      button += `
        <li class='${listItemStyle}'>
          <a
            href='/${navbarAttributes?.link}'
            class='text-decoration-none nav-text'
            data-link
          >
            <p class='${navbarAttributes?.icon} text-nowrap ms-1'>
              <span class='nav-text ms-1'>${navbarAttributes?.text}</span>
            </p>
          </a>
        </li>
      `;
    }

    return button;
  };

  return `
    <section class='top row position-absolute'>
      <a href='/'>
        <img class='logo' src='${logoLink}' alt='Excel Tools' />
      </a>
    </section>
    <section>
      <ul class='list-group list-group-flush'>
        ${createNavButton()}
      </ul>
    </section>
  `;
};
