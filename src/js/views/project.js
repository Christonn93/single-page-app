import AbstractView from '../ui/abstractView.js';
import { cardItems } from '../ui/projectCards.js';

cardItems()

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Project');
  }

  async getHtml() {
    return `<h1>Project</h1>
            <div class="container d-flex gap-2" id="projectsGallery"></div>
    `;
  }
}
