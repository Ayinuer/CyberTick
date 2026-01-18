document.addEventListener('DOMContentLoaded', () => {
    const clockFace = document.getElementById('clock-face');
    const hourHand = document.getElementById('hour-hand');
    const minHand = document.getElementById('min-hand');
    const secHand = document.getElementById('sec-hand');

    // 1. Generate 12 Numbers
    for (let i = 1; i <= 12; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        
        // Rotate the container div
        const angle = i * 30;
        numberDiv.style.transform = `rotate(${angle}deg)`;
        
        // Create a span for the text and rotate it BACK so it stays upright
        const span = document.createElement('span');
        span.textContent = i;
        span.style.display = 'inline-block';
        span.style.transform = `rotate(-${angle}deg)`;
        
        numberDiv.appendChild(span);
        clockFace.appendChild(numberDiv);
    }

    // 2. Update Time Logic
    function update() {
        const now = new Date();
        const s = now.getSeconds();
        const m = now.getMinutes();
        const h = now.getHours();

        // Analog Hands
        const sDeg = (s / 60) * 360;
        const mDeg = (m / 60) * 360 + (s / 60) * 6;
        const hDeg = (h % 12 / 12) * 360 + (m / 60) * 30;

        secHand.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
        minHand.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
        hourHand.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;

        // Digital Display
        document.getElementById('time-val').textContent = now.toLocaleTimeString('en-GB');
        document.getElementById('date-val').textContent = now.toISOString().split('T')[0].replace(/-/g, ' - ');
    }

    // 3. Toggles
    document.getElementById('theme-btn').onclick = () => document.body.classList.toggle('light-mode');
    document.getElementById('mode-btn').onclick = () => {
        const ana = document.getElementById('analog-clock');
        const dig = document.getElementById('digital-clock');
        if (ana.style.display === 'none') {
            ana.style.display = 'block';
            dig.style.display = 'none';
        } else {
            ana.style.display = 'none';
            dig.style.display = 'block';
        }
    };

    setInterval(update, 1000);
    update();
});
