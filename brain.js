// ========================================================
// 🧠 NOVA COGNITIVE CORE (HYBRID AUTOMATION EDITION)
// ========================================================

const NovaBrain = {
    // 🎯 YOUR API KEY
    apiKey: "AQ.Ab8RN6K8uGWHwflXMoBetGP9Vmh4p_1U6CxiVFojZSncwgL73g", 

    userMemory: {},
    learnedPhrases: {},

    init: function() {
        try {
            NovaBrain.userMemory = JSON.parse(localStorage.getItem('nova_user_memory')) || {};
            NovaBrain.learnedPhrases = JSON.parse(localStorage.getItem('nova_learned_phrases')) || {};
            console.log("💾 [BRAIN]: Memory banks loaded safely.");
        } catch (e) {
            NovaBrain.userMemory = {};
            NovaBrain.learnedPhrases = {};
        }
    },

    saveToDisk: function() {
        localStorage.setItem('nova_user_memory', JSON.stringify(NovaBrain.userMemory));
        localStorage.setItem('nova_learned_phrases', JSON.stringify(NovaBrain.learnedPhrases));
    },

    think: async function(userInput) {
        try {
            const cleanInput = userInput.toLowerCase().trim();

            // ========================================================
            // LEVEL 0: LOCAL PYTHON AUTOMATION INTERCEPTOR
            // ========================================================
            // Keywords that tell NOVA to bypass the cloud and run local device instructions
            const hardwareKeywords = ["system info", "specs", "open notepad", "open calculator", "open chrome"];
            const isHardwareAction = hardwareKeywords.some(keyword => cleanInput.includes(keyword));

            if (isHardwareAction) {
                try {
                    // Pings your background Python Flask execution bridge
                    const pythonServerResponse = await fetch('http://127.0.0.1:5000/command', {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify({ command: userInput })
                    });
                    
                    if (pythonServerResponse.ok) {
                        const systemData = await pythonServerResponse.json();
                        return systemData.reply; // Returns the direct status confirmation string from Python!
                    }
                } catch (bridgeError) {
                    console.warn("⚠️ [BRIDGE]: Python automation server unreachable. Defaulting to cloud relay matrix...");
                }
            }

            // ========================================================
            // LEVEL 1: LOCAL PROFILE MEMORY
            // ========================================================
            if (cleanInput.startsWith("remember my ")) {
                const pattern = cleanInput.replace("remember my ", "");
                const parts = pattern.split(" is ");
                if (parts.length >= 2) {
                    const key = parts[0].trim();
                    const value = parts.slice(1).join(" is ").trim();
                    NovaBrain.userMemory[key] = value;
                    NovaBrain.saveToDisk();
                    return `Memory matrix updated. Operator parameter mapped: ${key} is now registered as ${value}.`;
                }
            }

            if (cleanInput.includes("what is my ") || cleanInput.includes("do you know my ")) {
                for (let key in NovaBrain.userMemory) {
                    if (cleanInput.includes(key)) {
                        return `Accessing local registry files... Your registered ${key} is listed as: ${NovaBrain.userMemory[key]}.`;
                    }
                }
            }

            // ========================================================
            // LEVEL 2: DYNAMIC INTEL PROMPT OVERHAUL (GEMINI REMOTE CLOUD)
            // ========================================================
            const identityPrompt = `You are the NOVA core intelligence framework, an advanced military-grade JARVIS HUD projection terminal. 

Provide an exceptionally detailed, extensive, and complete intelligence dossier breakdown for the user's query. Do not summarize. Dive deep into the background, technical data, metrics, history, and architectural/structural blueprints of the subject.

CRITICAL FORMATTING INSTRUCTIONS:
1. DO NOT use markdown characters like asterisks (**), hashtags (#), or bullet dashes (-).
2. Structure your text output using clean descriptive headers followed by standard line breaks so the HUD can parse it visually.

Target Analysis Subject: `;

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${NovaBrain.apiKey}`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: identityPrompt + userInput }] }]
                })
            });

            if (!response.ok) {
                const errorPayload = await response.json().catch(() => ({}));
                const message = errorPayload.error?.message || "Broadcast rejected by cloud hosts.";
                return `Network Error [${response.status}]: ${message}`;
            }

            const data = await response.json();
            const textReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            
            if (textReply) {
                return textReply.trim();
            } else {
                return "Global pipeline transmission successful, but response payload was unparseable.";
            }

        } catch (innerError) {
            console.error("❌ [INTERNAL BRAIN CRASH]:", innerError);
            return `Internal cognitive fault: ${innerError.message}`;
        }
    }
};

NovaBrain.init();