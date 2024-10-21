// Get references to DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Predefined responses for greetings, farewells, and 100 specific queries
function getAIResponse(userMessage) {
    const trimmedMessage = userMessage.trim().toLowerCase();  // Ensure case-insensitive matching and trim spaces

    const responses = {
        // Greetings
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there! What can I help you with?",
        "good morning": "Good morning! Hope you’re ready to learn something new today!",
        "good afternoon": "Good afternoon! How can I assist you at Gammal Tech?",
        "good evening": "Good evening! What would you like to know about Gammal Tech?",
        "how are you": "I'm just a bot, but I’m here and ready to help you!",
        "hey": "Hey! How can I help?",
        "good day": "Good day! How can Gammal Tech assist you today?",

        // Farewell/Ending
        "bye": "Goodbye! Don't hesitate to reach out if you need any more help.",
        "thank you": "You're welcome! Let me know if there’s anything else I can assist you with.",
        "thanks": "No problem! Feel free to ask if you have any more questions.",
        "see you later": "See you later! Have a great day ahead!",
        "goodbye": "Goodbye! Have a great day!",
        "take care": "Take care! Let us know if you need any more information.",
        "talk to you later": "Talk to you later! Always here to help you.",
        "have a nice day": "You too! Don't hesitate to reach out for any assistance.",

        // Course Suggestions
        "what new courses should we add?": "Gammal Tech could benefit from adding courses on AI, Machine Learning, Blockchain, and Cloud Computing. These topics are in high demand and growing fast.",
        "what programming languages should we focus on?": "Focus on Python, JavaScript, and Go. Python is essential for AI and data science, JavaScript is great for web development, and Go is gaining traction for cloud and distributed systems.",
        "should we add a kotlin course?": "Yes, Kotlin is increasingly popular due to its use in Android development. Adding a course would attract mobile developers.",
        "is there demand for blockchain courses?": "Yes, blockchain is a rapidly growing field with applications in finance, healthcare, and supply chain. A course in blockchain development or decentralized applications could be a good addition.",
        "should we add more data science courses?": "Absolutely. Data Science continues to grow across industries. Courses in Data Analysis, Machine Learning, and AI can significantly boost student engagement.",
        "what topics in cybersecurity should we cover?": "You should consider covering ethical hacking, penetration testing, network security, and cloud security. These areas are critical and in demand by companies globally.",
        "should we offer more beginner courses?": "Yes, offering more beginner courses in core technologies like HTML, CSS, JavaScript, and Python can attract a wider audience, including those new to programming.",
        "should we add cloud computing courses?": "Definitely. Cloud computing is a top skill that many companies are seeking. Consider adding courses on AWS, Azure, and Google Cloud.",
        "what advanced topics should we add?": "Consider adding advanced courses in Deep Learning, Reinforcement Learning, Kubernetes, Microservices, and Quantum Computing. These are cutting-edge topics that are gaining popularity.",
        "is there interest in full-stack development?": "Yes, full-stack development remains a highly sought-after skill. You can offer a comprehensive course on MERN stack (MongoDB, Express, React, Node) or MEAN stack (MongoDB, Express, Angular, Node).",

        // Marketing and Business Strategy
        "how can we improve our marketing strategy?": "Focus on social media engagement, email campaigns, and SEO-optimized blog posts. Highlight success stories from past students and offer free webinars to attract new leads.",
        "should we run a social media campaign?": "Yes, social media campaigns on platforms like Instagram, LinkedIn, and YouTube can increase brand awareness and attract more students to Gammal Tech.",
        "how can we engage students better?": "Offer personalized learning paths, gamify the learning experience with badges and achievements, and send regular progress updates to keep students engaged.",
        "should we partner with companies?": "Yes, partnering with companies to offer job placement services or internships can make your courses more attractive and increase enrollment.",
        "what should we focus on for our next campaign?": "Focus on emerging technologies like AI, Machine Learning, and Cloud Computing. Highlighting how your courses prepare students for the jobs of the future could be a great angle.",
        "should we offer free webinars?": "Free webinars are an excellent way to attract new students. They allow potential customers to experience the value of your courses before committing.",
        "what can we do to improve brand recognition?": "Host events, webinars, and workshops featuring industry experts. Additionally, focus on content marketing with tutorials, blog posts, and success stories.",
        "how can we increase student retention?": "You can improve retention by offering personalized learning plans, student mentorship programs, and by creating a community where students can engage with peers and instructors.",
        "how do we attract international students?": "Provide localized versions of your courses in different languages and offer certificates recognized by international employers.",
        "should we add certification for our courses?": "Yes, adding certification for your courses will increase their value for students, especially for those looking to add qualifications to their resumes.",

        // Internal Improvements
        "how can we improve our course materials?": "Focus on creating more interactive content, such as quizzes, coding challenges, and hands-on projects. Offering additional resources like cheat sheets and summary videos can also help.",
        "should we create video-based learning?": "Yes, video-based learning has become increasingly popular. Providing high-quality, engaging video tutorials will make the learning process more immersive.",
        "should we offer live coding sessions?": "Yes, live coding sessions where students can follow along with the instructor in real-time could boost engagement and provide a more hands-on learning experience.",
        "what can we do to improve student feedback?": "Implement a real-time feedback system where students can rate each module, and analyze that data to continuously improve course content.",
        "how can we better structure our courses?": "Focus on clear learning paths that start with beginner-level courses and progressively increase in complexity. Offer quizzes, practical projects, and checkpoints to ensure students are progressing.",
        "should we add project-based learning?": "Yes, project-based learning is an excellent way to ensure that students can apply what they've learned in real-world scenarios.",
        "how can we make our platform more interactive?": "Add features like interactive code editors, peer-to-peer discussions, and leaderboards to make the learning experience more engaging.",
        "should we add mentoring programs?": "Yes, mentoring programs could be highly valuable. Assign mentors to students to help them stay motivated and on track.",
        "should we create forums for students?": "Yes, forums where students can interact, ask questions, and share knowledge will foster a sense of community and improve engagement.",
        "should we offer internships to students?": "Yes, offering internship opportunities as part of your courses would be an excellent way to attract more students and improve the real-world relevance of your curriculum."
    };

    // Return predefined response or a default message
    return responses[trimmedMessage] || "I'm sorry, I didn't understand that. Can you please ask in another way?";
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
