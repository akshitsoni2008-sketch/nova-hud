import os
import platform
import psutil
import subprocess
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows your local HTML file to talk to this server securely

@app.route('/command', methods=['POST'])
def handle_command():
    data = request.json
    command = data.get("command", "").lower().strip()
    
    reply = ""
    
    # 🖥️ ACTION 1: HARDWARE METRICS FETCH
    if "system info" in command or "specs" in command:
        cpu = psutil.cpu_percent(interval=0.1)
        ram = psutil.virtual_memory().percent
        os_name = platform.system()
        release = platform.release()
        reply = f"SYSTEM LOGS:\nOperating System: {os_name} {release}\nHardware CPU Load: {cpu}%\nMemory Allocation: {ram}%"
        
    # 🚀 ACTION 2: LAUNCH LOCAL APP (Windows Example - Change paths for Mac/Linux)
    elif "open notepad" in command:
        subprocess.Popen("notepad.exe")
        reply = "Executing terminal directive: Launching Notepad interface module."
        
    elif "open calculator" in command:
        subprocess.Popen("calc.exe")
        reply = "Executing terminal directive: Launching Calculator matrix."
        
    elif "open chrome" in command:
        # Opens an app via standard Windows shell executing protocol
        os.system("start chrome")
        reply = "Initializing Chrome browser environment."

    # 🛑 FALLBACK: Offline Parsing
    else:
        reply = f"Directive '{command}' interpreted offline. No native automation sequence mapped for this signature."

    return jsonify({"reply": reply})
# 🎮 ACTION: LAUNCH CUSTOM APPS & SYSTEMS
    elif "open discord" in command:
        # Update this path with your local Windows username!
        discord_path = r"C:\Users\YOUR_USERNAME\AppData\Local\Discord\Update.exe --processStart Discord.exe"
        subprocess.Popen(discord_path, shell=True)
        reply = "Establishing terminal matrix hook: Syncing Discord communication arrays."

    elif "open code" in command or "open vs code" in command:
        # Standard installation path for VS Code
        vscode_path = os.path.expandvars(r"%LocalAppData%\Programs\Microsoft VS Code\Code.exe")
        if os.path.exists(vscode_path):
            subprocess.Popen(vscode_path)
            reply = "Initializing script environment. Launching Visual Studio Code core workspace."
        else:
            reply = "VS Code binary not found in standard LocalAppData routing pathways."

    elif "open roblox" in command:
        # Roblox uses a special custom web protocol link to launch automatically!
        os.system("start roblox:")
        reply = "Bypassing main frame parameters: Booting Roblox client simulator nodes."  
        
if __name__ == '__main__':
    print("⚡ NOVA HARDWARE CONTROLLER ONLINE // LISTENING ON PORT 5000")
    app.run(port=5000)