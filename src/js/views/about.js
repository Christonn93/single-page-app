import AbstractView from "../ui/abstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1>About</h1>
        `;
    }
}