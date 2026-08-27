/**
 * Barak River Explorer – Interactive Profile
 * Explore the geography, culture, ecology, and course of the Barak River.
 */
(function () {
    'use strict';

    /* ============================================
       DATA: Overview
       ============================================ */
    var OVERVIEW = [
        { icon: '🌊', title: 'Name Origin', desc: 'The name "Barak" is believed to derive from the Dimasa Kachari word "Barrak" meaning "the one that flows forcefully." Some scholars link it to the Bodo language term for "big river." The river is also known as "Dhansiri" in some tribal dialects.' },
        { icon: '🗺️', title: 'Complete Course', desc: 'The Barak originates in the Jabrica hills of Manipur (near Jiribam), flows through Assam\'s Cachar district, enters Bangladesh where it splits into the Surma and Kushiyara rivers, eventually joining the Meghna River system before emptying into the Bay of Bengal.' },
        { icon: '📏', title: 'Length & Basin', desc: 'Total length: approximately 900 km (560 km in India, 340 km in Bangladesh). Drainage basin: ~52,000 sq km (India: ~35,000 sq km). It is the second largest river system in Northeast India after the Brahmaputra.' },
        { icon: '🏔️', title: 'Source', desc: 'The Barak originates from a place called Jabrica in the Barail Range of Manipur, near the town of Jiribam at an elevation of about 600 m. Two small streams — Jiri and Jatinga — join to form the initial river.' },
        { icon: '🇮🇳', title: 'States Associated', desc: 'Manipur (source), Assam (Cachar, Hailakandi, Karimganj districts), Mizoram (tributaries drain into Barak), and Nagaland (some tributaries originate here). In Bangladesh: Sylhet and Habiganj divisions.' },
        { icon: '🏛️', title: 'Surma & Kushiyara', desc: 'After entering Bangladesh near Hubighat, the Barak splits into two major distributaries: the Surma River (western branch) and the Kushiyara River (eastern branch). These eventually rejoin and flow into the Meghna River.' },
        { icon: '🌾', title: 'Agricultural Importance', desc: 'The Barak floodplains support rice, jute, tea, citrus fruits, and rubber cultivation. The annual floods deposit nutrient-rich alluvial soil, making the Barak Valley one of the most productive agricultural regions in Assam.' },
        { icon: '🐟', title: 'Fisheries', desc: 'The Barak and its tributaries support a thriving inland fishery providing livelihoods to over 200,000 families. Major fish species includeChitala (clown knife fish), Rohu, Catla, and various catfish species endemic to Northeast India.' }
    ];

    /* ============================================
       DATA: River Course Stages
       ============================================ */
    var COURSE = [
        { name: 'Source — Jabrica Hills, Manipur', desc: 'The Barak originates from the Jabrica hills near Jiribam in Manipur at ~600m elevation. Two small streams — Jiri and Jatinga — merge to form the initial river. The area is densely forested with subtropical vegetation.' },
        { name: 'Upper Barak — Manipur Hills', desc: 'Flowing westward through the Barail Range, the river cuts through deep gorges and receives several small hill streams. It passes near Jiribam town before entering Assam.' },
        { name: 'Middle Barak — Cachar Plain, Assam', desc: 'After entering Assam, the Barak enters the Cachar Plain and widens significantly. It flows through Silchar, the largest city on its banks, and the river becomes a major waterway for transportation and fishing.' },
        { name: 'Lower Barak — Karimganj & Bangladesh Border', desc: 'The river flows through Karimganj district before entering Bangladesh near Sonamura. Here the Barak is at its widest in India, supporting extensive floodplain agriculture.' },
        { name: 'Bangladesh — Surma-Kushiyara System', desc: 'In Bangladesh, the Barak splits into the Surma (west) and Kushiyara (east) rivers near Barlekha. These flow through Sylhet Division, irrigating vast rice paddies and tea gardens before joining the Meghna.' },
        { name: 'Confluence — Meghna River', desc: 'The Surma and Kushiyara eventually merge with the Meghna River system near Kবিহারা (Bhairab). The combined waters flow south through central Bangladesh to empty into the Bay of Bengal.' }
    ];

    /* ============================================
       DATA: Tributaries
       ============================================ */
    var TRIBUTARIES = [
        { icon: '🌊', name: 'Jiri River', desc: 'One of the two源头 streams that form the Barak. Flows from the Manipur Hills and joins the Jatinga stream near Jiribam.', side: 'Left bank', length: '~60 km' },
        { icon: '🌊', name: 'Jatinga River', desc: 'The other源头 stream originating from the Barail Range. Joins the Jiri to officially form the Barak River.', side: 'Right bank', length: '~50 km' },
        { icon: '💧', name: 'Makei River (Mysore)', desc: 'A significant right-bank tributary flowing from the Lushai Hills of Mizoram. Drains a large portion of southern Mizoram.', side: 'Right bank', length: '~120 km' },
        { icon: '💧', name: 'Longai River', desc: 'Important left-bank tributary originating from the Barail Range in Nagaland. Flows through Cachar before joining the Barak.', side: 'Left bank', length: '~130 km' },
        { icon: '🌊', name: 'Katakhal River', desc: 'A smaller tributary flowing through the Cachar Plain. Important for local irrigation and drinking water supply.', side: 'Right bank', length: '~80 km' },
        { icon: '💧', name: 'Madu River', desc: 'Flows from the hills of Manipur and joins the Barak in the Cachar district. Known for its clear waters and fish diversity.', side: 'Left bank', length: '~90 km' }
    ];

    /* ============================================
       DATA: Cities & Culture
       ============================================ */
    var CULTURE = [
        { icon: '🏙️', name: 'Silchar', desc: 'Largest city on the Barak River and the commercial hub of Cachar district. Known as the "Gateway to the Northeast." Population ~200,000. Major tea trading center.', tag: 'Assam' },
        { icon: '🏙️', name: 'Karimganj', desc: 'Historic town near the Bangladesh border on the Barak. An important border trade point. Known for its composite Bengali-Assamese culture.', tag: 'Assam' },
        { icon: '🏙️', name: 'Hailakandi', desc: 'District headquarters in the Barak Valley. Known for citrus cultivation (Hailakandi orange) and tea gardens. Diverse Hindu-Muslim-Buddhist population.', tag: 'Assam' },
        { icon: '🏛️', name: 'Barak Valley Culture', desc: 'The Barak Valley is culturally distinct from Upper Assam. Bengali is the dominant language. The region has a rich tradition of Vaishnavite culture, Sattras (monasteries), and Bihu celebrations alongside Durga Puja.', tag: 'Culture' },
        { icon: '🎉', name: 'Festivals', desc: 'Major festivals include Durga Puja (grandest celebration), Bihu (Assamese New Year), Baishagu (Bodo festival), Christmas (large Christian population), and the Barak Valley Festival celebrating regional heritage.', tag: 'Festivals' },
        { icon: '🕌', name: 'Religious Diversity', desc: 'The Barak Valley is home to Hindu, Muslim, Buddhist, Christian, and tribal animist communities living harmoniously. Notable temples include Kachari Temple and Rajbari.', tag: 'Heritage' }
    ];

    /* ============================================
       DATA: Ecology
       ============================================ */
    var ECOLOGY = [
        { icon: '🌿', name: 'Biodiversity Hotspot', desc: 'The Barak basin lies within the Indo-Burma Biodiversity Hotspot, one of 36 globally recognized biodiversity hotspots. Home to endangered species including the Hoolock Gibbon, clouded leopard, and Asian elephant.' },
        { icon: '🌳', name: 'Barail Wildlife Sanctuary', desc: 'Located in the upper Barak catchment area across Assam and Nagaland. Home to Hoolock Gibbons, capped langurs, and over 300 bird species. Critical corridor for elephant migration.', tag: 'Protected Area' },
        { icon: '🍵', name: 'Tea Gardens', desc: 'The Barak Valley has over 100 tea estates producing CTC and Orthodox teas. The acidic soil and heavy monsoon rainfall create ideal conditions for tea cultivation, making it a major economic driver.' },
        { icon: '🌾', name: 'Agricultural Systems', desc: 'Jhum (shifting) cultivation in hill areas, paddy in floodplains, and plantation crops (tea, rubber, citrus) on terraces. The annual Barak flood cycle deposits nutrient-rich alluvium essential for farming.' },
        { icon: '🐟', name: 'Fish Diversity', desc: 'Over 150 fish species documented in the Barak system. Endangered species include the Golden Mahseer and Chocolate Mahseer. Traditional fishing communities use coracles (buf) and stake nets.' },
        { icon: '⚠️', name: 'Flood Challenges', desc: 'The Barak causes severe annual flooding affecting millions. The 2018 and 2022 floods devastated Cachar district. Improved embankments and early warning systems are being implemented.' }
    ];

    /* ============================================
       DATA: Map Markers
       ============================================ */
    var MAP_MARKERS = [
        { x: 220, y: 160, name: 'Jiribam (Source)', icon: '🏔️', tag: 'Origin', desc: 'The Barak originates near Jiribam in Manipur from the Jabrica hills at ~600m elevation.' },
        { x: 280, y: 195, name: 'Silchar', icon: '🏙️', tag: 'Major City', desc: 'Largest city on the Barak. Commercial hub of Cachar district with ~200,000 population.' },
        { x: 340, y: 240, name: 'Karimganj', icon: '🏛️', tag: 'Border Town', desc: 'Historic town near Bangladesh border. Important for cross-border trade and composite culture.' },
        { x: 400, y: 270, name: 'Hailakandi', icon: '🍊', tag: 'District HQ', desc: 'Known for citrus cultivation and tea gardens. Major agricultural center in Barak Valley.' },
        { x: 460, y: 300, name: 'Bangladesh Border', icon: '🗺️', tag: 'International', desc: 'The Barak enters Bangladesh near Hubighat, where it splits into the Surma and Kushiyara rivers.' }
    ];

    /* ============================================
       DATA: Sources
       ============================================ */
    var SOURCES = [
        { icon: '📚', name: 'Central Water Commission', desc: 'Government of India\'s premier agency for water resources data. Provides detailed hydrological records of the Barak River system.', tag: 'Official' },
        { icon: '📖', name: 'Assam State Disaster Management Authority', desc: 'Documents flood patterns, vulnerability assessments, and disaster preparedness for the Barak Valley region.', tag: 'Government' },
        { icon: '🗺️', name: 'Survey of India', desc: 'Topographic maps and geographical data of the Barak River basin including elevation profiles and drainage patterns.', tag: 'Mapping' },
        { icon: '🌿', name: 'Wildlife Institute of India', desc: 'Research on biodiversity of the Barak basin, including species inventories and conservation status of endangered fauna.', tag: 'Research' },
        { icon: '📰', name: 'The Assam Tribune', desc: 'Leading regional newspaper covering Barak Valley news, culture, and environmental issues. Rich archive of river-related reporting.', tag: 'Media' },
        { icon: '🎓', name: 'Assam University, Silchar', desc: 'Academic research on Barak Valley ecology, hydrology, and socio-economic impacts of the river on local communities.', tag: 'Academic' }
    ];

    /* ============================================
       INITIALIZATION
       ============================================ */
    document.addEventListener('DOMContentLoaded', function () {
        createParticles();
        renderOverview();
        renderCourse();
        renderTributaries();
        renderCulture();
        renderEcology();
        renderMapMarkers();
        renderSources();
        setupMapInfo();
        animateOnScroll();
    });

    /* ============================================
       PARTICLES
       ============================================ */
    function createParticles() {
        var c = document.getElementById('waterParticles');
        if (!c) return;
        for (var i = 0; i < 20; i++) {
            var p = document.createElement('div');
            p.className = 'bre-particle';
            var s = Math.random() * 6 + 2;
            p.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;animation-duration:' + (Math.random() * 10 + 8) + 's;animation-delay:' + (Math.random() * 8) + 's';
            c.appendChild(p);
        }
    }

    /* ============================================
       RENDER: Overview
       ============================================ */
    function renderOverview() {
        var g = document.getElementById('overviewGrid');
        if (!g) return;
        g.innerHTML = OVERVIEW.map(function (item) {
            return '<div class="bre-card bre-animate-in"><div class="bre-card-icon">' + item.icon + '</div>' +
                '<div class="bre-card-name">' + item.title + '</div>' +
                '<div class="bre-card-desc">' + item.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       RENDER: Course Timeline
       ============================================ */
    function renderCourse() {
        var el = document.getElementById('courseTimeline');
        if (!el) return;
        el.innerHTML = COURSE.map(function (stage, i) {
            return '<div class="bre-course-item bre-animate-in">' +
                '<div class="bre-course-dot"></div>' +
                '<div class="bre-course-card">' +
                '<div class="bre-course-number">Stage ' + (i + 1) + ' of ' + COURSE.length + '</div>' +
                '<div class="bre-course-name">' + stage.name + '</div>' +
                '<div class="bre-course-desc">' + stage.desc + '</div></div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       RENDER: Tributaries
       ============================================ */
    function renderTributaries() {
        var g = document.getElementById('tributaryGrid');
        if (!g) return;
        g.innerHTML = TRIBUTARIES.map(function (t) {
            return '<div class="bre-card bre-animate-in">' +
                '<span class="bre-card-tag">' + t.side + ' • ' + t.length + '</span>' +
                '<div class="bre-card-icon">' + t.icon + '</div>' +
                '<div class="bre-card-name">' + t.name + '</div>' +
                '<div class="bre-card-desc">' + t.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       RENDER: Culture
       ============================================ */
    function renderCulture() {
        var g = document.getElementById('cultureGrid');
        if (!g) return;
        g.innerHTML = CULTURE.map(function (c) {
            return '<div class="bre-card bre-animate-in">' +
                '<span class="bre-card-tag">' + c.tag + '</span>' +
                '<div class="bre-card-icon">' + c.icon + '</div>' +
                '<div class="bre-card-name">' + c.name + '</div>' +
                '<div class="bre-card-desc">' + c.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       RENDER: Ecology
       ============================================ */
    function renderEcology() {
        var g = document.getElementById('ecologyGrid');
        if (!g) return;
        g.innerHTML = ECOLOGY.map(function (e) {
            var tag = e.tag ? '<span class="bre-card-tag">' + e.tag + '</span>' : '';
            return '<div class="bre-card bre-animate-in">' + tag +
                '<div class="bre-card-icon">' + e.icon + '</div>' +
                '<div class="bre-card-name">' + e.name + '</div>' +
                '<div class="bre-card-desc">' + e.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       RENDER: Sources
       ============================================ */
    function renderSources() {
        var g = document.getElementById('sourcesGrid');
        if (!g) return;
        g.innerHTML = SOURCES.map(function (s) {
            return '<div class="bre-card bre-animate-in">' +
                '<span class="bre-card-tag">' + s.tag + '</span>' +
                '<div class="bre-card-icon">' + s.icon + '</div>' +
                '<div class="bre-card-name">' + s.name + '</div>' +
                '<div class="bre-card-desc">' + s.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       RENDER: Map Markers
       ============================================ */
    function renderMapMarkers() {
        var g = document.getElementById('breMapMarkers');
        if (!g) return;
        var ns = 'http://www.w3.org/2000/svg';
        MAP_MARKERS.forEach(function (m) {
            var el = document.createElementNS(ns, 'g');
            el.setAttribute('class', 'bre-map-marker');
            el.setAttribute('data-name', m.name);
            var colors = { 'Origin': '#10b981', 'Major City': '#f59e0b', 'Border Town': '#f59e0b', 'District HQ': '#f59e0b', 'International': '#8b5cf6' };
            var color = colors[m.tag] || '#3b82f6';
            var circle = document.createElementNS(ns, 'circle');
            circle.setAttribute('cx', m.x); circle.setAttribute('cy', m.y);
            circle.setAttribute('r', '7'); circle.setAttribute('fill', color);
            circle.setAttribute('stroke', '#fff'); circle.setAttribute('stroke-width', '2');
            el.appendChild(circle);
            var text = document.createElementNS(ns, 'text');
            text.setAttribute('x', m.x); text.setAttribute('y', m.y - 12);
            text.setAttribute('text-anchor', 'middle'); text.setAttribute('class', 'bre-map-marker-text');
            text.textContent = m.name.split('(')[0].trim();
            el.appendChild(text);
            g.appendChild(el);
        });
    }

    /* ============================================
       MAP INFO
       ============================================ */
    function setupMapInfo() {
        document.querySelectorAll('.bre-map-marker').forEach(function (m) {
            m.addEventListener('click', function () {
                var name = this.getAttribute('data-name');
                var marker = MAP_MARKERS.find(function (x) { return x.name === name; });
                if (!marker) return;
                document.getElementById('breInfoDefault').style.display = 'none';
                var ic = document.getElementById('breInfoContent');
                ic.style.display = 'block';
                document.getElementById('breInfoIcon').textContent = marker.icon;
                document.getElementById('breInfoTag').textContent = marker.tag;
                document.getElementById('breInfoName').textContent = marker.name;
                document.getElementById('breInfoDesc').textContent = marker.desc;
                document.getElementById('breInfoDetails').textContent = 'Located along the Barak River route in Northeast India.';
            });
        });
        document.getElementById('breInfoClose').addEventListener('click', function () {
            document.getElementById('breInfoDefault').style.display = 'block';
            document.getElementById('breInfoContent').style.display = 'none';
        });
    }

    /* ============================================
       SCROLL ANIMATIONS
       ============================================ */
    function animateOnScroll() {
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        function scan() { document.querySelectorAll('.bre-animate-in:not(.visible)').forEach(function (el) { obs.observe(el); }); }
        scan();
        new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
    }

    function showVisible() {
        document.querySelectorAll('.bre-animate-in').forEach(function (el) {
            if (el.getBoundingClientRect().top < window.innerHeight + 100) el.classList.add('visible');
        });
    }


    /* ============================================
       DATA: Historical Events
       ============================================ */
    var HISTORICAL = [
        { year: '1830s', title: 'British Annexation of Cachar', desc: 'The British East India Company annexed the Cachar kingdom. The Barak Valley became part of Bengal Province, and Silchar was established as a major trading post on the river.' },
        { year: '1850s', title: 'Tea Plantation Era', desc: 'British planters established tea estates along the Barak floodplains. The river provided transportation for tea to Calcutta port. Cachar tea became famous worldwide.' },
        { year: '1947', title: 'Partition Impact', desc: 'The Radcliffe Line divided the Barak Valley from East Pakistan (now Bangladesh). Millions of refugees settled in the valley, transforming its demographics and culture.' },
        { year: '1971', title: 'Bangladesh Liberation War', desc: 'The Barak River served as a critical crossing point for Mukti Bahini fighters and Indian forces during the Bangladesh Liberation War. Silchar was a major staging area.' },
        { year: '1980s', title: 'Assam Agitation', desc: 'The Barak Valley communities participated in the anti-foreigner agitation. Bengali-speaking residents of the valley had distinct political aspirations from Upper Assam.' },
        { year: '2018', title: 'Devastating Floods', desc: 'Catastrophic floods in the Barak Valley affected over 2 million people. The river breached embankments at multiple points, destroying crops and infrastructure across Cachar, Hailakandi, and Karimganj.' },
        { year: '2022', title: 'Record Flood Levels', desc: 'The Barak reached record water levels, inundating Silchar city. Over 500,000 people were displaced. The disaster highlighted the need for better flood management infrastructure.' }
    ];

    /* ============================================
       DATA: Bridges & Infrastructure
       ============================================ */
    var BRIDGES = [
        { name: 'Bridge over Barak at Silchar', type: 'Road Bridge', desc: 'The main bridge connecting Silchar to the rest of Assam. Critical for transportation of tea, goods, and people across the river.', year: '1960s' },
        { name: 'New Bridge at Sadarghat', type: 'Road Bridge', desc: 'A newer bridge providing alternative connectivity. Built to reduce traffic congestion on the main Silchar bridge.', year: '2010s' },
        { name: 'Railway Bridge', type: 'Rail Bridge', desc: 'Connects the Lumding-Sabroom railway line across the Barak. Part of India's strategic rail connectivity project for the Northeast.', year: '2016' },
        { name: 'Proposed Barak Bridge', type: 'Proposed', desc: 'A new six-lane bridge is planned to boost connectivity between southern Assam and the rest of India. Expected to transform trade in the region.', year: 'Upcoming' }
    ];

    /* ============================================
       UTILITY: Get course stages
       ============================================ */
    function getCourseStages() {
        return COURSE.map(function (s, i) {
            return (i + 1) + '. ' + s.name;
        });
    }

    /* ============================================
       UTILITY: Find tributaries by bank side
       ============================================ */
    function getTributariesBySide(side) {
        return TRIBUTARIES.filter(function (t) {
            return t.side.toLowerCase().indexOf(side.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Get all states involved
       ============================================ */
    function getStatesInvolved() {
        return ['Manipur', 'Assam', 'Mizoram', 'Nagaland', 'Bangladesh'];
    }

    /* ============================================
       UTILITY: Get total tributary count
       ============================================ */
    function getTributaryCount() {
        return TRIBUTARIES.length;
    }

    /* ============================================
       UTILITY: Get all unique locations on map
       ============================================ */
    function getMapLocations() {
        return MAP_MARKERS.map(function (m) { return m.name; });
    }

    /* ============================================
       UTILITY: Get ecology items by category
       ============================================ */
    function getEcologyByTag(tag) {
        return ECOLOGY.filter(function (e) {
            return e.tag && e.tag.toLowerCase().indexOf(tag.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Get source items by category
       ============================================ */
    function getSourcesByTag(tag) {
        return SOURCES.filter(function (s) {
            return s.tag && s.tag.toLowerCase().indexOf(tag.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Get culture items by tag
       ============================================ */
    function getCultureByTag(tag) {
        return CULTURE.filter(function (c) {
            return c.tag && c.tag.toLowerCase().indexOf(tag.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Format river description
       ============================================ */
    function describeBarak() {
        return 'The Barak River flows ' + COURSE.length + ' stages from ' +
            COURSE[0].name + ' to ' + COURSE[COURSE.length - 1].name +
            ', spanning ' + TRIBUTARIES.length + ' major tributaries across ' +
            getStatesInvolved().length + ' regions.';
    }

    /* ============================================
       UTILITY: Get ecological highlights
       ============================================ */
    function getEcologicalHighlights() {
        return ECOLOGY.filter(function (e) {
            return e.name.indexOf('Hotspot') !== -1 || e.name.indexOf('Wildlife') !== -1 || e.name.indexOf('Fish') !== -1;
        });
    }

    /* ============================================
       UTILITY: Get flood-related ecology items
       ============================================ */
    function getFloodInfo() {
        return ECOLOGY.filter(function (e) {
            return e.name.indexOf('Flood') !== -1;
        });
    }

    /* ============================================
       UTILITY: Count culture items
       ============================================ */
    function getCultureCount() {
        var tags = {};
        CULTURE.forEach(function (c) { tags[c.tag] = true; });
        return Object.keys(tags).length;
    }

    /* ============================================
       UTILITY: Get map marker by name
       ============================================ */
    function getMarkerByName(name) {
        return MAP_MARKERS.find(function (m) { return m.name === name; }) || null;
    }

    /* ============================================
       UTILITY: Get total ecology items
       ============================================ */
    function getEcologyCount() {
        return ECOLOGY.length;
    }

    /* ============================================
       UTILITY: Format tributary summary
       ============================================ */
    function tributarySummary() {
        var left = getTributariesBySide('left');
        var right = getTributariesBySide('right');
        return 'Left bank: ' + left.length + ' tributaries (' +
            left.map(function (t) { return t.name; }).join(', ') + '). ' +
            'Right bank: ' + right.length + ' tributaries (' +
            right.map(function (t) { return t.name; }).join(', ') + ').';
    }

    /* ============================================
       UTILITY: Get all city names
       ============================================ */
    function getCityNames() {
        return CULTURE.filter(function (c) {
            return c.tag !== 'Culture' && c.tag !== 'Festivals' && c.tag !== 'Heritage';
        }).map(function (c) { return c.name; });
    }

    /* ============================================
       UTILITY: Get festival info
       ============================================ */
    function getFestivalInfo() {
        var festivals = CULTURE.filter(function (c) { return c.tag === 'Festivals'; });
        return festivals.length > 0 ? festivals[0].desc : 'No festival data available.';
    }

    /* ============================================
       UTILITY: Get historical events count
       ============================================ */
    function getHistoricalCount() {
        return HISTORICAL.length;
    }

    /* ============================================
       UTILITY: Get historical events by decade
       ============================================ */
    function getHistoricalByDecade(decade) {
        return HISTORICAL.filter(function (h) {
            return h.year.indexOf(decade) !== -1;
        });
    }

    /* ============================================
       UTILITY: Get bridges count
       ============================================ */
    function getBridgesCount() {
        return BRIDGES.length;
    }

    /* ============================================
       UTILITY: Get active bridges (non-proposed)
       ============================================ */
    function getActiveBridges() {
        return BRIDGES.filter(function (b) {
            return b.type.indexOf('Proposed') === -1;
        });
    }

    /* ============================================
       UTILITY: Get bridge by name
       ============================================ */
    function getBridgeByName(name) {
        return BRIDGES.find(function (b) { return b.name === name; }) || null;
    }

    /* ============================================
       UTILITY: Get all overview categories
       ============================================ */
    function getOverviewCategories() {
        return OVERVIEW.map(function (o) { return o.title; });
    }

    /* ============================================
       UTILITY: Search across all data
       ============================================ */
    function searchAll(query) {
        var q = query.toLowerCase();
        var results = [];
        OVERVIEW.forEach(function (o) {
            if (o.title.toLowerCase().indexOf(q) !== -1 || o.desc.toLowerCase().indexOf(q) !== -1) {
                results.push({ type: 'overview', name: o.title, desc: o.desc });
            }
        });
        TRIBUTARIES.forEach(function (t) {
            if (t.name.toLowerCase().indexOf(q) !== -1 || t.desc.toLowerCase().indexOf(q) !== -1) {
                results.push({ type: 'tributary', name: t.name, desc: t.desc });
            }
        });
        CULTURE.forEach(function (c) {
            if (c.name.toLowerCase().indexOf(q) !== -1 || c.desc.toLowerCase().indexOf(q) !== -1) {
                results.push({ type: 'culture', name: c.name, desc: c.desc });
            }
        });
        ECOLOGY.forEach(function (e) {
            if (e.name.toLowerCase().indexOf(q) !== -1 || e.desc.toLowerCase().indexOf(q) !== -1) {
                results.push({ type: 'ecology', name: e.name, desc: e.desc });
            }
        });
        MAP_MARKERS.forEach(function (m) {
            if (m.name.toLowerCase().indexOf(q) !== -1 || m.desc.toLowerCase().indexOf(q) !== -1) {
                results.push({ type: 'location', name: m.name, desc: m.desc });
            }
        });
        HISTORICAL.forEach(function (h) {
            if (h.title.toLowerCase().indexOf(q) !== -1 || h.desc.toLowerCase().indexOf(q) !== -1) {
                results.push({ type: 'history', name: h.year + ' - ' + h.title, desc: h.desc });
            }
        });
        BRIDGES.forEach(function (b) {
            if (b.name.toLowerCase().indexOf(q) !== -1 || b.desc.toLowerCase().indexOf(q) !== -1) {
                results.push({ type: 'bridge', name: b.name, desc: b.desc });
            }
        });
        return results;
    }

    /* ============================================
       UTILITY: Get data summary
       ============================================ */
    function getDataSummary() {
        return {
            overview: OVERVIEW.length,
            courseStages: COURSE.length,
            tributaries: TRIBUTARIES.length,
            cities: getCityNames().length,
            culture: CULTURE.length,
            ecology: ECOLOGY.length,
            mapLocations: MAP_MARKERS.length,
            sources: SOURCES.length,
            historical: HISTORICAL.length,
            bridges: BRIDGES.length
        };
    }

})();
