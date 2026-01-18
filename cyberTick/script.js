document.addEventListener('DOMContentLoaded', () => {
    // 1. UI Elements Mapping
    const ui = {
        clockFace: document.getElementById('clock-face'),
        hands: {
            hour: document.getElementById('hour-hand'),
            min: document.getElementById('min-hand'),
            sec: document.getElementById('sec-hand')
        },
        timeVal: document.getElementById('time-val'),
        dateVal: document.getElementById('date-val'),
        themeBtn: document.getElementById('theme-btn'),
        modeBtn: document.getElementById('mode-btn'),
        containers: {
            analog: document.getElementById('analog-clock'),
            digital: document.getElementById('digital-clock')
        }
    };

    // 2. State Management
    let lastSecond = -1;

    // 3. Theme Toggle Logic
    // This ensures we always have one class or the other, matching your new CSS
    const toggleTheme = () => {
        const body = document.body;
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode'); // Save preference
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode'); // Save preference
        }
    };

    // 4. Initialize Clock Face
    const createClockNumbers = () => {
        if (!ui.clockFace) return;
        const fragment = document.createDocumentFragment();
        for (let i = 1; i <= 12; i++) {
            const numDiv = document.createElement('div');
            numDiv.className = 'number';
            numDiv.style.setProperty('--rotation', `${i * 30}deg`);
            numDiv.innerHTML = `<span>${i}</span>`;
            fragment.appendChild(numDiv);
        }
        ui.clockFace.appendChild(fragment);
    };

    // 5. Core Animation Loop
    const updateClock = () => {
        const now = new Date();
        const ms = now.getMilliseconds();
        const s = now.getSeconds();
        const m = now.getMinutes();
        const h = now.getHours();

        // Analog Hands - High Precision Smooth Motion
        const angles = {
            sec: (s * 6) + (ms * 0.006),
            min: (m * 6) + (s * 0.1),
            hour: (h % 12 * 30) + (m * 0.5)
        };

        if (ui.hands.sec) ui.hands.sec.style.transform = `translateX(-50%) rotate(${angles.sec}deg)`;
        if (ui.hands.min) ui.hands.min.style.transform = `translateX(-50%) rotate(${angles.min}deg)`;
        if (ui.hands.hour) ui.hands.hour.style.transform = `translateX(-50%) rotate(${angles.hour}deg)`;

        // Digital Display - Updates only once per second to save battery
        if (s !== lastSecond) {
            if (ui.timeVal) ui.timeVal.textContent = now.toLocaleTimeString('en-GB', { hour12: false });
            if (ui.dateVal) ui.dateVal.textContent = now.toISOString().split('T')[0].replace(/-/g, ' · ');
            lastSecond = s;
        }

        requestAnimationFrame(updateClock);
    };

    // 6. Event Listeners
    ui.themeBtn?.addEventListener('click', toggleTheme);
    
    ui.modeBtn?.addEventListener('click', () => {
        ui.containers.analog?.classList.toggle('is-hidden');
        ui.containers.digital?.classList.toggle('is-hidden');
    });

    // 7. Startup Execution
    // Load saved theme or default to light-mode
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);

    createClockNumbers();
    requestAnimationFrame(updateClock);
});
// 1. Force London Time in your Digital Display
const updateClock = () => {
    const now = new Date();
    
    // Create a London-specific time string
    const londonTime = now.toLocaleTimeString('en-GB', { 
        timeZone: 'Europe/London', 
        hour12: false 
    });
    
    ui.timeVal.textContent = londonTime;
    // ... rest of your hand animation code
};

// 2. Fetch Real London Weather
async function getLondonWeather() {
    try {
        // Fetching London coordinates (51.5074, -0.1278)
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true');
        const data = await response.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;
        
        // Update a new element in your HTML
        document.getElementById('weather-display').innerHTML = `${temp}°C London`;
    } catch (error) {
        console.log("Weather error:", error);
    }
}

// Call weather every 10 minutes
getLondonWeather();
setInterval(getLondonWeather, 600000);
