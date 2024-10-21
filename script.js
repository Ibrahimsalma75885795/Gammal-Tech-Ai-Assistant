// Get references to DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Predefined responses for Gammal Tech's 100 specific queries
function getAIResponse(userMessage) {
    const trimmedMessage = userMessage.trim().toLowerCase();

    const responses = {
        // Course Suggestions
        "Hi": "Hi How can i help you today?",
        "Hello": "Hello How can i help you today?",
        "Good Morning": "Good Morning How can i help you today?",
        "Good Afternoon": "Good Afternoon How can i help you today?",
        "Good Evening": "Good Evening How can i help you today?",
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
        
        // Technological Trends
        "should we explore ai-driven education?": "Absolutely. AI-driven personalized learning can adapt courses to each student's learning style and pace, providing a more effective learning experience.",
        "is vr education viable for us?": "Yes, VR education could be a unique selling point, especially for topics like 3D modeling, architecture, and interactive coding environments.",
        "should we adopt adaptive learning technologies?": "Yes, adaptive learning systems that adjust content based on the student's performance can make learning more efficient and personalized.",
        "how important is machine learning for our courses?": "Very important. Machine learning is one of the fastest-growing fields and is in high demand across industries. Offering hands-on, project-based machine learning courses could be a significant boost.",
        "should we invest in quantum computing courses?": "Yes, quantum computing is an emerging field with a lot of future potential. Starting with introductory courses on quantum algorithms and quantum hardware can position Gammal Tech as an early leader in this space.",
        "what role should cloud computing play in our courses?": "Cloud computing is vital for modern software development. Offering courses on cloud infrastructure, DevOps, and cloud-native development will be highly beneficial.",
        "is there a future for ai in education?": "Yes, AI will play a massive role in the future of education. AI can help personalize learning, automate grading, and offer real-time feedback, making it essential to your growth.",
        "should we teach robotic process automation?": "Yes, Robotic Process Automation (RPA) is being adopted by many industries for automating routine tasks. Offering a course on RPA tools like UiPath or Blue Prism would be valuable.",
        "is augmented reality education worth exploring?": "Yes, AR can enhance learning experiences by making them more interactive, especially in fields like anatomy, engineering, and architecture.",
        "should we offer deep learning courses?": "Yes, deep learning is a critical part of AI. Offering advanced deep learning courses covering TensorFlow, Keras, and PyTorch could attract tech enthusiasts and professionals.",

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
        "should we offer internships to students?": "Yes, offering internship opportunities as part of your courses would be an excellent way to attract more students and improve the real-world relevance of your curriculum.",

        // Pricing and Business Strategy
        "should we offer more affordable courses?": "Yes, offering tiered pricing with more affordable options for beginners and premium courses for advanced learners can attract a wider range of students.",
        "should we offer subscription models?": "Yes, a subscription model could provide a consistent revenue stream while allowing students to access a range of courses for a monthly fee.",
        "what pricing models should we adopt?": "You could adopt a tiered pricing model with free introductory courses, mid-tier pricing for certification courses, and premium pricing for specialized or advanced topics.",
        "should we offer payment plans for courses?": "Yes, offering payment plans can make your courses more accessible to a broader audience, especially for high-priced, specialized courses.",
        "should we offer discounts for students?": "Yes, offering student discounts, especially for university students, can help increase enrollments and build long-term loyalty.",
        "should we offer lifetime access to courses?": "Yes, offering lifetime access to courses would provide additional value for students who want to revisit the material whenever they need it.",
        "should we run special promotions?": "Yes, running limited-time promotions, especially during holidays or back-to-school seasons, can significantly increase course sign-ups.",
        "should we focus more on B2B or B2C?": "Consider a mix of both. B2C can provide steady revenue from individual students, but B2B partnerships can offer larger deals by offering corporate training solutions.",
        "how can we expand globally?": "Localize your content, offer multi-language support, and collaborate with international universities or companies to expand your global reach.",
        "should we offer white-label courses for companies?": "Yes, offering white-label courses for companies that can integrate Gammal Tech's content into their internal training programs could open up a new revenue stream.",
        
        // Analytics and Data
        "what data should we collect from students?": "You should collect data on course engagement, completion rates, time spent per module, and feedback to continuously improve the learning experience.",
        "how can we use data to improve courses?": "Analyze data such as drop-off points in courses, time spent on certain modules, and quiz performance to identify areas where students are struggling and make improvements.",
        "should we track student progress?": "Yes, tracking student progress and providing them with a dashboard of their achievements and areas of improvement will help them stay motivated and on track.",
        "how can we use feedback to improve?": "Use feedback surveys at the end of each module and course to gather insights on what students liked and what needs improvement. Analyze trends to identify common issues.",
        "should we analyze course completion rates?": "Yes, analyzing course completion rates can help you identify courses that might need restructuring or additional support to ensure students finish them.",
        "should we track industry trends?": "Absolutely. Keeping an eye on industry trends can help Gammal Tech stay ahead of the curve and offer courses in emerging fields.",
        "should we conduct market research?": "Yes, conducting regular market research will help you identify what skills are in demand and allow you to update your course catalog accordingly.",
        "should we monitor competitor pricing?": "Yes, keeping an eye on competitor pricing will help you stay competitive and offer courses at attractive prices.",
        "how can we use AI for course recommendations?": "Implement AI-driven algorithms to suggest personalized courses to students based on their performance, interests, and career goals.",
        "how can we use AI to improve the platform?": "You can use AI for personalized learning paths, automated grading, chatbots for student support, and real-time analytics to improve the learning experience.",

        // Miscellaneous
        "what skills will be in demand in 2025?": "In 2025, skills in AI, Machine Learning, Blockchain, Cloud Computing, and Cybersecurity will be in high demand across industries.",
        "what technologies should we keep an eye on?": "Keep an eye on AI, Quantum Computing, Edge Computing, 5G technology, and Augmented Reality, as they are expected to shape the future of tech.",
        "should we invest in ai for grading?": "Yes, AI-driven grading can significantly reduce the time required for assessments and provide students with instant feedback.",
        "should we offer ai chatbots for student support?": "Yes, AI chatbots can provide real-time assistance to students, answering common questions and guiding them through course material.",
        "how important is mobile accessibility for courses?": "Very important. Ensuring that courses are mobile-friendly will help increase engagement, as many students prefer learning on their phones."
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
