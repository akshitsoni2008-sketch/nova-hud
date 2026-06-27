// ========================================================
// 🌌 NOVA MASTER INTERACTION ENGINE (FAST LIGHTSPEED ED.)
// ========================================================

// 1. ENGINE IGNITION SYSTEMS
function igniteNova() {
    const controlPanel = document.getElementById('control-panel');
    const novaHud = document.getElementById('nova-hud');
    
    if (controlPanel) controlPanel.style.display = 'none';
    if (novaHud) {
        novaHud.classList.remove('hidden');
        novaHud.style.display = 'flex';
    }
    
    speakNova("Nova core initialized. Systems standing by.");
}

// 2. AUDIO SYNTHESIS LINKS
let localVoices = [];
function loadSystemVoices() {
    if ('speechSynthesis' in window) localVoices = window.speechSynthesis.getVoices();
}
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadSystemVoices;
    loadSystemVoices();
}

function speakNova(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0; // Snappier speech feedback 
        utterance.pitch = 0.95; 
        if (localVoices.length > 0) {
            let maleVoice = localVoices.find(v => v.lang.includes('en') && v.name.includes('Guy'));
            if (!maleVoice) maleVoice = localVoices.find(v => v.lang.includes('en') && v.name.includes('Male'));
            if (maleVoice) utterance.voice = maleVoice;
        }
        window.speechSynthesis.speak(utterance);
    }
}

// 3. CORE BRAIN COMMAND TRANSLATOR (LIGHTSPEED LAYOUT REWRITE)
async function processNovaCommand(input) {
    if (!input) return;

    const statusDisplay = document.getElementById('matrix-status-text');
    const hudHeader = document.querySelector('.hud-center h1');

    if (hudHeader) hudHeader.innerText = "NOVA // NET_SYNC";
    if (statusDisplay) {
        statusDisplay.innerText = "STREAMING PACKETS EN ROUTE...";
        statusDisplay.style.color = "#9d4edd"; 
    }

    // ⚡ STEP 1: INSTANT SCREEN TRANSITION (Zero waiting time for the operator!)
    const centerPanel = document.getElementById('hud-center-panel');
    const dossierView = document.getElementById('dossier-view');
    const subjectEl = document.getElementById('dossier-subject');
    const textEl = document.getElementById('dossier-core-text');
    const imagesEl = document.getElementById('dossier-images');
    const linksEl = document.getElementById('dossier-links');

    if (subjectEl) subjectEl.innerText = input.toUpperCase();
    if (textEl) textEl.innerHTML = "Gathering atmospheric data telemetry... Fetching live matrix cores.";
    
    if (centerPanel) centerPanel.style.display = 'none';
    if (dossierView) {
        dossierView.classList.remove('hidden');
        dossierView.style.display = 'flex';
    }

    // ⚡ STEP 2: LOAD RELEVANT IMAGES INSTANTLY USING ACCELERATED OPEN-SOURCE GRAPHICS
    if (imagesEl) {
        imagesEl.innerHTML = "";
        const cleanKeyword = encodeURIComponent(input.trim());
        
        // Fast, high-performance structured static imagery arrays to prevent layout engine delay
        for (let i = 1; i <= 4; i++) {
            const imgWrapper = document.createElement('div');
            imgWrapper.style.position = 'relative';
            imgWrapper.style.border = '1px solid rgba(0, 242, 254, 0.4)';
            imgWrapper.style.borderRadius = '4px';
            imgWrapper.style.overflow = 'hidden';
            imgWrapper.style.height = '90px';
            imgWrapper.style.background = '#02050f';

            const liveImage = document.createElement('img');
            // Using highly reliable, lightning-fast Unsplash source keyword injection natively optimized for fast render
            liveImage.src = `https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop`; // Global sci-fi fallback
            liveImage.src = `https://images.unsplash.com/featured/400x250/?${cleanKeyword},tech&sig=${i}`;
            
            liveImage.style.width = '100%';
            liveImage.style.height = '100%';
            liveImage.style.objectFit = 'cover';
            
            const overlayTag = document.createElement('span');
            overlayTag.innerText = `SYS_FEED_0${i}`;
            overlayTag.style.position = 'absolute';
            overlayTag.style.bottom = '4px';
            overlayTag.style.left = '6px';
            overlayTag.style.fontSize = '0.55rem';
            overlayTag.style.background = 'rgba(0,0,0,0.85)';
            overlayTag.style.padding = '1px 5px';
            overlayTag.style.color = '#00f3ff';

            imgWrapper.appendChild(liveImage);
            imgWrapper.appendChild(overlayTag);
            imagesEl.appendChild(imgWrapper);
        }
    }

    // ⚡ STEP 3: RENDER THEMED NATIVE HUD VIDEO PLAYBACK SYSTEM
    if (linksEl) {
        const terms = encodeURIComponent(input);
        linksEl.innerHTML = `
            <div style="width:100%; margin-bottom:10px; border:1px solid rgba(0,243,255,0.3); border-radius:4px; overflow:hidden; background:#000;">
                <header style="background:rgba(0,119,170,0.3); padding:6px 10px; font-size:0.7rem; color:#00f3ff; display:flex; justify-content:space-between; font-weight:bold; letter-spacing:1px;">
                    <span>📹 DYNAMIC TARGET VECTOR STREAM</span>
                    <span style="color:#ff4757; animation: blinker 1s linear infinite;">[FEED ONLINE]</span>
                </header>
                
                <div style="position:relative; width:100%; height:125px; background:radial-gradient(circle, #0a1128 0%, #02050f 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; border-top:1px solid rgba(0,243,255,0.1);">
                    <div style="font-size:1.8rem; margin-bottom:4px; filter: drop-shadow(0 0 8px #00f3ff);">📡</div>
                    <div style="color:#00f3ff; font-size:0.7rem; font-family:monospace; font-weight:bold; letter-spacing:0.5px; text-transform:uppercase; text-align:center; padding: 0 10px;">
                        READY TO STREAM: ${input}
                    </div>
                    <button onclick="window.open('https://www.youtube.com/results?search_query=${terms}', '_blank')" style="margin-top:8px; background:rgba(0,243,255,0.15); border:1px solid #00f3ff; color:#fff; padding:4px 12px; font-size:0.65rem; border-radius:3px; cursor:pointer; font-family:monospace; font-weight:bold; transition:all 0.2s;">
                        ▶️ ACTIVATE DEEP VIDEO STREAM
                    </button>
                </div>
            </div>
            
            <a href="https://en.wikipedia.org/wiki/${terms}" target="_blank" class="intel-link" style="display:flex; justify-content:space-between; padding:8px; border:1px solid rgba(0,243,255,0.15); color:#fff; text-decoration:none; font-size:0.75rem; background:rgba(0,0,0,0.5); font-family:monospace;">
                <span>📚 ACCESS WIKIPEDIA CORE INDEX</span>
                <span style="color:#00f3ff;">&gt;&gt;</span>
            </a>
        `;
    }

    // ⚡ STEP 4: FETCH COMPREHENSIVE TEXT INTEL IN THE BACKGROUND
    let reply = "";
    try {
        if (typeof NovaBrain !== 'undefined') {
            reply = await NovaBrain.think(input);
        } else {
            reply = `System payload: "${input}". Error: Local network core detached.`;
        }
    } catch (err) {
        console.error(err);
        reply = "Critical breakdown capturing cloud data stream nodes.";
    }

    // Failsafe handling
    if (!reply || reply.includes("Network Error")) {
        reply = `[SYSTEM ALERT]: Gemini API Core returned overhead latency exceptions. Displaying local hardware definitions for "${input.toUpperCase()}". Media vectors and sensory telemetry streams remain functional.`;
    }

    // Inject the text payload into the container seamlessly when it arrives
    if (textEl) textEl.innerHTML = reply.replace(/\n/g, '<br>');
    speakNova(`Intelligence parameters compiled for ${input}.`);

    // Reset status back to standby behind the scenes quietly
    if (hudHeader) hudHeader.innerText = "NOVA ONLINE";
    if (statusDisplay) {
        statusDisplay.innerText = "SENSORY MATRIX ACTIVE // STANDBY FOR DIRECTIVE";
        statusDisplay.style.color = "#00f3ff";
    }
}

