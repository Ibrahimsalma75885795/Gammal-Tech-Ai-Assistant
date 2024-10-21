// Get references to DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Predefined responses for greetings, farewells, and 100+ internal queries for Gammal Tech
function getAIResponse(userMessage) {
    const trimmedMessage = userMessage.trim().toLowerCase();  // Ensure case-insensitive matching and trim spaces

    const responses = {
        // Greetings
        "hi": "Hello! How can I assist Gammal Tech today?",
        "hello": "Hi there! How can I help Gammal Tech today?",
        "good morning": "Good morning! What’s on Gammal Tech's mind today?",
        "good afternoon": "Good afternoon! How can I assist Gammal Tech?",
        "good evening": "Good evening! What would you like to discuss today?",
        "how are you": "I’m here and ready to assist Gammal Tech with any queries!",
        "hey": "Hey! How can I help?",
        "good day": "Good day! How can Gammal Tech improve its services today?",

        // Farewell/Endings
        "bye": "Goodbye! Feel free to reach out anytime Gammal Tech needs assistance.",
        "thank you": "You're welcome! Let me know if Gammal Tech has more questions.",
        "thanks": "No problem! Happy to assist Gammal Tech anytime.",
        "see you later": "See you later! Don’t hesitate to reach out for more guidance.",
        "goodbye": "Goodbye! Looking forward to helping Gammal Tech in the future.",
        "take care": "Take care! Let me know if Gammal Tech has more queries.",
        "talk to you later": "Talk to you later! Always here to support Gammal Tech.",
        "have a nice day": "You too! Feel free to reach out whenever Gammal Tech needs assistance.",

        // Specific Request - Improving Gammal Tech
        "how can we improve gammal tech?": "Gammal Tech can improve by:\n\n1. **Expanding Course Offerings**: Introduce more advanced and in-demand topics such as AI, Cloud Computing, Cybersecurity, and Blockchain.\n\n2. **Enhancing the Learning Experience**: Integrate more interactive elements like live coding sessions, project-based learning, and quizzes.\n\n3. **Personalized Learning Paths**: Use AI to create customized learning paths that adapt to individual student needs and progress.\n\n4. **Strengthen Industry Partnerships**: Partner with companies to provide real-world internship opportunities and job placement services.\n\n5. **Boost Marketing Strategy**: Run targeted social media campaigns, host webinars, and publish success stories to attract a global audience.\n\n6. **Invest in AI-Driven Education**: Use AI for grading, feedback, and personalized learning recommendations to enhance the student experience.\n\n7. **Offer Certifications**: Provide certification for completed courses to add value to students' resumes.",

        // Course Suggestions
        "what new courses should we add?": "Gammal Tech should consider adding courses on AI, Machine Learning, Blockchain, and Cloud Computing. These topics are in high demand and growing fast.",
        "what programming languages should we focus on?": "Focus on Python, JavaScript, and Go. Python is essential for AI and data science, JavaScript is great for web development, and Go is gaining traction for cloud and distributed systems.",
        "should we add a kotlin course?": "Yes, Kotlin is becoming popular in Android development. Adding it would attract more mobile developers to Gammal Tech.",
        "is there demand for blockchain courses?": "Yes, blockchain is growing in industries like finance, healthcare, and supply chain. A blockchain development or decentralized applications course would benefit Gammal Tech.",
        "should we add more data science courses?": "Absolutely. Data Science is growing across industries. Courses in Data Analysis, Machine Learning, and AI will attract more students.",
        "what topics in cybersecurity should we cover?": "Focus on ethical hacking, penetration testing, network security, and cloud security. These are critical and in-demand across industries.",
        "should we offer more beginner courses?": "Yes, offering beginner courses in key technologies like HTML, CSS, JavaScript, and Python can bring more beginners to Gammal Tech.",
        "should we add cloud computing courses?": "Definitely. Cloud computing is in high demand. Consider adding AWS, Azure, and Google Cloud certifications.",
        "what advanced topics should we add?": "Gammal Tech could add advanced courses in Kubernetes, Microservices, Reinforcement Learning, and Quantum Computing to appeal to more advanced learners.",
        "is there interest in full-stack development?": "Yes, full-stack development is highly sought after. Gammal Tech can offer comprehensive full-stack development courses using the MERN or MEAN stack.",

        // Marketing and Business Strategy
        "how can we improve our marketing strategy?": "Focus on creating engaging content, social media engagement, SEO-optimized blogs, and success stories from past students. Running webinars can help bring in new leads.",
        "should we run a social media campaign?": "Yes, running targeted social media campaigns on Instagram, LinkedIn, and YouTube can boost brand visibility and attract more students to Gammal Tech.",
        "how can we engage students better?": "Offer personalized learning paths, introduce gamification (badges, achievements), and provide regular progress updates to keep students motivated.",
        "should we partner with companies?": "Yes, partnerships with companies for job placements or internships can increase the appeal of Gammal Tech courses.",
        "what should we focus on for our next campaign?": "Focus on promoting emerging technologies like AI, Machine Learning, and Cloud Computing, showing how Gammal Tech’s courses prepare students for future jobs.",
        "should we offer free webinars?": "Free webinars are a great way to attract new students. It allows them to experience the value of your courses before committing.",
        "what can we do to improve brand recognition?": "Host industry expert webinars, release success stories, and create content-driven marketing strategies. Collaborating with tech influencers could also help.",
        "how can we increase student retention?": "Offer personalized mentorship, create interactive learning experiences, and provide regular feedback to help students stay engaged.",
        "how do we attract international students?": "Offer multi-language courses, provide localized content, and partner with international companies or universities for recognition.",
        "should we add certification for our courses?": "Yes, certifications add value to your courses, especially for students looking to boost their resumes and credentials.",

        // Internal Improvements
        "how can we improve our course materials?": "Make course materials more interactive with quizzes, challenges, and hands-on projects. Providing additional resources like cheat sheets can also help.",
        "should we create video-based learning?": "Yes, video-based learning is highly engaging and effective. Providing high-quality video tutorials will improve the learning experience.",
        "should we offer live coding sessions?": "Yes, live coding sessions allow students to follow along with instructors in real-time and provide a hands-on learning experience.",
        "what can we do to improve student feedback?": "Introduce real-time feedback systems where students can rate each module. Analyze the feedback to improve and optimize content.",
        "how can we better structure our courses?": "Focus on clear, progressive learning paths. Start with beginner content and increase in complexity over time. Provide checkpoints and projects to assess progress.",
        "should we add project-based learning?": "Yes, project-based learning is crucial for practical skills. Offering real-world projects helps students apply their knowledge effectively.",
        "how can we make our platform more interactive?": "Add features like live coding environments, interactive discussions, and peer-to-peer challenges to make the platform more engaging.",
        "should we add mentoring programs?": "Yes, mentoring programs provide students with personalized guidance and help keep them motivated and on track.",
        "should we create forums for students?": "Yes, forums where students can ask questions, interact with peers, and share knowledge will foster a sense of community and improve retention.",
        "should we offer internships to students?": "Yes, offering internship opportunities in collaboration with companies will increase enrollment and provide real-world experience to students.",

        // Pricing and Business Strategy
        "should we offer more affordable courses?": "Yes, offering tiered pricing with more affordable options for beginners and premium advanced courses will attract a wider range of students.",
        "should we offer subscription models?": "Yes, a subscription model allows students access to multiple courses for a monthly or yearly fee, providing consistent revenue for Gammal Tech.",
        "what pricing models should we adopt?": "Adopt tiered pricing with free introductory courses, mid-tier pricing for certification courses, and premium pricing for advanced or niche topics.",
        "should we offer payment plans for courses?": "Yes, offering payment plans for higher-priced courses would make Gammal Tech's offerings more accessible to a broader audience.",
        "should we offer discounts for students?": "Yes, offering discounts, especially for university students, will help increase enrollments and attract a younger audience.",
        "should we offer lifetime access to courses?": "Yes, lifetime access can add value to courses, especially for students who want to revisit materials in the future.",
        "should we run special promotions?": "Yes, running limited-time promotions, especially during holidays or back-to-school seasons, can boost signups and attract new students.",
        "should we focus more on b2b or b2c?": "Consider balancing both. B2C provides consistent revenue from individuals, while B2B partnerships for corporate training can offer larger deals.",
        "how can we expand globally?": "Localize courses, offer multi-language support, and partner with international universities to attract students worldwide.",
        "should we offer white-label courses for companies?": "Yes, offering white-label courses allows companies to integrate Gammal Tech's content into their internal training programs, creating a new revenue stream."
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
