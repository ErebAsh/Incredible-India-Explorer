/**
 * Manas River Explorer – Interactive Profile
 * Explore the geography, wildlife, culture, and course of the Manas River.
 */
(function () {
    'use strict';

    var OVERVIEW = [
        { icon: '🏔️', title: 'Name Origin', desc: 'The name "Manas" is derived from the Mansarovar Lake in Tibet, the mythical source of many sacred rivers. Some scholars also link it to the Bodo word "Mwn" meaning "river" or "water body." The river is locally called "Manas River" in both Assamese and Bodo languages.' },
        { icon: '🗺️', title: 'Complete Course', desc: 'The Manas originates from the Mount Kailash region in Tibet, flows through central Bhutan as the "Drangme Chhu," enters Assam near Barpeta, and joins the Brahmaputra River near Jogighopa. It traverses diverse landscapes from alpine meadows to tropical grasslands.' },
        { icon: '📏', title: 'Length & Basin', desc: 'Total length: approximately 376 km (150 km in Bhutan, 226 km in India). Drainage basin: ~28,000 sq km. It is one of the largest tributaries of the Brahmaputra and drains nearly 40% of Bhutan\'s total area.' },
        { icon: '🇧🇹', title: 'Cross-Border Geography', desc: 'In Bhutan, the Manas (Drangme Chhu) flows through Lhuentse, Trashigang, and Samdrup Jongkhar districts. It enters India at the Manas Wildlife Sanctuary boundary near the India-Bhutan border in Assam.' },
        { icon: '🌿', title: 'Manas National Park', desc: 'UNESCO World Heritage Site (1985) and Tiger Reserve. Home to the endangered Golden Langur, Pygmy Hog, and Bengal Tiger. The park spans 950 sq km along the river\'s south bank in Baksa and Chirang districts of Assam.' },
        { icon: '🐅', title: 'Wildlife Significance', desc: 'One of the richest biodiversity areas in the Eastern Himalayas. Over 60 mammal species, 400+ bird species, and 50+ reptile species. The river corridor connects Bhutan\'s Royal Manas National Park to India\'s Manas — forming a trans-boundary conservation landscape.' },
        { icon: '🌾', title: 'Agriculture & Economy', desc: 'The Manas floodplains support rice cultivation, betel nut (paan) gardens, and tea plantations. The river\'s annual floods deposit fertile alluvial soil. Fisheries provide livelihoods to thousands of families along its banks.' },
        { icon: '👥', title: 'Communities', desc: 'The river sustains Bodo, Assamese, Adivasi (Tea Tribe), Koch-Rajbongshi, and Bhutanese communities. The Bodo people consider the Manas sacred and celebrate it in their annual Baishagu festival.' }
    ];

    var COURSE = [
        { name: 'Source — Mount Kailash Region, Tibet', desc: 'The Manas originates from glacial springs near the sacred Mount Kailash in western Tibet. Meltwater streams converge to form the initial river at approximately 4,500m elevation.' },
        { name: 'Upper Course — Eastern Bhutan', desc: 'Flowing east through Bhutan, the river (known locally as Drangme Chhu) cuts through deep Himalayan gorges. It receives major Bhutanese tributaries and descends from alpine to subtropical zones.' },
        { name: 'Middle Course — Bhutan Plains', desc: 'The river widens as it enters the foothills. In Bhutan\'s Samdrup Jongkhar district, it flows through subtropical forests and joins with the Aie and Mochu rivers.' },
        { name: 'Entry to India — Manas Wildlife Sanctuary', desc: 'The Manas enters India near the village of Kharupetia in Baksa district. The boundary with Bhutan runs along the river here. The UNESCO-listed Manas National Park begins on the south bank.' },
        { name: 'Lower Course — Assam Floodplains', desc: 'The river flows through the flat alluvial plains of western Assam, passing through Barpeta and Nalbari districts. It receives major Indian tributaries including the Beki and Aie rivers.' },
        { name: 'Confluence — Brahmaputra River', desc: 'The Manas joins the mighty Brahmaputra River near Jogighopa in Goalpara district. The confluence area features extensive wetlands and seasonally flooded grasslands.' }
    ];

    var TRIBUTARIES = [
        { icon: '🌊', name: 'Drangme Chhu', desc: 'The main upstream channel in Bhutan. Drains eastern Bhutan through Lhuentse and Trashigang districts before merging with other Bhutanese streams.', side: 'Main channel', length: '~200 km' },
        { icon: '💧', name: 'Aie River', desc: 'Major right-bank tributary originating from the Bhutan-India border hills. Joins the Manas in Barpeta district. Known for its clear mountain waters.', side: 'Right bank', length: '~120 km' },
        { icon: '💧', name: 'Beki River', desc: 'Important left-bank tributary flowing from the Bhutan foothills. Joins the Manas near Barpeta. Its catchment supports extensive betel nut cultivation.', side: 'Left bank', length: '~100 km' },
        { icon: '🌊', name: 'Mochu River', desc: 'Originates from Bhutan\'s Mongar district. Joins the Drangme Chhu in the upper course. Important for Bhutanese hydroelectric projects.', side: 'Right bank', length: '~80 km' },
        { icon: '💧', name: 'Pana River', desc: 'Flows from the Bhutan foothills and joins the Manas near the India border. Supports local fisheries and irrigates rice paddies.', side: 'Left bank', length: '~60 km' },
        { icon: '🌊', name: 'Kokrajhar River', desc: 'Small tributary draining the Kokrajhar foothills. Joins the Manas in the lower course. Important for local drinking water supply.', side: 'Right bank', length: '~45 km' }
    ];

    var WILDLIFE = [
        { icon: '🐅', name: 'Bengal Tiger', desc: 'Manas is a Project Tiger reserve with approximately 50+ tigers. The river corridor connects tiger populations between India and Bhutan. Conservation efforts have doubled tiger numbers since 2010.', tag: 'Endangered' },
        { icon: '🐒', name: 'Golden Langur', desc: 'The Manas region is the primary habitat of the endangered Golden Langur, found only in the western Assam-Bhutan border region. Approximately 7,500 remain in the wild.', tag: 'Endangered' },
        { icon: '🐷', name: 'Pygmy Hog', desc: 'The world\'s smallest wild pig, found exclusively in the Manas grasslands. Critically endangered with fewer than 150 individuals remaining. Manas is the last stronghold.', tag: 'Critically Endangered' },
        { icon: '🦏', name: 'Indian Rhinoceros', desc: 'Reintroduced to Manas in 2003 after being poached to local extinction. The population has grown to 40+ individuals, a major conservation success story.', tag: 'Reintroduced' },
        { icon: '🦅', name: 'Bengal Florican', desc: 'The grasslands of Manas support one of the largest populations of the critically endangered Bengal Florican. Over 50 individuals recorded during winter surveys.', tag: 'Critically Endangered' },
        { icon: '🌿', name: 'River Dolphin', desc: 'The Ganges River Dolphin (Gangetic Dolphin) is found in the lower reaches of the Manas near its confluence with the Brahmaputra. A Schedule I protected species.', tag: 'Endangered' }
    ];

    var CULTURE = [
        { icon: '🏛️', name: 'Bodo People', desc: 'The Bodo (Boro) are the largest plains tribal community in Assam. They consider the Manas sacred and hold the Baishagu festival on its banks. Their traditional economy revolves around fishing and jhum cultivation.', tag: 'Indigenous' },
        { icon: '🎉', name: 'Baishagu Festival', desc: 'The most important Bodo festival celebrated in mid-April. Features traditional Bodo dance (Bagurumba), buffalo sacrifice, and prayers to the river goddess for a good harvest.', tag: 'Festival' },
        { icon: '🏘️', name: 'Barpeta', desc: 'Historic town on the Manas floodplain. Known for the Barpeta Satra (Vaishnavite monastery) and as the gateway to Manas National Park. Major center of Assamese Vaishnavism.', tag: 'Town' },
        { icon: '🍵', name: 'Tea Communities', desc: 'The Adivasi (Tea Tribe) communities work in tea estates along the Manas. Migrated from Bihar, Jharkhand, and Chhattisgarh during British colonial period. Rich cultural traditions of Jhumar and Painkua dance.', tag: 'Community' },
        { icon: '🎣', name: 'Fishing Traditions', desc: 'Traditional Bodo and Assamese fishing communities use bamboo traps (chaloni), cast nets, and coracles (buf) in the Manas. The river supports over 200 fish species and provides protein for millions.', tag: 'Livelihood' },
        { icon: '🛕', name: 'Satras & Temples', desc: 'The Manas valley is dotted with Vaishnavite Satras (monasteries) dating to the Ahom period. Barpeta Satra, founded by Srimanta Sankardev, is the most revered. These centers preserve Assamese classical culture.', tag: 'Heritage' }
    ];

    var SOURCES = [
        { icon: '📚', name: 'Manas National Park Authority', desc: 'Official authority managing the park. Provides ecological data, visitor information, and conservation reports for the Manas Tiger Reserve.', tag: 'Official' },
        { icon: '🌍', name: 'UNESCO World Heritage Centre', desc: 'Manas was inscribed as a World Heritage Site in 1985 and listed as endangered 1992-2011. UNESCO provides management effectiveness assessments.', tag: 'International' },
        { icon: '🐅', name: 'National Tiger Conservation Authority', desc: 'NTCA conducts periodic tiger census in Manas. Data on tiger population, prey density, and habitat quality from All India Tiger Estimation.', tag: 'Government' },
        { icon: '📖', name: 'Wildlife Institute of India', desc: 'Research on biodiversity of the Manas basin including small mammal surveys, bird inventories, and human-wildlife conflict studies.', tag: 'Research' },
        { icon: '🗺️', name: 'Survey of India', desc: 'Topographic maps and elevation data of the Manas River basin covering Bhutan and Assam sections.', tag: 'Mapping' },
        { icon: '🎓', name: 'Gauhati University', desc: 'Academic research on Manas River ecology, fisheries biology, and socio-economic studies of riverside communities in Assam.', tag: 'Academic' }
    ];

    var MAP_MARKERS = [
        { x: 350, y: 40, name: 'Mount Kailash (Source)', icon: '🏔️', tag: 'Origin', desc: 'The Manas originates from glacial springs near Mount Kailash in Tibet at ~4,500m elevation.' },
        { x: 320, y: 100, name: 'Eastern Bhutan', icon: '🇧🇹', tag: 'Bhutan', desc: 'The river flows through eastern Bhutan as the Drangme Chhu, cutting through deep Himalayan gorges.' },
        { x: 290, y: 180, name: 'India-Bhutan Border', icon: '🏛️', tag: 'Border', desc: 'The Manas enters India near Kharupetia in Baksa district, Assam. The river forms part of the international boundary.' },
        { x: 260, y: 240, name: 'Manas National Park', icon: '🐅', tag: 'UNESCO Site', desc: 'UNESCO World Heritage Site spanning 950 sq km. Home to Golden Langur, Pygmy Hog, and 50+ Tigers.' },
        { x: 230, y: 300, name: 'Barpeta', icon: '🏘️', tag: 'Town', desc: 'Historic Vaishnavite center and gateway to Manas. Famous Barpeta Satra monastery founded by Sankardev.' },
        { x: 210, y: 340, name: 'Jogighopa (Confluence)', icon: '🌊', tag: 'Confluence', desc: 'The Manas joins the Brahmaputra River here in Goalpara district. Extensive wetlands and grasslands.' }
    ];

    /* ============================================
       INIT
       ============================================ */
    document.addEventListener('DOMContentLoaded', function () {
        createParticles();
        renderOverview();
        renderCourse();
        renderTributaries();
        renderWildlife();
        renderCulture();
        renderMapMarkers();
        renderSources();
        setupMapInfo();
        animateOnScroll();
    });

    function createParticles() {
        var c = document.getElementById('mreParticles');
        if (!c) return;
        for (var i = 0; i < 20; i++) {
            var p = document.createElement('div');
            p.className = 'mre-particle';
            var s = Math.random() * 6 + 2;
            p.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;animation-duration:' + (Math.random() * 10 + 8) + 's;animation-delay:' + (Math.random() * 8) + 's';
            c.appendChild(p);
        }
    }

    function renderOverview() {
        var g = document.getElementById('overviewGrid');
        if (!g) return;
        g.innerHTML = OVERVIEW.map(function (item) {
            return '<div class="mre-card mre-animate-in"><div class="mre-card-icon">' + item.icon + '</div><div class="mre-card-name">' + item.title + '</div><div class="mre-card-desc">' + item.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    function renderCourse() {
        var el = document.getElementById('courseTimeline');
        if (!el) return;
        el.innerHTML = COURSE.map(function (stage, i) {
            return '<div class="mre-course-item mre-animate-in"><div class="mre-course-dot"></div><div class="mre-course-card"><div class="mre-course-number">Stage ' + (i + 1) + ' of ' + COURSE.length + '</div><div class="mre-course-name">' + stage.name + '</div><div class="mre-course-desc">' + stage.desc + '</div></div></div>';
        }).join('');
        showVisible();
    }

    function renderTributaries() {
        var g = document.getElementById('tributaryGrid');
        if (!g) return;
        g.innerHTML = TRIBUTARIES.map(function (t) {
            return '<div class="mre-card mre-animate-in"><span class="mre-card-tag">' + t.side + ' • ' + t.length + '</span><div class="mre-card-icon">' + t.icon + '</div><div class="mre-card-name">' + t.name + '</div><div class="mre-card-desc">' + t.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    function renderWildlife() {
        var g = document.getElementById('wildlifeGrid');
        if (!g) return;
        g.innerHTML = WILDLIFE.map(function (w) {
            return '<div class="mre-card mre-animate-in"><span class="mre-card-tag">' + w.tag + '</span><div class="mre-card-icon">' + w.icon + '</div><div class="mre-card-name">' + w.name + '</div><div class="mre-card-desc">' + w.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    function renderCulture() {
        var g = document.getElementById('cultureGrid');
        if (!g) return;
        g.innerHTML = CULTURE.map(function (c) {
            return '<div class="mre-card mre-animate-in"><span class="mre-card-tag">' + c.tag + '</span><div class="mre-card-icon">' + c.icon + '</div><div class="mre-card-name">' + c.name + '</div><div class="mre-card-desc">' + c.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    function renderSources() {
        var g = document.getElementById('sourcesGrid');
        if (!g) return;
        g.innerHTML = SOURCES.map(function (s) {
            return '<div class="mre-card mre-animate-in"><span class="mre-card-tag">' + s.tag + '</span><div class="mre-card-icon">' + s.icon + '</div><div class="mre-card-name">' + s.name + '</div><div class="mre-card-desc">' + s.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    function renderMapMarkers() {
        var g = document.getElementById('mreMapMarkers');
        if (!g) return;
        var ns = 'http://www.w3.org/2000/svg';
        var colors = { 'Origin': '#10b981', 'Bhutan': '#3b82f6', 'Border': '#f59e0b', 'UNESCO Site': '#f59e0b', 'Town': '#f59e0b', 'Confluence': '#8b5cf6' };
        MAP_MARKERS.forEach(function (m) {
            var el = document.createElementNS(ns, 'g');
            el.setAttribute('class', 'mre-map-marker');
            el.setAttribute('data-name', m.name);
            var circle = document.createElementNS(ns, 'circle');
            circle.setAttribute('cx', m.x); circle.setAttribute('cy', m.y);
            circle.setAttribute('r', '7'); circle.setAttribute('fill', colors[m.tag] || '#3b82f6');
            circle.setAttribute('stroke', '#fff'); circle.setAttribute('stroke-width', '2');
            el.appendChild(circle);
            var text = document.createElementNS(ns, 'text');
            text.setAttribute('x', m.x); text.setAttribute('y', m.y - 12);
            text.setAttribute('text-anchor', 'middle'); text.setAttribute('class', 'mre-map-marker-text');
            text.textContent = m.name.split('(')[0].split(',')[0].trim();
            el.appendChild(text);
            g.appendChild(el);
        });
    }

    function setupMapInfo() {
        document.querySelectorAll('.mre-map-marker').forEach(function (m) {
            m.addEventListener('click', function () {
                var name = this.getAttribute('data-name');
                var marker = MAP_MARKERS.find(function (x) { return x.name === name; });
                if (!marker) return;
                document.getElementById('mreInfoDefault').style.display = 'none';
                document.getElementById('mreInfoContent').style.display = 'block';
                document.getElementById('mreInfoIcon').textContent = marker.icon;
                document.getElementById('mreInfoTag').textContent = marker.tag;
                document.getElementById('mreInfoName').textContent = marker.name;
                document.getElementById('mreInfoDesc').textContent = marker.desc;
                document.getElementById('mreInfoDetails').textContent = 'Located along the Manas River route in the Eastern Himalayas.';
            });
        });
        document.getElementById('mreInfoClose').addEventListener('click', function () {
            document.getElementById('mreInfoDefault').style.display = 'block';
            document.getElementById('mreInfoContent').style.display = 'none';
        });
    }

    function animateOnScroll() {
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        function scan() { document.querySelectorAll('.mre-animate-in:not(.visible)').forEach(function (el) { obs.observe(el); }); }
        scan();
        new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
    }

    function showVisible() {
        document.querySelectorAll('.mre-animate-in').forEach(function (el) {
            if (el.getBoundingClientRect().top < window.innerHeight + 100) el.classList.add('visible');
        });
    }

    /* ============================================
       UTILITY: Get course summary
       ============================================ */
    function getCourseSummary() {
        return COURSE.map(function (s, i) { return (i + 1) + '. ' + s.name; });
    }

    /* ============================================
       UTILITY: Get tributaries by bank side
       ============================================ */
    function getTributariesBySide(side) {
        return TRIBUTARIES.filter(function (t) {
            return t.side.toLowerCase().indexOf(side.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Get all countries involved
       ============================================ */
    function getCountries() { return ['Tibet (China)', 'Bhutan', 'India']; }

    /* ============================================
       UTILITY: Get states involved
       ============================================ */
    function getStates() { return ['Assam', 'Arunachal Pradesh (tributaries)']; }

    /* ============================================
       UTILITY: Get wildlife by conservation status
       ============================================ */
    function getWildlifeByStatus(status) {
        return WILDLIFE.filter(function (w) {
            return w.tag.toLowerCase().indexOf(status.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Get culture items by tag
       ============================================ */
    function getCultureByTag(tag) {
        return CULTURE.filter(function (c) {
            return c.tag.toLowerCase().indexOf(tag.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Describe the Manas
       ============================================ */
    function describeManas() {
        return 'The Manas River flows ' + COURSE.length + ' stages from ' +
            COURSE[0].name + ' to ' + COURSE[COURSE.length - 1].name +
            ', spanning ' + TRIBUTARIES.length + ' major tributaries across ' +
            getCountries().length + ' countries.';
    }

    /* ============================================
       UTILITY: Search across all data
       ============================================ */
    function searchAll(query) {
        var q = query.toLowerCase();
        var results = [];
        OVERVIEW.forEach(function (o) {
            if (o.title.toLowerCase().indexOf(q) !== -1 || o.desc.toLowerCase().indexOf(q) !== -1)
                results.push({ type: 'overview', name: o.title, desc: o.desc });
        });
        TRIBUTARIES.forEach(function (t) {
            if (t.name.toLowerCase().indexOf(q) !== -1 || t.desc.toLowerCase().indexOf(q) !== -1)
                results.push({ type: 'tributary', name: t.name, desc: t.desc });
        });
        WILDLIFE.forEach(function (w) {
            if (w.name.toLowerCase().indexOf(q) !== -1 || w.desc.toLowerCase().indexOf(q) !== -1)
                results.push({ type: 'wildlife', name: w.name, desc: w.desc });
        });
        CULTURE.forEach(function (c) {
            if (c.name.toLowerCase().indexOf(q) !== -1 || c.desc.toLowerCase().indexOf(q) !== -1)
                results.push({ type: 'culture', name: c.name, desc: c.desc });
        });
        MAP_MARKERS.forEach(function (m) {
            if (m.name.toLowerCase().indexOf(q) !== -1 || m.desc.toLowerCase().indexOf(q) !== -1)
                results.push({ type: 'location', name: m.name, desc: m.desc });
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
            wildlife: WILDLIFE.length,
            culture: CULTURE.length,
            sources: SOURCES.length,
            mapLocations: MAP_MARKERS.length
        };
    }

    /* ============================================
       UTILITY: Get endangered species count
       ============================================ */
    function getEndangeredCount() {
        return WILDLIFE.filter(function (w) {
            return w.tag.indexOf('Endangered') !== -1;
        }).length;
    }

    /* ============================================
       UTILITY: Get Bhutan vs India course split
       ============================================ */
    function getCourseSplit() {
        return { bhutan: '~150 km', india: '~226 km', total: '~376 km' };
    }

    /* ============================================
       UTILITY: Get all wildlife names
       ============================================ */
    function getWildlifeNames() {
        return WILDLIFE.map(function (w) { return w.name; });
    }

    /* ============================================
       UTILITY: Get all tributary names
       ============================================ */
    function getTributaryNames() {
        return TRIBUTARIES.map(function (t) { return t.name; });
    }

    /* ============================================
       UTILITY: Get all source names
       ============================================ */
    function getSourceNames() {
        return SOURCES.map(function (s) { return s.name; });
    }

    /* ============================================
       UTILITY: Get all map location names
       ============================================ */
    function getLocationNames() {
        return MAP_MARKERS.map(function (m) { return m.name; });
    }

    /* ============================================
       UTILITY: Get wildlife by icon
       ============================================ */
    function getWildlifeByIcon(icon) {
        return WILDLIFE.filter(function (w) { return w.icon === icon; });
    }

    /* ============================================
       UTILITY: Get overview by title
       ============================================ */
    function getOverviewByTitle(title) {
        return OVERVIEW.find(function (o) {
            return o.title.toLowerCase().indexOf(title.toLowerCase()) !== -1;
        }) || null;
    }

    /* ============================================
       UTILITY: Get course stage by number
       ============================================ */
    function getCourseStage(num) {
        return COURSE[num - 1] || null;
    }

    /* ============================================
       UTILITY: Get culture count by tag
       ============================================ */
    function getCultureCountByTag(tag) {
        return getCultureByTag(tag).length;
    }

    /* ============================================
       UTILITY: Get wildlife count total
       ============================================ */
    function getWildlifeCount() {
        return WILDLIFE.length;
    }

    /* ============================================
       UTILITY: Get critically endangered species
       ============================================ */
    function getCriticalSpecies() {
        return getWildlifeByStatus('critically');
    }

    /* ============================================
       UTILITY: Get reintroduced species
       ============================================ */
    function getReintroducedSpecies() {
        return getWildlifeByStatus('reintroduced');
    }

    /* ============================================
       UTILITY: Get marker by name
       ============================================ */
    function getMarkerByName(name) {
        return MAP_MARKERS.find(function (m) { return m.name === name; }) || null;
    }

    /* ============================================
       UTILITY: Get marker by tag
       ============================================ */
    function getMarkersByTag(tag) {
        return MAP_MARKERS.filter(function (m) {
            return m.tag.toLowerCase().indexOf(tag.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Get source by tag
       ============================================ */
    function getSourcesByTag(tag) {
        return SOURCES.filter(function (s) {
            return s.tag.toLowerCase().indexOf(tag.toLowerCase()) !== -1;
        });
    }

    /* ============================================
       UTILITY: Get tributary by name
       ============================================ */
    function getTributaryByName(name) {
        return TRIBUTARIES.find(function (t) {
            return t.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        }) || null;
    }

    /* ============================================
       UTILITY: Get overview count
       ============================================ */
    function getOverviewCount() {
        return OVERVIEW.length;
    }

    /* ============================================
       UTILITY: Get course count
       ============================================ */
    function getCourseCount() {
        return COURSE.length;
    }

    /* ============================================
       UTILITY: Get source count
       ============================================ */
    function getSourceCount() {
        return SOURCES.length;
    }

    /* ============================================
       UTILITY: Get marker count
       ============================================ */
    function getMarkerCount() {
        return MAP_MARKERS.length;
    }

    /* ============================================
       UTILITY: Get culture tags
       ============================================ */
    function getCultureTags() {
        var tags = {};
        CULTURE.forEach(function (c) { tags[c.tag] = true; });
        return Object.keys(tags);
    }

    /* ============================================
       UTILITY: Get wildlife tags
       ============================================ */
    function getWildlifeTags() {
        var tags = {};
        WILDLIFE.forEach(function (w) { tags[w.tag] = true; });
        return Object.keys(tags);
    }

    /* ============================================
       UTILITY: Get marker tags
       ============================================ */
    function getMarkerTags() {
        var tags = {};
        MAP_MARKERS.forEach(function (m) { tags[m.tag] = true; });
        return Object.keys(tags);
    }

    /* ============================================
       UTILITY: Get source tags
       ============================================ */
    function getSourceTags() {
        var tags = {};
        SOURCES.forEach(function (s) { tags[s.tag] = true; });
        return Object.keys(tags);
    }

    /* ============================================
       UTILITY: Format complete description
       ============================================ */
    function getFullDescription() {
        return 'The Manas River is a ' + COURSE.length + '-stage trans-boundary river flowing from ' +
            getCountries().join(', ') + '. It supports ' + WILDLIFE.length + ' wildlife species ' +
            'and ' + TRIBUTARIES.length + ' tributaries across ' + getStates().join(', ') + '.';
    }

})();
