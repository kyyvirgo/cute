// Get the Yes and No buttons
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// When Yes is clicked, show the message with 4 GIFs
yesButton.addEventListener("click", function() {
    // Create a new div for the message
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message-container");

    // Create the message text
    const messageText = document.createElement("h1");
    messageText.classList.add("message-text");
    messageText.textContent = "Yay, I knew you would say yes!!! <3";

    // Create the four GIFs
    const gif1 = document.createElement("img");
    gif1.src = "images/cats-animated.gif"; // Replace with your GIF path
    gif1.classList.add("yay-gif", "left-gif");

    const gif2 = document.createElement("img");
    gif2.src = "images/cats-animated.gif"; // Same GIF for the right side
    gif2.classList.add("yay-gif", "right-gif");

    const gif4 = document.createElement("img");
    gif4.src = "images/my-love-love-of-my-life.gif"; // Replace with your GIF path
    gif4.classList.add("yay-gif", "moving-gif");
  

    // Append the GIFs and message to the message div
    messageDiv.appendChild(gif1);
    messageDiv.appendChild(messageText);
    messageDiv.appendChild(gif2);
    messageDiv.appendChild(gif4);

    // Append the message div to the body
    document.body.innerHTML = ''; // Clear previous content (optional)
    document.body.appendChild(messageDiv);
});

// Make the No button move away on hover
noButton.addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth - noButton.clientWidth;
    const y = Math.random() * window.innerHeight - noButton.clientHeight;
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
