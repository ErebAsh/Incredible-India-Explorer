(function () {
    const places = {
        chambal: {
            title: "Chambal",
            desc: "Marker at Kota, on the Chambal as it cuts the eastern plateau toward the Yamuna.",
            lat: 25.2138,
            lon: 75.8648,
            bbox: [75.5, 24.95, 76.2, 25.45]
        },
        banas: {
            title: "Banas",
            desc: "Marker at Bisalpur Dam, Tonk district, on the Banas before it joins the Chambal in Sawai Madhopur.",
            lat: 25.916,
            lon: 75.458,
            bbox: [75.15, 25.7, 75.8, 26.15]
        },
        luni: {
            title: "Luni",
            desc: "Marker at Balotra, Barmer district, on the saline lower Luni heading toward the Rann of Kutch.",
            lat: 25.832,
            lon: 72.243,
            bbox: [71.9, 25.55, 72.6, 26.1]
        },
        mahi: {
            title: "Mahi",
            desc: "Marker at Banswara, beside Mahi Bajaj Sagar, where the Mahi crosses southern Rajasthan.",
            lat: 23.541,
            lon: 74.442,
            bbox: [74.15, 23.35, 74.75, 23.75]
        },
        sabarmati: {
            title: "Sabarmati",
            desc: "Marker at Udaipur, near the Aravalli headwaters of the Sabarmati before it enters Gujarat.",
            lat: 24.585,
            lon: 73.712,
            bbox: [73.4, 24.4, 74.05, 24.8]
        }
    };

    function mapSrc(place) {
        const box = place.bbox.join(",");
        return "https://www.openstreetmap.org/export/embed.html?bbox=" +
            encodeURIComponent(box) +
            "&layer=mapnik&marker=" +
            encodeURIComponent(place.lat + "," + place.lon);
    }

    function initThemeToggle() {
        const button = document.getElementById("theme-toggle");
        const root = document.documentElement;

        function applyTheme(theme) {
            const isLight = theme === "light";
            root.classList.toggle("light-theme", isLight);
            document.body.classList.toggle("light-theme", isLight);
            button.textContent = isLight ? "🌙" : "☀️";
            button.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
        }

        applyTheme(localStorage.getItem("theme") === "light" ? "light" : "dark");

        button.addEventListener("click", function () {
            const next = document.body.classList.contains("light-theme") ? "dark" : "light";
            localStorage.setItem("theme", next);
            applyTheme(next);
        });
    }

    function initMap() {
        const frame = document.getElementById("river-map");
        const titleEl = document.getElementById("map-info-title");
        const descEl = document.getElementById("map-info-desc");
        const buttons = document.querySelectorAll(".map-btn");
        const cards = document.querySelectorAll(".river-card");

        function showPlace(key) {
            const place = places[key];
            if (!place) {
                return;
            }
            frame.src = mapSrc(place);
            titleEl.textContent = place.title;
            descEl.textContent = place.desc;
            buttons.forEach(function (btn) {
                const active = btn.getAttribute("data-place") === key;
                btn.classList.toggle("is-active", active);
                btn.setAttribute("aria-pressed", active ? "true" : "false");
            });
        }

        buttons.forEach(function (btn) {
            btn.setAttribute("aria-pressed", btn.classList.contains("is-active") ? "true" : "false");
            btn.addEventListener("click", function () {
                showPlace(btn.getAttribute("data-place"));
            });
        });

        cards.forEach(function (card) {
            card.addEventListener("click", function () {
                showPlace(card.getAttribute("data-place"));
                const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                document.getElementById("map").scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start"
                });
            });
            card.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    card.click();
                }
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initThemeToggle();
        initMap();
    });
})();