// 4. HARDWARE LOGIC INITIALIZATION HOOKS
window.addEventListener('DOMContentLoaded', () => {
    const terminalInput = document.getElementById('nova-terminal');
    if (terminalInput) {
        terminalInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const textInput = this.value.trim();
                if (textInput !== "") {
                    processNovaCommand(textInput);
                    this.value = ""; 
                }
            }
        });
    }
    initializePeripheralHUD();
});

// 5. PERIPHERAL SIMULATION METRICS
let sessionStartTime = Date.now();
function initializePeripheralHUD() {
    setInterval(() => {
        const timeDisplay = document.getElementById('hud-clock');
        if (timeDisplay) {
            const now = new Date();
            timeDisplay.innerText = now.toTimeString().split(' ')[0];
        }

        const uptimeDisplay = document.getElementById('hud-uptime');
        if (uptimeDisplay) {
            uptimeDisplay.innerText = `${Math.floor((Date.now() - sessionStartTime) / 1000)}s`;
        }
    }, 1000);

    setInterval(() => {
        const cpuEl = document.getElementById('hud-cpu-load');
        const ramEl = document.getElementById('hud-ram-load');
        const fillEl = document.getElementById('load-bar-fill');

        if (cpuEl) {
            const simulatedCPU = (Math.random() * 25 + 12).toFixed(2);
            cpuEl.innerText = `${simulatedCPU}%`;
            if (fillEl) fillEl.style.width = `${simulatedCPU}%`;
        }
        if (ramEl) ramEl.innerText = `${(Math.random() * 3 + 61).toFixed(2)}%`;
    }, 2500);

    window.addEventListener('mousemove', (e) => {
        const coordX = document.getElementById('coord-x');
        const coordY = document.getElementById('coord-y');
        if (coordX && coordY) {
            coordX.innerText = e.clientX.toString().padStart(3, '0');
            coordY.innerText = e.clientY.toString().padStart(3, '0');
        }
    });
}

function closeDossier() {
    const centerPanel = document.getElementById('hud-center-panel');
    const dossierView = document.getElementById('dossier-view');

    if (dossierView) dossierView.style.display = 'none';
    if (centerPanel) centerPanel.style.display = 'block';

    speakNova("Terminal interface restored.");
}