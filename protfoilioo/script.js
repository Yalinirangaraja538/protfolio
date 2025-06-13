const texts = [ "Web Developer"];
let textIndex = 0;
let charIndex = 0;
const speed = 100; // typing speed

function typeEffect() {
    const dynamicText = document.querySelector(".dynamic-text");
    if (charIndex < texts[textIndex].length) {
        dynamicText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 1500); // wait before erasing
    }
}

function eraseEffect() {
    const dynamicText = document.querySelector(".dynamic-text");
    if (charIndex > 0) {
        dynamicText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, speed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000); // Start effect after page load
});
// Apply Tilt Effect
document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelectorAll(".skill-card"), {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.3,
    });
});


// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.querySelector(".dark-mode-toggle i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}
// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.querySelector(".dark-mode-toggle i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("VKpxoV_fwZHRZTzqM"); // Replace with your EmailJS Public Key

    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Validate form
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // EmailJS parameters
        let templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send email using EmailJS
        emailjs.send("service_2owgbcl", "template_g17953i", templateParams)
            .then(function (response) {
                alert("Message Sent Successfully! ✅");
                document.getElementById("contactForm").reset(); // Clear form after submission
            }, function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});


// Chatbot Toggle
function toggleChatbot() {
    let chatbox = document.getElementById("chatbox");
    chatbox.style.display = (chatbox.style.display === "flex") ? "none" : "flex";
}

// Handle Message Send
function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;
    
    addMessage("You", userInput);
    document.getElementById("user-input").value = "";
    
    setTimeout(() => {
        getBotResponse(userInput);
    }, 500);
}
