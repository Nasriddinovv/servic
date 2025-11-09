document.addEventListener('DOMContentLoaded', function () {
    // Theme Switch tugmasini yaratamiz
    const themeSwitch = document.createElement('div');
    themeSwitch.id = 'theme-switch';
    themeSwitch.innerHTML = `
        <button class="theme-btn light-btn" aria-label="Oq fon">☀️</button>
        <button class="theme-btn dark-btn" aria-label="Qora fon">🌙</button>
    `;

    // Tugmalar uchun style
    const style = document.createElement('style');
    style.textContent = `
        #theme-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            gap: 8px;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .theme-btn {
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .light-btn {
            background: #fff;
            color: #ffd700;
        }
        .dark-btn {
            background: #222;
            color: #fff;
        }
        .theme-btn:hover {
            transform: scale(1.1);
        }
        .theme-btn:active {
            transform: scale(0.95);
        }

        /* Light Theme */
        body.light-theme {
            background-color: #ffffff !important;
            color: #222222 !important;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        body.light-theme .main {
            background: #f0f9ff !important;
        }
        body.light-theme nav {
            background: #e0f2fe !important;
        }
        body.light-theme .service-card {
            background: #ffffff !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
        }
        body.light-theme h1, 
        body.light-theme h2, 
        body.light-theme h3 {
            color: #1e40af !important;
        }
        body.light-theme p {
            color: #334155 !important;
        }
        body.light-theme a {
            color: #1e40af !important;
        }
        body.light-theme .haqida {
            background: #f1f5f9 !important;
        }

        /* Dark Theme */
        body.dark-theme {
            background-color: #111111 !important;
            color: #ffffff !important;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        body.dark-theme .main {
            background: #1e293b !important;
        }
        body.dark-theme nav {
            background: #0f172a !important;
        }
        body.dark-theme .service-card {
            background: #1e293b !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3) !important;
        }
        body.dark-theme h1, 
        body.dark-theme h2, 
        body.dark-theme h3 {
            color: #60a5fa !important;
        }
        body.dark-theme p {
            color: #e2e8f0 !important;
        }
        body.dark-theme a {
            color: #60a5fa !important;
        }
        body.dark-theme .haqida {
            background: #1e293b !important;
        }
    `;
    document.head.appendChild(style);

    // Tugmani sahifaga qo'shamiz
    document.body.appendChild(themeSwitch);

    // Mavjud theme ni localStorage dan olamiz
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(currentTheme + '-theme');

    // Oq fon tugmasi
    const lightBtn = themeSwitch.querySelector('.light-btn');
    lightBtn.addEventListener('click', () => {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    });

    // Qora fon tugmasi
    const darkBtn = themeSwitch.querySelector('.dark-btn');
    darkBtn.addEventListener('click', () => {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    });

    // Responsive uchun
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    function handleResponsive(e) {
        if (e.matches) {
            themeSwitch.style.top = '80px';
            themeSwitch.style.right = '10px';
        } else {
            themeSwitch.style.top = '20px';
            themeSwitch.style.right = '20px';
        }
    }
    mediaQuery.addListener(handleResponsive);
    handleResponsive(mediaQuery);
});