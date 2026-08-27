(function () {
    const places = {
        brahmaputra: {
            title: "Brahmaputra",
            desc: "Marker at Guwahati, Assam, on the braided main stem. The Siang enters from Arunachal; Lohit and Dibang join near Sadiya.",
            lat: 26.18,
            lon: 91.75,
            bbox: [91.2, 25.9, 92.3, 26.5]
        },
        barak: {
            title: "Barak",
            desc: "Marker at Silchar in Assam’s Barak Valley. The river rises in the Manipur hills and belongs to the Meghna system, not the Brahmaputra.",
            lat: 24.8333,
            lon: 92.7789,
            bbox: [92.4, 24.5, 93.2, 25.1]
        },
        subansiri: {
            title: "Subansiri",
            desc: "North-bank Himalayan tributary. Marker near its meeting with the Brahmaputra west of Majuli, on the Arunachal–Assam course.",
            lat: 26.859,
            lon: 93.909,
            bbox: [93.4, 26.5, 94.4, 27.3]
        },
        lohit: {
            title: "Lohit",
            desc: "Marker at Tezu, Arunachal Pradesh. The Lohit leaves the Mishmi Hills and joins the Siang and Dibang at the head of the Assam Valley.",
            lat: 27.925,
            lon: 96.162,
            bbox: [95.7, 27.6, 96.6, 28.3]
        },
        dibang: {
            title: "Dibang",
            desc: "Marker at Roing, where the Dibang leaves the hills for the Assam plains before joining the Siang and Lohit.",
            lat: 28.147,
            lon: 95.843,
            bbox: [95.4, 27.9, 96.3, 28.5]
        },
        manas: {
            title: "Manas",
            desc: "Marker at Manas National Park, Assam, on the river as it enters from Bhutan and crosses the protected floodplain.",
            lat: 26.72,
            lon: 90.95,
            bbox: [90.5, 26.5, 91.3, 26.95]
        },
        dhansiri: {
            title: "Dhansiri",
            desc: "South-bank river from the Naga Hills. Marker at Golaghat, Assam; it meets the Brahmaputra at Dhansirimukh.",
            lat: 26.516,
            lon: 93.969,
            bbox: [93.4, 26.2, 94.3, 26.85]
        }
    };

    function mapSrc(place) {
        const box = place.bbox.join(",");
        return "https://www.openstreetmap.org/export/embed.html?bbox=" +
            encodeURIComponent(box) +
            "&layer=mapnik&marker=" +
            encodeURIComponent(place.lat + "," + place.lon);
    }

    function hasState(el, state) {
        if (state === "all") {
            return true;
        }
        const states = (el.getAttribute("data-states") || "").split(/\s+/);
        return states.indexOf(state) !== -1;
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

    function initExplorer() {
        const frame = document.getElementById("river-map");
        const titleEl = document.getElementById("map-info-title");
        const descEl = document.getElementById("map-info-desc");
        const statusEl = document.getElementById("filter-status");
        const filterButtons = document.querySelectorAll(".filter-btn");
        const mapButtons = document.querySelectorAll(".map-btn");
        const cards = document.querySelectorAll(".river-card");
        let currentPlace = "brahmaputra";
        let currentState = "all";

        function showPlace(key) {
            const place = places[key];
            if (!place) {
                return;
            }
            currentPlace = key;
            frame.src = mapSrc(place);
            titleEl.textContent = place.title;
            descEl.textContent = place.desc;
            mapButtons.forEach(function (btn) {
                const active = btn.getAttribute("data-place") === key;
                btn.classList.toggle("is-active", active);
                btn.setAttribute("aria-pressed", active ? "true" : "false");
            });
        }

        function applyFilter(state) {
            currentState = state;
            let visible = 0;
            let firstVisible = null;

            cards.forEach(function (card) {
                const match = hasState(card, state);
                card.classList.toggle("is-hidden", !match);
                if (match) {
                    visible += 1;
                    if (!firstVisible) {
                        firstVisible = card.getAttribute("data-place");
                    }
                }
            });

            mapButtons.forEach(function (btn) {
                btn.classList.toggle("is-hidden", !hasState(btn, state));
            });

            filterButtons.forEach(function (btn) {
                const active = btn.getAttribute("data-state") === state;
                btn.classList.toggle("is-active", active);
                btn.setAttribute("aria-pressed", active ? "true" : "false");
            });

            const label = state === "all" ? "all states" : btnLabel(state);
            statusEl.textContent = "Showing " + visible + (visible === 1 ? " river" : " rivers") + " for " + label + ".";

            const currentBtn = document.querySelector('.map-btn[data-place="' + currentPlace + '"]');
            if (!currentBtn || currentBtn.classList.contains("is-hidden")) {
                showPlace(firstVisible || "brahmaputra");
            }
        }

        function btnLabel(state) {
            const labels = {
                assam: "Assam",
                arunachal: "Arunachal Pradesh",
                manipur: "Manipur",
                nagaland: "Nagaland"
            };
            return labels[state] || state;
        }

        filterButtons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                applyFilter(btn.getAttribute("data-state"));
            });
        });

        mapButtons.forEach(function (btn) {
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
            card.setAttribute("tabindex", "0");
            card.setAttribute("role", "button");
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initThemeToggle();
        initExplorer();
    });
})();
