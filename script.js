// Get references to DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Simulate AI response
function getAIResponse(userMessage) {
    // Basic responses for demonstration purposes
    const responses = {
        "hello": "Hello! How can I help you with your Gammal Tech experience?",
        "what courses do you offer?": "We offer a variety of courses such as Python, JavaScript, C++, and more!",
        "help me with python": "Sure! Do you want to start with basic syntax, or do you have a specific question?"
    };

    // Find a response or give a default reply
    return responses[userMessage.toLowerCase()] || "I'm sorry, I didn't understand that. Can you ask in a different way?";
}

// Add new chat message to the chat box
function addMessage(message, isUser) {
    const messageElement = document.createElement("div");
    messageElement.className = isUser ? "user-message" : "ai-message";
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to bottom
}

// Handle user input
sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, true);  // Add user message to chat
        const aiResponse = getAIResponse(userMessage);  // Get AI response
        setTimeout(() => {
            addMessage(aiResponse, false);  // Add AI response after a short delay
        }, 500);
        userInput.value = "";  // Clear the input field
    }
});

// Optional: Handle 'Enter' key press
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
