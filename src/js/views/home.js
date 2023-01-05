// This file defines a view for the 'Home' page of the application.

// Import the base 'AbstractView' class from the '../ui/abstractView.js' file.
import AbstractView from "../ui/abstractView.js";

// Define a new class that extends 'AbstractView', and export it as the default export.
export default class extends AbstractView {
    // The constructor initializes the view with the specified 'params', and calls the base class constructor
    // with these params. It also sets the title of the view to 'Home'.
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    // This method returns an HTML string that represents the content of the 'Home' page.
    async getHtml() {
        return `
            <h1>Welcome</h1>
        `;
    }
}