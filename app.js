// ========================================================
// 🕹️ HUD CONTROLLER INTERFACE WIRE
// ========================================================

const inputField = document.getElementById("user-input");
const igniteButton = document.getElementById("ignite-btn");
const outputLog = document.getElementById("output-log");

async function executeDirective() {
    const textQuery = inputField.value.trim();
    if (!textQuery) return;

    // Clear user typing slot
    inputField.value = "";

    // Render User Directive to screen logs
    const userLine = document.createElement("div");
    userLine.className = "user-msg";
    userLine.textContent = `OPERATOR: ${textQuery}`;
    outputLog.appendChild(userLine);
    
    // Auto scroll view screen to base layer
    outputLog.scrollTop = outputLog.scrollHeight;

    // Trigger loading status
    const systemLine = document.createElement("div");
    systemLine.className = "system-msg";
    systemLine.textContent = "JARVIS // Rerouting data packets to flash arrays...";
    outputLog.appendChild(systemLine);
    outputLog.scrollTop = outputLog.scrollHeight;

    // Call your customized live NovaBrain engine
    const replyString = await NovaBrain.think(textQuery);

    // Wipe loading notice and drop clean text reply
    systemLine.remove();
    const replyLine = document.createElement("div");
    replyLine.className = "reply-msg";
    replyLine.textContent = `JARVIS: ${replyString}`;
    outputLog.appendChild(replyLine);
    
    outputLog.scrollTop = outputLog.scrollHeight;
}

// Bind action keys
igniteButton.addEventListener("click", executeDirective);
inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        executeDirective();
    }
});