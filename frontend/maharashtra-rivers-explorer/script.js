(function () {
    const places = {
        godavari: {
            title: "Godavari",
            desc: "Marker at Nashik, near the Trimbakeshwar source of the Godavari.",
            lat: 19.9975,
            lon: 73.7898,
            bbox: [73.5, 19.8, 74.1, 20.15]
        },
        krishna: {
            title: "Krishna",
            desc: "Marker at Sangli, on the Krishna in western Maharashtra’s sugarcane belt.",
            lat: 16.8524,
            lon: 74.5815,
            bbox: [74.3, 16.7, 74.85, 17.05]
        },
        bhima: {
            title: "Bhima",
            desc: "Marker at Pune, where the Mula and Mutha join the Bhima system.",
            lat: 18.5204,
            lon: 73.8567,
            bbox: [73.6, 18.35, 74.15, 18.7]
        },
        tapi: {
            title: "Tapi",
            desc: "Marker at Jalgaon, in Khandesh on the Tapi–Girna cotton and banana country.",
            lat: 21.0077,
            lon: 75.5626,
            bbox: [75.3, 20.85, 75.85, 21.2]
        },
        wardha: {
            title: "Wardha",
            desc: "Marker at Wardha city, on the Vidarbha river that meets the Wainganga to form the Pranhita.",
            lat: 20.7453,
            lon: 78.6022,
            bbox: [78.35, 20.55, 78.9, 20.95]
        },
        wainganga: {
            title: "Wainganga",
            desc: "Marker at Bhandara, on the Wainganga in eastern Vidarbha’s paddy tract.",
            lat: 21.17,
            lon: 79.65,
            bbox: [79.4, 21.0, 79.95, 21.35]
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
