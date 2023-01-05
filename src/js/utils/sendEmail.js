// This function sends an email to the specified address with the contents of the contact form.
// It also sends a confirmation email to the sender of the form.
export function sendEmail() {
    // Get the values of the input fields in the form.
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Set the recipient and subject of the email.
    const recipient = "christopher.tonnesland@gmail.com";
    const subject = "N";

    // Construct the body of the email using the input field values.
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Send the email using the 'XMLHttpRequest' object.
    const request = new XMLHttpRequest();
    request.open("POST", "https://api.elasticemail.com/v2/email/send");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(`apikey=your-api-key&to=${recipient}&from=${email}&subject=${subject}&body=${body}`);

    // Send a confirmation email to the sender using the same 'XMLHttpRequest' object.
    const confirmRequest = new XMLHttpRequest();
    confirmRequest.open("POST", "https://api.elasticemail.com/v2/email/send");
    confirmRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    confirmRequest.send(`apikey=your-api-key&to=${email}&from=${recipient}&subject=Thank you for your message!&body=Thank you for contacting us. We will get back to you as soon as possible.`);

    // Display a confirmation message to the user.
    alert("Your message was sent successfully!");
}