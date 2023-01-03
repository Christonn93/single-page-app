import AbstractView from '../ui/abstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Project');
  }

  async getHtml() {
    return `<h1>Project</h1>`;
  }
}
