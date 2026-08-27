(function () {
    const places = {
        periyar: {
            title: "Periyar",
            desc: "Marker at Aluva, Ernakulam, on the lower Periyar before it reaches the Kochi–Vembanad estuary.",
            lat: 10.1076,
            lon: 76.3516,
            bbox: [76.1, 9.95, 76.6, 10.25]
        },
        bharathapuzha: {
            title: "Bharathapuzha (Nila)",
            desc: "Marker at the Ponnani estuary, where the Nila meets the Arabian Sea after crossing Palakkad and Malappuram.",
            lat: 10.767,
            lon: 75.925,
            bbox: [75.7, 10.6, 76.15, 10.95]
        },
        pamba: {
            title: "Pamba",
            desc: "Marker at Chengannur, on the Pamba as it enters the Kuttanad–Vembanad backwaters.",
            lat: 9.318,
            lon: 76.615,
            bbox: [76.35, 9.15, 76.9, 9.48]
        },
        chaliyar: {
            title: "Chaliyar",
            desc: "Marker at Beypore, Kozhikode, the estuary of the Chaliyar after Nilambur and Malappuram.",
            lat: 11.173,
            lon: 75.804,
            bbox: [75.65, 11.05, 76.05, 11.32]
        },
        chalakudy: {
            title: "Chalakudy",
            desc: "Marker at Athirappilly, Thrissur, on the Chalakudy before it joins the Periyar.",
            lat: 10.285,
            lon: 76.569,
            bbox: [76.35, 10.15, 76.8, 10.42]
        },
        achankovil: {
            title: "Achankovil",
            desc: "Marker at Veeyapuram, Alappuzha, where the Achankovil meets the Pamba on the way to Vembanad.",
            lat: 9.316,
            lon: 76.478,
            bbox: [76.3, 9.18, 76.7, 9.45]
        },
        kallada: {
            title: "Kallada",
            desc: "Marker on Ashtamudi Lake, Kollam, the Ramsar backwater fed by the Kallada.",
            lat: 8.95,
            lon: 76.58,
            bbox: [76.4, 8.8, 76.8, 9.12]
        },
        meenachil: {
            title: "Meenachil",
            desc: "Marker at Kumarakom, Kottayam, where the Meenachil enters Vembanad.",
            lat: 9.617,
            lon: 76.43,
            bbox: [76.25, 9.48, 76.65, 9.75]
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
