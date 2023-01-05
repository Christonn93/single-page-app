// This file defines a view for the 'About' page of the application.

// Import the base 'AbstractView' class from the '../ui/abstractView.js' file.
import AbstractView from "../ui/abstractView.js";

// Define a new class that extends 'AbstractView', and export it as the default export.
export default class extends AbstractView {
    // The constructor initializes the view with the specified 'params', and calls the base class constructor
    // with these params. It also sets the title of the view to 'About'.
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    // This method returns an HTML string that represents the content of the 'About' page.
    async getHtml() {
        return `
            <h1>About</h1>
            <div class="container">
                <h4>Contact me</h4>
                    <form>
                        <label for="name">Name:</label><br>
                        <input type="text" id="name" name="name"><br>
                        <label for="email">Email:</label><br>
                        <input type="text" id="email" name="email"><br>
                        <label for="message">Message:</label><br>
                        <textarea id="message" name="message"></textarea><br>
                        <button type="button" onclick="sendEmail()">Send</button>
                    </form> 
            </div>


        `;
    }
}