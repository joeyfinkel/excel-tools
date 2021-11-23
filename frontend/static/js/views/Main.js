import AbstractView from './AbstractView.js';
import { map, Titles } from '../components/title.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle(Titles.main.documentTitle);
  }

  /**
   * Creates the HTML for the `main` view
   * @returns {Promise<string>} The HTML for the main view
   */
  async getHtml() {
    return `
      <section class="home">
          ${map(Titles.main.headings)}
      </section>
    `;
  }
}
