document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        let mailtoLink = `mailto:dreamdesign4202@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        window.location.href = mailtoLink;
        document.getElementById("responseMessage").innerHTML = "Message sent successfully!";
    } else {
        document.getElementById("responseMessage").innerHTML = "Please fill all fields!";
    }
});
