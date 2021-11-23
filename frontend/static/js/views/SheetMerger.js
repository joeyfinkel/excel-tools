import AbstractView from './AbstractView.js';
import { Titles } from '../components/title.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle(Titles.sheetMerger);
  }
}
