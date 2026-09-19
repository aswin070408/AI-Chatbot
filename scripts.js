document.addEventListener("DOMContentLoaded", () => {

    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    let collegeInfo = "";


    // ==========================================
    // LOAD COLLEGE TXT FILE
    // ==========================================

    fetch("college_info.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("college_info.txt not found");
            }

            return response.text();
        })
        .then(data => {
            collegeInfo = data;
            console.log("College information loaded.");
        })
        .catch(error => {
            console.error(error);
        });


    // ==========================================
    // ADD MESSAGE
    // ==========================================

    function addMessage(message, isUser = false) {

        const messageDiv = document.createElement("div");

        messageDiv.classList.add("message");

        if (isUser) {
            messageDiv.classList.add("user-message");
        } else {
            messageDiv.classList.add("bot-message");
        }

        const messageText = document.createElement("p");

        messageText.textContent = message;

        messageDiv.appendChild(messageText);

        chatMessages.appendChild(messageDiv);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }


    // ==========================================
    // GET SECTION FROM TXT
    // ==========================================

    function getSection(sectionName, nextSectionName) {

        const start = collegeInfo.indexOf(sectionName);

        if (start === -1) {
            return "";
        }

        const end = nextSectionName
            ? collegeInfo.indexOf(nextSectionName, start)
            : collegeInfo.length;

        return collegeInfo.substring(
            start + sectionName.length,
            end === -1 ? collegeInfo.length : end
        ).trim();
    }


    // ==========================================
    // BOT RESPONSE
    // ==========================================

    function getBotResponse(question) {

        const q = question.toLowerCase().trim();


        // ======================================
        // GREETING
        // ======================================

        if (
            q === "hi" ||
            q === "hello" ||
            q === "hey" ||
            q.includes("good morning") ||
            q.includes("good afternoon")
        ) {
            return "Hi! 👋 How can I help you with Kings College of Engineering?";
        }


        // ======================================
        // THANK YOU / BYE
        // ======================================

        if (
            q.includes("thank you") ||
            q.includes("thanks") ||
            q === "bye" ||
            q.includes("goodbye")
        ) {
            return "You're welcome! 😊 Thank you for using our College Chatbot. Have a great day!";
        }


        // ======================================
        // CHECK TXT
        // ======================================

        if (collegeInfo === "") {
            return "Please wait. I'm still loading the college information.";
        }


        // ======================================
        // 1. COLLEGE LOCATION
        // ======================================

        if (
            q.includes("location") ||
            q.includes("where is the college") ||
            q.includes("where is college") ||
            q.includes("where is kings college")
        ) {

            const match = collegeInfo.match(
                /COLLEGE LOCATION:\s*(.*)/i
            );

            if (match) {
                return "📍 College Location:\n" + match[1].trim();
            }

            return "Sorry, I couldn't find the college location.";
        }


        // ======================================
        // 2. FULL ADDRESS
        // ======================================

        if (
            q.includes("address") ||
            q.includes("full address")
        ) {

            const section = getSection(
                "COLLEGE ADDRESS:",
                "COLLEGE TIMING:"
            );

            if (section) {
                return "📍 College Address:\n" + section;
            }

            return "Sorry, I couldn't find the college address.";
        }


        // ======================================
        // 3. COLLEGE NAME
        // ======================================

        if (
            q.includes("college name") ||
            q === "name"
        ) {

            const match = collegeInfo.match(
                /COLLEGE NAME:\s*(.*)/i
            );

            if (match) {
                return "🏫 College Name:\n" + match[1].trim();
            }
        }


        // ======================================
        // 4. COLLEGE TIMING
        // ======================================

        if (
            q.includes("college timing") ||
            q.includes("college time") ||
            q.includes("working hours")
        ) {

            const match = collegeInfo.match(
                /COLLEGE TIMING:\s*(.*)/i
            );

            if (match) {
                return "⏰ College Timing:\n" + match[1].trim();
            }
        }


        // ======================================
        // 5. PRINCIPAL
        // ======================================

        if (
            q.includes("principal") ||
            q.includes("principal name")
        ) {

            const match = collegeInfo.match(
                /PRINCIPAL:\s*(.*)/i
            );

            if (match) {
                return "👩‍🏫 Principal:\n" + match[1].trim();
            }
        }


        // ======================================
        // 6. ESTABLISHED YEAR
        // ======================================

        if (
            q.includes("established") ||
            q.includes("founded") ||
            q.includes("started")
        ) {

            const match = collegeInfo.match(
                /YEAR ESTABLISHED:\s*(.*)/i
            );

            if (match) {
                return "📅 Established:\n" + match[1].trim();
            }
        }


        // ======================================
        // 7. PARTICULAR COURSE
        // ======================================

        const courseNames = [
            {
                keywords: ["cse", "computer science"],
                name: "B.E. Computer Science and Engineering"
            },
            {
                keywords: ["ece", "electronics and communication"],
                name: "B.E. Electronics and Communication Engineering"
            },
            {
                keywords: ["eee", "electrical and electronics"],
                name: "B.E. Electrical and Electronics Engineering"
            },
            {
                keywords: ["civil"],
                name: "B.E. Civil Engineering"
            },
            {
                keywords: ["it", "information technology"],
                name: "B.Tech Information Technology"
            },
            {
                keywords: ["aids", "ai ds", "artificial intelligence", "data science"],
                name: "B.Tech Artificial Intelligence and Data Science"
            },
            {
                keywords: ["mech", "mechanical"],
                name: "B.E. Mechanical Engineering"
            },
            {
                keywords: ["mba"],
                name: "M.B.A."
            },
            {
                keywords: ["vlsi"],
                name: "M.E. VLSI Design"
            }
        ];


        // ======================================
        // 8. PARTICULAR COURSE FEE
        // ======================================

        if (
            q.includes("fee") ||
            q.includes("fees") ||
            q.includes("cost")
        ) {

            if (q.includes("cse") || q.includes("computer science")) {
                return "💰 CSE Fee: ₹80,000";
            }

            if (q.includes("ece") || q.includes("electronics and communication")) {
                return "💰 ECE Fee: ₹80,000";
            }

            if (q.includes("eee") || q.includes("electrical and electronics")) {
                return "💰 EEE Fee: ₹75,000";
            }

            if (q.includes("civil")) {
                return "💰 Civil Engineering Fee: ₹70,000";
            }

            if (
                q.includes("it") ||
                q.includes("information technology")
            ) {
                return "💰 IT Fee: ₹70,000";
            }

            if (
                q.includes("aids") ||
                q.includes("artificial intelligence") ||
                q.includes("data science")
            ) {
                return "💰 Artificial Intelligence and Data Science Fee: ₹70,000";
            }

            if (
                q.includes("mech") ||
                q.includes("mechanical")
            ) {
                return "💰 Mechanical Engineering Fee: ₹65,000";
            }

            return "💰 Fees Structure:\n\n" +
                getSection(
                    "FEES STRUCTURE",
                    "FACILITIES"
                );
        }


        // ======================================
        // 9. PARTICULAR COURSE
        // ======================================

        for (const course of courseNames) {

            for (const keyword of course.keywords) {

                if (q.includes(keyword)) {

                    if (
                        q.includes("course") ||
                        q.includes("available") ||
                        q.includes("department") ||
                        q.includes("study") ||
                        q.includes("offer")
                    ) {
                        return "🎓 Yes. " + course.name +
                            " is available at Kings College of Engineering.";
                    }
                }
            }
        }


        // ======================================
        // 10. ALL COURSES
        // ======================================

        if (
            q.includes("courses") ||
            q.includes("all courses") ||
            q.includes("programs") ||
            q.includes("departments")
        ) {

            return "🎓 Courses Available:\n\n" +
                getSection(
                    "COURSES",
                    "SCHOLARSHIP DETAILS"
                );
        }


        // ======================================
        // 11. PARTICULAR SCHOLARSHIP
        // ======================================

        if (q.includes("scholarship")) {

            if (q.includes("sc")) {
                return "🎓 SC Scholarship: ₹50,000 per year.";
            }

            if (q.includes("st")) {
                return "🎓 ST Scholarship: ₹50,000 per year.";
            }

            if (q.includes("bc")) {
                return "🎓 BC Scholarship: ₹25,000 per year.";
            }

            if (q.includes("mbc")) {
                return "🎓 MBC Scholarship: ₹25,000 per year.";
            }

            return "🎓 Scholarship Details:\n\n" +
                getSection(
                    "SCHOLARSHIP DETAILS",
                    "COLLEGE STRUCTURE"
                );
        }


        // ======================================
        // 12. TNEA / ADMISSION
        // ======================================

        if (
            q.includes("tnea") ||
            q.includes("admission") ||
            q.includes("eligibility") ||
            q.includes("apply") ||
            q.includes("how to join")
        ) {

            const admission = getSection(
                "ADMISSION PROCESS",
                "FEES STRUCTURE"
            );

            if (q.includes("tnea")) {

                return "📝 TNEA Admission Process:\n\n" +
                    admission;
            }

            if (q.includes("eligibility")) {

                return "🎓 Admission Eligibility:\n\n" +
                    "Students should complete and pass 12th standard.\n\n" +
                    admission;
            }

            if (
                q.includes("document") ||
                q.includes("certificate")
            ) {

                return "📄 Required Documents:\n\n" +
                    "1. 10th Marksheet\n" +
                    "2. 12th Marksheet\n" +
                    "3. Aadhar Card\n" +
                    "4. Community Certificate\n" +
                    "5. Other required certificates";
            }

            return "📝 Admission Process:\n\n" + admission;
        }


        // ======================================
        // 13. PARTICULAR FACILITY
        // ======================================

        if (
            q.includes("hostel") ||
            q.includes("library") ||
            q.includes("canteen") ||
            q.includes("sports") ||
            q.includes("laboratory") ||
            q.includes("lab") ||
            q.includes("auditorium") ||
            q.includes("healthcare") ||
            q.includes("classroom")
        ) {

            if (q.includes("hostel")) {
                return "🏠 Yes, Hostel facility is available.";
            }

            if (q.includes("library")) {
                return "📚 Yes, Library facility is available.";
            }

            if (
                q.includes("canteen") ||
                q.includes("cafe")
            ) {
                return "🍴 Yes, Canteen facility is available.";
            }

            if (q.includes("sports")) {
                return "⚽ Yes, Sports facilities are available.";
            }

            if (
                q.includes("laboratory") ||
                q.includes("lab")
            ) {
                return "🔬 Yes, Laboratory facilities are available.";
            }

            if (q.includes("auditorium")) {
                return "🏛️ Yes, Auditorium facility is available.";
            }

            if (q.includes("healthcare")) {
                return "🏥 Yes, Healthcare facilities are available.";
            }

            if (q.includes("classroom")) {
                return "🏫 Yes, Classrooms are available.";
            }
        }


        // ======================================
        // 14. ALL FACILITIES
        // ======================================

        if (
            q.includes("facilities") ||
            q.includes("facility")
        ) {

            return "🏫 College Facilities:\n\n" +
                getSection(
                    "FACILITIES",
                    "STUDENT ACTIVITIES"
                );
        }


        // ======================================
        // 15. PARTICULAR BUS TIMING
        // ======================================

        if (
            q.includes("bus") ||
            q.includes("transport")
        ) {

            // Find Bus Number
            const busMatch = q.match(
                /bus\s*(?:no\.?|number)?\s*(\d+)/
            );

            if (busMatch) {

                const busNumber = busMatch[1];

                const pattern = new RegExp(
                    "BUS NO\\. " + busNumber +
                    ":[\\s\\S]*?(?=\\n\\nBUS |\\n\\nBUS VAN|\\n\\nBUS KPN|\\n\\nBUS LRS|\\n\\nBUS TN|\\n\\n========================================|$)",
                    "i"
                );

                const match = collegeInfo.match(pattern);

                if (match) {

                    const busInfo = match[0].trim();

                    const timeMatch = busInfo.match(
                        /Time:\s*(.*)/i
                    );

                    if (
                        q.includes("timing") ||
                        q.includes("time")
                    ) {

                        if (timeMatch) {
                            return "🚌 Bus No. " +
                                busNumber +
                                " timing is " +
                                timeMatch[1].trim() + ".";
                        }
                    }

                    return "🚌 " + busInfo;
                }

                return "Sorry, I couldn't find Bus No. " +
                    busNumber + ".";
            }

            return "🚌 Transport Facilities:\n\n" +
                getSection(
                    "TRANSPORT FACILITIES",
                    "END OF COLLEGE INFORMATION"
                );
        }


        // ======================================
        // 16. STUDENT ACTIVITIES
        // ======================================

        if (
            q.includes("student activities") ||
            q.includes("activities") ||
            q.includes("club") ||
            q.includes("ncc") ||
            q.includes("nss") ||
            q.includes("symposium") ||
            q.includes("sangamam")
        ) {

            return "🎯 Student Activities:\n\n" +
                getSection(
                    "STUDENT ACTIVITIES",
                    "TRANSPORT FACILITIES"
                );
        }


        // ======================================
        // 17. COLLEGE STRUCTURE
        // ======================================

        if (
            q.includes("structure") ||
            q.includes("campus") ||
            q.includes("block")
        ) {

            return "🏢 College Structure:\n\n" +
                getSection(
                    "COLLEGE STRUCTURE",
                    "ADMISSION PROCESS"
                );
        }


        // ======================================
        // DEFAULT
        // ======================================

        return "Sorry, I couldn't find that information in my college database. 🤔\n\nTry asking about courses, fees, admission, TNEA, location, buses, scholarships, facilities, or student activities.";

    }


    // ==========================================
    // SEND MESSAGE
    // ==========================================

    function sendMessage() {

        const message = userInput.value.trim();

        if (message === "") {
            return;
        }

        addMessage(message, true);

        userInput.value = "";

        setTimeout(() => {

            const response = getBotResponse(message);

            addMessage(response);

        }, 500);
    }


    // ==========================================
    // SEND BUTTON
    // ==========================================

    sendButton.addEventListener("click", sendMessage);


    // ==========================================
    // ENTER KEY
    // ==========================================

    userInput.addEventListener("keypress", (event) => {

        if (event.key === "Enter") {
            sendMessage();
        }

    });

});