/* ==========================================================================
   Serene Waters: Maritime Fishery & Fleet Tycoon — Full-Detail Game Engine
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. CUSTOM MARITIME SVG ICONS (No Emojis)
// --------------------------------------------------------------------------
const ICONS = {
    coin: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5a2.5 2.5 0 0 1 5 0c0 2.5-5 2.5-5 5a2.5 2.5 0 0 0 5 0"/></svg>`,
    bucket: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 8h14l-1.5 11a2 2 0 0 1-2 1.7h-7a2 2 0 0 1-2-1.7L5 8z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>`,
    town: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/></svg>`,
    harpoon: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20L20 4M14 4h6v6M9 15l-4 4"/></svg>`,
    charts: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,
    empire: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M4 20V8l6 4V8l6 4V4h4v16"/></svg>`,
    risk: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z"/><path d="M12 8v4M12 16h.01"/></svg>`,
    dex: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    rank: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
    menu: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>`,
    compass: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
};

function injectIcons() {
    const map = {
        iconTreasury: ICONS.coin,
        iconHold: ICONS.bucket,
        iconTownBtn: ICONS.town,
        iconHarpoonBtn: ICONS.harpoon,
        iconChartsBtn: ICONS.charts,
        iconEmpireBtn: ICONS.empire,
        iconRiskBtn: ICONS.risk,
        iconDexBtn: ICONS.dex,
        iconRankBtn: ICONS.rank,
        iconMenuBtn: ICONS.menu,
        iconCompass: ICONS.compass
    };
    Object.entries(map).forEach(([id, svg]) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = svg;
    });
}

// --------------------------------------------------------------------------
// 2. PROCEDURAL WEB AUDIO ENGINE (With Coast Guard Siren)
// --------------------------------------------------------------------------
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playTone(freq, type, duration, gainVal = 0.08, delay = 0) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime + delay;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(gainVal, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + duration);
    }

    playCast() {
        this.playTone(220, 'sine', 0.25, 0.07);
        this.playTone(340, 'triangle', 0.18, 0.05, 0.06);
    }

    playSplash() {
        this.playTone(140, 'sine', 0.3, 0.1);
        this.playTone(95, 'triangle', 0.35, 0.08, 0.05);
    }

    playBite() {
        this.playTone(580, 'square', 0.1, 0.06);
        this.playTone(860, 'square', 0.14, 0.07, 0.09);
    }

    playHit(isCrit) {
        if (isCrit) {
            this.playTone(660, 'triangle', 0.16, 0.09);
            this.playTone(990, 'sine', 0.22, 0.09, 0.05);
        } else {
            this.playTone(440, 'triangle', 0.14, 0.07);
        }
    }

    playCatch() {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
            this.playTone(f, 'triangle', 0.28, 0.08, idx * 0.07);
        });
    }

    playCoin() {
        this.playTone(987.77, 'sine', 0.12, 0.07);
        this.playTone(1318.51, 'sine', 0.24, 0.08, 0.07);
    }

    playSiren() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const duration = 2.6;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';

        // Classic Coast Guard dual-tone wail sweep
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.linearRampToValueAtTime(960, now + 0.55);
        osc.frequency.linearRampToValueAtTime(520, now + 1.1);
        osc.frequency.linearRampToValueAtTime(960, now + 1.65);
        osc.frequency.linearRampToValueAtTime(520, now + 2.2);
        osc.frequency.linearRampToValueAtTime(420, now + duration);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.14, now + 0.08);
        gain.gain.setValueAtTime(0.14, now + duration - 0.25);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + duration);
    }
}

const sound = new SoundEngine();

// --------------------------------------------------------------------------
// 3. DISTINCT CHARACTER CAMPAIGNS, GAME TYPES & STORIES
// --------------------------------------------------------------------------
const CHARACTER_CAMPAIGNS = {
    fisher: {
        id: 'fisher',
        name: 'The Master Angler',
        gameMode: 'Apex Expedition Mode',
        coatColor: '#38bdf8',
        hatColor: '#0284c7',
        perkSummary: '+25% Reeling Zone • +40% Rare & Leviathan Spawn Rate',
        plot: 'Your grandfather vanished charting the Abyssal Trench. Upgrade your harpoon and log specimens across all 6 seas to finish his expedition.',
        mechanics: {
            zoneBonus: 1.25,
            rareBonus: 1.4,
            marketMult: 1.0,
            passiveMult: 1.0,
            heatMult: 0.85
        },
        chapters: [
            {
                title: 'Chapter I: Grandfather’s Logbook',
                goalText: 'Discover 12 unique fish species.',
                progress: (s) => Math.min(1, s.discovered.length / 12),
                check: (s) => s.discovered.length >= 12
            },
            {
                title: 'Chapter II: Beyond the Reef',
                goalText: 'Unlock Sunburst Coral Atoll & catch a Rare+ fish.',
                progress: (s) => (s.unlockedLocations.includes('atoll') ? 0.5 : 0) + (s.rareCaught >= 1 ? 0.5 : 0),
                check: (s) => s.unlockedLocations.includes('atoll') && s.rareCaught >= 1
            },
            {
                title: 'Chapter III: Leviathan Hunter',
                goalText: 'Buy the Industrial Harpoon & land a Colossal Leviathan.',
                progress: (s) => (s.upgrades.harpoon >= 1 ? 0.5 : 0) + (s.leviathansCaught >= 1 ? 0.5 : 0),
                check: (s) => s.leviathansCaught >= 1
            }
        ]
    },
    fishmonger: {
        id: 'fishmonger',
        name: 'The Shrewd Fishmonger',
        gameMode: 'Market Tycoon & Contract Mode',
        coatColor: '#f59e0b',
        hatColor: '#b45309',
        perkSummary: '+35% Harbor Market Sale Prices • +50% Guild & Villager Payouts',
        plot: 'Harbor Pier 01 is buried under debt to the port syndicate. Corner the local market, fulfill guild contracts, and buy out the harbor.',
        mechanics: {
            zoneBonus: 1.05,
            rareBonus: 1.0,
            marketMult: 1.35,
            passiveMult: 1.05,
            heatMult: 0.75
        },
        chapters: [
            {
                title: 'Chapter I: Clearing the Tab',
                goalText: 'Earn $1,500 selling fish at the Harbor Market.',
                progress: (s) => Math.min(1, s.totalSalesEarned / 1500),
                check: (s) => s.totalSalesEarned >= 1500
            },
            {
                title: 'Chapter II: Guild Pillar',
                goalText: 'Complete 3 Guild Quests or Villager Tasks.',
                progress: (s) => Math.min(1, s.questsCompleted / 3),
                check: (s) => s.questsCompleted >= 3
            },
            {
                title: 'Chapter III: Harbor Baron',
                goalText: 'Reach $50,000 Total Net Worth.',
                progress: (s) => Math.min(1, getNetWorth() / 50000),
                check: (s) => getNetWorth() >= 50000
            }
        ]
    },
    industrialist: {
        id: 'industrialist',
        name: 'The Fleet Industrialist',
        gameMode: 'Automated Empire & Logistics Mode',
        coatColor: '#10b981',
        hatColor: '#047857',
        perkSummary: '+45% Empire HQ Passive Fleet Income • -15% Business Asset Cost',
        plot: 'Hand-lining is obsolete. Scale automated trawler fleets, smokehouses, and coastal canneries to dominate international seafood exports.',
        mechanics: {
            zoneBonus: 0.95,
            rareBonus: 1.0,
            marketMult: 1.1,
            passiveMult: 1.45,
            heatMult: 1.0
        },
        chapters: [
            {
                title: 'Chapter I: First Commissioning',
                goalText: 'Own at least 3 Empire HQ business units.',
                progress: (s) => Math.min(1, getTotalEmpireUnits() / 3),
                check: (s) => getTotalEmpireUnits() >= 3
            },
            {
                title: 'Chapter II: Mass Production',
                goalText: 'Generate $120/sec in passive fleet revenue.',
                progress: (s) => Math.min(1, getPassiveIncomePerSec() / 120),
                check: (s) => getPassiveIncomePerSec() >= 120
            },
            {
                title: 'Chapter III: Maritime Monopoly',
                goalText: 'Reach $250,000 Total Net Worth.',
                progress: (s) => Math.min(1, getNetWorth() / 250000),
                check: (s) => getNetWorth() >= 250000
            }
        ]
    },
    privateer: {
        id: 'privateer',
        name: 'The Rogue Privateer',
        gameMode: 'High-Heat Salvage & Restricted Waters Mode',
        coatColor: '#f43f5e',
        hatColor: '#9f1239',
        perkSummary: '+60% Restricted-Water Payouts • High Coast Guard Patrol Heat',
        plot: 'Exiled from standard trade routes, you run restricted sanctuaries and storm-lashed trenches—maximizing risk before the Coast Guard closes in.',
        mechanics: {
            zoneBonus: 1.1,
            rareBonus: 1.45,
            marketMult: 1.6,
            passiveMult: 1.25,
            heatMult: 1.45
        },
        chapters: [
            {
                title: 'Chapter I: Running the Blockade',
                goalText: 'Activate at least 1 High-Risk Operation & earn $2,000.',
                progress: (s) => {
                    const hasRisk = Object.values(s.activeRisks).some(Boolean) ? 0.4 : 0;
                    return Math.min(1, hasRisk + (s.totalSalesEarned / 2000) * 0.6);
                },
                check: (s) => Object.values(s.activeRisks).some(Boolean) && s.totalSalesEarned >= 2000
            },
            {
                title: 'Chapter II: Ghost of the Deep',
                goalText: 'Run 2 High-Risk Operations simultaneously.',
                progress: (s) => Math.min(1, Object.values(s.activeRisks).filter(Boolean).length / 2),
                check: (s) => Object.values(s.activeRisks).filter(Boolean).length >= 2
            },
            {
                title: 'Chapter III: Untouchable Legend',
                goalText: 'Reach $100,000 Net Worth.',
                progress: (s) => Math.min(1, getNetWorth() / 100000),
                check: (s) => getNetWorth() >= 100000
            }
        ]
    }
};

// --------------------------------------------------------------------------
// 4. ONE-TIME FEATURE BRIEFINGS
// --------------------------------------------------------------------------
const FEATURE_BRIEFINGS = {
    town: {
        title: 'Welcome to Harbor Town',
        desc: 'You have docked at the Harbor Boardwalk. Walk left and right to visit pier storefronts or speak directly with strolling townsfolk.',
        bullets: [
            'Pier 01 Fishmonger Market: Sell catches from your livewell for instant treasury funds.',
            'Harbormaster Guild Hall: Fulfill multi-fish port supply contracts.',
            'Drydock Outfitter: Upgrade your rod, livewell capacity, lure, radar, and harpoon.',
            'Strolling Villagers: Walk up to villagers with speech bubbles to accept custom town tasks.'
        ]
    },
    charts: {
        title: 'Expedition Navigation Charts',
        desc: 'Expand your fishery across 6 distinct oceanic and freshwater regions. Each region hosts 100 unique, strictly region-locked species.',
        bullets: [
            'Unlocking Regions: Increase your Total Net Worth to unlock deeper waters.',
            'Regional Value Multipliers: Distant trenches and polar shelves yield up to 32x base catch value.'
        ]
    },
    empire: {
        title: 'Maritime Business HQ',
        desc: 'Transition from solo angling to an automated maritime enterprise by investing in shore facilities and commercial vessels.',
        bullets: [
            'Continuous Passive Revenue: Assets generate treasury income every second, even while fishing.',
            'Compound Scaling: Acquire multiple units of each facility to multiply your fleet output.'
        ]
    },
    risk: {
        title: 'Coast Guard Patrol & Risk Operations',
        desc: 'High-reward maritime directives boost catch prices and fleet yields, but draw attention from Coast Guard patrol cutters.',
        bullets: [
            'Patrol Heat Meter: Risky operations raise Heat up to 100%.',
            'Coast Guard Apprehension: If Heat hits 100%, sirens trigger, livewell catches are confiscated, and a 35% treasury fine is levied.'
        ]
    },
    fishdex: {
        title: 'Regional Ichthyology FishDex',
        desc: 'Track all 600 cataloged aquatic species across the world’s 6 waters, from Common creek trout to Colossal Leviathans.',
        bullets: [
            '100 Species Per Region: Every water body features its own dedicated catalog.',
            'Leviathan Class: Requires the Industrial Harpoon to land.'
        ]
    },
    leaderboard: {
        title: 'Global Maritime Registry',
        desc: 'Compare your combined Net Worth (Treasury + Empire Assets + Livewell Hold) against rival fishing captains and conglomerates.',
        bullets: [
            'Real-Time Ranking: Climb from Rookie Angler to the #1 Maritime Tycoon.'
        ]
    }
};

// --------------------------------------------------------------------------
// 5. LOCATIONS, 600 SPECIES GENERATOR, UPGRADES, EMPIRE & RISK DATA
// --------------------------------------------------------------------------
const LOCATIONS = [
    { id: 'creek', name: 'Willow Creek Village', unlockNetWorth: 0, mult: 1.0, skyTop: '#1e3a5f', skyBot: '#60a5fa', waterTop: '#0ea5e9', waterBot: '#032539', hillCol: '#1e4620', desc: 'Calm freshwater tributary ideal for small vessels.' },
    { id: 'lake', name: 'Emerald Mist Lake', unlockNetWorth: 800, mult: 1.8, skyTop: '#134e4a', skyBot: '#34d399', waterTop: '#10b981', waterBot: '#022c22', hillCol: '#0f3d3e', desc: 'Deep glacial basin teeming with prized carp and pike.' },
    { id: 'atoll', name: 'Sunburst Coral Atoll', unlockNetWorth: 4500, mult: 3.4, skyTop: '#7c2d12', skyBot: '#fb923c', waterTop: '#06b6d4', waterBot: '#083344', hillCol: '#854d0e', desc: 'Warm tropical reef lagoons rich in exotic pelagic species.' },
    { id: 'fjord', name: 'Stormwatch Nordic Fjord', unlockNetWorth: 25000, mult: 7.0, skyTop: '#1e293b', skyBot: '#64748b', waterTop: '#0284c7', waterBot: '#091526', hillCol: '#334155', desc: 'Steep basalt cliffs and frigid currents.' },
    { id: 'trench', name: 'Mariana Obsidian Trench', unlockNetWorth: 120000, mult: 15.0, skyTop: '#090d16', skyBot: '#1e1b4b', waterTop: '#1d4ed8', waterBot: '#020617', hillCol: '#1e1b4b', desc: 'Abyssal drop-off home to bioluminescent leviathans.' },
    { id: 'polar', name: 'Aurora Polar Ice Shelf', unlockNetWorth: 600000, mult: 32.0, skyTop: '#064e3b', skyBot: '#2dd4bf', waterTop: '#38bdf8', waterBot: '#041221', hillCol: '#bae6fd', desc: 'Sub-zero pack ice hiding ancient apex titans.' }
];

const RARITIES = [
    { id: 'Common', color: '#94a3b8', weight: 52, valMult: 1.0, speed: 1.0, barSpeed: 1.0 },
    { id: 'Uncommon', color: '#34d399', weight: 26, valMult: 1.8, speed: 1.2, barSpeed: 1.2 },
    { id: 'Rare', color: '#38bdf8', weight: 13, valMult: 3.4, speed: 1.5, barSpeed: 1.4 },
    { id: 'Epic', color: '#c084fc', weight: 6, valMult: 7.2, speed: 1.9, barSpeed: 1.65 },
    { id: 'Mythic', color: '#fbbf24', weight: 2.2, valMult: 16.0, speed: 2.4, barSpeed: 1.9 },
    { id: 'Leviathan', color: '#fb7185', weight: 0.8, valMult: 42.0, speed: 1.4, barSpeed: 2.1, requiresHarpoon: true }
];

const ADJECTIVES = ['Silver', 'Golden', 'Spotted', 'Striped', 'Royal', 'Abyssal', 'Glacial', 'Crimson', 'Emerald', 'Dusk', 'Gilded', 'Ironclad', 'Phantom', 'Voltaic', 'Cobalt', 'Tidal', 'Sunken', 'Obsidian', 'Boreal', 'Coral'];
const NOUNS = ['Trout', 'Perch', 'Bass', 'Pike', 'Carp', 'Snapper', 'Mackerel', 'Grouper', 'Sturgeon', 'Marlin', 'Tuna', 'Halibut', 'Eel', 'Ray', 'Swordfish', 'Coelacanth', 'Oarfish', 'Barracuda', 'Amberjack', 'Leviathan'];

// Generate 600 strictly region-locked species (100 per region)
const FISH_SPECIES = [];
LOCATIONS.forEach((loc, locIdx) => {
    for (let i = 0; i < 100; i++) {
        let rarityIdx = 0;
        if (i >= 95) rarityIdx = 5;
        else if (i >= 86) rarityIdx = 4;
        else if (i >= 72) rarityIdx = 3;
        else if (i >= 52) rarityIdx = 2;
        else if (i >= 28) rarityIdx = 1;

        const rarity = RARITIES[rarityIdx];
        const adj = ADJECTIVES[(i + locIdx * 3) % ADJECTIVES.length];
        const noun = NOUNS[(Math.floor(i / 5) + locIdx * 7) % NOUNS.length];
        const variant = (i % 5) + 1;
        const baseVal = Math.round((14 + i * 1.4) * rarity.valMult * loc.mult);
        const baseWeight = Number(((0.6 + (i % 15) * 0.9) * (rarityIdx + 1) * (rarityIdx === 5 ? 18 : 1)).toFixed(1));

        FISH_SPECIES.push({
            id: `${loc.id}_sp_${i}`,
            regionId: loc.id,
            name: `${adj} ${noun} Mk.${variant}`,
            rarity: rarity.id,
            color: rarity.color,
            baseValue: baseVal,
            baseWeight,
            speed: rarity.speed,
            barSpeed: rarity.barSpeed,
            requiresHarpoon: !!rarity.requiresHarpoon,
            sizeScale: rarityIdx === 5 ? 2.35 : 0.78 + rarityIdx * 0.22
        });
    }
});

const UPGRADES = [
    { id: 'rod', name: 'Carbon-Weave Rod', desc: 'Widens the green & gold timing catch zones.', baseCost: 120, costMult: 2.1, max: 8 },
    { id: 'hold', name: 'Refrigerated Livewell', desc: 'Expands boat fish storage capacity by +4 slots per tier.', baseCost: 150, costMult: 2.0, max: 10 },
    { id: 'lure', name: 'Hydro-Acoustic Lure', desc: 'Attracts higher rarity fish faster.', baseCost: 180, costMult: 2.2, max: 8 },
    { id: 'radar', name: 'Bathymetric Fish Radar', desc: 'Displays rarity rings around underwater fish.', baseCost: 300, costMult: 2.5, max: 3 },
    { id: 'harpoon', name: 'Industrial Pneumatic Harpoon', desc: 'Required to land Colossal Leviathans.', baseCost: 2500, costMult: 3.0, max: 3 }
];

const EMPIRE_ASSETS = [
    { id: 'stall', name: 'Village Fishmonger Stall', desc: 'Local pier retail stand generating steady coin.', baseCost: 220, income: 6 },
    { id: 'deckhand', name: 'Hired Pier Deckhand', desc: 'Automates small-craft coastal netting.', baseCost: 850, income: 24 },
    { id: 'smokehouse', name: 'Artisan Cedar Smokehouse', desc: 'Cures catches for high-margin regional export.', baseCost: 3200, income: 95 },
    { id: 'trawler', name: 'Commercial Steel Trawler', desc: 'Offshore vessel harvesting deep-water schools.', baseCost: 14000, income: 420 },
    { id: 'cannery', name: 'Automated Coastal Cannery', desc: 'Industrial processing plant with massive output.', baseCost: 65000, income: 1950 },
    { id: 'factoryShip', name: 'Deep-Sea Sonar Factory Ship', desc: 'Floating oceanic headquarters.', baseCost: 320000, income: 9800 }
];

const RISK_OPERATIONS = [
    {
        id: 'sanctuary_entry',
        name: 'Restricted Sanctuary Trawling',
        desc: 'Enter protected marine reserves for +55% catch sale value, adding +18% Coast Guard patrol heat per catch.',
        valueMult: 1.55,
        passiveMult: 1.0,
        heatAdd: 18
    },
    {
        id: 'night_transponder',
        name: 'Dark-Transponder Night Runs',
        desc: 'Run without harbor beacons for +45% rare species odds, adding +14% patrol heat per catch.',
        valueMult: 1.25,
        passiveMult: 1.15,
        heatAdd: 14
    },
    {
        id: 'overlimit_nets',
        name: 'High-Capacity Drift Nets',
        desc: 'Boosts Empire HQ fleet output by +65%, generating +1% continuous Coast Guard heat per second.',
        valueMult: 1.0,
        passiveMult: 1.65,
        heatAdd: 8
    }
];

const RIVAL_LEADERS = [
    { name: 'Blackwater Maritime Corp', worth: 2500000 },
    { name: 'Captain Astrid Lindqvist', worth: 880000 },
    { name: 'Pacific Crest Fisheries', worth: 340000 },
    { name: 'Old Man Barnaby', worth: 95000 },
    { name: 'Coral Bay Co-op', worth: 22000 },
    { name: 'Rookie Angler Pete', worth: 1200 }
];

// --------------------------------------------------------------------------
// 6. GAME STATE & PERSISTENCE
// --------------------------------------------------------------------------
function getDefaultState() {
    return {
        captainName: 'Captain Vance',
        vesselName: 'SS Horizon',
        character: 'fisher',
        cash: 250,
        totalEarned: 250,
        totalSalesEarned: 0,
        currentLocation: 'creek',
        unlockedLocations: ['creek'],
        livewell: [],
        discovered: [],
        rareCaught: 0,
        leviathansCaught: 0,
        questsCompleted: 0,
        heat: 0,
        harpoonArmed: false,
        upgrades: { rod: 0, hold: 0, lure: 0, radar: 0, harpoon: 0 },
        empire: { stall: 0, deckhand: 0, smokehouse: 0, trawler: 0, cannery: 0, factoryShip: 0 },
        activeRisks: { sanctuary_entry: false, night_transponder: false, overlimit_nets: false },
        activeQuest: null,
        villagerTasks: {},
        seenBriefings: {}
    };
}

let state = loadState();

function loadState() {
    try {
        const raw = localStorage.getItem('serene_waters_v6');
        if (raw) {
            return { ...getDefaultState(), ...JSON.parse(raw) };
        }
    } catch (e) {
        console.warn('Save load fallback:', e);
    }
    return getDefaultState();
}

function saveState() {
    try {
        localStorage.setItem('serene_waters_v6', JSON.stringify(state));
    } catch (e) {
        console.warn('Save write error:', e);
    }
}

// --------------------------------------------------------------------------
// 7. ECONOMY, CAMPAIGN & PATROL CALCULATIONS
// --------------------------------------------------------------------------
function getCampaign() {
    return CHARACTER_CAMPAIGNS[state.character] || CHARACTER_CAMPAIGNS.fisher;
}

function getHoldCapacity() {
    return 8 + state.upgrades.hold * 4;
}

function getTotalEmpireUnits() {
    return Object.values(state.empire).reduce((sum, count) => sum + count, 0);
}

function getPassiveIncomePerSec() {
    const campaign = getCampaign();
    let base = 0;
    EMPIRE_ASSETS.forEach((asset) => {
        base += (state.empire[asset.id] || 0) * asset.income;
    });
    let riskMult = 1.0;
    RISK_OPERATIONS.forEach((op) => {
        if (state.activeRisks[op.id]) riskMult *= op.passiveMult;
    });
    return Math.round(base * campaign.mechanics.passiveMult * riskMult);
}

function getNetWorth() {
    let assetsVal = state.cash;
    EMPIRE_ASSETS.forEach((asset) => {
        const count = state.empire[asset.id] || 0;
        assetsVal += count * asset.baseCost * 0.85;
    });
    const holdVal = state.livewell.reduce((sum, f) => sum + f.value, 0);
    return Math.round(assetsVal + holdVal);
}

function getFishSellMultiplier() {
    const campaign = getCampaign();
    let mult = campaign.mechanics.marketMult;
    RISK_OPERATIONS.forEach((op) => {
        if (state.activeRisks[op.id]) mult *= op.valueMult;
    });
    return mult;
}

function ensureActiveQuest() {
    if (state.activeQuest) return;
    const loc = LOCATIONS.find((l) => l.id === state.currentLocation) || LOCATIONS[0];
    const targetCount = 3 + (state.questsCompleted % 4);
    const reward = Math.round((160 + state.questsCompleted * 110) * loc.mult * (state.character === 'fishmonger' ? 1.5 : 1.0));
    state.activeQuest = {
        title: `Harbormaster Supply Order #${state.questsCompleted + 1}`,
        desc: `Deliver any ${targetCount} fresh fish to the Harbor Market.`,
        targetCount,
        reward
    };
}

function triggerCoastGuardApprehension() {
    sound.playSiren();

    const sirenEl = document.getElementById('sirenOverlay');
    if (sirenEl) {
        sirenEl.classList.remove('hidden');
        setTimeout(() => sirenEl.classList.add('hidden'), 2800);
    }

    const fine = Math.max(100, Math.round(state.cash * 0.35));
    const seizedCount = state.livewell.length;
    state.cash = Math.max(0, state.cash - fine);
    state.livewell = [];
    state.heat = 0;

    Object.keys(state.activeRisks).forEach((k) => {
        state.activeRisks[k] = false;
    });

    saveState();
    updateHUD(true);
    showToast(
        `COAST GUARD APPREHENSION! Siren triggered: ${seizedCount} catch(es) confiscated and $${fine.toLocaleString()} fine issued.`,
        'danger'
    );
}

// --------------------------------------------------------------------------
// 8. CANVAS SIMULATION (FULL-DETAIL BOAT, WAVES, FISH & HARBOR TOWN)
// --------------------------------------------------------------------------
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const TIME_MODES = ['Morning', 'Sunset', 'Night'];
let timeModeIdx = 0;

const sim = {
    mode: 'sea', // 'sea' | 'town'
    fishPhase: 'idle', // 'idle' | 'charging' | 'casted' | 'reeling'
    castPower: 0,
    bobber: { x: 0, y: 0, targetX: 0 },
    hookedFish: null,
    reelCursor: 0.5,
    reelDir: 1,
    reelProgress: 0,
    underwaterFish: [],
    seaweed: [],
    particles: [],
    clouds: [],
    gulls: [],
    smokePuffs: [],
    townPlayerX: 185,
    townWalkDir: 0,
    townBuildings: [
        { id: 'boat', name: 'Moored Vessel (Return to Sea)', x: 100, w: 165, color: '#0284c7', roof: '#0369a1' },
        { id: 'market', name: 'Pier 01 Fishmonger Market', x: 345, w: 195, color: '#d97706', roof: '#b45309' },
        { id: 'guild', name: 'Harbormaster Guild Hall', x: 620, w: 195, color: '#059669', roof: '#047857' },
        { id: 'outfitter', name: 'Drydock Outfitter & Gear', x: 895, w: 195, color: '#7c3aed', roof: '#6d28d9' }
    ],
    villagers: [
        {
            id: 'barnaby',
            name: 'Old Man Barnaby',
            role: 'Retired Whaler',
            x: 310,
            minX: 270,
            maxX: 540,
            dir: 1,
            speed: 24,
            coat: '#64748b',
            hat: '#334155',
            greeting: 'Ahoy, Captain! My old joints ache before a squall—I have a task for you if your hold has room.'
        },
        {
            id: 'clara',
            name: 'Chef Clara',
            role: 'Harbor Bistro Owner',
            x: 590,
            minX: 530,
            maxX: 830,
            dir: -1,
            speed: 28,
            coat: '#f43f5e',
            hat: '#ffffff',
            greeting: 'Fresh sea air! Dinner guests are lining up at the bistro—I have a task for you!'
        },
        {
            id: 'orin',
            name: 'Naturalist Orin',
            role: 'Marine Biologist',
            x: 865,
            minX: 790,
            maxX: 1090,
            dir: 1,
            speed: 20,
            coat: '#14b8a6',
            hat: '#0f766e',
            greeting: 'Fascinating tide patterns today! I am cataloging local specimens—I have a task for you.'
        }
    ]
};

for (let i = 0; i < 6; i++) {
    sim.clouds.push({ x: Math.random() * 1400, y: 55 + Math.random() * 105, speed: 10 + Math.random() * 14, scale: 0.75 + Math.random() * 0.65 });
}
for (let i = 0; i < 5; i++) {
    sim.gulls.push({ x: Math.random() * 1200, y: 80 + Math.random() * 90, speed: 35 + Math.random() * 25, flap: Math.random() * 6 });
}
for (let i = 0; i < 22; i++) {
    sim.seaweed.push({ x: 40 + i * 75, h: 35 + Math.random() * 55, phase: Math.random() * Math.PI * 2 });
}

function spawnSchoolForLocation() {
    sim.underwaterFish = [];
    const pool = FISH_SPECIES.filter((f) => f.regionId === state.currentLocation);
    const campaign = getCampaign();
    const waterTopY = height * 0.39;

    for (let i = 0; i < 16; i++) {
        let candidate = pool[Math.floor(Math.random() * pool.length)];
        const boost = campaign.mechanics.rareBonus + state.upgrades.lure * 0.15;
        if (candidate.rarity === 'Common' && Math.random() < (boost - 1) * 0.5) {
            candidate = pool[Math.min(pool.length - 1, Math.floor(Math.random() * pool.length * 0.5 + pool.length * 0.5))];
        }

        sim.underwaterFish.push({
            species: candidate,
            x: 160 + Math.random() * (width - 230),
            y: waterTopY + 60 + Math.random() * (height - waterTopY - 120),
            dir: Math.random() < 0.5 ? 1 : -1,
            wiggle: Math.random() * Math.PI * 2
        });
    }
}

function resetFishingState() {
    sim.fishPhase = 'idle';
    sim.castPower = 0;
    sim.hookedFish = null;
    sim.reelProgress = 0;
    updateActionPrompt();
}

function getNearestTownTarget() {
    let bestVillager = null;
    let bestVDist = 75;
    sim.villagers.forEach((v) => {
        const d = Math.abs(sim.townPlayerX - v.x);
        if (d < bestVDist) {
            bestVDist = d;
            bestVillager = v;
        }
    });
    if (bestVillager) return { type: 'villager', data: bestVillager };

    let bestBuilding = null;
    let bestBDist = 105;
    sim.townBuildings.forEach((b) => {
        const center = b.x + b.w / 2;
        const d = Math.abs(sim.townPlayerX - center);
        if (d < bestBDist) {
            bestBDist = d;
            bestBuilding = b;
        }
    });
    if (bestBuilding) return { type: 'building', data: bestBuilding };
    return null;
}

function updateActionPrompt() {
    const promptEl = document.getElementById('actionPrompt');
    const townControls = document.getElementById('townWalkControls');
    const interactBtn = document.getElementById('btnTownInteract');

    if (sim.mode === 'town') {
        townControls.classList.remove('hidden');
        const target = getNearestTownTarget();
        if (target && target.type === 'villager') {
            interactBtn.textContent = `Talk to ${target.data.name.split(' ')[0]}`;
            promptEl.textContent = `${target.data.name}: "I have a task for you!" — Press E or click Talk`;
        } else if (target && target.type === 'building') {
            interactBtn.textContent = target.data.id === 'boat' ? 'Board Vessel' : 'Enter Building';
            promptEl.textContent = `Outside ${target.data.name} — Press E or click Enter`;
        } else {
            interactBtn.textContent = 'Interact';
            promptEl.textContent = 'Walk along the Harbor Boardwalk using Left/Right buttons or Arrow Keys';
        }
        return;
    }

    townControls.classList.add('hidden');
    if (sim.fishPhase === 'idle') {
        promptEl.textContent = 'Hold Click or Spacebar to Charge & Cast Line';
    } else if (sim.fishPhase === 'charging') {
        promptEl.textContent = 'Release to Cast Bobber!';
    } else if (sim.fishPhase === 'casted') {
        promptEl.textContent = 'Waiting for a visible fish to bite... (Click to Reel In early)';
    } else if (sim.fishPhase === 'reeling') {
        promptEl.textContent = 'TIMING BAR: Tap Click or Spacebar inside the Green/Gold Zone!';
    }
}

// --------------------------------------------------------------------------
// 9. FISHING MECHANICS (CASTING, BITING & TIMING BAR)
// --------------------------------------------------------------------------
function handlePrimaryActionDown() {
    if (sim.mode !== 'sea') return;
    if (sim.fishPhase === 'idle') {
        if (state.livewell.length >= getHoldCapacity()) {
            showToast('Livewell Hold is full! Go to Town to sell your catch.', 'warn');
            return;
        }
        sim.fishPhase = 'charging';
        sim.castPower = 0.1;
        updateActionPrompt();
    } else if (sim.fishPhase === 'casted') {
        resetFishingState();
    } else if (sim.fishPhase === 'reeling') {
        evaluateTimingStrike();
    }
}

function handlePrimaryActionUp() {
    if (sim.mode !== 'sea') return;
    if (sim.fishPhase === 'charging') {
        const waterY = height * 0.39;
        const castDist = 195 + sim.castPower * (width * 0.58);
        sim.bobber.x = 185;
        sim.bobber.y = waterY - 48;
        sim.bobber.targetX = Math.min(width - 80, 185 + castDist);
        sim.fishPhase = 'casted';
        sound.playCast();
        updateActionPrompt();
    }
}

function evaluateTimingStrike() {
    if (!sim.hookedFish) return;
    const campaign = getCampaign();
    const zoneWidth = Math.min(0.42, (0.18 + state.upgrades.rod * 0.025) * campaign.mechanics.zoneBonus);
    const goldWidth = zoneWidth * 0.32;
    const distFromCenter = Math.abs(sim.reelCursor - 0.5);

    if (distFromCenter <= goldWidth / 2) {
        sim.reelProgress += 0.48;
        sound.playHit(true);
        spawnParticles(sim.bobber.x, sim.bobber.y, '#fbbf24', 14);
    } else if (distFromCenter <= zoneWidth / 2) {
        sim.reelProgress += 0.32;
        sound.playHit(false);
        spawnParticles(sim.bobber.x, sim.bobber.y, '#34d399', 9);
    } else {
        sim.reelProgress = Math.max(0, sim.reelProgress - 0.22);
        sound.playTone(150, 'sawtooth', 0.15, 0.06);
    }

    if (sim.reelProgress >= 1.0) {
        completeCatch(sim.hookedFish);
    }
}

function completeCatch(fishObj) {
    const sp = fishObj.species;

    if (sp.requiresHarpoon && (!state.harpoonArmed || state.upgrades.harpoon < 1)) {
        showToast(`${sp.name} snapped the line! Equip the Industrial Harpoon to land Leviathans.`, 'danger');
        resetFishingState();
        return;
    }

    sound.playCatch();
    const weight = Number((sp.baseWeight * (0.85 + Math.random() * 0.35)).toFixed(1));
    const estValue = Math.round(sp.baseValue * getFishSellMultiplier());

    state.livewell.push({
        uid: Date.now() + Math.random(),
        speciesId: sp.id,
        name: sp.name,
        rarity: sp.rarity,
        color: sp.color,
        weight,
        value: estValue
    });

    if (!state.discovered.includes(sp.id)) {
        state.discovered.push(sp.id);
    }
    if (['Rare', 'Epic', 'Mythic', 'Leviathan'].includes(sp.rarity)) {
        state.rareCaught += 1;
    }
    if (sp.rarity === 'Leviathan') {
        state.leviathansCaught += 1;
    }

    let heatAdded = 0;
    RISK_OPERATIONS.forEach((op) => {
        if (state.activeRisks[op.id]) heatAdded += op.heatAdd;
    });
    if (heatAdded > 0) {
        state.heat = Math.min(100, state.heat + Math.round(heatAdded * getCampaign().mechanics.heatMult));
        if (state.heat >= 100 || (state.heat >= 60 && Math.random() < 0.28)) {
            resetFishingState();
            triggerCoastGuardApprehension();
            return;
        }
    }

    sim.underwaterFish = sim.underwaterFish.filter((f) => f !== fishObj);
    if (sim.underwaterFish.length < 14) {
        spawnSchoolForLocation();
    }

    document.getElementById('catchRarityBadge').textContent = `${sp.rarity.toUpperCase()} SPECIMEN`;
    document.getElementById('catchRarityBadge').style.color = sp.color;
    document.getElementById('catchFishName').textContent = sp.name;
    document.getElementById('catchFishWeight').textContent = `${weight} kg`;
    document.getElementById('catchFishValue').textContent = `$${estValue.toLocaleString()}`;
    document.getElementById('catchModal').classList.remove('hidden');

    resetFishingState();
    saveState();
    updateHUD(true);
}

function spawnParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = 40 + Math.random() * 110;
        sim.particles.push({
            x,
            y,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd - 40,
            life: 0.65,
            color
        });
    }
}

// --------------------------------------------------------------------------
// 10. FULL-DETAIL CANVAS RENDERING (BOAT, WAVES, FISH & HARBOR TOWN)
// --------------------------------------------------------------------------
function drawDetailedFish(f, nowSec) {
    const sp = f.species;
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.scale(f.dir * sp.sizeScale, sp.sizeScale);

    // Radar rarity ring
    if (state.upgrades.radar > 0) {
        ctx.strokeStyle = sp.color;
        ctx.lineWidth = 1.4 / sp.sizeScale;
        ctx.beginPath();
        ctx.arc(0, 0, 21, 0, Math.PI * 2);
        ctx.stroke();
    }

    const tailSwing = Math.sin(f.wiggle) * 4.5;

    // Tail fin
    ctx.fillStyle = sp.color;
    ctx.beginPath();
    ctx.moveTo(-14, 0);
    ctx.lineTo(-24, -7 + tailSwing);
    ctx.lineTo(-21, 0);
    ctx.lineTo(-24, 7 + tailSwing);
    ctx.closePath();
    ctx.fill();

    // Dorsal & ventral fins
    ctx.beginPath();
    ctx.moveTo(-4, -7);
    ctx.lineTo(2, -13);
    ctx.lineTo(6, -7);
    ctx.closePath();
    ctx.fill();

    // Streamlined body with belly highlight
    const bodyGrad = ctx.createLinearGradient(0, -8, 0, 8);
    bodyGrad.addColorStop(0, sp.color);
    bodyGrad.addColorStop(1, '#f8fafc');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 7.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Gill line & eye
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.45)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(6, 0, 4.5, -Math.PI * 0.4, Math.PI * 0.4);
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(10, -2, 1.8, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

function drawPlayerCharacter(x, y, scale = 1) {
    const campaign = getCampaign();
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    // Boots
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-7, 32, 6, 8);
    ctx.fillRect(1, 32, 6, 8);

    // Oilskin coat / maritime attire
    ctx.fillStyle = campaign.coatColor;
    ctx.beginPath();
    ctx.roundRect(-10, 12, 20, 22, 4);
    ctx.fill();

    // Brass buttons
    ctx.fillStyle = '#fde047';
    ctx.beginPath();
    ctx.arc(0, 18, 1.3, 0, Math.PI * 2);
    ctx.arc(0, 24, 1.3, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(0, 5, 7.5, 0, Math.PI * 2);
    ctx.fill();

    // Captain / Sou'wester Hat
    ctx.fillStyle = campaign.hatColor;
    ctx.beginPath();
    ctx.ellipse(0, 0, 12, 3.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(-7, -6, 14, 6);

    ctx.restore();
}

function renderSkyAndBackdrop(dt, nowSec) {
    const loc = LOCATIONS.find((l) => l.id === state.currentLocation) || LOCATIONS[0];
    const timeMode = TIME_MODES[timeModeIdx];

    const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.42);
    if (timeMode === 'Night') {
        skyGrad.addColorStop(0, '#030712');
        skyGrad.addColorStop(1, '#0f172a');
    } else if (timeMode === 'Sunset') {
        skyGrad.addColorStop(0, '#31102f');
        skyGrad.addColorStop(0.55, '#c2410c');
        skyGrad.addColorStop(1, '#fb923c');
    } else {
        skyGrad.addColorStop(0, loc.skyTop);
        skyGrad.addColorStop(1, loc.skyBot);
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height * 0.45);

    // Sun or Moon glow
    const orbX = width * 0.78;
    const orbY = height * 0.14;
    ctx.fillStyle = timeMode === 'Night' ? 'rgba(241, 245, 249, 0.85)' : 'rgba(254, 240, 138, 0.85)';
    ctx.beginPath();
    ctx.arc(orbX, orbY, timeMode === 'Night' ? 18 : 28, 0, Math.PI * 2);
    ctx.fill();

    // Multi-layered Parallax Horizon Hills
    ctx.fillStyle = timeMode === 'Night' ? 'rgba(15, 23, 42, 0.82)' : loc.hillCol;
    ctx.globalAlpha = 0.42;
    ctx.beginPath();
    ctx.moveTo(0, height * 0.39);
    ctx.lineTo(width * 0.15, height * 0.26);
    ctx.lineTo(width * 0.35, height * 0.35);
    ctx.lineTo(width * 0.58, height * 0.22);
    ctx.lineTo(width * 0.82, height * 0.33);
    ctx.lineTo(width, height * 0.25);
    ctx.lineTo(width, height * 0.39);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    // Drifting clouds
    ctx.fillStyle = timeMode === 'Night' ? 'rgba(148,163,184,0.08)' : 'rgba(255,255,255,0.18)';
    sim.clouds.forEach((c) => {
        c.x += c.speed * dt;
        if (c.x > width + 140) c.x = -140;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 26 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 24 * c.scale, c.y - 6 * c.scale, 32 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 52 * c.scale, c.y, 24 * c.scale, 0, Math.PI * 2);
        ctx.fill();
    });

    // Soaring gulls
    ctx.strokeStyle = timeMode === 'Night' ? 'rgba(226,232,240,0.35)' : 'rgba(15,23,42,0.55)';
    ctx.lineWidth = 2;
    sim.gulls.forEach((g) => {
        g.x += g.speed * dt;
        g.flap += dt * 7;
        if (g.x > width + 60) g.x = -60;
        const wingY = Math.sin(g.flap) * 5;
        ctx.beginPath();
        ctx.moveTo(g.x - 9, g.y + wingY);
        ctx.quadraticCurveTo(g.x - 4, g.y - 4, g.x, g.y);
        ctx.quadraticCurveTo(g.x + 4, g.y - 4, g.x + 9, g.y + wingY);
        ctx.stroke();
    });
}

function renderSeaScene(dt, nowSec) {
    const loc = LOCATIONS.find((l) => l.id === state.currentLocation) || LOCATIONS[0];
    const waterY = height * 0.39;

    // Deep Water Gradient
    const wGrad = ctx.createLinearGradient(0, waterY, 0, height);
    wGrad.addColorStop(0, loc.waterTop);
    wGrad.addColorStop(1, loc.waterBot);
    ctx.fillStyle = wGrad;
    ctx.fillRect(0, waterY, width, height - waterY);

    // Underwater Sunbeams
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.045)';
    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        const bx = width * (0.2 + i * 0.22) + Math.sin(nowSec * 0.5 + i) * 25;
        ctx.moveTo(bx, waterY);
        ctx.lineTo(bx + 70, waterY);
        ctx.lineTo(bx + 210, height);
        ctx.lineTo(bx + 70, height);
        ctx.closePath();
        ctx.fill();
    }
    ctx.restore();

    // Seafloor Sand & Swaying Kelp
    ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
    ctx.fillRect(0, height - 28, width, 28);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
    ctx.lineWidth = 4;
    sim.seaweed.forEach((sw) => {
        const sway = Math.sin(nowSec * 2 + sw.phase) * 12;
        ctx.beginPath();
        ctx.moveTo(sw.x, height - 20);
        ctx.quadraticCurveTo(sw.x + sway, height - 20 - sw.h * 0.5, sw.x + sway * 1.4, height - 20 - sw.h);
        ctx.stroke();
    });

    // Animated Surface Wave Crests
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let x = 0; x <= width; x += 24) {
        const wy = waterY + Math.sin(x * 0.025 + nowSec * 3) * 3.5;
        if (x === 0) ctx.moveTo(x, wy);
        else ctx.lineTo(x, wy);
    }
    ctx.stroke();

    // Bobbing Maritime Fishing Vessel (Trawler Hull + Wheelhouse + Mast)
    const boatBob = Math.sin(nowSec * 2.4) * 4.5;
    const boatTilt = Math.cos(nowSec * 2.4) * 0.03;
    const boatX = 105;
    const boatY = waterY - 8 + boatBob;

    ctx.save();
    ctx.translate(boatX, boatY);
    ctx.rotate(boatTilt);

    // Hull
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(-72, -10);
    ctx.lineTo(82, -10);
    ctx.lineTo(62, 22);
    ctx.lineTo(-56, 22);
    ctx.closePath();
    ctx.fill();

    // Brass & Red Waterline Trim
    ctx.fillStyle = '#e11d48';
    ctx.fillRect(-64, 6, 134, 6);
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(-70, -12, 150, 3);

    // Wheelhouse Cabin
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(-48, -42, 46, 32);
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(-52, -46, 54, 6);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(-38, -36, 26, 12);

    // Mast & Lantern
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-25, -46);
    ctx.lineTo(-25, -82);
    ctx.stroke();
    ctx.fillStyle = '#fde047';
    ctx.beginPath();
    ctx.arc(-25, -84, 4, 0, Math.PI * 2);
    ctx.fill();

    // Angler Character on Deck
    drawPlayerCharacter(36, -50, 1);

    // Fishing Rod
    const rodStartX = 44;
    const rodStartY = -30;
    const rodTipX = 88;
    const rodTipY = -66;
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(rodStartX, rodStartY);
    ctx.lineTo(rodTipX, rodTipY);
    ctx.stroke();

    ctx.restore();

    const worldRodTipX = boatX + 88;
    const worldRodTipY = boatY - 66;

    // Underwater Fish
    sim.underwaterFish.forEach((f) => {
        f.wiggle += dt * 5.5 * f.species.speed;

        if (sim.fishPhase === 'casted' && !sim.hookedFish) {
            const dx = sim.bobber.x - f.x;
            const dy = sim.bobber.y - f.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 185) {
                f.dir = dx >= 0 ? 1 : -1;
                f.x += (dx / dist) * 78 * dt;
                f.y += (dy / dist) * 78 * dt;
                if (dist < 18) {
                    sim.hookedFish = f;
                    sim.fishPhase = 'reeling';
                    sim.reelCursor = 0.5;
                    sim.reelProgress = 0.25;
                    sound.playBite();
                    updateActionPrompt();
                }
            } else {
                f.x += f.dir * 38 * f.species.speed * dt;
            }
        } else if (sim.hookedFish === f) {
            f.x = sim.bobber.x + Math.sin(nowSec * 14) * 10;
            f.y = sim.bobber.y + 16;
        } else {
            f.x += f.dir * 38 * f.species.speed * dt;
        }

        if (f.x < 175) f.dir = 1;
        if (f.x > width - 60) f.dir = -1;

        drawDetailedFish(f, nowSec);
    });

    // Bobber & Line
    if (sim.fishPhase === 'casted' || sim.fishPhase === 'reeling') {
        sim.bobber.x += (sim.bobber.targetX - sim.bobber.x) * Math.min(1, dt * 6);
        sim.bobber.y = waterY + Math.sin(nowSec * 4) * 4;

        ctx.strokeStyle = 'rgba(248, 250, 252, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(worldRodTipX, worldRodTipY);
        ctx.lineTo(sim.bobber.x, sim.bobber.y);
        ctx.stroke();

        // Water ripple rings around bobber
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(sim.bobber.x, sim.bobber.y + 4, 14 + Math.sin(nowSec * 5) * 4, 4, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(sim.bobber.x, sim.bobber.y, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(sim.bobber.x, sim.bobber.y + 3, 7, 0, Math.PI);
        ctx.fill();
    }

    // Cast Power Gauge
    if (sim.fishPhase === 'charging') {
        sim.castPower = Math.min(1, sim.castPower + dt * 1.15);
        const barW = 140;
        const barH = 14;
        const bx = boatX + 10;
        const by = boatY - 95;
        ctx.fillStyle = 'rgba(15,23,42,0.88)';
        ctx.fillRect(bx, by, barW, barH);
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(bx + 2, by + 2, (barW - 4) * sim.castPower, barH - 4);
    }

    // Reeling Timing Bar
    if (sim.fishPhase === 'reeling' && sim.hookedFish) {
        const sp = sim.hookedFish.species;
        const campaign = getCampaign();
        sim.reelCursor += sim.reelDir * dt * 1.15 * sp.barSpeed;
        if (sim.reelCursor >= 1) {
            sim.reelCursor = 1;
            sim.reelDir = -1;
        } else if (sim.reelCursor <= 0) {
            sim.reelCursor = 0;
            sim.reelDir = 1;
        }

        const barW = Math.min(360, width * 0.78);
        const barH = 26;
        const bx = (width - barW) / 2;
        const by = waterY - 86;

        ctx.fillStyle = 'rgba(9, 23, 38, 0.92)';
        ctx.strokeStyle = '#d4a853';
        ctx.lineWidth = 2;
        ctx.fillRect(bx, by, barW, barH);
        ctx.strokeRect(bx, by, barW, barH);

        const zoneWidth = Math.min(0.42, (0.18 + state.upgrades.rod * 0.025) * campaign.mechanics.zoneBonus);
        const goldWidth = zoneWidth * 0.32;

        ctx.fillStyle = 'rgba(16, 185, 129, 0.45)';
        ctx.fillRect(bx + barW * (0.5 - zoneWidth / 2), by + 2, barW * zoneWidth, barH - 4);

        ctx.fillStyle = 'rgba(251, 191, 36, 0.85)';
        ctx.fillRect(bx + barW * (0.5 - goldWidth / 2), by + 2, barW * goldWidth, barH - 4);

        const markerX = bx + barW * sim.reelCursor;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(markerX - 3, by - 4, 6, barH + 8);

        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fillRect(bx, by + barH + 8, barW, 10);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(bx + 1, by + barH + 9, (barW - 2) * Math.min(1, sim.reelProgress), 8);
    }
}

function renderTownScene(dt, nowSec) {
    const groundY = height * 0.68;

    // Harbor Water & Pilings
    ctx.fillStyle = '#07243b';
    ctx.fillRect(0, groundY - 25, width, height - groundY + 25);

    // Chimney Smoke Animation
    if (Math.random() < dt * 3.5) {
        sim.smokePuffs.push({ x: 430, y: groundY - 148, r: 6, life: 2.2 });
    }
    for (let i = sim.smokePuffs.length - 1; i >= 0; i--) {
        const s = sim.smokePuffs[i];
        s.y -= 22 * dt;
        s.x += Math.sin(nowSec + i) * 10 * dt;
        s.r += 7 * dt;
        s.life -= dt;
        if (s.life <= 0) {
            sim.smokePuffs.splice(i, 1);
            continue;
        }
        ctx.fillStyle = `rgba(226, 232, 240, ${Math.max(0, s.life * 0.14)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
    }

    // Wooden Boardwalk & Support Beams
    ctx.fillStyle = '#451a03';
    ctx.fillRect(0, groundY, width, 28);
    ctx.fillStyle = '#78350f';
    for (let x = 0; x < width; x += 36) {
        ctx.fillRect(x, groundY + 2, 32, 22);
    }

    // Glowing Harbor Lampposts
    [290, 580, 850, 1120].forEach((lx) => {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(lx - 3, groundY - 95, 6, 95);
        const glow = 0.25 + Math.sin(nowSec * 3 + lx) * 0.05;
        ctx.fillStyle = `rgba(251, 191, 36, ${glow})`;
        ctx.beginPath();
        ctx.arc(lx, groundY - 100, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.arc(lx, groundY - 100, 5, 0, Math.PI * 2);
        ctx.fill();
    });

    // Storefronts & Moored Vessel
    sim.townBuildings.forEach((b) => {
        if (b.id === 'boat') {
            const bob = Math.sin(nowSec * 2.5) * 4;
            const by = groundY - 38 + bob;
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.moveTo(b.x, by);
            ctx.lineTo(b.x + b.w, by);
            ctx.lineTo(b.x + b.w - 22, by + 34);
            ctx.lineTo(b.x + 18, by + 34);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(b.x + 42, by - 28, 56, 28);
            ctx.fillStyle = '#0284c7';
            ctx.fillRect(b.x + 38, by - 32, 64, 6);

            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 12px Manrope, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(b.name, b.x + b.w / 2, by - 46);
            return;
        }

        const bH = 136;
        const bY = groundY - bH;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(b.x, bY, b.w, bH);

        // Animated Awning
        const sway = Math.sin(nowSec * 2 + b.x) * 2;
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x - 8, bY - 14 + sway, b.w + 16, 18);

        // Warm Lit Windows
        ctx.fillStyle = 'rgba(253, 224, 71, 0.28)';
        ctx.fillRect(b.x + 18, bY + 28, 36, 36);
        ctx.fillRect(b.x + b.w - 54, bY + 28, 36, 36);

        // Doorway
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(b.x + b.w / 2 - 18, groundY - 52, 36, 52);

        // Signboard
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px Manrope, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(b.name, b.x + b.w / 2, bY - 26);
    });

    // Strolling Interactive Villagers
    sim.villagers.forEach((v) => {
        v.x += v.dir * v.speed * dt;
        if (v.x >= v.maxX) v.dir = -1;
        if (v.x <= v.minX) v.dir = 1;

        const vy = groundY - 40;
        ctx.fillStyle = v.coat;
        ctx.beginPath();
        ctx.roundRect(v.x - 9, vy + 13, 18, 27, 4);
        ctx.fill();
        ctx.fillStyle = '#fed7aa';
        ctx.beginPath();
        ctx.arc(v.x, vy + 6, 7.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = v.hat;
        ctx.fillRect(v.x - 10, vy - 2, 20, 4);

        const floatY = Math.sin(nowSec * 4 + v.x) * 3;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(v.x - 42, vy - 34 + floatY, 84, 20, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#fde047';
        ctx.font = 'bold 10px Manrope, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Task Available!', v.x, vy - 21 + floatY);
    });

    // Walkable Player Character
    sim.townPlayerX += sim.townWalkDir * 245 * dt;
    sim.townPlayerX = Math.max(80, Math.min(Math.max(width - 80, 1140), sim.townPlayerX));
    drawPlayerCharacter(sim.townPlayerX, groundY - 40, 1.05);

    updateActionPrompt();
}

function renderParticles(dt) {
    for (let i = sim.particles.length - 1; i >= 0; i--) {
        const p = sim.particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 220 * dt;
        p.life -= dt;
        if (p.life <= 0) {
            sim.particles.splice(i, 1);
            continue;
        }
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

let lastFrame = performance.now();
function gameLoop(now) {
    const dt = Math.min(0.05, (now - lastFrame) / 1000);
    lastFrame = now;

    ctx.clearRect(0, 0, width, height);
    renderSkyAndBackdrop(dt, now / 1000);

    if (sim.mode === 'sea') {
        renderSeaScene(dt, now / 1000);
    } else {
        renderTownScene(dt, now / 1000);
    }

    renderParticles(dt);
    requestAnimationFrame(gameLoop);
}

// --------------------------------------------------------------------------
// 11. HUD, ONE-TIME BRIEFINGS, VILLAGER DIALOGUE & MODALS
// --------------------------------------------------------------------------
function bumpStatElement(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('stat-bump');
    void el.offsetWidth;
    el.classList.add('stat-bump');
}

function updateHUD(animate = false) {
    const loc = LOCATIONS.find((l) => l.id === state.currentLocation) || LOCATIONS[0];
    document.getElementById('hudCash').textContent = `$${state.cash.toLocaleString()}`;
    document.getElementById('hudNetWorth').textContent = `$${getNetWorth().toLocaleString()}`;
    document.getElementById('hudPassive').textContent = `$${getPassiveIncomePerSec().toLocaleString()}/s`;
    document.getElementById('hudHold').textContent = `${state.livewell.length} / ${getHoldCapacity()}`;
    document.getElementById('hudRegionName').textContent = loc.name;
    document.getElementById('hudWeatherLabel').textContent = `${TIME_MODES[timeModeIdx]} Tide • ${loc.mult}x Base Value`;

    if (animate) {
        bumpStatElement('hudCash');
        bumpStatElement('hudNetWorth');
    }

    const heatEl = document.getElementById('hudHeatBadge');
    if (state.heat > 0 || Object.values(state.activeRisks).some(Boolean)) {
        heatEl.classList.remove('hidden');
        heatEl.textContent = `PATROL HEAT ${state.heat}%`;
    } else {
        heatEl.classList.add('hidden');
    }

    const harpoonBtn = document.getElementById('btnHarpoonToggle');
    if (state.upgrades.harpoon > 0) {
        harpoonBtn.classList.remove('hidden');
        document.getElementById('harpoonBtnText').textContent = state.harpoonArmed ? 'Harpoon: ARMED' : 'Harpoon: OFF';
    } else {
        harpoonBtn.classList.add('hidden');
    }

    document.getElementById('btnTownLabel').textContent = sim.mode === 'sea' ? 'Go to Town' : 'Return to Sea';

    // Update Active Character Campaign Story Tracker
    const campaign = getCampaign();
    let activeChapter = campaign.chapters[campaign.chapters.length - 1];
    let stageNum = campaign.chapters.length;
    for (let i = 0; i < campaign.chapters.length; i++) {
        if (!campaign.chapters[i].check(state)) {
            activeChapter = campaign.chapters[i];
            stageNum = i + 1;
            break;
        }
    }
    const pct = Math.round(activeChapter.progress(state) * 100);
    document.getElementById('storyRoleBadge').textContent = `${campaign.name} • ${campaign.gameMode}`;
    document.getElementById('storyChapterLabel').textContent = `${activeChapter.title} (${stageNum}/${campaign.chapters.length})`;
    document.getElementById('storyPlotSummary').textContent = campaign.plot;
    document.getElementById('storyObjectiveText').textContent = `Goal: ${activeChapter.goalText}`;
    document.getElementById('storyProgressPill').textContent = `${pct}%`;
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const div = document.createElement('div');
    const borderCol = type === 'danger' ? 'border-rose-400/60 text-rose-100' : type === 'warn' ? 'border-amber-400/60 text-amber-100' : 'border-emerald-400/50 text-slate-100';
    div.className = `maritime-panel toast-enter rounded-xl px-4 py-3 text-xs font-medium border ${borderCol} shadow-2xl`;
    div.textContent = message;
    container.appendChild(div);
    setTimeout(() => div.remove(), 4200);
}

let pendingBriefingCallback = null;
function runWithBriefing(key, actionFn) {
    if (state.seenBriefings[key] || !FEATURE_BRIEFINGS[key]) {
        actionFn();
        return;
    }
    const info = FEATURE_BRIEFINGS[key];
    state.seenBriefings[key] = true;
    saveState();

    document.getElementById('briefingTitle').textContent = info.title;
    document.getElementById('briefingDesc').textContent = info.desc;
    document.getElementById('briefingBullets').innerHTML = info.bullets
        .map((b) => `<div class="flex items-start gap-2"><span class="text-amber-400 font-bold">•</span><span>${b}</span></div>`)
        .join('');

    pendingBriefingCallback = actionFn;
    document.getElementById('briefingModal').classList.remove('hidden');
}

function openUniversalModal(subtitle, title, htmlContent) {
    document.getElementById('modalSubtitle').textContent = subtitle;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = htmlContent;
    document.getElementById('universalModal').classList.remove('hidden');
}

function closeUniversalModal() {
    document.getElementById('universalModal').classList.add('hidden');
}

function renderCharacterSelector() {
    const grid = document.getElementById('characterCardsGrid');
    grid.innerHTML = Object.values(CHARACTER_CAMPAIGNS)
        .map((c) => {
            const selected = state.character === c.id;
            return `
            <div data-select-char="${c.id}" class="maritime-card rounded-xl p-4 cursor-pointer border-2 ${selected ? 'border-amber-400 bg-amber-500/10' : 'border-slate-700/60'}">
                <div class="flex items-center justify-between gap-2">
                    <span class="font-display text-xl font-bold text-amber-100">${c.name}</span>
                    <span class="text-[10px] font-label uppercase px-2 py-0.5 rounded bg-slate-800 text-amber-300">${c.gameMode}</span>
                </div>
                <div class="text-[11px] font-semibold text-emerald-300 mt-1">${c.perkSummary}</div>
                <p class="text-xs text-slate-300 mt-2 leading-relaxed">${c.plot}</p>
            </div>`;
        })
        .join('');

    grid.querySelectorAll('[data-select-char]').forEach((card) => {
        card.addEventListener('click', () => {
            state.character = card.getAttribute('data-select-char');
            renderCharacterSelector();
            updateHUD();
            saveState();
        });
    });
}

function talkToVillager(villager) {
    if (!state.villagerTasks[villager.id]) {
        const loc = LOCATIONS.find((l) => l.id === state.currentLocation) || LOCATIONS[0];
        const needed = 2 + Math.floor(Math.random() * 3);
        const reward = Math.round((140 + needed * 65) * loc.mult * (state.character === 'fishmonger' ? 1.5 : 1.0));
        state.villagerTasks[villager.id] = {
            needed,
            reward,
            taskDesc: `Bring ${needed} fresh fish from your livewell hold.`
        };
        saveState();
    }

    const task = state.villagerTasks[villager.id];
    const ready = state.livewell.length >= task.needed;

    openUniversalModal(
        `${villager.role} • Harbor Town Resident`,
        villager.name,
        `
        <div class="maritime-card rounded-xl p-5 space-y-4">
            <p class="text-sm italic text-amber-100">"${villager.greeting}"</p>
            <div class="bg-[#081728] p-4 rounded-xl border border-amber-300/25 space-y-2">
                <div class="text-xs font-label uppercase text-emerald-400">Villager Task</div>
                <div class="text-sm font-semibold text-white">${task.taskDesc}</div>
                <div class="text-xs text-slate-400">Your Livewell Hold: <span class="font-mono-num text-sky-300">${state.livewell.length}/${task.needed}</span> • Reward: <span class="font-mono-num text-amber-300">$${task.reward.toLocaleString()}</span></div>
            </div>
            <div class="flex justify-end">
                <button id="btnFulfillVillagerTask" class="btn-brass" ${ready ? '' : 'disabled'}>Deliver Catch & Claim $${task.reward.toLocaleString()}</button>
            </div>
        </div>`
    );

    const claimBtn = document.getElementById('btnFulfillVillagerTask');
    if (claimBtn) {
        claimBtn.addEventListener('click', () => {
            if (state.livewell.length < task.needed) return;
            state.livewell.splice(0, task.needed);
            state.cash += task.reward;
            state.totalEarned += task.reward;
            state.questsCompleted += 1;
            delete state.villagerTasks[villager.id];
            sound.playCoin();
            saveState();
            updateHUD(true);
            closeUniversalModal();
            showToast(`${villager.name} thanked you and paid $${task.reward.toLocaleString()}!`);
        });
    }
}

function enterTownBuilding(buildingId) {
    if (buildingId === 'boat') {
        sim.mode = 'sea';
        resetFishingState();
        updateHUD();
        return;
    }

    if (buildingId === 'market') {
        const totalVal = state.livewell.reduce((s, f) => s + f.value, 0);
        const listHtml = state.livewell.length
            ? state.livewell
                  .map(
                      (f) => `
                <div class="maritime-card rounded-xl p-3 flex items-center justify-between">
                    <div>
                        <span class="font-bold text-sm" style="color:${f.color}">${f.name}</span>
                        <span class="text-xs text-slate-400 ml-2">${f.rarity} • ${f.weight} kg</span>
                    </div>
                    <button data-sell-uid="${f.uid}" class="btn-slate">Sell $${f.value.toLocaleString()}</button>
                </div>`
                  )
                  .join('')
            : `<p class="text-sm text-slate-400">Your livewell hold is empty. Return to sea to catch fish!</p>`;

        openUniversalModal(
            'Pier 01 Fishmonger Market',
            'Sell Fresh Catch',
            `
            <div class="flex items-center justify-between bg-[#081728] p-4 rounded-xl border border-amber-300/25">
                <div>
                    <div class="text-xs text-slate-400">Total Livewell Value</div>
                    <div class="font-mono-num text-2xl font-bold text-amber-300">$${totalVal.toLocaleString()}</div>
                </div>
                <button id="btnSellAllFish" class="btn-brass" ${state.livewell.length === 0 ? 'disabled' : ''}>Sell Entire Catch</button>
            </div>
            <div class="space-y-2">${listHtml}</div>`
        );

        const sellAllBtn = document.getElementById('btnSellAllFish');
        if (sellAllBtn) {
            sellAllBtn.addEventListener('click', () => {
                if (state.livewell.length === 0) return;
                const earned = state.livewell.reduce((s, f) => s + f.value, 0);
                state.cash += earned;
                state.totalEarned += earned;
                state.totalSalesEarned += earned;
                state.livewell = [];
                sound.playCoin();
                saveState();
                updateHUD(true);
                showToast(`Sold entire livewell catch for $${earned.toLocaleString()}!`);
                enterTownBuilding('market');
            });
        }

        document.querySelectorAll('[data-sell-uid]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const uid = Number(btn.getAttribute('data-sell-uid'));
                const idx = state.livewell.findIndex((f) => f.uid === uid);
                if (idx >= 0) {
                    const [fish] = state.livewell.splice(idx, 1);
                    state.cash += fish.value;
                    state.totalEarned += fish.value;
                    state.totalSalesEarned += fish.value;
                    sound.playCoin();
                    saveState();
                    updateHUD(true);
                    enterTownBuilding('market');
                }
            });
        });
    } else if (buildingId === 'guild') {
        ensureActiveQuest();
        const q = state.activeQuest;
        const canComplete = state.livewell.length >= q.targetCount;
        openUniversalModal(
            'Harbormaster Guild Hall',
            'Port Supply Contracts',
            `
            <div class="maritime-card rounded-xl p-5 space-y-3">
                <div class="text-xs font-label uppercase text-emerald-400">Active Contract</div>
                <h3 class="font-display text-2xl font-bold text-white">${q.title}</h3>
                <p class="text-sm text-slate-300">${q.desc}</p>
                <div class="flex items-center justify-between pt-3 border-t border-slate-700">
                    <span class="font-mono-num text-sm text-amber-300">Payout: $${q.reward.toLocaleString()} • Hold: ${state.livewell.length}/${q.targetCount}</span>
                    <button id="btnCompleteGuildQuest" class="btn-brass" ${canComplete ? '' : 'disabled'}>Deliver & Claim</button>
                </div>
            </div>`
        );

        const qBtn = document.getElementById('btnCompleteGuildQuest');
        if (qBtn) {
            qBtn.addEventListener('click', () => {
                if (state.livewell.length < q.targetCount) return;
                state.livewell.splice(0, q.targetCount);
                state.cash += q.reward;
                state.totalEarned += q.reward;
                state.questsCompleted += 1;
                state.activeQuest = null;
                ensureActiveQuest();
                sound.playCoin();
                saveState();
                updateHUD(true);
                showToast(`Guild Quest completed! Earned $${q.reward.toLocaleString()}.`);
                enterTownBuilding('guild');
            });
        }
    } else if (buildingId === 'outfitter') {
        const html = UPGRADES.map((u) => {
            const lvl = state.upgrades[u.id] || 0;
            const maxed = lvl >= u.max;
            const cost = Math.round(u.baseCost * Math.pow(u.costMult, lvl));
            return `
            <div class="maritime-card rounded-xl p-4 flex items-center justify-between gap-4">
                <div>
                    <div class="font-bold text-amber-100">${u.name} <span class="text-xs font-mono-num text-amber-300">(Tier ${lvl}/${u.max})</span></div>
                    <div class="text-xs text-slate-300 mt-0.5">${u.desc}</div>
                </div>
                <button data-buy-upg="${u.id}" class="btn-brass" ${maxed || state.cash < cost ? 'disabled' : ''}>
                    ${maxed ? 'MAXED' : `$${cost.toLocaleString()}`}
                </button>
            </div>`;
        }).join('');

        openUniversalModal('Drydock Outfitter', 'Vessel & Tackle Upgrades', html);
        document.querySelectorAll('[data-buy-upg]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-buy-upg');
                const u = UPGRADES.find((item) => item.id === id);
                const lvl = state.upgrades[id] || 0;
                const cost = Math.round(u.baseCost * Math.pow(u.costMult, lvl));
                if (lvl < u.max && state.cash >= cost) {
                    state.cash -= cost;
                    state.upgrades[id] = lvl + 1;
                    if (id === 'harpoon') state.harpoonArmed = true;
                    sound.playCoin();
                    saveState();
                    updateHUD(true);
                    enterTownBuilding('outfitter');
                }
            });
        });
    }
}

function triggerTownInteraction() {
    const target = getNearestTownTarget();
    if (!target) return;
    if (target.type === 'villager') {
        talkToVillager(target.data);
    } else if (target.type === 'building') {
        enterTownBuilding(target.data.id);
    }
}

// --------------------------------------------------------------------------
// 12. EVENT LISTENERS & INITIALIZATION
// --------------------------------------------------------------------------
function setupListeners() {
    canvas.addEventListener('pointerdown', (e) => {
        if (sim.mode === 'town') {
            sim.townPlayerX = e.clientX;
            triggerTownInteraction();
            return;
        }
        handlePrimaryActionDown();
    });

    window.addEventListener('pointerup', handlePrimaryActionUp);

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            if (document.activeElement.tagName === 'INPUT') return;
            e.preventDefault();
            if (!e.repeat) handlePrimaryActionDown();
        }
        if (sim.mode === 'town') {
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') sim.townWalkDir = -1;
            if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') sim.townWalkDir = 1;
            if (e.key === 'e' || e.key === 'E' || e.key === 'Enter') {
                triggerTownInteraction();
            }
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.code === 'Space') handlePrimaryActionUp();
        if (['ArrowLeft', 'ArrowRight', 'a', 'A', 'd', 'D'].includes(e.key)) {
            sim.townWalkDir = 0;
        }
    });

    const btnLeft = document.getElementById('btnWalkLeft');
    const btnRight = document.getElementById('btnWalkRight');
    btnLeft.addEventListener('pointerdown', () => (sim.townWalkDir = -1));
    btnLeft.addEventListener('pointerup', () => (sim.townWalkDir = 0));
    btnRight.addEventListener('pointerdown', () => (sim.townWalkDir = 1));
    btnRight.addEventListener('pointerup', () => (sim.townWalkDir = 0));
    document.getElementById('btnTownInteract').addEventListener('click', triggerTownInteraction);

    document.getElementById('btnToggleTown').addEventListener('click', () => {
        if (sim.mode === 'sea') {
            runWithBriefing('town', () => {
                sim.mode = 'town';
                sim.townPlayerX = 185;
                resetFishingState();
                updateHUD();
            });
        } else {
            sim.mode = 'sea';
            resetFishingState();
            updateHUD();
        }
    });

    document.getElementById('btnHarpoonToggle').addEventListener('click', () => {
        state.harpoonArmed = !state.harpoonArmed;
        updateHUD();
    });

    document.getElementById('btnOpenCharts').addEventListener('click', () => {
        runWithBriefing('charts', () => {
            const nw = getNetWorth();
            const html = LOCATIONS.map((loc) => {
                const unlocked = state.unlockedLocations.includes(loc.id);
                const active = state.currentLocation === loc.id;
                const canUnlock = nw >= loc.unlockNetWorth;
                return `
                <div class="maritime-card rounded-xl p-4 flex items-center justify-between gap-4">
                    <div>
                        <div class="font-bold text-amber-100">${loc.name} <span class="text-xs font-mono-num text-emerald-300">(${loc.mult}x Value)</span></div>
                        <div class="text-xs text-slate-300 mt-0.5">${loc.desc}</div>
                    </div>
                    <button data-loc-id="${loc.id}" class="${active ? 'btn-slate' : 'btn-brass'}" ${!unlocked && !canUnlock ? 'disabled' : ''}>
                        ${active ? 'Anchored' : unlocked ? 'Sail Here' : `Req. $${loc.unlockNetWorth.toLocaleString()} NW`}
                    </button>
                </div>`;
            }).join('');

            openUniversalModal('Expedition Navigation Charts', 'Global Waters (100 Species Each)', html);
            document.querySelectorAll('[data-loc-id]').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-loc-id');
                    if (!state.unlockedLocations.includes(id)) {
                        state.unlockedLocations.push(id);
                    }
                    state.currentLocation = id;
                    sim.mode = 'sea';
                    spawnSchoolForLocation();
                    resetFishingState();
                    saveState();
                    updateHUD();
                    closeUniversalModal();
                    showToast(`Anchored at ${LOCATIONS.find((l) => l.id === id).name}.`);
                });
            });
        });
    });

    document.getElementById('btnOpenEmpire').addEventListener('click', () => {
        runWithBriefing('empire', () => {
            const discount = state.character === 'industrialist' ? 0.85 : 1.0;
            const renderEmpire = () => {
                const html = EMPIRE_ASSETS.map((asset) => {
                    const count = state.empire[asset.id] || 0;
                    const cost = Math.round(asset.baseCost * Math.pow(1.22, count) * discount);
                    return `
                    <div class="maritime-card rounded-xl p-4 flex items-center justify-between gap-4">
                        <div>
                            <div class="font-bold text-amber-100">${asset.name} <span class="font-mono-num text-xs text-amber-300">×${count}</span></div>
                            <div class="text-xs text-slate-300">${asset.desc} <span class="text-emerald-300 font-mono-num">(+$${asset.income}/s base)</span></div>
                        </div>
                        <button data-buy-emp="${asset.id}" class="btn-brass" ${state.cash < cost ? 'disabled' : ''}>
                            Expand $${cost.toLocaleString()}
                        </button>
                    </div>`;
                }).join('');

                openUniversalModal('Maritime Business HQ', `Fleet & Industrial Assets ($${getPassiveIncomePerSec().toLocaleString()}/s)`, html);
                document.querySelectorAll('[data-buy-emp]').forEach((btn) => {
                    btn.addEventListener('click', () => {
                        const id = btn.getAttribute('data-buy-emp');
                        const asset = EMPIRE_ASSETS.find((a) => a.id === id);
                        const count = state.empire[id] || 0;
                        const cost = Math.round(asset.baseCost * Math.pow(1.22, count) * discount);
                        if (state.cash >= cost) {
                            state.cash -= cost;
                            state.empire[id] = count + 1;
                            sound.playCoin();
                            saveState();
                            updateHUD(true);
                            renderEmpire();
                        }
                    });
                });
            };
            renderEmpire();
        });
    });

    document.getElementById('btnOpenRisk').addEventListener('click', () => {
        runWithBriefing('risk', () => {
            const renderRisk = () => {
                const html = `
                <div class="bg-rose-950/40 border border-rose-400/30 rounded-xl p-4 flex items-center justify-between gap-4">
                    <div>
                        <div class="text-xs uppercase font-label text-rose-300">Coast Guard Patrol Heat</div>
                        <div class="font-mono-num text-2xl font-bold text-white">${state.heat}%</div>
                        <div class="text-xs text-slate-300">If Patrol Heat hits 100%, the Coast Guard siren sounds, livewell catches are confiscated, and a 35% fine is issued.</div>
                    </div>
                    <button id="btnCoolHeat" class="btn-slate" ${state.heat === 0 || state.cash < 100 ? 'disabled' : ''}>Lay Low (-25% Heat • $100)</button>
                </div>
                ${RISK_OPERATIONS.map((op) => {
                    const active = !!state.activeRisks[op.id];
                    return `
                    <div class="maritime-card rounded-xl p-4 flex items-center justify-between gap-4">
                        <div>
                            <div class="font-bold text-amber-100">${op.name}</div>
                            <div class="text-xs text-slate-300 mt-0.5">${op.desc}</div>
                        </div>
                        <button data-toggle-risk="${op.id}" class="${active ? 'btn-brass' : 'btn-slate'}">
                            ${active ? 'ACTIVE' : 'ENABLE'}
                        </button>
                    </div>`;
                }).join('')}`;

                openUniversalModal('Maritime Patrol & Risk Operations', 'High-Stakes Trawling Directives', html);

                const coolBtn = document.getElementById('btnCoolHeat');
                if (coolBtn) {
                    coolBtn.addEventListener('click', () => {
                        if (state.cash >= 100 && state.heat > 0) {
                            state.cash -= 100;
                            state.heat = Math.max(0, state.heat - 25);
                            saveState();
                            updateHUD();
                            renderRisk();
                        }
                    });
                }

                document.querySelectorAll('[data-toggle-risk]').forEach((btn) => {
                    btn.addEventListener('click', () => {
                        const id = btn.getAttribute('data-toggle-risk');
                        state.activeRisks[id] = !state.activeRisks[id];
                        saveState();
                        updateHUD();
                        renderRisk();
                    });
                });
            };
            renderRisk();
        });
    });

    document.getElementById('btnOpenFishDex').addEventListener('click', () => {
        runWithBriefing('fishdex', () => {
            const regionFish = FISH_SPECIES.filter((f) => f.regionId === state.currentLocation);
            const caughtCount = regionFish.filter((f) => state.discovered.includes(f.id)).length;
            const grid = regionFish
                .map((f) => {
                    const found = state.discovered.includes(f.id);
                    return `
                    <div class="maritime-card rounded-lg p-2.5 text-xs ${found ? '' : 'opacity-45'}">
                        <div class="font-bold truncate" style="color:${found ? f.color : '#64748b'}">${found ? f.name : '??? Undiscovered'}</div>
                        <div class="text-[10px] text-slate-400 mt-0.5">${f.rarity} • Base $${f.baseValue}</div>
                    </div>`;
                })
                .join('');

            openUniversalModal(
                'Regional Ichthyology Catalog',
                `FishDex (${caughtCount}/100 Local • ${state.discovered.length}/600 Global)`,
                `<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">${grid}</div>`
            );
        });
    });

    document.getElementById('btnOpenLeaderboard').addEventListener('click', () => {
        runWithBriefing('leaderboard', () => {
            const entries = [
                ...RIVAL_LEADERS,
                { name: `${state.captainName} (${state.vesselName})`, worth: getNetWorth(), isPlayer: true }
            ].sort((a, b) => b.worth - a.worth);

            const html = entries
                .map(
                    (entry, idx) => `
                <div class="maritime-card rounded-xl p-3.5 flex items-center justify-between ${entry.isPlayer ? 'border-amber-400 bg-amber-500/10' : ''}">
                    <div class="flex items-center gap-3">
                        <span class="font-mono-num font-bold text-amber-300 w-6">#${idx + 1}</span>
                        <span class="font-bold text-sm ${entry.isPlayer ? 'text-amber-200' : 'text-slate-100'}">${entry.name}</span>
                    </div>
                    <span class="font-mono-num font-bold text-emerald-300">$${entry.worth.toLocaleString()}</span>
                </div>`
                )
                .join('');

            openUniversalModal('Global Maritime Registry', 'Net Worth Rankings', html);
        });
    });

    document.getElementById('btnContinueBriefing').addEventListener('click', () => {
        document.getElementById('briefingModal').classList.add('hidden');
        if (pendingBriefingCallback) {
            const fn = pendingBriefingCallback;
            pendingBriefingCallback = null;
            fn();
        }
    });

    document.getElementById('btnOpenStartMenu').addEventListener('click', () => {
        renderCharacterSelector();
        document.getElementById('startMenuModal').classList.remove('hidden');
    });

    document.querySelectorAll('.start-tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-start-tab');
            document.getElementById('startTabPlay').classList.toggle('hidden', tab !== 'play');
            document.getElementById('startTabOptions').classList.toggle('hidden', tab !== 'options');
        });
    });

    document.getElementById('btnLaunchGame').addEventListener('click', () => {
        const capVal = document.getElementById('captainNameInput').value.trim();
        const vesVal = document.getElementById('vesselNameInput').value.trim();
        if (capVal) state.captainName = capVal;
        if (vesVal) state.vesselName = vesVal;
        sound.init();
        saveState();
        updateHUD();
        document.getElementById('startMenuModal').classList.add('hidden');
    });

    document.getElementById('btnToggleAudio').addEventListener('click', (e) => {
        sound.enabled = !sound.enabled;
        e.target.textContent = sound.enabled ? 'Sound: ON' : 'Sound: OFF';
    });

    document.getElementById('btnCycleTime').addEventListener('click', (e) => {
        timeModeIdx = (timeModeIdx + 1) % TIME_MODES.length;
        e.target.textContent = `Time: ${TIME_MODES[timeModeIdx]}`;
        updateHUD();
    });

    document.getElementById('btnResetBriefings').addEventListener('click', () => {
        state.seenBriefings = {};
        saveState();
        showToast('First-time feature briefings have been reset.');
    });

    document.getElementById('btnResetSave').addEventListener('click', () => {
        state = getDefaultState();
        saveState();
        renderCharacterSelector();
        spawnSchoolForLocation();
        updateHUD();
        showToast('Save data reset to a fresh charter.');
    });

    document.getElementById('btnCloseUniversalModal').addEventListener('click', closeUniversalModal);
    document.getElementById('btnCloseCatchModal').addEventListener('click', () => {
        document.getElementById('catchModal').classList.add('hidden');
    });
}

// Passive Business Income & Patrol Heat Loop (Every 1 second)
setInterval(() => {
    const income = getPassiveIncomePerSec();
    if (income > 0) {
        state.cash += income;
        state.totalEarned += income;
    }

    if (state.activeRisks.overlimit_nets) {
        state.heat = Math.min(100, state.heat + 1);
        if (state.heat >= 100) {
            triggerCoastGuardApprehension();
        }
    } else if (state.heat > 0 && !Object.values(state.activeRisks).some(Boolean)) {
        state.heat = Math.max(0, state.heat - 1);
    }

    updateHUD();
}, 1000);

// Auto-save every 10 seconds
setInterval(saveState, 10000);

// Boot Sequence
injectIcons();
document.getElementById('captainNameInput').value = state.captainName;
document.getElementById('vesselNameInput').value = state.vesselName;
renderCharacterSelector();
spawnSchoolForLocation();
setupListeners();
updateHUD();
updateActionPrompt();
requestAnimationFrame(gameLoop);