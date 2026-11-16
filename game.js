// =========================================================================
// 0. CUSTOM MARITIME SVG ICONS (ZERO EMOJIS)
// =========================================================================
const ICONS = {
    sun: `<svg class="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    storm: `<svg class="w-4 h-4 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>`,
    drought: `<svg class="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 6 4-4 4 4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>`,
    frenzy: `<svg class="w-4 h-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path><path d="M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path></svg>`,
    crash: `<svg class="w-4 h-4 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>`,
    boom: `<svg class="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    fog: `<svg class="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 17H7"></path><path d="M17 21H9"></path></svg>`,
    town: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path></svg>`,
    compass: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
    trophy: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`,
    empire: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    alert: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
};

// =========================================================================
// 1. PROCEDURAL MARITIME SOUND ENGINE (WEB AUDIO API)
// =========================================================================
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
            this.ctx.resume().catch(() => {});
        }
    }
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
    playTone(freq, type, duration, gainVal = 0.14, delay = 0) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime + delay;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(gainVal, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + duration);
    }
    playCast() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.18);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.22);
    }
    playSplash(intensity = 1) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const bufferSize = Math.floor(this.ctx.sampleRate * 0.25);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(750 * intensity, now);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(Math.min(0.25, 0.14 * intensity), now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start(now);
    }
    playNibble() {
        this.playTone(460, 'sine', 0.08, 0.1);
        this.playTone(580, 'sine', 0.07, 0.08, 0.06);
    }
    playBiteAlert() {
        this.playTone(680, 'triangle', 0.12, 0.18, 0);
        this.playTone(920, 'triangle', 0.16, 0.2, 0.08);
    }
    playTimingHit(isCrit, combo = 1) {
        const pitchBoost = Math.min(220, combo * 28);
        if (isCrit) {
            this.playTone(587 + pitchBoost, 'triangle', 0.12, 0.18, 0);
            this.playTone(880 + pitchBoost, 'sine', 0.18, 0.2, 0.06);
        } else {
            this.playTone(480 + pitchBoost, 'sine', 0.12, 0.15, 0);
        }
    }
    playTimingMiss() {
        this.playTone(175, 'sawtooth', 0.16, 0.14, 0);
        this.playTone(130, 'sawtooth', 0.18, 0.14, 0.08);
    }
    playSnap() {
        this.playTone(190, 'sawtooth', 0.25, 0.18, 0);
        this.playTone(110, 'sawtooth', 0.3, 0.18, 0.1);
    }
    playCoinRegister() {
        this.playTone(987.77, 'sine', 0.11, 0.16, 0);
        this.playTone(1318.51, 'sine', 0.22, 0.18, 0.07);
    }
    playSirenAlert() {
        this.playTone(520, 'sawtooth', 0.18, 0.15, 0);
        this.playTone(390, 'sawtooth', 0.18, 0.15, 0.18);
        this.playTone(520, 'sawtooth', 0.18, 0.15, 0.36);
    }
    playCatchFanfare(rarity) {
        const notes = (rarity === 'Legendary' || rarity === 'Mythic' || rarity === 'Colossal')
            ? [523.25, 659.25, 783.99, 1046.5, 1318.5]
            : (rarity === 'Epic' || rarity === 'Rare')
                ? [523.25, 659.25, 783.99, 1046.5]
                : [440, 554.37, 659.25];
        notes.forEach((freq, idx) => {
            this.playTone(freq, 'triangle', 0.22, 0.16, idx * 0.08);
        });
    }
}
const sound = new SoundEngine();

// =========================================================================
// 2. SIX REGIONS & 600 STRICTLY REGION-LOCKED FISH SPECIES (100 PER REGION)
// =========================================================================
const LOCATIONS = [
    {
        id: 'creek',
        name: 'Willow Creek Village',
        townName: 'Willow Creek Harbor',
        subtitle: 'Freshwater Shallows',
        unlockNetWorth: 0,
        valueMult: 1.0,
        sceneryType: 'forest',
        surfaceColor: '#0284c7',
        midColor: '#0369a1',
        abyssColor: '#082f49',
        causticColor: 'rgba(186, 230, 253, 0.28)',
        desc: 'Calm village waters home to 100 endemic freshwater creek & river species.'
    },
    {
        id: 'lake',
        name: 'Emerald Mist Lake',
        townName: 'Emerald Basin Wharf',
        subtitle: 'Glacial Basin',
        unlockNetWorth: 550,
        valueMult: 1.75,
        sceneryType: 'pine',
        surfaceColor: '#0d9488',
        midColor: '#0f766e',
        abyssColor: '#042f2e',
        causticColor: 'rgba(153, 246, 228, 0.26)',
        desc: 'Deep alpine waters teeming with 100 exclusive lake trout, pike & sturgeon.'
    },
    {
        id: 'reef',
        name: 'Sunburst Coral Atoll',
        townName: 'Atoll Pearl Port',
        subtitle: 'Tropical Lagoon',
        unlockNetWorth: 3800,
        valueMult: 3.4,
        sceneryType: 'tropics',
        surfaceColor: '#06b6d4',
        midColor: '#0284c7',
        abyssColor: '#1e3a8a',
        causticColor: 'rgba(165, 243, 252, 0.34)',
        desc: 'Turquoise coral gardens inhabited by 100 exclusive reef & pelagic species.'
    },
    {
        id: 'fjord',
        name: 'Stormwatch Nordic Fjord',
        townName: 'Stormwatch Quay',
        subtitle: 'Sub-Arctic Sea',
        unlockNetWorth: 24000,
        valueMult: 6.8,
        sceneryType: 'fjord',
        surfaceColor: '#2563eb',
        midColor: '#1e40af',
        abyssColor: '#0f172a',
        causticColor: 'rgba(147, 197, 253, 0.24)',
        desc: 'Steep granite cliffs and cold currents hiding 100 exclusive North Sea giants.'
    },
    {
        id: 'abyss',
        name: 'Mariana Obsidian Trench',
        townName: 'Abyssal Deep-Water Rig',
        subtitle: 'Hadal Zone',
        unlockNetWorth: 150000,
        valueMult: 14.5,
        sceneryType: 'volcanic',
        surfaceColor: '#312e81',
        midColor: '#1e1b4b',
        abyssColor: '#05040f',
        causticColor: 'rgba(165, 180, 252, 0.2)',
        desc: 'Bioluminescent abyssal depths harboring 100 exclusive trench monstrosities.'
    },
    {
        id: 'polar',
        name: 'Aurora Polar Ice Shelf',
        townName: 'Aurora Icebreaker Station',
        subtitle: 'Antarctic Deep',
        unlockNetWorth: 950000,
        valueMult: 30.0,
        sceneryType: 'glacier',
        surfaceColor: '#0284c7',
        midColor: '#1d4ed8',
        abyssColor: '#090d16',
        causticColor: 'rgba(224, 242, 254, 0.32)',
        desc: 'Sub-zero glacial waters populated by 100 exclusive polar apex leviathans.'
    }
];

const RARITY_WEIGHTS = {
    Common: 44,
    Uncommon: 26,
    Rare: 15,
    Epic: 8,
    Legendary: 4,
    Mythic: 2,
    Colossal: 2.5
};

const REGION_CATALOG_DATA = {
    creek: {
        adjectives: ['Willow', 'Sunlit', 'Pebble', 'Mossy', 'Copper', 'Silver', 'Creek', 'Brook', 'Alder', 'Reed'],
        nouns: ['Bluegill', 'Dace', 'Chub', 'Minnow', 'Perch', 'Shiner', 'Darter', 'Bullhead', 'Sucker', 'Sunfish'],
        leviathans: ['Old Mossback Catfish', 'Giant Alligator Gar', 'Ancient Paddlefish', 'Colossal Creek Sturgeon', 'Sovereign River Carp'],
        palettes: [['#38bdf8', '#fde047', '#0284c7'], ['#4ade80', '#166534', '#86efac'], ['#fb923c', '#fef08a', '#c2410c'], ['#94a3b8', '#e2e8f0', '#475569']]
    },
    lake: {
        adjectives: ['Emerald', 'Glacial', 'Mist', 'Pine', 'Granite', 'Jade', 'Cobalt', 'Shadow', 'Clearwater', 'Timber'],
        nouns: ['Trout', 'Walleye', 'Pike', 'Muskie', 'Char', 'Whitefish', 'Burbot', 'Kokanee', 'Grayling', 'Bass'],
        leviathans: ['Lake Champlain Leviathan', 'Colossal Muskellunge', 'Titan Alpine Sturgeon', 'Abyssal Lake Trout', 'Goliath Glacial Pike'],
        palettes: [['#2dd4bf', '#ccfbf1', '#0f766e'], ['#34d399', '#065f46', '#a7f3d0'], ['#60a5fa', '#dbeafe', '#1d4ed8'], ['#f472b6', '#fbcfe8', '#be185d']]
    },
    reef: {
        adjectives: ['Sunburst', 'Coral', 'Lagoon', 'Crimson', 'Azure', 'Saffron', 'Pearl', 'Gilded', 'Mandarin', 'Tropical'],
        nouns: ['Parrotfish', 'Tang', 'Wrasse', 'Angelfish', 'Triggerfish', 'Snapper', 'Grouper', 'Damselfish', 'Lionfish', 'Barracuda'],
        leviathans: ['Colossal Manta Ray', 'Titan Reef Shark', 'Goliath Grouper King', 'Leviathan Moray Eel', 'Sovereign Tiger Shark'],
        palettes: [['#f43f5e', '#fde047', '#be123c'], ['#06b6d4', '#fef08a', '#0e7490'], ['#fb923c', '#f8fafc', '#ea580c'], ['#a855f7', '#f5d0fe', '#6b21a8']]
    },
    fjord: {
        adjectives: ['Nordic', 'Stormwatch', 'Iron', 'Valkyrie', 'Runic', 'Tempest', 'Frost', 'Basalt', 'Odin', 'Northsea'],
        nouns: ['Cod', 'Haddock', 'Pollock', 'Mackerel', 'Halibut', 'Wolffish', 'Ling', 'Saithe', 'Herring', 'Salmon'],
        leviathans: ['Colossal Atlantic Halibut', 'Titan Greenland Shark', 'Jormungandr Sea Serpent', 'Leviathan King Salmon', 'Goliath Fjord Orca-Ray'],
        palettes: [['#3b82f6', '#dbeafe', '#1e3a8a'], ['#64748b', '#f1f5f9', '#334155'], ['#0ea5e9', '#bae6fd', '#0369a1'], ['#eab308', '#fef9c3', '#854d0e']]
    },
    abyss: {
        adjectives: ['Mariana', 'Obsidian', 'Bioluminescent', 'Void', 'Phantom', 'Hadal', 'Cinder', 'Spectral', 'Nether', 'Eclipse'],
        nouns: ['Anglerfish', 'Viperfish', 'Gulper', 'Dragonfish', 'Fangtooth', 'Lanternfish', 'Grenadier', 'Snipe-Eel', 'Hatchetfish', 'Coelacanth'],
        leviathans: ['Colossal Oarfish Titan', 'Leviathan Giant Squid', 'Abyssal Megamouth Shark', 'Hadal Kraken Spawn', 'Primordial Trench Coelacanth'],
        palettes: [['#818cf8', '#e0e7ff', '#3730a3'], ['#c084fc', '#f3e8ff', '#6b21a8'], ['#f43f5e', '#ffe4e6', '#881337'], ['#22d3ee', '#cffafe', '#155e75']]
    },
    polar: {
        adjectives: ['Aurora', 'Glacial', 'Permafrost', 'Blizzard', 'Boreal', 'Crystal', 'Subzero', 'Solstice', 'Iceberg', 'Tundra'],
        nouns: ['Icefish', 'Snailfish', 'Capelin', 'Sculpin', 'Eelpout', 'Toothfish', 'Notothen', 'Char', 'Smelt', 'Flounder'],
        leviathans: ['Colossal Patagonian Toothfish', 'Leviathan Polar Sleeper Shark', 'Titan Beluga Sturgeon', 'Glacial Crown Leviathan', 'Sovereign Ice-Shelf Narwhal'],
        palettes: [['#7dd3fc', '#f0f9ff', '#0369a1'], ['#a5f3fc', '#ecfeff', '#0891b2'], ['#e2e8f0', '#ffffff', '#64748b'], ['#34d399', '#d1fae5', '#047857']]
    }
};

function build600RegionFishSpecies() {
    const allSpecies = [];
    const shapes = ['fusiform', 'panfish', 'pike', 'eel'];
    const patterns = ['none', 'stripes', 'bars', 'koi', 'rainbow'];

    LOCATIONS.forEach(loc => {
        const cfg = REGION_CATALOG_DATA[loc.id];
        let idx = 0;

        // 95 standard species per region (Common -> Mythic)
        for (let a = 0; a < cfg.adjectives.length; a++) {
            for (let n = 0; n < cfg.nouns.length; n++) {
                if (idx >= 95) break;
                const name = `${cfg.adjectives[a]} ${cfg.nouns[n]}`;
                const tierRoll = (a * 10 + n) % 100;
                let rarity = 'Common';
                let fight = 0.25;
                let valBase = 12;
                let minD = 0.0;
                let maxD = 0.55;
                let scale = 0.85 + ((a + n) % 4) * 0.1;

                if (tierRoll >= 94) {
                    rarity = 'Mythic';
                    fight = 0.92;
                    valBase = 340;
                    minD = 0.65;
                    maxD = 1.0;
                    scale = 1.45;
                } else if (tierRoll >= 84) {
                    rarity = 'Legendary';
                    fight = 0.80;
                    valBase = 175;
                    minD = 0.55;
                    maxD = 1.0;
                    scale = 1.32;
                } else if (tierRoll >= 68) {
                    rarity = 'Epic';
                    fight = 0.64;
                    valBase = 88;
                    minD = 0.40;
                    maxD = 0.95;
                    scale = 1.18;
                } else if (tierRoll >= 46) {
                    rarity = 'Rare';
                    fight = 0.48;
                    valBase = 44;
                    minD = 0.25;
                    maxD = 0.85;
                    scale = 1.05;
                } else if (tierRoll >= 24) {
                    rarity = 'Uncommon';
                    fight = 0.35;
                    valBase = 22;
                    minD = 0.10;
                    maxD = 0.70;
                    scale = 0.95;
                }

                const pal = cfg.palettes[(a + n) % cfg.palettes.length];
                const isSwift = (rarity === 'Rare' || rarity === 'Epic' || rarity === 'Mythic') && ((a + n) % 3 === 0);

                allSpecies.push({
                    id: `${loc.id}_${idx}`,
                    region: loc.id,
                    name,
                    rarity,
                    baseValue: Math.round(valBase * loc.valueMult),
                    minWeight: +(0.6 * scale * loc.valueMult).toFixed(1),
                    maxWeight: +(4.5 * scale * loc.valueMult).toFixed(1),
                    minLength: +(7 * scale).toFixed(1),
                    maxLength: +(26 * scale).toFixed(1),
                    minDepth: minD,
                    maxDepth: maxD,
                    fightStrength: fight,
                    sizeScale: scale,
                    isSwift,
                    tooBigForRod: false,
                    bodyShape: shapes[(a + n) % shapes.length],
                    pattern: patterns[(a * 3 + n) % patterns.length],
                    colorPrimary: pal[0],
                    colorSecondary: pal[1],
                    colorFin: pal[2],
                    desc: `An endemic ${rarity.toLowerCase()} species native exclusively to ${loc.name}.`
                });
                idx++;
            }
        }

        // 5 Colossal Leviathans per region (Requires Industrial Harpoon)
        cfg.leviathans.forEach((levName, lIdx) => {
            const pal = cfg.palettes[lIdx % cfg.palettes.length];
            allSpecies.push({
                id: `${loc.id}_colossal_${lIdx}`,
                region: loc.id,
                name: levName,
                rarity: 'Colossal',
                baseValue: Math.round((520 + lIdx * 110) * loc.valueMult),
                minWeight: Math.round(180 * loc.valueMult),
                maxWeight: Math.round(640 * loc.valueMult),
                minLength: 95,
                maxLength: 220,
                minDepth: 0.45,
                maxDepth: 1.0,
                fightStrength: 1.0,
                sizeScale: 2.15,
                isSwift: false,
                tooBigForRod: true,
                bodyShape: lIdx % 2 === 0 ? 'pike' : 'fusiform',
                pattern: 'bars',
                colorPrimary: pal[0],
                colorSecondary: pal[1],
                colorFin: pal[2],
                desc: `A gargantuan apex leviathan of ${loc.name}. Far too heavy for any fishing rod—requires the Industrial Harpoon!`
            });
        });
    });

    return allSpecies;
}

const FISH_SPECIES = build600RegionFishSpecies();

// =========================================================================
// 3. PLAYABLE CHARACTER ROLES, OUTFITTER GEAR, TOWN QUESTS & EMPIRE
// =========================================================================
const SAVE_KEY = 'serene_waters_tycoon_v3';

const CHARACTER_ROLES = [
    {
        id: 'fisher',
        name: 'The Master Fisher',
        title: 'Veteran Line Angler',
        perk: '+25% Fish Weight & +20% Wider Strike Zone',
        desc: 'Born on the swells. Lands heavier trophy specimens and enjoys a wider green strike zone when reeling.',
        coatColor: '#0284c7',
        hatColor: '#f59e0b',
        saleBonus: 1.0,
        weightBonus: 1.25,
        strikeZoneBonus: 1.2,
        fleetBonus: 1.0,
        bustReduction: 0.0
    },
    {
        id: 'fishmonger',
        name: 'The Shrewd Fishmonger',
        title: 'Harbor Market Broker',
        perk: '+35% Market Fish Prices & +25% Quest Payouts',
        desc: 'Knows every buyer on the pier. Commands top dollar when offloading your boat hold and completing guild contracts.',
        coatColor: '#059669',
        hatColor: '#fef3c7',
        saleBonus: 1.35,
        weightBonus: 1.0,
        strikeZoneBonus: 1.0,
        fleetBonus: 1.05,
        bustReduction: 0.0
    },
    {
        id: 'industrialist',
        name: 'The Fleet Industrialist',
        title: 'Maritime Syndicate Magnate',
        perk: '+35% Passive Fleet Income & +15% Hold Capacity',
        desc: 'Builds automated processing lines and deep-water trawler fleets at unmatched efficiency.',
        coatColor: '#4f46e5',
        hatColor: '#cbd5e1',
        saleBonus: 1.1,
        weightBonus: 1.0,
        strikeZoneBonus: 1.0,
        fleetBonus: 1.35,
        bustReduction: 0.0
    },
    {
        id: 'smuggler',
        name: 'The Midnight Smuggler',
        title: 'Shadow Harbor Runner',
        perk: '-45% Coast Guard Bust Risk & +20% Contraband Yield',
        desc: 'Navigates foggy channels unseen. Slashes Coast Guard inspection risk when running high-stakes operations.',
        coatColor: '#be123c',
        hatColor: '#1e293b',
        saleBonus: 1.15,
        weightBonus: 1.05,
        strikeZoneBonus: 1.05,
        fleetBonus: 1.1,
        bustReduction: 0.45
    }
];

// =========================================================================
// 3B. FOUR CHARACTER-EXCLUSIVE STORY CAMPAIGNS (4 CHAPTERS EACH)
// =========================================================================
const ROLE_CAMPAIGNS = {
    fisher: {
        title: "The Master Fisher's Odyssey",
        subtitle: "Prove your angling mastery from quiet village creeks to colossal pelagic leviathans.",
        masteryPerk: "+15% Permanent Fish Value & +10% Reel Strike Zone",
        chapters: [
            {
                id: 'fisher_c1',
                chapter: 'Chapter I',
                title: 'First Light on Willow Creek',
                story: 'Every legend starts with a bamboo pole and patience. Land 5 fish and discover at least 4 unique species.',
                type: 'caught_and_species',
                targetCaught: 5,
                targetSpecies: 4,
                rewardCoins: 180
            },
            {
                id: 'fisher_c2',
                chapter: 'Chapter II',
                title: 'The Heavyweight Contender',
                story: 'Word of your casting precision has reached Emerald Mist Lake. Land a single fish weighing 8 lbs or more.',
                type: 'max_single_weight',
                targetWeight: 8,
                rewardCoins: 650
            },
            {
                id: 'fisher_c3',
                chapter: 'Chapter III',
                title: 'Deep-Water Specimen Hunter',
                story: 'Venture into deeper currents and land 6 Rare, Epic, Legendary, or Mythic specimens.',
                type: 'rare_plus_caught',
                targetRare: 6,
                rewardCoins: 2400
            },
            {
                id: 'fisher_c4',
                chapter: 'Chapter IV',
                title: 'Leviathan Harpooner',
                story: 'Mount an Industrial Harpoon Cannon and spear your first Colossal Leviathan from the deep.',
                type: 'colossal_caught',
                targetColossal: 1,
                rewardCoins: 12000
            }
        ]
    },
    fishmonger: {
        title: "The Harbor Baron's Ledger",
        subtitle: "Dominate waterfront commerce, fulfill guild contracts, and build a coastal trade empire.",
        masteryPerk: "+20% Permanent Market Sale Prices",
        chapters: [
            {
                id: 'monger_c1',
                chapter: 'Chapter I',
                title: 'Opening the Pier Stall',
                story: 'Establish your presence on the boardwalk. Sell 6 fish at the Fishmonger Market and acquire 1 Harbor Stall.',
                type: 'sold_and_stall',
                targetSold: 6,
                targetStalls: 1,
                rewardCoins: 220
            },
            {
                id: 'monger_c2',
                chapter: 'Chapter II',
                title: 'Guild Favored Supplier',
                story: 'The Harbormaster trusts your fresh deliveries. Complete 2 Guild Quests or Villager Tasks.',
                type: 'quests_completed',
                targetQuests: 2,
                rewardCoins: 750
            },
            {
                id: 'monger_c3',
                chapter: 'Chapter III',
                title: 'Artisan Export House',
                story: 'Expand your curing operations by owning 2 Artisan Timber Smokehouses and accumulating $4,500 Net Worth.',
                type: 'smokehouse_and_worth',
                targetSmoke: 2,
                targetWorth: 4500,
                rewardCoins: 2800
            },
            {
                id: 'monger_c4',
                chapter: 'Chapter IV',
                title: 'Sovereign Trade Monopoly',
                story: 'Command the international exchange with $35,000 lifetime earnings across your ports of call.',
                type: 'lifetime_earnings',
                targetEarnings: 35000,
                rewardCoins: 14000
            }
        ]
    },
    industrialist: {
        title: "The Oceanic Syndicate Blueprint",
        subtitle: "Scale from a single skiff into a mechanized deep-sea harvesting powerhouse.",
        masteryPerk: "+25% Permanent Passive Fleet Yield",
        chapters: [
            {
                id: 'ind_c1',
                chapter: 'Chapter I',
                title: 'Hiring the First Crew',
                story: 'Manual labor only scales so far. Recruit 2 Hired Skiff Deckhands in Empire HQ.',
                type: 'deckhands_owned',
                targetDeckhands: 2,
                rewardCoins: 350
            },
            {
                id: 'ind_c2',
                chapter: 'Chapter II',
                title: 'Automated Cashflow',
                story: 'Optimize your coastal logistics until your fleet generates at least $45/sec in passive revenue.',
                type: 'passive_rate',
                targetRate: 45,
                rewardCoins: 1400
            },
            {
                id: 'ind_c3',
                chapter: 'Chapter III',
                title: 'Steel-Hulled Armada',
                story: 'Commission 2 Commercial Trawler Vessels to harvest offshore schools around the clock.',
                type: 'trawlers_owned',
                targetTrawlers: 2,
                rewardCoins: 6500
            },
            {
                id: 'ind_c4',
                chapter: 'Chapter IV',
                title: 'Hadal Extraction Platform',
                story: 'Construct an Automated Coastal Cannery and reach $120,000 Net Worth.',
                type: 'cannery_and_worth',
                targetCannery: 1,
                targetWorth: 120000,
                rewardCoins: 25000
            }
        ]
    },
    smuggler: {
        title: "The Shadow Tide Run",
        subtitle: "Outsmart Coast Guard patrols, run high-stakes contraband, and amass an illicit fortune.",
        masteryPerk: "+25% Contraband Payouts & -20% Patrol Bust Chance",
        chapters: [
            {
                id: 'smug_c1',
                chapter: 'Chapter I',
                title: 'Testing the Waters',
                story: 'Activate at least 1 Risk & Contraband operation and land 4 catches under patrol watch.',
                type: 'risk_catches',
                targetRiskCatches: 4,
                rewardCoins: 280
            },
            {
                id: 'smug_c2',
                chapter: 'Chapter II',
                title: 'Midnight Offload',
                story: 'Run 2 simultaneous Risk tactics and sell $1,200 worth of high-risk catches at the market.',
                type: 'dual_risk_earnings',
                targetActiveRisks: 2,
                targetEarnings: 1200,
                rewardCoins: 1100
            },
            {
                id: 'smug_c3',
                chapter: 'Chapter III',
                title: 'Phantom of the Fjord',
                story: 'Unlock Sunburst Coral Atoll or beyond and land 8 catches while running active contraband tactics.',
                type: 'risk_catches',
                targetRiskCatches: 12,
                rewardCoins: 4200
            },
            {
                id: 'smug_c4',
                chapter: 'Chapter IV',
                title: 'Kingpin of the Seven Ports',
                story: 'Amass $60,000 Net Worth while commanding at least 3 active Syndicate operations.',
                type: 'syndicate_kingpin',
                targetActiveRisks: 3,
                targetWorth: 60000,
                rewardCoins: 20000
            }
        ]
    }
};

const UPGRADES = {
    rod: {
        title: 'Precision Fishing Rod',
        tiers: [
            { name: 'Bamboo Creek Pole', cost: 0, power: 1.0, desc: 'Standard flexible cane rod for shallow casts.' },
            { name: 'Fiberglass Pier Rod', cost: 65, power: 1.25, desc: 'Longer cast reach & faster reel progress.' },
            { name: 'Carbon Graphite Composite', cost: 280, power: 1.55, desc: 'High-modulus blank for deep channel specimens.' },
            { name: 'Titanium Offshore Jigging Rod', cost: 1200, power: 1.9, desc: 'Heavy-duty offshore rod for Epic & Mythic fights.' },
            { name: 'Abyssal Hydraulic Winch-Rod', cost: 6500, power: 2.35, desc: 'Industrial-grade motorized rod for hadal waters.' }
        ]
    },
    hold: {
        title: 'Vessel Livewell Hold',
        tiers: [
            { name: 'Wooden Skiff Crate', cost: 0, capacity: 12, desc: 'Holds up to 12 caught fish before returning to town.' },
            { name: 'Aerated Ice Locker', cost: 85, capacity: 24, desc: 'Expands vessel livewell capacity to 24 fish.' },
            { name: 'Refrigerated Brine Tank', cost: 360, capacity: 45, desc: 'Expands vessel livewell capacity to 45 fish.' },
            { name: 'Pressurized Bulk Hold', cost: 1650, capacity: 80, desc: 'Expands vessel livewell capacity to 80 fish.' },
            { name: 'Factory Ship Freezer Bay', cost: 8200, capacity: 150, desc: 'Massive 150-fish livewell hold for long expeditions.' }
        ]
    },
    line: {
        title: 'Braided Line & Reel Drag',
        tiers: [
            { name: 'Monofilament Spool', cost: 0, zoneScale: 1.0, desc: 'Standard green strike zone during reeling.' },
            { name: 'Fluorocarbon Leader', cost: 75, zoneScale: 1.14, desc: '+14% wider strike zone & calmer needle speed.' },
            { name: 'Dyneema 8-Strand Braid', cost: 320, zoneScale: 1.28, desc: '+28% wider strike zone & stronger hooksets.' },
            { name: 'Kevlar Core Deep-Drop Line', cost: 1450, zoneScale: 1.42, desc: '+42% wider strike zone for swift rare fish.' }
        ]
    },
    bait: {
        title: 'Lures & Sonar Chum',
        tiers: [
            { name: 'Bread Dough & Worms', cost: 0, luck: 0, desc: 'Attracts local Common & Uncommon fish.' },
            { name: 'Spinnerbait & Spoon Lure', cost: 90, luck: 12, desc: '+12% chance of attracting Rare & Epic species.' },
            { name: 'Bioluminescent Squid Jig', cost: 420, luck: 26, desc: '+26% higher rare & trophy spawn weighting.' },
            { name: 'Pheromone Apex Attractant', cost: 2100, luck: 45, desc: '+45% attraction for Legendary & Mythic fish.' }
        ]
    },
    sonar: {
        title: 'Hydro-Acoustic Fish Radar',
        tiers: [
            { name: 'Visual Surface Watch', cost: 0, level: 0, desc: 'No underwater rarity aura display.' },
            { name: 'Echo Depth Finder', cost: 150, level: 1, desc: 'Highlights Rare+ fish silhouettes underwater.' },
            { name: '3D Multi-Beam Chirp Sonar', cost: 950, level: 2, desc: 'Reveals exact rarity auras & Colossal leviathans.' }
        ]
    },
    harpoon: {
        title: 'Industrial Harpoon Cannon',
        tiers: [
            { name: 'Not Installed', cost: 0, unlocked: false, desc: 'Required to land Colossal Leviathans.' },
            { name: 'Pneumatic Deck Harpoon', cost: 1800, unlocked: true, desc: 'Unlocks Harpoon Mode to hunt Colossal Leviathans!' },
            { name: 'Electro-Hydraulic Mega Harpoon', cost: 9500, unlocked: true, desc: '+35% Harpoon payout & wider critical hit zone.' }
        ]
    }
};

const BUSINESS_UNITS = [
    {
        id: 'village_stall',
        name: 'Harbor Fishmonger Stall',
        desc: 'A bustling pier-side retail counter selling fresh daily catch to townsfolk.',
        baseCost: 60,
        costMult: 1.42,
        incomePerSec: 1.5,
        saleBonusPct: 4
    },
    {
        id: 'deckhands',
        name: 'Hired Skiff Deckhands',
        desc: 'Local crewmen running auxiliary skiffs along the coast.',
        baseCost: 260,
        costMult: 1.45,
        incomePerSec: 6.5,
        saleBonusPct: 6
    },
    {
        id: 'smokehouse',
        name: 'Artisan Timber Smokehouse',
        desc: 'Cures and smokes specialty fillets for regional export.',
        baseCost: 1150,
        costMult: 1.48,
        incomePerSec: 28,
        saleBonusPct: 9
    },
    {
        id: 'trawlers',
        name: 'Commercial Trawler Vessel',
        desc: 'Steel-hulled offshore trawlers harvesting deep pelagic schools.',
        baseCost: 5400,
        costMult: 1.52,
        incomePerSec: 125,
        saleBonusPct: 12
    },
    {
        id: 'cannery',
        name: 'Automated Coastal Cannery',
        desc: 'High-volume processing & cold-storage distribution plant.',
        baseCost: 26000,
        costMult: 1.55,
        incomePerSec: 580,
        saleBonusPct: 16
    },
    {
        id: 'submersible_rig',
        name: 'Deep-Sea Sonar Factory Rig',
        desc: 'Oceanic industrial platform harvesting abyssal & polar treasures.',
        baseCost: 135000,
        costMult: 1.6,
        incomePerSec: 2850,
        saleBonusPct: 22
    }
];

const RISK_TACTICS = [
    {
        id: 'sanctuary_poach',
        name: 'Protected Sanctuary Poaching',
        desc: 'Cast inside restricted marine breeding reserves for +45% fish value and +15% rare luck.',
        payoutMult: 1.45,
        luckAdd: 15,
        fleetMult: 1.0,
        bustRisk: 0.16,
        finePct: 0.25
    },
    {
        id: 'black_market',
        name: 'Unlicensed Black-Market Syndicate',
        desc: 'Bypass harbor excise taxes for +55% fish sale prices, risking Coast Guard confiscation.',
        payoutMult: 1.55,
        luckAdd: 0,
        fleetMult: 1.15,
        bustRisk: 0.20,
        finePct: 0.32
    },
    {
        id: 'depth_charges',
        name: 'Seismic Acoustic Pulse Charges',
        desc: 'Stun deep-water shoals for +25% rare attraction & +35% fleet yield, drawing patrol cutters.',
        payoutMult: 1.25,
        luckAdd: 25,
        fleetMult: 1.35,
        bustRisk: 0.22,
        finePct: 0.35
    },
    {
        id: 'drift_nets',
        name: 'Illegal Overharvest Drift-Nets',
        desc: 'Run oversized pelagic nets for +65% passive fleet income, risking severe maritime fines.',
        payoutMult: 1.15,
        luckAdd: 5,
        fleetMult: 1.65,
        bustRisk: 0.24,
        finePct: 0.40
    }
];

const RIVAL_CAPTAINS = [
    { name: 'Vanguard Oceanic Corp', title: 'Global Syndicate', worth: 4850000 },
    { name: 'Capt. Astrid Lindqvist', title: 'Nordic Fleet Admiral', worth: 1920000 },
    { name: 'Kuroshio Deep-Sea Ltd.', title: 'Pacific Conglomerate', worth: 840000 },
    { name: 'Capt. Mateo Salazar', title: 'Atoll Pearl Baron', worth: 390000 },
    { name: 'Boreal Harvest Group', title: 'Polar Icebreaker Fleet', worth: 175000 },
    { name: 'Capt. Eleanor Vance', title: 'High-Seas Industrialist', worth: 82000 },
    { name: 'Red Tide Smuggling Ring', title: 'Shadow Syndicate', worth: 41000 },
    { name: 'Capt. Henrik Solberg', title: 'Fjord Trawler Captain', worth: 19500 },
    { name: 'Emerald Basin Co-op', title: 'Regional Fishery', worth: 8400 },
    { name: 'Capt. Jonah Mercer', title: 'Harbor Master', worth: 3600 },
    { name: 'Coral Reef Charters', title: 'Lagoon Outfitters', worth: 1450 },
    { name: 'Old Man Barnaby', title: 'Veteran Pier Angler', worth: 520 },
    { name: 'Molly & Sons Fishmongers', title: 'Village Stall', worth: 180 },
    { name: 'Deckhand Toby', title: 'Skiff Apprentice', worth: 55 }
];

function generateTownQuests(regionId, netWorth) {
    const loc = LOCATIONS.find(l => l.id === regionId) || LOCATIONS[0];
    const scale = Math.max(1, Math.round(loc.valueMult * (1 + Math.log10(Math.max(10, netWorth)) * 0.35)));
    return [
        {
            id: 'q_sell_count',
            title: `${loc.townName} Daily Supply`,
            desc: 'Sell caught fish at the Fishmonger Market.',
            type: 'sell_count',
            target: 3,
            progress: 0,
            reward: 45 * scale
        },
        {
            id: 'q_sell_weight',
            title: 'Pier Cannery Weight Order',
            desc: 'Sell total fish weight (lbs) at the Harbor Market.',
            type: 'sell_weight',
            target: Math.round(12 * loc.valueMult),
            progress: 0,
            reward: 75 * scale
        },
        {
            id: 'q_catch_rare',
            title: 'Guild Specimen Bounty',
            desc: 'Land Uncommon or rarer fish from local waters.',
            type: 'catch_rare',
            target: 2,
            progress: 0,
            reward: 110 * scale
        }
    ];
}

function getDefaultSave() {
    return {
        captainName: 'Capt. Vance',
        characterId: 'fisher',
        coins: 20,
        lifetimeEarnings: 20,
        totalCaught: 0,
        totalSold: 0,
        maxSingleWeight: 0,
        rarePlusCaught: 0,
        colossalCaught: 0,
        questsCompleted: 0,
        riskCatches: 0,
        claimedCampaignChapters: {},
        finesPaid: 0,
        currentLocation: 'creek',
        harpoonMode: false,
        hold: [],
        quests: generateTownQuests('creek', 20),
        activeVillagerTask: null,
        seenBriefings: {},
        activeRisks: {},
        upgrades: { rod: 0, hold: 0, line: 0, bait: 0, sonar: 0, harpoon: 0 },
        business: { village_stall: 0, deckhands: 0, smokehouse: 0, trawlers: 0, cannery: 0, submersible_rig: 0 },
        caughtSpecies: {}
    };
}

function loadProgress() {
    const def = getDefaultSave();
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return def;
        const parsed = JSON.parse(raw);
        const offlineRes = computeOfflineEarnings(parsed);
        if (offlineRes) {
            parsed.coins = (parsed.coins || 0) + offlineRes.earned;
            parsed.lifetimeEarnings = (parsed.lifetimeEarnings || 0) + offlineRes.earned;
            pendingOfflineReport = offlineRes;
        }
        return {
            ...def,
            ...parsed,
            lastSavedAt: Date.now(),
            hold: Array.isArray(parsed.hold) ? parsed.hold : [],
            quests: Array.isArray(parsed.quests) && parsed.quests.length > 0 ? parsed.quests : def.quests,
            activeVillagerTask: parsed.activeVillagerTask || null,
            seenBriefings: { ...(parsed.seenBriefings || {}) },
            claimedCampaignChapters: { ...(parsed.claimedCampaignChapters || {}) },
            activeRisks: { ...(parsed.activeRisks || {}) },
            upgrades: { ...def.upgrades, ...(parsed.upgrades || {}) },
            business: { ...def.business, ...(parsed.business || {}) },
            caughtSpecies: parsed.caughtSpecies || {}
        };
    } catch (e) {
        return def;
    }
}

function saveProgress() {
    try {
        player.lastSavedAt = Date.now();
        localStorage.setItem(SAVE_KEY, JSON.stringify(player));
    } catch (e) {}
}

let pendingOfflineReport = null;

function computeOfflineEarnings(savedObj) {
    if (!savedObj || !savedObj.lastSavedAt || !savedObj.business) return null;
    const elapsedSec = Math.floor((Date.now() - savedObj.lastSavedAt) / 1000);
    if (elapsedSec < 15) return null;
    const cappedSec = Math.min(elapsedSec, 8 * 3600); // Up to 8 hours offline cap
    let baseRate = 0;
    for (const unit of BUSINESS_UNITS) {
        baseRate += (savedObj.business[unit.id] || 0) * unit.incomePerSec;
    }
    if (baseRate <= 0) return null;
    const char = CHARACTER_ROLES.find(c => c.id === savedObj.characterId) || CHARACTER_ROLES[0];
    const offlineEfficiency = 0.65;
    const earned = Math.floor(baseRate * char.fleetBonus * offlineEfficiency * cappedSec);
    if (earned < 1) return null;
    return { earned, elapsedSec: cappedSec };
}

let player = loadProgress();
let activeTownTab = 'market';

function getRoleCampaignStatus(roleId = player.characterId) {
    const camp = ROLE_CAMPAIGNS[roleId] || ROLE_CAMPAIGNS.fisher;
    const claimed = player.claimedCampaignChapters || {};
    let completedCount = 0;

    const chapters = camp.chapters.map((ch, idx) => {
        const isClaimed = !!claimed[ch.id];
        if (isClaimed) completedCount++;
        let current = 0;
        let max = 1;
        let ready = false;

        if (ch.type === 'caught_and_species') {
            const spCount = Object.keys(player.caughtSpecies || {}).length;
            current = Math.min(ch.targetCaught, player.totalCaught || 0) + Math.min(ch.targetSpecies, spCount);
            max = ch.targetCaught + ch.targetSpecies;
            ready = (player.totalCaught || 0) >= ch.targetCaught && spCount >= ch.targetSpecies;
        } else if (ch.type === 'max_single_weight') {
            current = Math.min(ch.targetWeight, +(player.maxSingleWeight || 0).toFixed(1));
            max = ch.targetWeight;
            ready = (player.maxSingleWeight || 0) >= ch.targetWeight;
        } else if (ch.type === 'rare_plus_caught') {
            current = Math.min(ch.targetRare, player.rarePlusCaught || 0);
            max = ch.targetRare;
            ready = (player.rarePlusCaught || 0) >= ch.targetRare;
        } else if (ch.type === 'colossal_caught') {
            current = Math.min(ch.targetColossal, player.colossalCaught || 0);
            max = ch.targetColossal;
            ready = (player.colossalCaught || 0) >= ch.targetColossal;
        } else if (ch.type === 'sold_and_stall') {
            const stalls = player.business.village_stall || 0;
            current = Math.min(ch.targetSold, player.totalSold || 0) + Math.min(ch.targetStalls, stalls);
            max = ch.targetSold + ch.targetStalls;
            ready = (player.totalSold || 0) >= ch.targetSold && stalls >= ch.targetStalls;
        } else if (ch.type === 'quests_completed') {
            current = Math.min(ch.targetQuests, player.questsCompleted || 0);
            max = ch.targetQuests;
            ready = (player.questsCompleted || 0) >= ch.targetQuests;
        } else if (ch.type === 'smokehouse_and_worth') {
            const smoke = player.business.smokehouse || 0;
            const w = getNetWorth();
            current = Math.min(ch.targetSmoke, smoke) + (w >= ch.targetWorth ? 1 : 0);
            max = ch.targetSmoke + 1;
            ready = smoke >= ch.targetSmoke && w >= ch.targetWorth;
        } else if (ch.type === 'lifetime_earnings') {
            current = Math.min(ch.targetEarnings, Math.round(player.lifetimeEarnings || 0));
            max = ch.targetEarnings;
            ready = (player.lifetimeEarnings || 0) >= ch.targetEarnings;
        } else if (ch.type === 'deckhands_owned') {
            current = Math.min(ch.targetDeckhands, player.business.deckhands || 0);
            max = ch.targetDeckhands;
            ready = (player.business.deckhands || 0) >= ch.targetDeckhands;
        } else if (ch.type === 'passive_rate') {
            const rate = Math.round(getPassiveIncomePerSec());
            current = Math.min(ch.targetRate, rate);
            max = ch.targetRate;
            ready = rate >= ch.targetRate;
        } else if (ch.type === 'trawlers_owned') {
            current = Math.min(ch.targetTrawlers, player.business.trawlers || 0);
            max = ch.targetTrawlers;
            ready = (player.business.trawlers || 0) >= ch.targetTrawlers;
        } else if (ch.type === 'cannery_and_worth') {
            const can = player.business.cannery || 0;
            const w = getNetWorth();
            current = Math.min(ch.targetCannery, can) + (w >= ch.targetWorth ? 1 : 0);
            max = ch.targetCannery + 1;
            ready = can >= ch.targetCannery && w >= ch.targetWorth;
        } else if (ch.type === 'risk_catches') {
            current = Math.min(ch.targetRiskCatches, player.riskCatches || 0);
            max = ch.targetRiskCatches;
            ready = (player.riskCatches || 0) >= ch.targetRiskCatches;
        } else if (ch.type === 'dual_risk_earnings') {
            const activeR = Object.values(player.activeRisks || {}).filter(Boolean).length;
            const earn = Math.round(player.lifetimeEarnings || 0);
            current = Math.min(ch.targetActiveRisks, activeR) + (earn >= ch.targetEarnings ? 1 : 0);
            max = ch.targetActiveRisks + 1;
            ready = activeR >= ch.targetActiveRisks && earn >= ch.targetEarnings;
        } else if (ch.type === 'syndicate_kingpin') {
            const activeR = Object.values(player.activeRisks || {}).filter(Boolean).length;
            const w = getNetWorth();
            current = Math.min(ch.targetActiveRisks, activeR) + (w >= ch.targetWorth ? 1 : 0);
            max = ch.targetActiveRisks + 1;
            ready = activeR >= ch.targetActiveRisks && w >= ch.targetWorth;
        }

        const prevClaimed = idx === 0 ? true : !!claimed[camp.chapters[idx - 1].id];
        const unlocked = prevClaimed || isClaimed || ready;
        return { ...ch, isClaimed, ready, unlocked, current, max };
    });

    const masteryUnlocked = completedCount >= camp.chapters.length;
    return { camp, chapters, completedCount, total: camp.chapters.length, masteryUnlocked };
}

function hasRoleMastery(roleId) {
    const camp = ROLE_CAMPAIGNS[roleId];
    if (!camp) return false;
    const claimed = player.claimedCampaignChapters || {};
    return camp.chapters.every(ch => !!claimed[ch.id]);
}

function getActiveCharacter() {
    return CHARACTER_ROLES.find(c => c.id === player.characterId) || CHARACTER_ROLES[0];
}

function getActiveLocation() {
    return LOCATIONS.find(l => l.id === player.currentLocation) || LOCATIONS[0];
}

function getHoldCapacity() {
    const tier = UPGRADES.hold.tiers[player.upgrades.hold || 0];
    const base = tier ? tier.capacity : 12;
    return Math.round(base * (getActiveCharacter().id === 'industrialist' ? 1.15 : 1.0));
}

function getHoldTotalValue() {
    return player.hold.reduce((sum, item) => sum + (item.value || 0), 0);
}

function getRiskModifiers() {
    let payoutMult = 1.0;
    let luckAdd = 0;
    let fleetMult = 1.0;
    let totalBustRisk = 0;
    let maxFinePct = 0;

    for (const tactic of RISK_TACTICS) {
        if (player.activeRisks[tactic.id]) {
            payoutMult *= tactic.payoutMult;
            luckAdd += tactic.luckAdd;
            fleetMult *= tactic.fleetMult;
            totalBustRisk += tactic.bustRisk;
            maxFinePct = Math.max(maxFinePct, tactic.finePct);
        }
    }
    const char = getActiveCharacter();
    if (char.id === 'smuggler' && totalBustRisk > 0) {
        payoutMult *= hasRoleMastery('smuggler') ? 1.45 : 1.20;
    }
    if (hasRoleMastery('smuggler')) totalBustRisk *= 0.80;
    return {
        payoutMult,
        luckAdd,
        fleetMult,
        totalBustRisk: Math.min(0.75, totalBustRisk * (1 - char.bustReduction)),
        maxFinePct
    };
}

function getBusinessUnitCost(unit) {
    const owned = player.business[unit.id] || 0;
    return Math.round(unit.baseCost * Math.pow(unit.costMult, owned));
}

function getPassiveIncomePerSec() {
    let total = 0;
    for (const unit of BUSINESS_UNITS) {
        total += (player.business[unit.id] || 0) * unit.incomePerSec;
    }
    const ev = getActiveWorldEvent();
    const risk = getRiskModifiers();
    const char = getActiveCharacter();
    const indMastery = hasRoleMastery('industrialist') ? 1.25 : 1.0;
    return total * ev.incomeMult * risk.fleetMult * char.fleetBonus * indMastery;
}

function getBusinessSaleMultiplier() {
    let bonusPct = 0;
    for (const unit of BUSINESS_UNITS) {
        bonusPct += (player.business[unit.id] || 0) * unit.saleBonusPct;
    }
    const char = getActiveCharacter();
    const mBonus = (hasRoleMastery('fishmonger') ? 1.20 : 1.0) * (hasRoleMastery('fisher') ? 1.15 : 1.0);
    return (1 + bonusPct / 100) * char.saleBonus * mBonus;
}

function getNetWorth() {
    let assetVal = 0;
    for (const unit of BUSINESS_UNITS) {
        const owned = player.business[unit.id] || 0;
        for (let i = 0; i < owned; i++) {
            assetVal += Math.round(unit.baseCost * Math.pow(unit.costMult, i) * 0.75);
        }
    }
    return Math.round(player.coins + getHoldTotalValue() + assetVal);
}

function formatMoney(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e4) return (num / 1e3).toFixed(1) + 'K';
    return Math.round(num).toLocaleString();
}

// =========================================================================
// 4. DYNAMIC WEATHER & MARKET WORLD EVENTS
// =========================================================================
const WORLD_EVENTS = [
    { id: 'calm', name: 'Calm Seas', icon: 'sun', valueMult: 1.0, incomeMult: 1.0, biteMult: 1.0, needleMult: 1.0, desc: 'Steady tides and fair harbor demand.' },
    { id: 'storm', name: 'Gale Squall', icon: 'storm', valueMult: 1.35, incomeMult: 0.75, biteMult: 1.25, needleMult: 1.22, desc: 'Choppy waves speed up reeling, but catches fetch +35%!' },
    { id: 'frenzy', name: 'Feeding Frenzy', icon: 'frenzy', valueMult: 1.15, incomeMult: 1.2, biteMult: 1.55, needleMult: 0.95, desc: 'Fish strike rapidly near the surface!' },
    { id: 'boom', name: 'Export Price Surge', icon: 'boom', valueMult: 1.50, incomeMult: 1.45, biteMult: 1.0, needleMult: 1.0, desc: 'Foreign buyers are paying +50% across all ports!' },
    { id: 'drought', name: 'Low-Tide Ebb', icon: 'drought', valueMult: 1.10, incomeMult: 0.85, biteMult: 0.75, needleMult: 1.05, desc: 'Shallow water slows bites slightly.' },
    { id: 'crash', name: 'Market Glut', icon: 'crash', valueMult: 0.78, incomeMult: 0.80, biteMult: 1.0, needleMult: 1.0, desc: 'Temporary oversupply lowers harbor prices.' }
];

let activeEventIndex = 0;
let eventTimeRemaining = 55;

function getActiveWorldEvent() {
    return WORLD_EVENTS[activeEventIndex] || WORLD_EVENTS[0];
}

function cycleWorldEvent() {
    activeEventIndex = (activeEventIndex + 1) % WORLD_EVENTS.length;
    eventTimeRemaining = 48 + Math.floor(Math.random() * 25);
    const ev = getActiveWorldEvent();
    updateHUD();
    if (ev.id !== 'calm') {
        showToast(`Weather & Market Shift: ${ev.name} — ${ev.desc}`, 'border-sky-400 text-sky-200');
    }
}

// =========================================================================
// 5. CANVAS ENGINE, FISHING PHYSICS, TIMING REEL & VISUALS
// =========================================================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
let dpr = Math.min(window.devicePixelRatio || 1, 2);

const TIME_MODES = ['Daylight', 'Golden Dusk', 'Starlit Night'];
let timeModeIndex = 0;

const GAME_STATE = {
    IDLE: 'IDLE',
    CHARGING: 'CHARGING',
    CASTING: 'CASTING',
    WAITING: 'WAITING',
    BITE: 'BITE',
    REELING: 'REELING',
    HARPOONING: 'HARPOONING',
    ESCAPED: 'ESCAPED'
};

let worldScene = 'SEA'; // 'SEA' or 'TOWN'
let state = GAME_STATE.IDLE;
let castPower = 0;
let castChargeDir = 1;
let waitTimer = 0;
let biteWindowTimer = 0;

let bobber = { x: 0, y: 0, vx: 0, vy: 0, targetX: 0, targetY: 0, depthRatio: 0.3, splashAnim: 0 };
let ambientFish = [];
let hookedFish = null;
let particles = [];
let bubbles = [];
let clouds = [];
let rainDrops = [];
let seagulls = [];
let chimneySmoke = [];

// Harpoon Aim-and-Fire Mini-Game State (Upgraded with Aim-Assist Lock, Generous Hitboxes & Fast Bolts)
let harpoonAimAngle = 0.35;
let harpoonAimDir = 1;
let harpoonBoltsLeft = 6;
let harpoonHits = 0;
let harpoonHitsRequired = 2;
let harpoonFlight = null; // { x, y, vx, vy, active }
let harpoonTargetPos = { x: 0, y: 0, vx: 75, vy: 30 };
let harpoonWaveTimer = 0;
let harpoonLockQuality = 0; // 0..1 proximity of aim line to Leviathan center

// Multi-Challenge Reeling Mini-Game State (6 Distinct Regular Fish Catch Challenges!)
// 1. 'classic_bar'   : Classic Oscillating Timing Bar
// 2. 'sonar_ring'    : Contracting Sonar Pulse Ring (Tap as shrinking ring enters target annulus)
// 3. 'tension_hold'  : Deep-Current Tension Hold (Hold/Tap to keep buoyancy float inside green drift zone)
// 4. 'triple_rhythm' : Swift Barracuda Triple-Beat Cadence (Hit 3 rhythmic beat markers in sequence)
// 5. 'dual_pendulum' : Twin-Current Counter-Needle Sync (Strike when both needles cross the central lock)
// 6. 'tide_dial'     : Rotating Compass Tide Dial (Tap as spinning compass hand sweeps through arc)
const REEL_CHALLENGE_TYPES = [
    { id: 'classic_bar',   label: 'PRECISION TIMING BAR', prompt: 'Tap or press Spacebar when the needle enters the GREEN or GOLD zone!' },
    { id: 'sonar_ring',    label: 'SONAR PULSE LOCK',     prompt: 'Tap or press Spacebar as the shrinking white ring aligns with the GREEN target ring!' },
    { id: 'tension_hold',  label: 'CURRENT DRIFT HOLD',   prompt: 'HOLD or tap repeatedly to keep the bobber float inside the GREEN current band!' },
    { id: 'triple_rhythm', label: 'TRIPLE-BEAT CADENCE',  prompt: 'Tap or press Spacebar on each of the 3 glowing rhythm pulses as the sweep crosses!' },
    { id: 'dual_pendulum', label: 'TWIN-NEEDLE SYNC',     prompt: 'Tap or press Spacebar when BOTH opposing needles converge inside the center lock!' },
    { id: 'tide_dial',     label: 'COMPASS TIDE SWEEP',   prompt: 'Tap or press Spacebar when the rotating compass hand sweeps across the GREEN arc!' }
];
let activeReelChallenge = REEL_CHALLENGE_TYPES[0];
let reelProgress = 0.25;
let reelNeedlePos = 0.5;
let reelNeedle2Pos = 0.5;
let reelNeedleDir = 1;
let reelZoneCenter = 0.5;
let reelZoneWidth = 0.26;
let reelCritWidth = 0.08;
let reelRingRadius = 1.0;
let reelDialAngle = 0;
let reelDialTargetAngle = 1.2;
let reelHoldingInput = false;
let reelRhythmIndex = 0;
let reelRhythmHitMask = [false, false, false];
let reelCombo = 0;
let reelFeedbackText = '';
let reelFeedbackColor = '#34d399';
let reelFeedbackTimer = 0;
let lastCatchData = null;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function getWaterlineY() {
    return Math.round(height * 0.36);
}

function getBoatPos() {
    return { x: Math.max(95, width * 0.14), y: getWaterlineY() - 6 };
}

function getRodTipPos() {
    const boat = getBoatPos();
    const bend = (state === GAME_STATE.REELING || state === GAME_STATE.BITE) ? 14 : (state === GAME_STATE.CHARGING ? -10 : 0);
    return { x: boat.x + 54, y: boat.y - 54 + bend };
}

function initEnvironment() {
    clouds = Array.from({ length: 6 }, (_, i) => ({
        x: (width / 5) * i,
        y: 35 + (i % 3) * 28,
        scale: 0.7 + (i % 3) * 0.25,
        speed: 6 + (i % 4) * 3
    }));
    seagulls = Array.from({ length: 5 }, (_, i) => ({
        x: (width / 4) * i + 40,
        y: 55 + (i % 3) * 24,
        speed: 22 + (i % 3) * 9,
        flapPhase: i * 1.4,
        scale: 0.75 + (i % 2) * 0.25
    }));
    bubbles = Array.from({ length: 24 }, () => ({
        x: Math.random() * width,
        y: getWaterlineY() + Math.random() * (height - getWaterlineY()),
        r: 1.5 + Math.random() * 3,
        speed: 14 + Math.random() * 22
    }));
    rainDrops = Array.from({ length: 85 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        len: 12 + Math.random() * 14,
        speed: 420 + Math.random() * 220
    }));
    spawnRegionAmbientFish();
}

function spawnRegionAmbientFish() {
    const loc = getActiveLocation();
    const regionalPool = FISH_SPECIES.filter(f => f.region === loc.id);
    const waterTop = getWaterlineY() + 32;
    const waterBot = height - 34;

    ambientFish = Array.from({ length: 16 }, () => {
        const species = pickWeightedSpecies(regionalPool);
        const depthRatio = species.minDepth + Math.random() * (species.maxDepth - species.minDepth);
        const y = waterTop + depthRatio * Math.max(80, waterBot - waterTop);
        const dir = Math.random() < 0.5 ? 1 : -1;
        const baseSpeed = species.isSwift ? (115 + Math.random() * 65) : (26 + Math.random() * 34);
        return {
            species,
            x: Math.random() * width,
            y,
            depthRatio,
            dir,
            speed: baseSpeed,
            tailPhase: Math.random() * Math.PI * 2,
            attracted: false
        };
    });
}

function pickWeightedSpecies(pool) {
    const baitTier = UPGRADES.bait.tiers[player.upgrades.bait || 0];
    const risk = getRiskModifiers();
    const luckBoost = (baitTier ? baitTier.luck : 0) + risk.luckAdd;

    const weights = pool.map(sp => {
        let w = RARITY_WEIGHTS[sp.rarity] || 10;
        if (sp.rarity !== 'Common' && sp.rarity !== 'Uncommon') {
            w *= (1 + luckBoost / 45);
        }
        if (sp.rarity === 'Colossal' && !UPGRADES.harpoon.tiers[player.upgrades.harpoon || 0]?.unlocked) {
            w *= 0.45;
        }
        return w;
    });

    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < pool.length; i++) {
        r -= weights[i];
        if (r <= 0) return pool[i];
    }
    return pool[0];
}

function startChargingCast() {
    if (state !== GAME_STATE.IDLE) return;
    if (player.hold.length >= getHoldCapacity()) {
        showToast('Your Boat Hold is full! Walk to Town to sell your fish.', 'border-amber-400 text-amber-200');
        return;
    }
    sound.init();
    state = GAME_STATE.CHARGING;
    castPower = 0.12;
    castChargeDir = 1;
    updateActionPrompt('Release to cast your line into the deep!', 'bg-amber-400');
}

function releaseCast() {
    if (state !== GAME_STATE.CHARGING) return;
    const rodTier = UPGRADES.rod.tiers[player.upgrades.rod || 0];
    const reachMult = rodTier ? Math.min(1.3, 0.85 + rodTier.power * 0.18) : 1.0;

    const waterTop = getWaterlineY() + 26;
    const waterBot = height - 42;
    const minX = getBoatPos().x + 110;
    const maxX = Math.max(minX + 120, width - 65);

    const effectivePower = Math.min(1, castPower * reachMult);
    bobber.targetX = minX + effectivePower * (maxX - minX);
    bobber.depthRatio = Math.min(0.96, 0.15 + effectivePower * 0.81);
    bobber.targetY = waterTop + bobber.depthRatio * (waterBot - waterTop);

    const tip = getRodTipPos();
    bobber.x = tip.x;
    bobber.y = tip.y;
    state = GAME_STATE.CASTING;
    sound.playCast();
    updateActionPrompt('Line flying out...', 'bg-sky-400');
}

function triggerVisibleFishBite(fishEntity) {
    hookedFish = fishEntity;
    state = GAME_STATE.BITE;
    biteWindowTimer = 1.65;
    bobber.splashAnim = 1.0;
    sound.playBiteAlert();
    spawnSplashParticles(bobber.x, bobber.y, 14, '#fef08a');
    updateActionPrompt('BITE! Tap or press Spacebar NOW to set the hook!', 'bg-rose-500');
}

function setHookAndStartReeling() {
    if (state !== GAME_STATE.BITE || !hookedFish) return;
    const sp = hookedFish.species;

    if (sp.tooBigForRod && !player.harpoonMode) {
        sound.playSnap();
        spawnSplashParticles(bobber.x, bobber.y, 20, '#f87171');
        showToast(`${sp.name} is too colossal for a fishing rod! Install & activate the Industrial Harpoon!`, 'border-rose-500 text-rose-200');
        resetToIdle();
        return;
    }

    if (sp.tooBigForRod && player.harpoonMode) {
        startHarpoonMiniGame();
        return;
    }

    const lineTier = UPGRADES.line.tiers[player.upgrades.line || 0];
    const char = getActiveCharacter();
    const fisherMasteryZone = hasRoleMastery('fisher') ? 1.10 : 1.0;
    const zoneScale = (lineTier ? lineTier.zoneScale : 1.0) * char.strikeZoneBonus * fisherMasteryZone;

    // Pick one of the 6 regular fish catch challenges
    activeReelChallenge = REEL_CHALLENGE_TYPES[Math.floor(Math.random() * REEL_CHALLENGE_TYPES.length)];

    state = GAME_STATE.REELING;
    reelProgress = 0.30;
    reelNeedlePos = 0.12;
    reelNeedle2Pos = 0.88;
    reelNeedleDir = 1;
    reelZoneCenter = 0.35 + Math.random() * 0.3;
    reelZoneWidth = Math.min(0.48, Math.max(0.16, (0.32 - sp.fightStrength * 0.11) * zoneScale));
    reelCritWidth = Math.max(0.06, reelZoneWidth * 0.34);
    reelRingRadius = 1.0;
    reelDialAngle = 0;
    reelDialTargetAngle = 1.2 + Math.random() * 3.4;
    reelHoldingInput = false;
    reelRhythmIndex = 0;
    reelRhythmHitMask = [false, false, false];
    reelCombo = 0;
    reelFeedbackTimer = 0;

    sound.playSplash(1.1);
    updateActionPrompt(activeReelChallenge.prompt, 'bg-amber-400');
}

function startHarpoonMiniGame() {
    state = GAME_STATE.HARPOONING;
    const harpoonLvl = player.upgrades.harpoon || 1;
    harpoonHitsRequired = 2;
    harpoonBoltsLeft = harpoonLvl >= 2 ? 7 : 6;
    harpoonHits = 0;
    harpoonFlight = null;
    harpoonWaveTimer = 0;
    harpoonLockQuality = 0;
    const tip = getRodTipPos();
    harpoonTargetPos = {
        x: Math.max(tip.x + 200, width * 0.56),
        y: Math.min(height - 105, getWaterlineY() + 135),
        vx: harpoonLvl >= 2 ? 62 : 76,
        vy: 28
    };
    const idealAngle = Math.atan2(harpoonTargetPos.y - tip.y, harpoonTargetPos.x - tip.x);
    harpoonAimAngle = Math.max(0.08, idealAngle - 0.16);
    harpoonAimDir = 1;
    sound.playSplash(1.3);
    updateActionPrompt('HARPOON LOCK! Tap or press Spacebar when the sightline turns GREEN/GOLD!', 'bg-amber-400');
}

function fireHarpoonBolt() {
    if (state !== GAME_STATE.HARPOONING || !hookedFish) return;
    if (harpoonFlight && harpoonFlight.active) return;
    if (harpoonBoltsLeft <= 0) return;

    harpoonBoltsLeft--;
    const tip = getRodTipPos();
    const speed = 1120;
    // Smart pneumatic auto-guidance when fired near target lock
    const idealAngle = Math.atan2(hookedFish.y - tip.y, hookedFish.x - tip.x);
    const angleDiff = idealAngle - harpoonAimAngle;
    const guidedAngle = Math.abs(angleDiff) < 0.14
        ? harpoonAimAngle + angleDiff * 0.72
        : harpoonAimAngle;

    harpoonFlight = {
        x: tip.x,
        y: tip.y,
        vx: Math.cos(guidedAngle) * speed,
        vy: Math.sin(guidedAngle) * speed,
        active: true
    };
    sound.playCast();
    spawnSplashParticles(tip.x, tip.y, 8, '#fbbf24');
}

function handleTimingStrike() {
    if (state !== GAME_STATE.REELING || !hookedFish) return;
    const sp = hookedFish.species;
    const rodTier = UPGRADES.rod.tiers[player.upgrades.rod || 0];
    const powerMult = rodTier ? rodTier.power : 1.0;
    const cType = activeReelChallenge.id;

    // For Tension Hold, tapping gives an upward buoyancy boost while holding sustains lift
    if (cType === 'tension_hold') {
        reelNeedlePos = Math.min(0.95, reelNeedlePos + 0.14);
        sound.playTone(520, 'sine', 0.06, 0.08);
        return;
    }

    let inCrit = false;
    let inZone = false;

    if (cType === 'classic_bar') {
        const dist = Math.abs(reelNeedlePos - reelZoneCenter);
        inCrit = dist <= reelCritWidth * 0.5;
        inZone = dist <= reelZoneWidth * 0.5;
    } else if (cType === 'sonar_ring') {
        // Target ring sits at radius 0.42
        const dist = Math.abs(reelRingRadius - 0.42);
        inCrit = dist <= reelCritWidth * 0.45;
        inZone = dist <= reelZoneWidth * 0.55;
    } else if (cType === 'triple_rhythm') {
        // 3 beat markers at 0.25, 0.50, 0.75
        const beats = [0.25, 0.50, 0.75];
        let hitIdx = -1;
        beats.forEach((bPos, idx) => {
            if (!reelRhythmHitMask[idx] && Math.abs(reelNeedlePos - bPos) <= reelZoneWidth * 0.42) {
                hitIdx = idx;
                if (Math.abs(reelNeedlePos - bPos) <= reelCritWidth * 0.45) inCrit = true;
            }
        });
        if (hitIdx !== -1) {
            inZone = true;
            reelRhythmHitMask[hitIdx] = true;
            if (reelRhythmHitMask.every(Boolean)) {
                inCrit = true;
                reelRhythmHitMask = [false, false, false];
            }
        }
    } else if (cType === 'dual_pendulum') {
        // Both needles converge around center 0.50
        const d1 = Math.abs(reelNeedlePos - 0.5);
        const d2 = Math.abs(reelNeedle2Pos - 0.5);
        const maxD = Math.max(d1, d2);
        inCrit = maxD <= reelCritWidth * 0.55;
        inZone = maxD <= reelZoneWidth * 0.58;
    } else if (cType === 'tide_dial') {
        let diff = Math.abs(((reelDialAngle - reelDialTargetAngle + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
        const arcHalf = reelZoneWidth * 2.1;
        inCrit = diff <= arcHalf * 0.35;
        inZone = diff <= arcHalf;
    }

    if (inCrit || inZone) {
        reelCombo++;
        const baseGain = inCrit ? 0.36 : 0.23;
        const comboBonus = Math.min(0.14, reelCombo * 0.025);
        const gain = (baseGain + comboBonus) * (0.88 + powerMult * 0.22) / (0.85 + sp.fightStrength * 0.34);
        reelProgress = Math.min(1, reelProgress + gain);

        reelFeedbackText = inCrit ? `CRITICAL STRIKE! x${reelCombo}` : `SOLID REEL! x${reelCombo}`;
        reelFeedbackColor = inCrit ? '#fbbf24' : '#34d399';
        reelFeedbackTimer = 0.85;
        reelZoneCenter = 0.24 + Math.random() * 0.52;
        reelRingRadius = 1.0;
        reelDialTargetAngle = (reelDialAngle + 1.4 + Math.random() * 2.5) % (Math.PI * 2);

        sound.playTimingHit(inCrit, reelCombo);
        spawnSplashParticles(bobber.x, bobber.y, inCrit ? 12 : 6, inCrit ? '#fbbf24' : '#34d399');

        if (reelProgress >= 1) {
            completeCatch(hookedFish);
        }
    } else {
        reelCombo = 0;
        reelProgress -= (0.12 + sp.fightStrength * 0.05);
        reelFeedbackText = 'MISSED TIMING!';
        reelFeedbackColor = '#f87171';
        reelFeedbackTimer = 0.85;
        if (cType === 'sonar_ring') reelRingRadius = 1.0;
        sound.playTimingMiss();

        if (reelProgress <= 0) {
            sound.playSnap();
            showToast(`${sp.name} shook loose and escaped!`, 'border-rose-400 text-rose-200');
            resetToIdle();
        }
    }
}

function spawnSplashParticles(x, y, count = 10, color = '#bae6fd') {
    for (let i = 0; i < count; i++) {
        const angle = -Math.PI * Math.random();
        const speed = 55 + Math.random() * 145;
        particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 60,
            vy: Math.sin(angle) * speed - 30,
            size: 2 + Math.random() * 3,
            color,
            life: 0.45 + Math.random() * 0.35,
            maxLife: 0.8
        });
    }
}

function updateActionPrompt(text, dotColorClass = 'bg-emerald-400') {
    const txt = document.getElementById('statusText');
    const dot = document.getElementById('statusDot');
    if (txt) txt.textContent = text;
    if (dot) dot.className = `w-2.5 h-2.5 rounded-full ${dotColorClass} animate-pulse`;
}

function resetToIdle() {
    state = GAME_STATE.IDLE;
    castPower = 0;
    hookedFish = null;
    reelCombo = 0;
    reelFeedbackTimer = 0;
    updateActionPrompt('Hold anywhere on the water (or Spacebar) to cast', 'bg-emerald-400');
}

function completeCatch(fishEntity) {
    const sp = fishEntity.species;
    const char = getActiveCharacter();
    const ev = getActiveWorldEvent();
    const risk = getRiskModifiers();
    const bizMult = getBusinessSaleMultiplier();
    const harpoonPayMult = (sp.tooBigForRod && (player.upgrades.harpoon || 0) >= 2) ? 1.35 : 1.0;

    const weightRatio = 0.25 + Math.random() * 0.75;
    const weight = +((sp.minWeight + (sp.maxWeight - sp.minWeight) * weightRatio) * char.weightBonus).toFixed(1);
    const length = +(sp.minLength + (sp.maxLength - sp.minLength) * weightRatio).toFixed(1);

    const totalMult = (0.85 + weightRatio * 0.45) * ev.valueMult * risk.payoutMult * bizMult * harpoonPayMult;
    const estValue = Math.max(1, Math.round(sp.baseValue * totalMult));

    const isNewSpecies = !player.caughtSpecies[sp.id];
    player.caughtSpecies[sp.id] = (player.caughtSpecies[sp.id] || 0) + 1;
    player.totalCaught = (player.totalCaught || 0) + 1;
    player.maxSingleWeight = Math.max(player.maxSingleWeight || 0, weight);
    if (sp.rarity !== 'Common' && sp.rarity !== 'Uncommon') {
        player.rarePlusCaught = (player.rarePlusCaught || 0) + 1;
    }
    if (sp.rarity === 'Colossal' || sp.tooBigForRod) {
        player.colossalCaught = (player.colossalCaught || 0) + 1;
    }
    if (Object.values(player.activeRisks || {}).some(Boolean)) {
        player.riskCatches = (player.riskCatches || 0) + 1;
    }

    const catchRecord = {
        uid: Date.now() + '_' + Math.random().toString(36).slice(2, 6),
        speciesId: sp.id,
        name: sp.name,
        rarity: sp.rarity,
        weight,
        length,
        value: estValue,
        region: sp.region
    };
    player.hold.push(catchRecord);

    if (sp.rarity !== 'Common') {
        player.quests.forEach(q => {
            if (q.type === 'catch_rare' && q.progress < q.target) {
                q.progress = Math.min(q.target, q.progress + 1);
            }
        });
    }

    if (player.activeVillagerTask && player.activeVillagerTask.progress < player.activeVillagerTask.target) {
        const vt = player.activeVillagerTask;
        if (vt.type === 'catch_any') {
            vt.progress = Math.min(vt.target, vt.progress + 1);
        } else if (vt.type === 'catch_weight') {
            vt.progress = Math.min(vt.target, +(vt.progress + weight).toFixed(1));
        } else if (vt.type === 'catch_uncommon' && sp.rarity !== 'Common') {
            vt.progress = Math.min(vt.target, vt.progress + 1);
        }
        if (vt.progress >= vt.target) {
            showToast(`Town Task Ready! Return to ${vt.giverName} in Harbor Town for +$${formatMoney(vt.reward)}!`, 'border-amber-400 text-amber-200');
        }
    }

    // Coast Guard Patrol Check if Risk Tactics are active
    if (risk.totalBustRisk > 0 && Math.random() < risk.totalBustRisk) {
        const fine = Math.max(15, Math.round(player.coins * risk.maxFinePct));
        player.coins = Math.max(0, player.coins - fine);
        player.finesPaid = (player.finesPaid || 0) + fine;
        if (player.hold.length > 0) player.hold.pop();
        sound.playSirenAlert();
        showToast(`COAST GUARD INSPECTION! Illegal catch confiscated & fined $${formatMoney(fine)}!`, 'border-rose-500 text-rose-200');
        saveProgress();
        updateHUD();
        spawnRegionAmbientFish();
        resetToIdle();
        return;
    }

    sound.playCatchFanfare(sp.rarity);
    spawnSplashParticles(bobber.x, bobber.y, 18, '#fbbf24');
    saveProgress();
    updateHUD();
    spawnRegionAmbientFish();
    resetToIdle();
    openCatchModal(catchRecord, sp, isNewSpecies);
}

function traceSpeciesBodyPath(ctx, shape, len, h, wave = 0) {
    ctx.beginPath();
    if (shape === 'panfish') {
        // Tall, disc-like sunfish/angelfish silhouette
        ctx.moveTo(len * 0.95, 0);
        ctx.quadraticCurveTo(len * 0.35, -h * 1.45, -len * 0.25, -h * 1.25);
        ctx.quadraticCurveTo(-len * 0.75, -h * 0.7, -len * 0.9, 0);
        ctx.quadraticCurveTo(-len * 0.75, h * 0.7, -len * 0.25, h * 1.25);
        ctx.quadraticCurveTo(len * 0.35, h * 1.45, len * 0.95, 0);
    } else if (shape === 'pike') {
        // Sleek torpedo predator silhouette with elongated snout
        ctx.moveTo(len * 1.22, -h * 0.12);
        ctx.quadraticCurveTo(len * 0.55, -h * 0.72, -len * 0.35, -h * 0.68);
        ctx.lineTo(-len * 1.02, -h * 0.36);
        ctx.lineTo(-len * 1.02, h * 0.36);
        ctx.lineTo(-len * 0.35, h * 0.68);
        ctx.quadraticCurveTo(len * 0.55, h * 0.72, len * 1.22, h * 0.12);
    } else if (shape === 'eel') {
        // Serpentine undulating ribbon/eel silhouette
        ctx.moveTo(len * 1.15, 0);
        ctx.bezierCurveTo(len * 0.5, -h * 0.65 + wave * 0.3, -len * 0.2, h * 0.65 - wave * 0.5, -len * 1.25, wave * 0.8);
        ctx.bezierCurveTo(-len * 0.2, h * 1.05 - wave * 0.5, len * 0.5, h * 0.35 + wave * 0.3, len * 1.15, 0);
    } else {
        // Classic streamlined fusiform fish
        ctx.ellipse(0, 0, len, h, 0, 0, Math.PI * 2);
    }
    ctx.closePath();
}

function drawUnderwaterFish(fish, timeSec) {
    const sp = fish.species;
    const sonarLvl = player.upgrades.sonar || 0;
    const bodyLen = 18 * sp.sizeScale;
    const bodyH = 8 * sp.sizeScale;
    const tailWag = Math.sin(fish.tailPhase) * (sp.bodyShape === 'eel' ? 6.5 : 4.5);

    ctx.save();
    ctx.translate(fish.x, fish.y);
    if (fish.dir < 0) ctx.scale(-1, 1);

    if (sonarLvl >= 1 && sp.rarity !== 'Common') {
        ctx.strokeStyle = sp.rarity === 'Colossal' ? 'rgba(248, 113, 113, 0.75)' : 'rgba(251, 191, 36, 0.55)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, bodyLen * 1.2 + 8, bodyH * 1.3 + 6, 0, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Dorsal & Pectoral Fins tailored to shape
    ctx.fillStyle = sp.colorFin;
    if (sp.bodyShape === 'panfish') {
        ctx.beginPath();
        ctx.moveTo(-bodyLen * 0.1, -bodyH * 1.1);
        ctx.lineTo(-bodyLen * 0.55, -bodyH * 1.75);
        ctx.lineTo(-bodyLen * 0.65, -bodyH * 0.8);
        ctx.closePath();
        ctx.fill();
    } else if (sp.bodyShape !== 'eel') {
        ctx.beginPath();
        ctx.moveTo(bodyLen * 0.05, -bodyH * 0.75);
        ctx.lineTo(-bodyLen * 0.25, -bodyH * 1.45);
        ctx.lineTo(-bodyLen * 0.45, -bodyH * 0.7);
        ctx.closePath();
        ctx.fill();
    }

    // Caudal (Tail) Fin
    if (sp.bodyShape !== 'eel') {
        const tailBaseX = sp.bodyShape === 'pike' ? -bodyLen * 0.98 : -bodyLen * 0.82;
        const tailTipX = sp.bodyShape === 'pike' ? -bodyLen * 1.48 : -bodyLen * 1.35;
        const forkDepth = sp.bodyShape === 'pike' ? -bodyLen * 1.25 : tailTipX;
        ctx.beginPath();
        ctx.moveTo(tailBaseX, 0);
        ctx.lineTo(tailTipX, -bodyH * 0.82 + tailWag);
        ctx.lineTo(forkDepth, tailWag * 0.5);
        ctx.lineTo(tailTipX, bodyH * 0.82 + tailWag);
        ctx.closePath();
        ctx.fill();
    }

    // Primary Body Silhouette
    ctx.fillStyle = sp.colorPrimary;
    traceSpeciesBodyPath(ctx, sp.bodyShape, bodyLen, bodyH, tailWag);
    ctx.fill();

    // Clipped Pattern Overlay (stripes, bars, koi, rainbow)
    if (sp.pattern && sp.pattern !== 'none') {
        ctx.save();
        traceSpeciesBodyPath(ctx, sp.bodyShape, bodyLen, bodyH, tailWag);
        ctx.clip();

        if (sp.pattern === 'bars') {
            ctx.fillStyle = sp.colorSecondary;
            ctx.globalAlpha = 0.55;
            for (let bx = -bodyLen * 0.55; bx <= bodyLen * 0.45; bx += bodyLen * 0.32) {
                ctx.fillRect(bx, -bodyH * 1.6, bodyLen * 0.13, bodyH * 3.2);
            }
        } else if (sp.pattern === 'stripes') {
            ctx.strokeStyle = sp.colorSecondary;
            ctx.lineWidth = Math.max(1.4, bodyH * 0.22);
            ctx.globalAlpha = 0.65;
            for (let sy = -bodyH * 0.35; sy <= bodyH * 0.35; sy += bodyH * 0.35) {
                ctx.beginPath();
                ctx.moveTo(-bodyLen * 1.1, sy);
                ctx.lineTo(bodyLen * 1.1, sy);
                ctx.stroke();
            }
        } else if (sp.pattern === 'koi') {
            ctx.fillStyle = sp.colorSecondary;
            ctx.globalAlpha = 0.78;
            ctx.beginPath();
            ctx.arc(-bodyLen * 0.2, -bodyH * 0.2, bodyH * 0.55, 0, Math.PI * 2);
            ctx.arc(bodyLen * 0.32, bodyH * 0.18, bodyH * 0.48, 0, Math.PI * 2);
            ctx.fill();
        } else if (sp.pattern === 'rainbow') {
            const rb = ctx.createLinearGradient(0, -bodyH, 0, bodyH);
            rb.addColorStop(0, sp.colorPrimary);
            rb.addColorStop(0.5, sp.colorSecondary);
            rb.addColorStop(1, '#ffffff');
            ctx.fillStyle = rb;
            ctx.globalAlpha = 0.65;
            ctx.fillRect(-bodyLen * 1.3, -bodyH * 1.6, bodyLen * 2.6, bodyH * 3.2);
        }
        ctx.restore();
    }

    // Eye
    const eyeX = sp.bodyShape === 'pike' ? bodyLen * 0.82 : (sp.bodyShape === 'eel' ? bodyLen * 0.85 : bodyLen * 0.62);
    const eyeY = sp.bodyShape === 'panfish' ? -bodyH * 0.32 : -bodyH * 0.18;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 2.4 * Math.min(1.4, sp.sizeScale), 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(eyeX + 0.6, eyeY, 1.2 * Math.min(1.4, sp.sizeScale), 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

function renderScene(timeSec) {
    const loc = getActiveLocation();
    const waterY = getWaterlineY();
    const currentEv = getActiveWorldEvent();

    // 1. Sky Gradient based on Time of Day
    const skyGrad = ctx.createLinearGradient(0, 0, 0, waterY);
    if (timeModeIndex === 0) {
        skyGrad.addColorStop(0, '#0c4a6e');
        skyGrad.addColorStop(0.55, '#0284c7');
        skyGrad.addColorStop(1, '#bae6fd');
    } else if (timeModeIndex === 1) {
        skyGrad.addColorStop(0, '#1e1b4b');
        skyGrad.addColorStop(0.5, '#be185d');
        skyGrad.addColorStop(1, '#fdba74');
    } else {
        skyGrad.addColorStop(0, '#020617');
        skyGrad.addColorStop(0.6, '#0f172a');
        skyGrad.addColorStop(1, '#1e293b');
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, waterY);

    // Celestial Sun / Moon
    ctx.save();
    const sunX = width * 0.78;
    const sunY = timeModeIndex === 1 ? waterY - 26 : 82;
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 6, sunX, sunY, 65);
    if (timeModeIndex === 2) {
        sunGrad.addColorStop(0, 'rgba(241, 245, 249, 0.95)');
        sunGrad.addColorStop(0.4, 'rgba(148, 163, 184, 0.25)');
        sunGrad.addColorStop(1, 'rgba(148, 163, 184, 0)');
    } else {
        sunGrad.addColorStop(0, 'rgba(254, 249, 195, 0.95)');
        sunGrad.addColorStop(0.45, 'rgba(253, 186, 116, 0.32)');
        sunGrad.addColorStop(1, 'rgba(253, 186, 116, 0)');
    }
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 65, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Drifting Clouds
    ctx.fillStyle = timeModeIndex === 2 ? 'rgba(148, 163, 184, 0.12)' : 'rgba(255, 255, 255, 0.26)';
    clouds.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, 22 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 18 * c.scale, c.y - 6 * c.scale, 26 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 38 * c.scale, c.y, 20 * c.scale, 0, Math.PI * 2);
        ctx.fill();
    });

    // Animated Soaring Seagulls
    drawSeagulls(ctx, timeSec);

    // Distant Horizon Ridge
    ctx.fillStyle = timeModeIndex === 2 ? 'rgba(15, 23, 42, 0.7)' : 'rgba(12, 74, 110, 0.36)';
    ctx.beginPath();
    ctx.moveTo(0, waterY);
    for (let mx = 0; mx <= width + 120; mx += 120) {
        const peakH = 38 + Math.sin(mx * 0.008 + LOCATIONS.indexOf(loc)) * 24;
        ctx.lineTo(mx, waterY - peakH);
    }
    ctx.lineTo(width, waterY);
    ctx.closePath();
    ctx.fill();

    // Empire Visualization on Horizon (Trawlers & Offshore Rigs)
    const trawlerCount = Math.min(5, player.business.trawlers || 0);
    for (let t = 0; t < trawlerCount; t++) {
        const tx = width * 0.42 + t * 95 + Math.sin(timeSec * 0.7 + t) * 12;
        const ty = waterY - 4;
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(tx - 22, ty);
        ctx.lineTo(tx + 24, ty);
        ctx.lineTo(tx + 18, ty + 7);
        ctx.lineTo(tx - 18, ty + 7);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(tx - 8, ty - 9, 12, 9);
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(tx + 6, ty - 14, 3, 14);
    }

    if ((player.business.submersible_rig || 0) > 0) {
        const rx = width * 0.86;
        const ry = waterY - 34;
        ctx.fillStyle = '#334155';
        ctx.fillRect(rx - 22, ry + 12, 6, 24);
        ctx.fillRect(rx + 16, ry + 12, 6, 24);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(rx - 30, ry, 60, 14);
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(rx - 4, ry - 22, 8, 22);
    }

    // 2. Stylized Illustrated Ocean Strata
    const waterGrad = ctx.createLinearGradient(0, waterY, 0, height);
    waterGrad.addColorStop(0, loc.surfaceColor);
    waterGrad.addColorStop(0.45, loc.midColor);
    waterGrad.addColorStop(1, loc.abyssColor);
    ctx.fillStyle = waterGrad;
    ctx.fillRect(0, waterY, width, height - waterY);

    // Diagonal Sunbeams / God-rays
    ctx.save();
    for (let b = 0; b < 5; b++) {
        const bx = width * (0.18 + b * 0.17) + Math.sin(timeSec * 0.4 + b) * 18;
        const beamGrad = ctx.createLinearGradient(bx, waterY, bx + 90, height * 0.85);
        beamGrad.addColorStop(0, loc.causticColor);
        beamGrad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(bx - 18, waterY);
        ctx.lineTo(bx + 26, waterY);
        ctx.lineTo(bx + 135, height * 0.88);
        ctx.lineTo(bx + 45, height * 0.88);
        ctx.closePath();
        ctx.fill();
    }
    ctx.restore();

    // Contoured Seabed & Kelp Silhouette
    ctx.fillStyle = 'rgba(2, 8, 20, 0.55)';
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let sx = 0; sx <= width + 80; sx += 80) {
        const bedY = height - 22 - Math.sin(sx * 0.012) * 10;
        ctx.lineTo(sx, bedY);
    }
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Rising Ambient Bubbles & Swimming Fish
    ctx.fillStyle = 'rgba(224, 242, 254, 0.22)';
    bubbles.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
    });
    ambientFish.forEach(f => drawUnderwaterFish(f, timeSec));

    // Animated Water Surface Wave Crest & Bobbing Channel Buoy
    const buoyX = width * 0.27;
    const buoyY = waterY + Math.sin(buoyX * 0.025 + timeSec * 2.6) * 3.2;
    ctx.save();
    ctx.translate(buoyX, buoyY);
    ctx.rotate(Math.sin(timeSec * 2.1) * 0.14);
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.moveTo(-7, 2);
    ctx.lineTo(7, 2);
    ctx.lineTo(4, -14);
    ctx.lineTo(-4, -14);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = (Math.sin(timeSec * 4) > 0) ? '#fde047' : '#78350f';
    ctx.beginPath();
    ctx.arc(0, -16, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = 'rgba(224, 242, 254, 0.55)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let wx = 0; wx <= width; wx += 18) {
        const wy = waterY + Math.sin(wx * 0.025 + timeSec * 2.6) * 3.2;
        if (wx === 0) ctx.moveTo(wx, wy);
        else ctx.lineTo(wx, wy);
    }
    ctx.stroke();

    // 4. Player Boat & Selected Character Role
    const boat = getBoatPos();
    const bobOffset = Math.sin(timeSec * 2.2) * 3;
    const bx = boat.x;
    const by = boat.y + bobOffset;
    const char = getActiveCharacter();

    // Boat Hull
    ctx.fillStyle = '#78350f';
    ctx.beginPath();
    ctx.moveTo(bx - 52, by - 4);
    ctx.lineTo(bx + 56, by - 4);
    ctx.lineTo(bx + 42, by + 16);
    ctx.lineTo(bx - 40, by + 16);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(bx - 48, by - 4, 100, 4);

    // Character Avatar on Boat
    ctx.fillStyle = char.coatColor;
    ctx.beginPath();
    ctx.roundRect(bx - 8, by - 34, 18, 28, 6);
    ctx.fill();
    // Head
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.arc(bx + 1, by - 42, 8, 0, Math.PI * 2);
    ctx.fill();
    // Hat
    ctx.fillStyle = char.hatColor;
    ctx.fillRect(bx - 9, by - 49, 20, 4);
    ctx.fillRect(bx - 5, by - 54, 12, 6);

    // Fishing Rod / Harpoon Launcher
    const tip = getRodTipPos();
    ctx.strokeStyle = player.harpoonMode ? '#f59e0b' : '#e2e8f0';
    ctx.lineWidth = player.harpoonMode ? 4 : 2.8;
    ctx.beginPath();
    ctx.moveTo(bx + 8, by - 24);
    ctx.quadraticCurveTo(bx + 32, by - 46, tip.x, tip.y + bobOffset);
    ctx.stroke();

    // 5. Fishing Line & Bobber
    if (state !== GAME_STATE.IDLE && state !== GAME_STATE.CHARGING) {
        ctx.strokeStyle = 'rgba(248, 250, 252, 0.78)';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(tip.x, tip.y + bobOffset);
        ctx.quadraticCurveTo((tip.x + bobber.x) * 0.5, Math.min(tip.y, bobber.y) + 22, bobber.x, bobber.y);
        ctx.stroke();

        // Bobber float
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(bobber.x, bobber.y, 7, Math.PI, 0);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(bobber.x, bobber.y, 7, 0, Math.PI);
        ctx.fill();

        if (state === GAME_STATE.BITE) {
            ctx.fillStyle = '#fbbf24';
            ctx.font = 'bold 22px Syne, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('!', bobber.x, bobber.y - 16);
        }
    }

    // 6. Cast Power Charge Gauge
    if (state === GAME_STATE.CHARGING) {
        const gx = bx - 40;
        const gy = by - 82;
        const gw = 92;
        const gh = 12;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.beginPath();
        ctx.roundRect(gx, gy, gw, gh, 6);
        ctx.fill();

        const pGrad = ctx.createLinearGradient(gx, gy, gx + gw, gy);
        pGrad.addColorStop(0, '#38bdf8');
        pGrad.addColorStop(0.6, '#34d399');
        pGrad.addColorStop(1, '#f59e0b');
        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.roundRect(gx + 2, gy + 2, (gw - 4) * castPower, gh - 4, 4);
        ctx.fill();
    }

    // 7. Timing-Bar Reeling or Harpoon Cannon Mini-Game Overlay
    if (state === GAME_STATE.REELING) {
        drawReelingMiniGameHUD();
    } else if (state === GAME_STATE.HARPOONING) {
        drawHarpoonMiniGameHUD();
    }

    // 8. Splash Particles
    particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });

    // 9. Storm Rain Overlay
    if (currentEv.id === 'storm') {
        ctx.strokeStyle = 'rgba(186, 230, 253, 0.35)';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        rainDrops.forEach(r => {
            ctx.moveTo(r.x, r.y);
            ctx.lineTo(r.x - 4, r.y + r.len);
        });
        ctx.stroke();
    }
}

function drawHarpoonMiniGameHUD() {
    const tip = getRodTipPos();
    ctx.save();

    const lockedOn = harpoonLockQuality >= 0.72;
    const aimLen = Math.min(620, width * 0.78);
    const endX = tip.x + Math.cos(harpoonAimAngle) * aimLen;
    const endY = tip.y + Math.sin(harpoonAimAngle) * aimLen;

    // Aiming Trajectory Sightline (Turns bright emerald/gold when locked onto Leviathan!)
    ctx.strokeStyle = lockedOn ? '#34d399' : 'rgba(251, 191, 36, 0.78)';
    ctx.lineWidth = lockedOn ? 3.5 : 2.2;
    if (!lockedOn) ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(tip.x, tip.y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Target Lock Reticle around Colossal Leviathan
    if (hookedFish) {
        const tx = hookedFish.x;
        const ty = hookedFish.y;
        const rad = lockedOn ? 44 : 38;
        ctx.strokeStyle = lockedOn ? '#34d399' : '#f87171';
        ctx.lineWidth = lockedOn ? 3 : 2.2;
        ctx.beginPath();
        ctx.arc(tx, ty, rad, 0, Math.PI * 2);
        ctx.stroke();

        if (lockedOn) {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.16)';
            ctx.fill();
            ctx.fillStyle = '#34d399';
            ctx.font = 'bold 11px Syne, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('TARGET LOCKED — FIRE!', tx, ty - rad - 12);
        }

        ctx.beginPath();
        ctx.moveTo(tx - rad - 8, ty); ctx.lineTo(tx - rad + 6, ty);
        ctx.moveTo(tx + rad - 6, ty); ctx.lineTo(tx + rad + 8, ty);
        ctx.moveTo(tx, ty - rad - 8); ctx.lineTo(tx, ty - rad + 6);
        ctx.moveTo(tx, ty + rad - 6); ctx.lineTo(tx, ty + rad + 8);
        ctx.stroke();
    }

    // Flying Pneumatic Harpoon Bolt & Tether Cable
    if (harpoonFlight && harpoonFlight.active) {
        ctx.strokeStyle = 'rgba(226, 232, 240, 0.65)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tip.x, tip.y);
        ctx.lineTo(harpoonFlight.x, harpoonFlight.y);
        ctx.stroke();

        const ang = Math.atan2(harpoonFlight.vy, harpoonFlight.vx);
        ctx.save();
        ctx.translate(harpoonFlight.x, harpoonFlight.y);
        ctx.rotate(ang);
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.moveTo(14, 0);
        ctx.lineTo(-10, -5);
        ctx.lineTo(-6, 0);
        ctx.lineTo(-10, 5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    // Top Harpoon Status Card
    const barW = Math.min(380, width - 48);
    const bx = (width - barW) * 0.5;
    const by = Math.max(115, getWaterlineY() - 96);

    ctx.fillStyle = 'rgba(9, 20, 36, 0.92)';
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.55)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(bx - 14, by - 34, barW + 28, 72, 16);
    ctx.fill();
    ctx.stroke();

    const spName = hookedFish ? hookedFish.species.name : 'Colossal Leviathan';
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 12px Syne, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`HARPOON LOCK: ${spName.toUpperCase()}`, bx, by - 12);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 12px "IBM Plex Mono", monospace';
    ctx.fillText(`HITS: ${harpoonHits}/${harpoonHitsRequired}`, bx, by + 16);

    ctx.fillStyle = '#38bdf8';
    ctx.textAlign = 'right';
    ctx.fillText(`BOLTS LEFT: ${harpoonBoltsLeft}`, bx + barW, by + 16);

    ctx.restore();
}

function drawReelingMiniGameHUD() {
    const barW = Math.min(390, width - 44);
    const barH = 24;
    const bx = (width - barW) * 0.5;
    const by = Math.max(115, getWaterlineY() - 96);
    const cType = activeReelChallenge.id;
    const isCircular = (cType === 'sonar_ring' || cType === 'tide_dial');
    const panelH = isCircular ? 124 : 88;

    ctx.save();
    ctx.fillStyle = 'rgba(9, 20, 36, 0.92)';
    ctx.strokeStyle = 'rgba(148, 184, 218, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(bx - 14, by - 34, barW + 28, panelH, 16);
    ctx.fill();
    ctx.stroke();

    // Hooked Species & Challenge Type Header
    const spName = hookedFish ? hookedFish.species.name : 'Hooked Catch';
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 11px Syne, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${spName.toUpperCase()} • ${activeReelChallenge.label}`, bx, by - 14);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 11px "IBM Plex Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`REEL ${Math.round(reelProgress * 100)}%`, bx + barW, by - 14);

    if (cType === 'sonar_ring') {
        // Challenge 2: Contracting Sonar Pulse Ring
        const cx = bx + barW * 0.5;
        const cy = by + 34;
        const maxR = 34;
        const targetR = maxR * 0.42;

        ctx.strokeStyle = 'rgba(16, 185, 129, 0.55)';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(cx, cy, targetR, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, targetR, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(3, maxR * reelRingRadius), 0, Math.PI * 2);
        ctx.stroke();
    } else if (cType === 'tide_dial') {
        // Challenge 6: Rotating Compass Tide Dial
        const cx = bx + barW * 0.5;
        const cy = by + 34;
        const dialR = 32;
        const arcHalf = reelZoneWidth * 2.1;

        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(cx, cy, dialR, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(cx, cy, dialR, reelDialTargetAngle - arcHalf, reelDialTargetAngle + arcHalf);
        ctx.stroke();

        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(cx, cy, dialR, reelDialTargetAngle - arcHalf * 0.35, reelDialTargetAngle + arcHalf * 0.35);
        ctx.stroke();

        // Spinning Hand
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(reelDialAngle) * (dialR + 4), cy + Math.sin(reelDialAngle) * (dialR + 4));
        ctx.stroke();
    } else {
        // Linear Track Challenges (Classic Bar, Tension Hold, Triple Rhythm, Dual Pendulum)
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.roundRect(bx, by, barW, barH, 10);
        ctx.fill();

        if (cType === 'triple_rhythm') {
            [0.25, 0.50, 0.75].forEach((bPos, idx) => {
                const hit = reelRhythmHitMask[idx];
                const zw = reelZoneWidth * 0.75 * barW;
                ctx.fillStyle = hit ? 'rgba(56, 189, 248, 0.5)' : 'rgba(16, 185, 129, 0.5)';
                ctx.beginPath();
                ctx.roundRect(bx + bPos * barW - zw * 0.5, by + 2, zw, barH - 4, 6);
                ctx.fill();
            });
        } else {
            const center = cType === 'dual_pendulum' ? 0.5 : reelZoneCenter;
            const zoneLeft = bx + Math.max(0, center - reelZoneWidth * 0.5) * barW;
            const zoneW = Math.min(barW, reelZoneWidth * barW);
            ctx.fillStyle = 'rgba(16, 185, 129, 0.45)';
            ctx.beginPath();
            ctx.roundRect(zoneLeft, by + 2, zoneW, barH - 4, 8);
            ctx.fill();

            const critLeft = bx + Math.max(0, center - reelCritWidth * 0.5) * barW;
            const critW = Math.min(barW, reelCritWidth * barW);
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath();
            ctx.roundRect(critLeft, by + 2, critW, barH - 4, 6);
            ctx.fill();
        }

        // Needle 1
        const needleX = bx + reelNeedlePos * barW;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.roundRect(needleX - 3, by - 4, 6, barH + 8, 3);
        ctx.fill();

        // Needle 2 for Dual Pendulum
        if (cType === 'dual_pendulum') {
            const n2X = bx + reelNeedle2Pos * barW;
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.roundRect(n2X - 3, by - 4, 6, barH + 8, 3);
            ctx.fill();
        }
    }

    // Catch Progress Bar Underneath
    const progY = isCircular ? (by + 74) : (by + barH + 10);
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.roundRect(bx, progY, barW, 8, 4);
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.roundRect(bx, progY, barW * Math.max(0, Math.min(1, reelProgress)), 8, 4);
    ctx.fill();

    if (reelFeedbackTimer > 0) {
        ctx.fillStyle = reelFeedbackColor;
        ctx.font = 'bold 13px Syne, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(reelFeedbackText, bx + barW * 0.5, by - 42);
    }

    ctx.restore();
}

// =========================================================================
// 7. FULL-SCREEN ILLUSTRATED HARBOR TOWN WORLD (RETAIL PROMENADE)
// =========================================================================
let townPlayerX = 0.22;
let townTargetX = 0.22;
let townWalkPhase = 0;
let townFacing = 1;
const townKeys = { left: false, right: false };

const TOWN_BUILDINGS = [
    {
        id: 'boat',
        xPct: 0.11,
        width: 110,
        height: 45,
        label: 'Moored Vessel',
        sublabel: 'Return to Fishing Waters',
        tab: null,
        roofColor: '#0284c7',
        wallColor: '#1e3a5f',
        trimColor: '#38bdf8'
    },
    {
        id: 'market',
        xPct: 0.36,
        width: 175,
        height: 145,
        label: 'Fishmonger Market',
        sublabel: 'Sell Livewell Catch',
        tab: 'market',
        roofColor: '#d97706',
        wallColor: '#1e293b',
        trimColor: '#fbbf24'
    },
    {
        id: 'quests',
        xPct: 0.63,
        width: 185,
        height: 165,
        label: 'Harbormaster Guild',
        sublabel: 'Contracts & Bounties',
        tab: 'quests',
        roofColor: '#059669',
        wallColor: '#172554',
        trimColor: '#34d399'
    },
    {
        id: 'outfitter',
        xPct: 0.88,
        width: 175,
        height: 150,
        label: 'Drydock Outfitter',
        sublabel: 'Rods, Holds & Harpoons',
        tab: 'outfitter',
        roofColor: '#7c3aed',
        wallColor: '#1e1b4b',
        trimColor: '#c084fc'
    }
];

const TOWN_VILLAGERS = [
    {
        id: 'barnaby',
        name: 'Old Man Barnaby',
        role: 'Retired Lighthouse Keeper',
        xPct: 0.28,
        dir: 1,
        speed: 0.018,
        coat: '#0d9488',
        hat: '#fef08a',
        phase: 0.4,
        greeting: '"Ahoy Captain! I have a task for you—my smokehouse is running low on fresh local fillets."',
        taskTemplate: { title: 'Barnaby\'s Smokehouse Order', type: 'catch_any', target: 3, baseReward: 85, desc: 'Catch 3 fish in local waters and report back to Barnaby.' }
    },
    {
        id: 'clara',
        name: 'Chef Clara',
        role: 'Harbor Tavern Cook',
        xPct: 0.53,
        dir: -1,
        speed: 0.015,
        coat: '#e11d48',
        hat: '#f8fafc',
        phase: 2.1,
        greeting: '"Psst, Captain! I have a task for you—the tavern patrons are craving heavy prime cuts tonight!"',
        taskTemplate: { title: 'Tavern Banquet Haul', type: 'catch_weight', target: 14, baseReward: 135, desc: 'Land 14 lbs of total fish weight and speak with Chef Clara.' }
    },
    {
        id: 'orin',
        name: 'Naturalist Orin',
        role: 'Marine Scholar',
        xPct: 0.77,
        dir: 1,
        speed: 0.016,
        coat: '#d97706',
        hat: '#cbd5e1',
        phase: 4.0,
        greeting: '"Greetings! I have a task for you—I\'m cataloging uncommon specimens native to these waters."',
        taskTemplate: { title: 'Marine Specimen Survey', type: 'catch_uncommon', target: 2, baseReward: 175, desc: 'Catch 2 Uncommon or rarer fish and return to Orin.' }
    }
];

let activeDialogueVillager = null;

function drawSeagulls(ctx, timeSec) {
    ctx.save();
    ctx.strokeStyle = timeModeIndex === 2 ? 'rgba(203, 213, 225, 0.45)' : 'rgba(255, 255, 255, 0.78)';
    ctx.lineWidth = 1.8;
    ctx.lineCap = 'round';
    seagulls.forEach(g => {
        const wing = Math.sin(timeSec * 5.5 + g.flapPhase) * 5 * g.scale;
        const span = 10 * g.scale;
        ctx.beginPath();
        ctx.moveTo(g.x - span, g.y + wing);
        ctx.quadraticCurveTo(g.x - span * 0.45, g.y - 4 * g.scale, g.x, g.y);
        ctx.quadraticCurveTo(g.x + span * 0.45, g.y - 4 * g.scale, g.x + span, g.y + wing);
        ctx.stroke();
    });
    ctx.restore();
}

function enterHarborTown(initialTab = null) {
    closeAllModals();
    resetToIdle();
    worldScene = 'TOWN';
    townPlayerX = 0.20;
    townTargetX = initialTab
        ? (TOWN_BUILDINGS.find(b => b.tab === initialTab)?.xPct || 0.36)
        : 0.30;
    townFacing = 1;

    document.getElementById('bottomControls').classList.add('hidden');
    document.getElementById('townHudOverlay').classList.remove('hidden');
    document.getElementById('townTitleName').textContent = getActiveLocation().townName;

    if (initialTab) {
        activeTownTab = initialTab;
        openBuildingInterior(initialTab);
    }
}

function leaveHarborTown() {
    closeAllModals();
    worldScene = 'SEA';
    document.getElementById('townHudOverlay').classList.add('hidden');
    document.getElementById('bottomControls').classList.remove('hidden');
    updateActionPrompt('Hold anywhere on the water (or Spacebar) to cast', 'bg-emerald-400');
}

function openBuildingInterior(tabId) {
    activeTownTab = tabId;
    renderTownModal();
    document.getElementById('townBuildingModal').classList.remove('hidden');
}

function getNearestTownTarget() {
    let bestItem = { kind: 'building', data: TOWN_BUILDINGS[1], dist: 999 };
    TOWN_BUILDINGS.forEach(b => {
        const d = Math.abs(townPlayerX - b.xPct);
        if (d < bestItem.dist) {
            bestItem = { kind: 'building', data: b, dist: d };
        }
    });
    TOWN_VILLAGERS.forEach(v => {
        const d = Math.abs(townPlayerX - v.xPct);
        if (d < bestItem.dist && d < 0.065) {
            bestItem = { kind: 'villager', data: v, dist: d };
        }
    });
    return bestItem;
}

function getNearestTownBuilding() {
    let nearest = TOWN_BUILDINGS[1];
    let bestDist = 999;
    TOWN_BUILDINGS.forEach(b => {
        const d = Math.abs(townPlayerX - b.xPct);
        if (d < bestDist) {
            bestDist = d;
            nearest = b;
        }
    });
    return { building: nearest, dist: bestDist };
}

function openVillagerDialogue(villager) {
    activeDialogueVillager = villager;
    const loc = getActiveLocation();
    const scale = Math.max(1, loc.valueMult);
    const existing = player.activeVillagerTask;
    const isThisVillagerTask = existing && existing.villagerId === villager.id;

    document.getElementById('villagerRoleTag').textContent = villager.role;
    document.getElementById('villagerNameTitle').textContent = villager.name;

    const speechEl = document.getElementById('villagerSpeechText');
    const titleEl = document.getElementById('villagerTaskTitle');
    const rewardEl = document.getElementById('villagerTaskReward');
    const descEl = document.getElementById('villagerTaskDesc');
    const barEl = document.getElementById('villagerTaskProgressBar');
    const progLabelEl = document.getElementById('villagerTaskProgressLabel');
    const actionBtn = document.getElementById('villagerPrimaryActionBtn');

    if (isThisVillagerTask) {
        const done = existing.progress >= existing.target;
        const pct = Math.min(100, Math.round((existing.progress / existing.target) * 100));
        speechEl.textContent = done
            ? `"Splendid work, Captain! You completed my request. Here is your promised reward!"`
            : `"How goes the task, Captain? Come back once you've finished!"`;
        titleEl.textContent = existing.title;
        rewardEl.textContent = `+$${formatMoney(existing.reward)}`;
        descEl.textContent = existing.desc;
        barEl.style.width = `${pct}%`;
        progLabelEl.textContent = `${existing.progress} / ${existing.target}`;

        if (done) {
            actionBtn.textContent = `Claim +$${formatMoney(existing.reward)}`;
            actionBtn.disabled = false;
            actionBtn.className = 'btn-nautical flex-1 py-3 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-accent text-xs font-extrabold uppercase tracking-wider shadow-lg cursor-pointer';
        } else {
            actionBtn.textContent = 'Task In Progress';
            actionBtn.disabled = true;
            actionBtn.className = 'flex-1 py-3 rounded-2xl bg-slate-800 text-slate-400 font-accent text-xs font-bold uppercase tracking-wider cursor-not-allowed';
        }
    } else {
        const tpl = villager.taskTemplate;
        const scaledTarget = tpl.type === 'catch_weight' ? Math.round(tpl.target * scale) : tpl.target;
        const scaledReward = Math.round(tpl.baseReward * scale);
        speechEl.textContent = villager.greeting;
        titleEl.textContent = tpl.title;
        rewardEl.textContent = `+$${formatMoney(scaledReward)}`;
        descEl.textContent = tpl.desc.replace(String(tpl.target), String(scaledTarget));
        barEl.style.width = '0%';
        progLabelEl.textContent = `0 / ${scaledTarget}`;
        actionBtn.textContent = existing ? 'Replace Active Task' : 'Accept Task';
        actionBtn.disabled = false;
        actionBtn.className = 'btn-nautical flex-1 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-accent text-xs font-extrabold uppercase tracking-wider shadow-lg cursor-pointer';
    }

    document.getElementById('villagerModal').classList.remove('hidden');
}

function updateTownSimulation(dt) {
    const modalOpen = !document.getElementById('townBuildingModal').classList.contains('hidden')
        || !document.getElementById('villagerModal').classList.contains('hidden');
    const walkSpeed = 0.25;
    let moving = false;

    if (!modalOpen) {
        if (townKeys.left) {
            townPlayerX = Math.max(0.09, townPlayerX - walkSpeed * dt);
            townTargetX = townPlayerX;
            townFacing = -1;
            moving = true;
        } else if (townKeys.right) {
            townPlayerX = Math.min(0.93, townPlayerX + walkSpeed * dt);
            townTargetX = townPlayerX;
            townFacing = 1;
            moving = true;
        } else if (Math.abs(townTargetX - townPlayerX) > 0.004) {
            const dir = Math.sign(townTargetX - townPlayerX);
            townPlayerX += dir * walkSpeed * dt;
            townFacing = dir;
            moving = true;
        }
    }

    if (moving) townWalkPhase += dt * 13;

    if (Math.random() < dt * 4.5) {
        const deckY = Math.round(height * 0.74);
        chimneySmoke.push({
            x: width * 0.36 + 42,
            y: deckY - 178,
            vx: 8 + Math.random() * 10,
            vy: -18 - Math.random() * 12,
            r: 4 + Math.random() * 3,
            life: 2.2
        });
    }
    for (let i = chimneySmoke.length - 1; i >= 0; i--) {
        const s = chimneySmoke[i];
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.r += 5 * dt;
        s.life -= dt;
        if (s.life <= 0) chimneySmoke.splice(i, 1);
    }

    TOWN_VILLAGERS.forEach(v => {
        if (Math.abs(townPlayerX - v.xPct) < 0.06) return;
        v.xPct += v.dir * v.speed * dt;
        v.phase += dt * 7;
        if (v.xPct > 0.89) v.dir = -1;
        if (v.xPct < 0.25) v.dir = 1;
    });

    const nearest = getNearestTownTarget();
    const ind = document.getElementById('townBuildingIndicator');
    if (ind) {
        if (nearest.kind === 'villager') {
            ind.textContent = `Talk to ${nearest.data.name}`;
        } else {
            ind.textContent = nearest.data.id === 'boat'
                ? 'Board Vessel (Return to Sea)'
                : `Enter ${nearest.data.label}`;
        }
    }
}

function renderFullTownScene(timeSec) {
    const loc = getActiveLocation();
    const deckY = Math.round(height * 0.74);

    // 1. Rich Harbor Sky
    const skyGrad = ctx.createLinearGradient(0, 0, 0, deckY);
    if (timeModeIndex === 0) {
        skyGrad.addColorStop(0, '#072a47');
        skyGrad.addColorStop(0.55, '#0369a1');
        skyGrad.addColorStop(1, '#7dd3fc');
    } else if (timeModeIndex === 1) {
        skyGrad.addColorStop(0, '#1e1b4b');
        skyGrad.addColorStop(0.55, '#9d174d');
        skyGrad.addColorStop(1, '#fb923c');
    } else {
        skyGrad.addColorStop(0, '#020617');
        skyGrad.addColorStop(0.6, '#0f172a');
        skyGrad.addColorStop(1, '#1e293b');
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, deckY);

    // Sun / Moon & Drifting Clouds
    const sunX = width * 0.82;
    const sunY = timeModeIndex === 1 ? deckY - 190 : 110;
    const sunG = ctx.createRadialGradient(sunX, sunY, 8, sunX, sunY, 90);
    sunG.addColorStop(0, timeModeIndex === 2 ? 'rgba(241,245,249,0.9)' : 'rgba(254,243,199,0.95)');
    sunG.addColorStop(1, 'rgba(254,243,199,0)');
    ctx.fillStyle = sunG;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 90, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = timeModeIndex === 2 ? 'rgba(148,163,184,0.1)' : 'rgba(255,255,255,0.22)';
    clouds.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y + 20, 26 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 22 * c.scale, c.y + 12, 32 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 48 * c.scale, c.y + 20, 24 * c.scale, 0, Math.PI * 2);
        ctx.fill();
    });

    // Soaring Harbor Seagulls
    drawSeagulls(ctx, timeSec);

    // Distant Headland Ridge
    ctx.fillStyle = 'rgba(15, 35, 58, 0.55)';
    ctx.beginPath();
    ctx.moveTo(0, deckY);
    for (let hx = 0; hx <= width + 140; hx += 140) {
        const hh = 95 + Math.sin(hx * 0.006 + LOCATIONS.indexOf(loc)) * 45;
        ctx.lineTo(hx, deckY - hh);
    }
    ctx.lineTo(width, deckY);
    ctx.closePath();
    ctx.fill();

    // Lighthouse on far headland
    const lhX = width * 0.16;
    const lhBaseY = deckY - 95;
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(lhX - 10, lhBaseY);
    ctx.lineTo(lhX - 6, lhBaseY - 58);
    ctx.lineTo(lhX + 6, lhBaseY - 58);
    ctx.lineTo(lhX + 10, lhBaseY);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(lhX - 8, lhBaseY - 36, 16, 10);
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(lhX - 7, lhBaseY - 68, 14, 10);

    // 3. Harbor Basin Water
    const waterGrad = ctx.createLinearGradient(0, deckY - 12, 0, height);
    waterGrad.addColorStop(0, loc.surfaceColor);
    waterGrad.addColorStop(0.5, loc.midColor);
    waterGrad.addColorStop(1, loc.abyssColor);
    ctx.fillStyle = waterGrad;
    ctx.fillRect(0, deckY - 8, width, height - deckY + 8);

    // 4. Timber Pier & Cobblestone Quay
    const pierStartX = width * 0.17;
    ctx.fillStyle = '#291509';
    for (let px = pierStartX + 18; px < width; px += 72) {
        ctx.fillRect(px, deckY + 14, 14, height - deckY);
    }
    ctx.fillStyle = '#78350f';
    ctx.fillRect(pierStartX, deckY, width - pierStartX, 18);
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(width * 0.25, deckY + 18, width * 0.75, height - deckY - 18);

    // 5. Storefronts & Moored Boat
    const { building: nearestB, dist: nearestDist } = getNearestTownBuilding();

    TOWN_BUILDINGS.forEach(b => {
        const cx = b.xPct * width;
        const isNear = nearestB.id === b.id && nearestDist < 0.09;

        if (b.id === 'boat') {
            const bob = Math.sin(timeSec * 2.4) * 3.5;
            const by = deckY - 2 + bob;
            ctx.fillStyle = '#78350f';
            ctx.beginPath();
            ctx.moveTo(cx - 56, by - 4);
            ctx.lineTo(cx + 58, by - 4);
            ctx.lineTo(cx + 42, by + 18);
            ctx.lineTo(cx - 40, by + 18);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#f59e0b';
            ctx.fillRect(cx - 52, by - 4, 106, 4);
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(cx - 24, by - 26, 26, 22);
            ctx.fillStyle = '#0284c7';
            ctx.fillRect(cx - 20, by - 21, 14, 10);
        } else {
            const scaleW = Math.min(1, width / 1150);
            const bw = Math.max(110, b.width * (0.76 + scaleW * 0.25));
            const bh = b.height;
            const left = cx - bw * 0.5;
            const top = deckY - bh;

            ctx.fillStyle = b.wallColor;
            ctx.beginPath();
            ctx.roundRect(left, top, bw, bh, [8, 8, 0, 0]);
            ctx.fill();
            ctx.strokeStyle = isNear ? b.trimColor : 'rgba(148, 163, 184, 0.28)';
            ctx.lineWidth = isNear ? 2.5 : 1.5;
            ctx.stroke();

            ctx.fillStyle = b.roofColor;
            ctx.beginPath();
            ctx.moveTo(left - 10, top + 2);
            ctx.lineTo(cx, top - 34);
            ctx.lineTo(left + bw + 10, top + 2);
            ctx.closePath();
            ctx.fill();

            const awningY = deckY - 56;
            const sway = Math.sin(timeSec * 3.2 + cx * 0.01) * 1.5;
            const stripeCount = 6;
            const stripeW = (bw - 16) / stripeCount;
            for (let s = 0; s < stripeCount; s++) {
                ctx.fillStyle = s % 2 === 0 ? b.trimColor : '#f8fafc';
                ctx.fillRect(left + 8 + s * stripeW, awningY, stripeW, 12 + sway);
            }

            ctx.fillStyle = '#fef08a';
            ctx.fillRect(left + 16, top + 22, 24, 24);
            ctx.fillRect(left + bw - 40, top + 22, 24, 24);

            // Wooden Signboard
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.roundRect(cx - bw * 0.44, top + 54, bw * 0.88, 22, 6);
            ctx.fill();
            ctx.fillStyle = isNear ? b.trimColor : '#f8fafc';
            ctx.font = 'bold 10px Syne, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(b.label.toUpperCase(), cx, top + 68);
        }
    });

    // 6. Harbor Gas Lampposts
    [0.24, 0.50, 0.76].forEach(lxPct => {
        const lx = lxPct * width;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(lx - 2.5, deckY - 78, 5, 78);
        const glow = ctx.createRadialGradient(lx, deckY - 82, 2, lx, deckY - 82, 42);
        glow.addColorStop(0, 'rgba(254, 240, 138, 0.85)');
        glow.addColorStop(1, 'rgba(254, 240, 138, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(lx, deckY - 82, 42, 0, Math.PI * 2);
        ctx.fill();
    });

    // 7. Ambient Strolling Townsfolk with Task Speech Bubbles
    TOWN_VILLAGERS.forEach(v => {
        const vx = v.xPct * width;
        const isClose = Math.abs(townPlayerX - v.xPct) < 0.065;
        const vbob = isClose ? 0 : Math.abs(Math.sin(v.phase)) * 2.5;
        drawBoardwalkCharacter(ctx, vx, deckY - vbob, v.coat, v.hat, 0.92, isClose ? 0 : v.phase);

        const bubbleBob = Math.sin(timeSec * 3.5 + v.phase) * 3;
        const by = deckY - 72 + bubbleBob;
        const hasCompletedTask = player.activeVillagerTask
            && player.activeVillagerTask.villagerId === v.id
            && player.activeVillagerTask.progress >= player.activeVillagerTask.target;

        ctx.fillStyle = hasCompletedTask ? '#10b981' : (isClose ? '#fbbf24' : 'rgba(15, 23, 42, 0.88)');
        ctx.strokeStyle = isClose ? '#ffffff' : 'rgba(251, 191, 36, 0.6)';
        ctx.lineWidth = 1.4;
        const label = hasCompletedTask ? 'CLAIM REWARD!' : (isClose ? `TALK: ${v.name.split(' ')[0].toUpperCase()}` : 'TASK');
        const bw = isClose || hasCompletedTask ? 96 : 46;
        ctx.beginPath();
        ctx.roundRect(vx - bw * 0.5, by - 11, bw, 20, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = (hasCompletedTask || isClose) ? '#0f172a' : '#fde047';
        ctx.font = 'bold 9px Syne, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, vx, by + 2);
    });

    // Chimney Smoke Particles
    chimneySmoke.forEach(s => {
        ctx.save();
        ctx.globalAlpha = Math.max(0, s.life * 0.25);
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });

    // 8. Playable Character Walking on Boardwalk
    const char = getActiveCharacter();
    const px = townPlayerX * width;
    const moving = Math.abs(townTargetX - townPlayerX) > 0.004 || townKeys.left || townKeys.right;
    const pbob = moving ? Math.abs(Math.sin(townWalkPhase)) * 4 : 0;
    drawBoardwalkCharacter(ctx, px, deckY - pbob, char.coatColor, char.hatColor, 1.08, moving ? townWalkPhase : 0);

    ctx.fillStyle = 'rgba(15, 23, 42, 0.82)';
    ctx.beginPath();
    ctx.roundRect(px - 44, deckY - 68, 88, 18, 9);
    ctx.fill();
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 10px Manrope, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(player.captainName || 'Captain', px, deckY - 56);
}

function drawBoardwalkCharacter(ctx, x, footY, coatColor, hatColor, scale, walkPhase) {
    ctx.save();
    ctx.translate(x, footY);
    ctx.scale(scale, scale);

    // Animated Legs
    const stride = Math.sin(walkPhase) * 5;
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-3, -12);
    ctx.lineTo(-3 + stride, 0);
    ctx.moveTo(3, -12);
    ctx.lineTo(3 - stride, 0);
    ctx.stroke();

    // Coat / Torso
    ctx.fillStyle = coatColor;
    ctx.beginPath();
    ctx.roundRect(-9, -34, 18, 24, 6);
    ctx.fill();

    // Head
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.arc(0, -42, 7.5, 0, Math.PI * 2);
    ctx.fill();

    // Captain / Merchant Hat
    ctx.fillStyle = hatColor;
    ctx.fillRect(-10, -49, 20, 4);
    ctx.fillRect(-6, -54, 12, 6);

    ctx.restore();
}

function advanceQuestsOnSale(soldCount, soldWeight) {
    player.totalSold = (player.totalSold || 0) + soldCount;
    player.quests.forEach(q => {
        if (q.progress >= q.target) return;
        if (q.type === 'sell_count') {
            q.progress = Math.min(q.target, q.progress + soldCount);
        } else if (q.type === 'sell_weight') {
            q.progress = Math.min(q.target, +(q.progress + soldWeight).toFixed(1));
        }
    });
}

function syncTownTabsUI() {
    const meta = {
        market: { kicker: 'Pier 01 • Livewell Exchange', title: 'Fishmonger Market' },
        quests: { kicker: 'Pier 02 • Maritime Contracts', title: 'Harbormaster Guild' },
        outfitter: { kicker: 'Pier 03 • Vessel & Gear Upgrades', title: 'Drydock Outfitter' }
    }[activeTownTab] || { kicker: 'Harbor District', title: 'Harbor Town' };

    const kickerEl = document.getElementById('buildingModalKicker');
    const titleEl = document.getElementById('buildingModalTitle');
    if (kickerEl) kickerEl.textContent = meta.kicker;
    if (titleEl) titleEl.textContent = meta.title;

    document.querySelectorAll('.town-tab-btn').forEach(btn => {
        const t = btn.getAttribute('data-town-tab');
        if (t === activeTownTab) {
            btn.className = 'town-tab-btn px-4 py-2 rounded-t-xl text-xs font-accent font-bold uppercase tracking-wider border-b-2 border-amber-400 text-amber-300 bg-slate-800/60 cursor-pointer';
        } else {
            btn.className = 'town-tab-btn px-4 py-2 rounded-t-xl text-xs font-accent font-bold uppercase tracking-wider border-b-2 border-transparent text-slate-400 hover:text-slate-200 cursor-pointer';
        }
    });
}

function renderTownModal() {
    document.getElementById('townCoinsDisplay').textContent = `$${formatMoney(player.coins)}`;
    syncTownTabsUI();

    const pane = document.getElementById('townBodyContent');
    if (!pane) return;

    if (activeTownTab === 'market') {
        const holdTotal = getHoldTotalValue();
        const cap = getHoldCapacity();
        const bizMult = getBusinessSaleMultiplier();

        let html = `
            <div class="bg-slate-950/75 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <div class="text-xs font-bold text-white">Vessel Livewell Hold (${player.hold.length}/${cap} Fish)</div>
                    <div class="text-[11px] text-slate-400">Active Harbor Multiplier: <span class="text-emerald-300 font-mono-num font-bold">${bizMult.toFixed(2)}x</span> (Role &amp; Empire Bonus)</div>
                </div>
                <button id="sellAllHoldBtn" ${player.hold.length === 0 ? 'disabled' : ''} class="btn-nautical px-4 py-2.5 rounded-xl font-accent text-xs font-extrabold uppercase tracking-wider cursor-pointer ${player.hold.length > 0 ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}">
                    Sell Entire Hold (+$${formatMoney(holdTotal)})
                </button>
            </div>
        `;

        if (player.hold.length === 0) {
            html += `
                <div class="text-center py-8 text-slate-400 text-xs border border-dashed border-slate-700 rounded-2xl">
                    Your vessel livewell hold is currently empty. Return to your boat and cast your line!
                </div>
            `;
        } else {
            html += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">`;
            player.hold.forEach((item, idx) => {
                html += `
                    <div class="bg-slate-900/85 border border-slate-700/70 rounded-2xl p-3 flex items-center justify-between gap-2">
                        <div>
                            <div class="text-xs font-bold text-white">${item.name}</div>
                            <div class="text-[11px] text-slate-400 font-mono-num">${item.rarity} • ${item.weight} lbs • ${item.length} in</div>
                        </div>
                        <button data-sell-idx="${idx}" class="btn-nautical px-3 py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400 hover:text-slate-950 border border-amber-400/40 text-amber-200 font-mono-num text-xs font-bold cursor-pointer transition">
                            +$${formatMoney(item.value)}
                        </button>
                    </div>
                `;
            });
            html += `</div>`;
        }

        pane.innerHTML = html;

        pane.querySelectorAll('button[data-sell-idx]').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-sell-idx'), 10);
                const item = player.hold[idx];
                if (!item) return;

                player.hold.splice(idx, 1);
                player.coins += item.value;
                player.lifetimeEarnings = (player.lifetimeEarnings || 0) + item.value;
                advanceQuestsOnSale(1, item.weight);

                sound.playCoinRegister();
                saveProgress();
                updateHUD();
                renderTownModal();
                showToast(`Sold ${item.name} for +$${formatMoney(item.value)}!`, 'border-emerald-400 text-emerald-200');
            });
        });

        const sellAllBtn = document.getElementById('sellAllHoldBtn');
        if (sellAllBtn) {
            sellAllBtn.addEventListener('click', () => {
                if (player.hold.length === 0) return;
                const totalVal = getHoldTotalValue();
                const count = player.hold.length;
                const totalWeight = player.hold.reduce((s, f) => s + (f.weight || 0), 0);

                player.hold = [];
                player.coins += totalVal;
                player.lifetimeEarnings = (player.lifetimeEarnings || 0) + totalVal;
                advanceQuestsOnSale(count, totalWeight);

                sound.playCoinRegister();
                saveProgress();
                updateHUD();
                renderTownModal();
                showToast(`Offloaded ${count} fish for +$${formatMoney(totalVal)}!`, 'border-emerald-400 text-emerald-200');
            });
        }

    } else if (activeTownTab === 'quests') {
        pane.innerHTML = player.quests.map((q, qIdx) => {
            const done = q.progress >= q.target;
            const pct = Math.min(100, Math.round((q.progress / q.target) * 100));
            const rewardBonus = Math.round(q.reward * (getActiveCharacter().id === 'fishmonger' ? 1.25 : 1.0));
            return `
                <div class="bg-slate-900/85 border ${done ? 'border-emerald-400/60' : 'border-slate-700/70'} rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex-1">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-white text-sm">${q.title}</span>
                            <span class="font-mono-num text-[11px] px-2 py-0.5 rounded-md ${done ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-300'}">${q.progress}/${q.target}</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-0.5">${q.desc}</p>
                        <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-2">
                            <div class="h-full bg-emerald-400 transition-all" style="width:${pct}%"></div>
                        </div>
                    </div>
                    <button data-claim-quest="${qIdx}" ${!done ? 'disabled' : ''} class="btn-nautical px-4 py-2.5 rounded-xl font-accent text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer ${done ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}">
                        ${done ? `Claim +$${formatMoney(rewardBonus)}` : `Reward $${formatMoney(rewardBonus)}`}
                    </button>
                </div>
            `;
        }).join('');

        pane.querySelectorAll('button[data-claim-quest]').forEach(btn => {
            btn.addEventListener('click', () => {
                const qIdx = parseInt(btn.getAttribute('data-claim-quest'), 10);
                const q = player.quests[qIdx];
                if (!q || q.progress < q.target) return;

                const rewardBonus = Math.round(q.reward * (getActiveCharacter().id === 'fishmonger' ? 1.25 : 1.0));
                player.coins += rewardBonus;
                player.lifetimeEarnings = (player.lifetimeEarnings || 0) + rewardBonus;
                const freshSet = generateTownQuests(player.currentLocation, getNetWorth());
                player.questsCompleted = (player.questsCompleted || 0) + 1;
                player.quests[qIdx] = freshSet[qIdx % freshSet.length];

                sound.playCatchFanfare('Epic');
                saveProgress();
                updateHUD();
                renderTownModal();
                showToast(`Quest Completed! Collected +$${formatMoney(rewardBonus)}!`, 'border-emerald-400 text-emerald-200');
            });
        });

    } else if (activeTownTab === 'outfitter') {
        pane.innerHTML = Object.entries(UPGRADES).map(([key, cat]) => {
            const lvl = player.upgrades[key] || 0;
            const isMax = lvl >= cat.tiers.length - 1;
            const currTier = cat.tiers[lvl];
            const nextTier = isMax ? null : cat.tiers[lvl + 1];
            const canAfford = nextTier && player.coins >= nextTier.cost;

            return `
                <div class="bg-slate-900/85 border border-slate-700/70 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-white text-sm">${cat.title}</span>
                            <span class="font-mono-num text-[11px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded-md font-bold">Tier ${lvl + 1}/${cat.tiers.length}</span>
                        </div>
                        <div class="text-xs text-sky-300 font-semibold mt-0.5">${currTier.name} — ${currTier.desc}</div>
                        ${nextTier ? `<div class="text-[11px] text-slate-400 mt-1">Next: <span class="text-slate-200 font-medium">${nextTier.name}</span> (${nextTier.desc})</div>` : `<div class="text-[11px] text-emerald-400 font-semibold mt-1">Maximum Drydock Tier Installed</div>`}
                    </div>
                    <button data-upgrade-key="${key}" ${!canAfford ? 'disabled' : ''} class="btn-nautical px-4 py-2.5 rounded-xl font-accent text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer ${isMax ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 cursor-default' : canAfford ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}">
                        ${isMax ? 'Maxed' : `$${formatMoney(nextTier.cost)}`}
                    </button>
                </div>
            `;
        }).join('');

        pane.querySelectorAll('button[data-upgrade-key]').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-upgrade-key');
                const cat = UPGRADES[key];
                const lvl = player.upgrades[key] || 0;
                if (!cat || lvl >= cat.tiers.length - 1) return;
                const nextTier = cat.tiers[lvl + 1];
                if (player.coins < nextTier.cost) return;

                player.coins -= nextTier.cost;
                player.upgrades[key] = lvl + 1;
                if (key === 'harpoon' && lvl === 0) {
                    player.harpoonMode = true;
                }

                sound.playCoinRegister();
                saveProgress();
                updateHUD();
                renderTownModal();
                showToast(`Installed ${nextTier.name}!`, 'border-amber-400 text-amber-200');
            });
        });
    }
}

// =========================================================================
// 8. OTHER MODALS, FIRST-TIME SPLASH BRIEFINGS & HUD SYNCHRONIZATION
// =========================================================================
function closeAllModals() {
    ['townBuildingModal', 'villagerModal', 'campaignModal', 'catchModal', 'leaderboardModal', 'riskModal', 'businessModal', 'locationsModal', 'dexModal', 'transitionSplash'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
}

function showFeatureBriefing(key, config, onProceed) {
    if (player.seenBriefings && player.seenBriefings[key]) {
        onProceed();
        return;
    }
    player.seenBriefings[key] = true;
    saveProgress();

    const splash = document.getElementById('transitionSplash');
    document.getElementById('splashIconContainer').innerHTML = ICONS[config.icon] || ICONS.compass;
    document.getElementById('splashKicker').textContent = config.kicker;
    document.getElementById('splashTitle').textContent = config.title;
    document.getElementById('splashSubtitle').textContent = config.subtitle;
    document.getElementById('splashProceedLabel').textContent = config.proceedLabel;
    document.getElementById('splashHighlights').innerHTML = config.bullets.map(b => `
        <div class="flex items-start gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
            <span>${b}</span>
        </div>
    `).join('');

    splash.classList.remove('hidden');
    const proceedBtn = document.getElementById('splashProceedBtn');
    const cancelBtn = document.getElementById('splashCancelBtn');
    proceedBtn.onclick = () => {
        splash.classList.add('hidden');
        onProceed();
    };
    cancelBtn.onclick = () => {
        splash.classList.add('hidden');
    };
}

function buildSpeciesPreviewSVG(sp) {
    const clipId = `fishClip_${sp.id.replace(/[^a-zA-Z0-9]/g, '_')}`;
    let bodySvg = `<ellipse cx="64" cy="30" rx="34" ry="15" fill="${sp.colorPrimary}" />`;
    let clipShape = `<ellipse cx="64" cy="30" rx="34" ry="15" />`;
    let tailSvg = `<polygon points="32,30 12,15 19,30 12,45" fill="${sp.colorFin}" />`;
    let finSvg = `<polygon points="62,16 50,7 46,17" fill="${sp.colorFin}" />`;
    let eyeX = 84, eyeY = 26;

    if (sp.bodyShape === 'panfish') {
        const path = `M96,30 Q74,6 50,10 Q32,18 28,30 Q32,42 50,50 Q74,54 96,30 Z`;
        bodySvg = `<path d="${path}" fill="${sp.colorPrimary}" />`;
        clipShape = `<path d="${path}" />`;
        tailSvg = `<polygon points="30,30 13,17 18,30 13,43" fill="${sp.colorFin}" />`;
        finSvg = `<polygon points="60,11 45,3 42,13" fill="${sp.colorFin}" />`;
        eyeX = 81; eyeY = 24;
    } else if (sp.bodyShape === 'pike') {
        const path = `M106,28 Q80,17 48,18 L24,23 L24,37 L48,42 Q80,43 106,32 Z`;
        bodySvg = `<path d="${path}" fill="${sp.colorPrimary}" />`;
        clipShape = `<path d="${path}" />`;
        tailSvg = `<polygon points="26,30 8,15 15,30 8,45" fill="${sp.colorFin}" />`;
        finSvg = `<polygon points="48,18 36,10 33,19" fill="${sp.colorFin}" />`;
        eyeX = 91; eyeY = 27;
    } else if (sp.bodyShape === 'eel') {
        const path = `M104,30 C82,16 54,42 14,26 C52,48 82,24 104,30 Z`;
        bodySvg = `<path d="${path}" fill="${sp.colorPrimary}" />`;
        clipShape = `<path d="${path}" />`;
        tailSvg = ``;
        finSvg = `<path d="M84,24 Q60,14 34,27" stroke="${sp.colorFin}" stroke-width="3" fill="none" />`;
        eyeX = 93; eyeY = 28;
    }

    let patternSvg = '';
    if (sp.pattern === 'bars') {
        patternSvg = `<g clip-path="url(#${clipId})" opacity="0.55" fill="${sp.colorSecondary}">
            <rect x="42" y="5" width="6" height="50"/><rect x="56" y="5" width="6" height="50"/><rect x="70" y="5" width="6" height="50"/>
        </g>`;
    } else if (sp.pattern === 'stripes') {
        patternSvg = `<g clip-path="url(#${clipId})" opacity="0.65" stroke="${sp.colorSecondary}" stroke-width="2.5">
            <line x1="20" y1="25" x2="105" y2="25"/><line x1="20" y1="33" x2="105" y2="33"/>
        </g>`;
    } else if (sp.pattern === 'koi') {
        patternSvg = `<g clip-path="url(#${clipId})" opacity="0.8" fill="${sp.colorSecondary}">
            <circle cx="54" cy="25" r="8"/><circle cx="75" cy="33" r="7"/>
        </g>`;
    } else if (sp.pattern === 'rainbow') {
        patternSvg = `<g clip-path="url(#${clipId})" opacity="0.55">
            <rect x="15" y="24" width="90" height="7" fill="${sp.colorSecondary}"/>
        </g>`;
    }

    return `
        <svg class="w-36 h-20" viewBox="0 0 120 60">
            <defs><clipPath id="${clipId}">${clipShape}</clipPath></defs>
            ${finSvg}
            ${tailSvg}
            ${bodySvg}
            ${patternSvg}
            <circle cx="${eyeX}" cy="${eyeY}" r="3.6" fill="#ffffff" />
            <circle cx="${eyeX + 1}" cy="${eyeY}" r="1.8" fill="#0f172a" />
        </svg>
    `;
}

function openCatchModal(record, sp, isNew) {
    document.getElementById('catchRarityBadge').textContent = sp.rarity;
    document.getElementById('catchName').textContent = sp.name;
    document.getElementById('catchWeight').textContent = `${record.weight} lbs`;
    document.getElementById('catchLength').textContent = `${record.length} in`;
    document.getElementById('catchValue').textContent = `$${formatMoney(record.value)}`;
    document.getElementById('catchDesc').textContent = sp.desc;

    const newTag = document.getElementById('catchNewTag');
    if (isNew) newTag.classList.remove('hidden');
    else newTag.classList.add('hidden');

    document.getElementById('catchSpeciesArt').innerHTML = buildSpeciesPreviewSVG(sp);
    document.getElementById('catchModal').classList.remove('hidden');
}

function renderCampaignModal() {
    const char = getActiveCharacter();
    const status = getRoleCampaignStatus(char.id);
    document.getElementById('campaignRoleKicker').textContent = `${char.name} • Exclusive Saga (${status.completedCount}/${status.total})`;
    document.getElementById('campaignTitleHeader').textContent = status.camp.title;
    document.getElementById('campaignSubtitleHeader').textContent = `${status.camp.subtitle} Mastery Reward: ${status.camp.masteryPerk}`;

    const list = document.getElementById('campaignChaptersList');
    list.innerHTML = `
        <div class="rounded-2xl p-3.5 border ${status.masteryUnlocked ? 'bg-emerald-500/15 border-emerald-400/60' : 'bg-indigo-950/60 border-indigo-400/35'} flex items-center justify-between gap-3">
            <div>
                <div class="font-accent text-[10px] uppercase tracking-wider font-bold ${status.masteryUnlocked ? 'text-emerald-300' : 'text-indigo-300'}">
                    ${status.masteryUnlocked ? 'ROLE MASTERY UNLOCKED!' : '4-CHAPTER MASTERY BONUS'}
                </div>
                <div class="text-xs font-bold text-white mt-0.5">${status.camp.masteryPerk}</div>
            </div>
            <span class="font-mono-num text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-amber-300">${status.completedCount}/${status.total}</span>
        </div>
    ` + status.chapters.map(ch => {
        const pct = Math.min(100, Math.round((ch.current / Math.max(1, ch.max)) * 100));
        return `
            <div class="bg-slate-900/85 border ${ch.isClaimed ? 'border-emerald-400/50' : ch.ready ? 'border-amber-400/70' : 'border-slate-700/75'} rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="font-accent text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">${ch.chapter}</span>
                        <span class="font-bold text-white text-sm">${ch.title}</span>
                    </div>
                    <p class="text-xs text-slate-300 mt-1 leading-relaxed">${ch.story}</p>
                    <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-2.5">
                        <div class="h-full ${ch.isClaimed ? 'bg-emerald-400' : 'bg-amber-400'} transition-all" style="width:${pct}%"></div>
                    </div>
                </div>
                <button data-claim-chapter="${ch.id}" ${(!ch.ready || ch.isClaimed) ? 'disabled' : ''} class="btn-nautical px-4 py-2.5 rounded-xl font-accent text-xs font-extrabold uppercase tracking-wider shrink-0 cursor-pointer ${ch.isClaimed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/35 cursor-default' : ch.ready ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-lg' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}">
                    ${ch.isClaimed ? 'Completed' : ch.ready ? `Claim +$${formatMoney(ch.rewardCoins)}` : `$${formatMoney(ch.rewardCoins)}`}
                </button>
            </div>
        `;
    }).join('');

    list.querySelectorAll('button[data-claim-chapter]').forEach(btn => {
        btn.addEventListener('click', () => {
            const chId = btn.getAttribute('data-claim-chapter');
            const ch = status.chapters.find(c => c.id === chId);
            if (!ch || !ch.ready || ch.isClaimed) return;

            player.claimedCampaignChapters[chId] = true;
            player.coins += ch.rewardCoins;
            player.lifetimeEarnings = (player.lifetimeEarnings || 0) + ch.rewardCoins;

            sound.playCatchFanfare('Legendary');
            saveProgress();
            updateHUD();
            renderCampaignModal();
            showToast(`${ch.chapter} Completed! Claimed +$${formatMoney(ch.rewardCoins)}!`, 'border-amber-400 text-amber-200');
        });
    });
}

function renderLeaderboardModal() {
    const myWorth = getNetWorth();
    const entries = [
        ...RIVAL_CAPTAINS.map(r => ({ ...r, isPlayer: false })),
        { name: `${player.captainName} (You)`, title: getActiveCharacter().name, worth: myWorth, isPlayer: true }
    ].sort((a, b) => b.worth - a.worth);

    const myRank = entries.findIndex(e => e.isPlayer) + 1;
    document.getElementById('playerGlobalRankText').textContent = `#${myRank}`;
    document.getElementById('playerGlobalWorthText').textContent = `$${formatMoney(myWorth)}`;

    document.getElementById('leaderboardList').innerHTML = entries.map((e, idx) => `
        <div class="rounded-2xl px-4 py-3 flex items-center justify-between border ${e.isPlayer ? 'bg-amber-400/15 border-amber-400/60' : 'bg-slate-900/75 border-slate-800'}">
            <div class="flex items-center gap-3">
                <span class="font-mono-num text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center ${idx < 3 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}">#${idx + 1}</span>
                <div>
                    <div class="text-xs sm:text-sm font-bold ${e.isPlayer ? 'text-amber-300' : 'text-white'}">${e.name}</div>
                    <div class="text-[11px] text-slate-400">${e.title}</div>
                </div>
            </div>
            <div class="font-mono-num text-xs sm:text-sm font-bold text-emerald-300">$${formatMoney(e.worth)}</div>
        </div>
    `).join('');
}

function renderRiskModal() {
    const risk = getRiskModifiers();
    const body = document.getElementById('riskBody');
    body.innerHTML = `
        <div class="bg-rose-950/50 border border-rose-500/40 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span class="text-rose-200">Active Patrol Bust Chance per Catch: <strong class="font-mono-num text-rose-300">${Math.round(risk.totalBustRisk * 100)}%</strong></span>
            <span class="text-amber-200">Combined Payout Multiplier: <strong class="font-mono-num text-amber-300">${risk.payoutMult.toFixed(2)}x</strong></span>
        </div>
    ` + RISK_TACTICS.map(t => {
        const active = !!player.activeRisks[t.id];
        return `
            <div class="bg-slate-900/85 border ${active ? 'border-rose-400/70' : 'border-slate-700/70'} rounded-2xl p-4 flex items-center justify-between gap-3">
                <div>
                    <div class="font-bold text-white text-sm">${t.name}</div>
                    <p class="text-xs text-slate-300 mt-0.5">${t.desc}</p>
                    <div class="text-[11px] text-rose-300 font-mono-num mt-1">Inspection Risk: +${Math.round(t.bustRisk * 100)}% • Fine Penalty: ${Math.round(t.finePct * 100)}% Treasury</div>
                </div>
                <button data-risk-toggle="${t.id}" class="btn-nautical px-4 py-2 rounded-xl font-accent text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer ${active ? 'bg-rose-500 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'}">
                    ${active ? 'Active' : 'Enable'}
                </button>
            </div>
        `;
    }).join('');

    body.querySelectorAll('button[data-risk-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-risk-toggle');
            player.activeRisks[id] = !player.activeRisks[id];
            saveProgress();
            updateHUD();
            renderRiskModal();
        });
    });
}

function renderBusinessModal() {
    const list = document.getElementById('businessList');
    list.innerHTML = BUSINESS_UNITS.map(u => {
        const owned = player.business[u.id] || 0;
        const cost = getBusinessUnitCost(u);
        const canAfford = player.coins >= cost;
        return `
            <div class="bg-slate-900/85 border border-slate-700/70 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-white text-sm">${u.name}</span>
                        <span class="font-mono-num text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-bold">Owned: ${owned}</span>
                    </div>
                    <p class="text-xs text-slate-400 mt-0.5">${u.desc}</p>
                    <div class="text-[11px] text-emerald-300 font-mono-num mt-1">+$${formatMoney(u.incomePerSec)}/sec passive • +${u.saleBonusPct}% market fish value</div>
                </div>
                <button data-biz-buy="${u.id}" ${!canAfford ? 'disabled' : ''} class="btn-nautical px-4 py-2.5 rounded-xl font-accent text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer ${canAfford ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}">
                    Expand ($${formatMoney(cost)})
                </button>
            </div>
        `;
    }).join('');

    list.querySelectorAll('button[data-biz-buy]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-biz-buy');
            const unit = BUSINESS_UNITS.find(u => u.id === id);
            if (!unit) return;
            const cost = getBusinessUnitCost(unit);
            if (player.coins < cost) return;

            player.coins -= cost;
            player.business[id] = (player.business[id] || 0) + 1;
            sound.playCoinRegister();
            saveProgress();
            updateHUD();
            renderBusinessModal();
            showToast(`Acquired ${unit.name}!`, 'border-emerald-400 text-emerald-200');
        });
    });
}

function renderLocationsModal() {
    const worth = getNetWorth();
    const list = document.getElementById('locationsList');
    list.innerHTML = LOCATIONS.map(loc => {
        const unlocked = worth >= loc.unlockNetWorth;
        const active = player.currentLocation === loc.id;
        return `
            <div class="bg-slate-900/85 border ${active ? 'border-sky-400/70' : 'border-slate-700/70'} rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-white text-sm">${loc.name}</span>
                        <span class="font-mono-num text-[11px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-md font-bold">${loc.valueMult}x Value</span>
                    </div>
                    <p class="text-xs text-slate-400 mt-0.5">${loc.desc}</p>
                    <div class="text-[11px] text-amber-300 font-mono-num mt-1">Port of Call: ${loc.townName} • Req. Net Worth: $${formatMoney(loc.unlockNetWorth)}</div>
                </div>
                <button data-loc-sail="${loc.id}" ${!unlocked || active ? 'disabled' : ''} class="btn-nautical px-4 py-2.5 rounded-xl font-accent text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer ${active ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40' : unlocked ? 'bg-sky-400 hover:bg-sky-300 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}">
                    ${active ? 'Anchored' : unlocked ? 'Set Sail' : `Locked ($${formatMoney(loc.unlockNetWorth)})`}
                </button>
            </div>
        `;
    }).join('');

    list.querySelectorAll('button[data-loc-sail]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-loc-sail');
            const loc = LOCATIONS.find(l => l.id === id);
            if (!loc || getNetWorth() < loc.unlockNetWorth) return;

            player.currentLocation = id;
            player.quests = generateTownQuests(id, getNetWorth());
            spawnRegionAmbientFish();
            saveProgress();
            updateHUD();
            if (worldScene === 'TOWN') leaveHarborTown();
            else closeAllModals();
            showToast(`Anchored in ${loc.name}!`, 'border-sky-400 text-sky-200');
        });
    });
}

function renderDexModal() {
    const filter = document.getElementById('dexRegionFilter').value;
    const list = filter === 'all' ? FISH_SPECIES : FISH_SPECIES.filter(f => f.region === filter);
    const discoveredTotal = Object.keys(player.caughtSpecies).length;
    document.getElementById('dexProgressSubtitle').textContent = `Discovered ${discoveredTotal} of ${FISH_SPECIES.length} endemic species`;

    const grid = document.getElementById('dexGrid');
    grid.innerHTML = list.slice(0, 180).map(sp => {
        const count = player.caughtSpecies[sp.id] || 0;
        const discovered = count > 0;
        return `
            <div class="rounded-2xl p-3 border ${discovered ? 'bg-slate-900/90 border-teal-400/40' : 'bg-slate-950/60 border-slate-800/80 opacity-65'}">
                <div class="flex items-center justify-between gap-2">
                    <span class="text-xs font-bold ${discovered ? 'text-white' : 'text-slate-500'}">${discovered ? sp.name : 'Undiscovered Species'}</span>
                    <span class="font-mono-num text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">${sp.rarity}</span>
                </div>
                <div class="text-[11px] text-slate-400 mt-1 font-mono-num">
                    ${discovered ? `Caught: ${count} • Base Est: $${formatMoney(sp.baseValue)}` : `Region: ${sp.region.toUpperCase()}`}
                </div>
            </div>
        `;
    }).join('');
}

function renderCharacterSelectionGrid() {
    const grid = document.getElementById('characterGrid');
    if (!grid) return;
    grid.innerHTML = CHARACTER_ROLES.map(c => {
        const selected = player.characterId === c.id;
        return `
            <div data-select-char="${c.id}" class="rounded-2xl p-4 border cursor-pointer transition ${selected ? 'bg-amber-400/15 border-amber-400 shadow-lg' : 'bg-slate-900/80 border-slate-700/80 hover:border-slate-500'}">
                <div class="flex items-center justify-between">
                    <div class="font-display text-lg font-bold text-white">${c.name}</div>
                    ${selected ? '<span class="font-accent text-[10px] uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md font-extrabold">Selected</span>' : ''}
                </div>
                <div class="text-[11px] text-amber-300 font-semibold mt-0.5">${c.perk}</div>
                <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">${c.desc}</p>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('[data-select-char]').forEach(card => {
        card.addEventListener('click', () => {
            player.characterId = card.getAttribute('data-select-char');
            saveProgress();
            updateHUD();
            renderCharacterSelectionGrid();
        });
    });
}

function updateHUD() {
    const loc = getActiveLocation();
    const ev = getActiveWorldEvent();
    const char = getActiveCharacter();
    const passive = getPassiveIncomePerSec();
    const activeRiskCount = Object.values(player.activeRisks).filter(Boolean).length;

    const coinEl = document.getElementById('hudCoins');
    const formattedCoins = `$${formatMoney(player.coins)}`;
    if (coinEl.textContent !== formattedCoins) {
        coinEl.textContent = formattedCoins;
        coinEl.classList.remove('hud-bump');
        void coinEl.offsetWidth;
        coinEl.classList.add('hud-bump');
    }
    const campStat = getRoleCampaignStatus(char.id);
    const campBadge = document.getElementById('hudCampaignBadge');
    if (campBadge) campBadge.textContent = `${campStat.completedCount}/${campStat.total}`;
    document.getElementById('hudPassiveRate').textContent = `+$${formatMoney(passive)}/s`;
    document.getElementById('hudNetWorth').textContent = `$${formatMoney(getNetWorth())}`;
    document.getElementById('hudRoleBadge').textContent = char.name.replace('The ', '');

    document.getElementById('hudHoldCount').textContent = `${player.hold.length}/${getHoldCapacity()}`;
    document.getElementById('hudHoldValue').textContent = `$${formatMoney(getHoldTotalValue())}`;

    document.getElementById('hudLocationName').textContent = loc.name;
    document.getElementById('hudEventLabel').textContent = `${ev.name} (${ev.valueMult}x)`;
    document.getElementById('hudWeatherIcon').innerHTML = ICONS[ev.icon] || ICONS.sun;

    const riskBadge = document.getElementById('hudRiskBadge');
    if (activeRiskCount > 0) {
        riskBadge.textContent = activeRiskCount;
        riskBadge.classList.remove('hidden');
    } else {
        riskBadge.classList.add('hidden');
    }

    document.getElementById('hudDexCount').textContent = `${Object.keys(player.caughtSpecies).length}/600`;

    const harpoonWrap = document.getElementById('harpoonToggleWrap');
    const harpoonUnlocked = (player.upgrades.harpoon || 0) >= 1;
    if (harpoonUnlocked) {
        harpoonWrap.classList.remove('hidden');
        document.getElementById('harpoonToggleLabel').textContent = player.harpoonMode
            ? 'Gear: Industrial Harpoon ACTIVE (Tap for Rod)'
            : 'Gear: Precision Rod (Tap to Switch to Harpoon)';
    } else {
        harpoonWrap.classList.add('hidden');
    }

    document.getElementById('startSelectedCharName').textContent = char.name;
    document.getElementById('startSelectedCharPerk').textContent = char.perk;
}

function showToast(msg, extraClasses = 'border-slate-600 text-slate-100') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `maritime-panel toast-enter rounded-2xl px-4 py-2.5 text-xs font-semibold shadow-xl border ${extraClasses}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 280);
    }, 3400);
}

// =========================================================================
// 9. EVENT LISTENERS & MAIN SIMULATION LOOP
// =========================================================================
function setupUIEventListeners() {
    // Start Menu Tabs
    const switchStartTab = (tab) => {
        ['Play', 'Chars', 'Options'].forEach(name => {
            const btn = document.getElementById(`startTab${name}`);
            const pane = document.getElementById(`startPane${name}`);
            const active = name.toLowerCase() === tab;
            if (btn) btn.className = active
                ? 'start-menu-tab px-3 py-1.5 rounded-lg text-[11px] font-accent uppercase tracking-wider font-bold bg-amber-400 text-slate-950 transition'
                : 'start-menu-tab px-3 py-1.5 rounded-lg text-[11px] font-accent uppercase tracking-wider font-bold text-slate-300 hover:text-white transition';
            if (pane) pane.classList.toggle('hidden', !active);
        });
    };

    document.getElementById('startTabPlay').addEventListener('click', () => switchStartTab('play'));
    document.getElementById('startTabChars').addEventListener('click', () => {
        renderCharacterSelectionGrid();
        switchStartTab('chars');
    });
    document.getElementById('switchCharQuickBtn').addEventListener('click', () => {
        renderCharacterSelectionGrid();
        switchStartTab('chars');
    });
    document.getElementById('startTabOptions').addEventListener('click', () => switchStartTab('options'));

    const nameInput = document.getElementById('captainNameInput');
    nameInput.value = player.captainName || 'Capt. Vance';
    nameInput.addEventListener('input', () => {
        player.captainName = nameInput.value.trim() || 'Capt. Vance';
        saveProgress();
    });

    document.getElementById('launchGameBtn').addEventListener('click', () => {
        sound.init();
        document.getElementById('startMenuScreen').classList.add('hidden');
        updateHUD();
    });

    document.getElementById('openStartMenuBtn').addEventListener('click', () => {
        renderCharacterSelectionGrid();
        document.getElementById('startMenuScreen').classList.remove('hidden');
    });

    document.getElementById('optSoundToggleBtn').addEventListener('click', (e) => {
        const enabled = sound.toggle();
        e.target.textContent = enabled ? 'Enabled' : 'Muted';
    });

    document.getElementById('optTimeToggleBtn').addEventListener('click', (e) => {
        timeModeIndex = (timeModeIndex + 1) % TIME_MODES.length;
        e.target.textContent = TIME_MODES[timeModeIndex];
    });

    document.getElementById('optResetSaveBtn').addEventListener('click', () => {
        document.getElementById('confirmResetModal').classList.remove('hidden');
    });
    document.getElementById('cancelResetBtn').addEventListener('click', () => {
        document.getElementById('confirmResetModal').classList.add('hidden');
    });
    document.getElementById('confirmResetBtn').addEventListener('click', () => {
        localStorage.removeItem(SAVE_KEY);
        player = getDefaultSave();
        spawnRegionAmbientFish();
        updateHUD();
        document.getElementById('confirmResetModal').classList.add('hidden');
        showToast('Charter progress reset to starting skiff.', 'border-amber-400 text-amber-200');
    });

    // Go To Town & Boat Hold buttons
    const openTownWithBriefing = () => {
        if (worldScene === 'TOWN') {
            const nearest = getNearestTownTarget();
            if (nearest.kind === 'villager') {
                openVillagerDialogue(nearest.data);
            } else if (nearest.data.tab) {
                openBuildingInterior(nearest.data.tab);
            } else {
                openBuildingInterior('market');
            }
            return;
        }
        showFeatureBriefing('town', {
            icon: 'town',
            kicker: 'Port of Call',
            title: `Docking at ${getActiveLocation().townName}`,
            subtitle: 'Step onto the harbor promenade to walk between the Fishmonger Market, Harbormaster Guild, and Drydock Outfitter.',
            proceedLabel: 'Disembark to Town',
            bullets: [
                'Walk along the waterfront pier by tapping or using A / D / Arrow Keys.',
                'Talk to strolling villagers for custom tasks or enter storefronts to sell catches & upgrade gear.'
            ]
        }, () => {
            enterHarborTown(null);
        });
    };

    document.getElementById('openTownBtn').addEventListener('click', openTownWithBriefing);
    document.getElementById('openTownHoldBtn').addEventListener('click', openTownWithBriefing);
    document.getElementById('catchGoTownBtn').addEventListener('click', () => {
        document.getElementById('catchModal').classList.add('hidden');
        enterHarborTown('market');
    });
    document.getElementById('returnToSeaBtn').addEventListener('click', () => {
        leaveHarborTown();
    });
    document.getElementById('closeBuildingModalBtn').addEventListener('click', () => {
        document.getElementById('townBuildingModal').classList.add('hidden');
    });
    document.getElementById('townInteractActionBtn').addEventListener('click', () => {
        const nearest = getNearestTownTarget();
        if (nearest.kind === 'villager') {
            openVillagerDialogue(nearest.data);
        } else if (nearest.data.id === 'boat') {
            leaveHarborTown();
        } else if (nearest.data.tab) {
            openBuildingInterior(nearest.data.tab);
        }
    });

    // Villager Dialogue Modal Actions
    document.getElementById('closeVillagerModalBtn').addEventListener('click', () => {
        document.getElementById('villagerModal').classList.add('hidden');
    });
    document.getElementById('villagerSayByeBtn').addEventListener('click', () => {
        document.getElementById('villagerModal').classList.add('hidden');
    });
    document.getElementById('villagerPrimaryActionBtn').addEventListener('click', () => {
        if (!activeDialogueVillager) return;
        const v = activeDialogueVillager;
        const existing = player.activeVillagerTask;

        if (existing && existing.villagerId === v.id && existing.progress >= existing.target) {
            player.coins += existing.reward;
            player.lifetimeEarnings = (player.lifetimeEarnings || 0) + existing.reward;
            player.questsCompleted = (player.questsCompleted || 0) + 1;
            player.activeVillagerTask = null;
            sound.playCatchFanfare('Rare');
            saveProgress();
            updateHUD();
            document.getElementById('villagerModal').classList.add('hidden');
            showToast(`Task Reward Collected from ${v.name}: +$${formatMoney(existing.reward)}!`, 'border-emerald-400 text-emerald-200');
            return;
        }

        const scale = Math.max(1, getActiveLocation().valueMult);
        const tpl = v.taskTemplate;
        const scaledTarget = tpl.type === 'catch_weight' ? Math.round(tpl.target * scale) : tpl.target;
        const scaledReward = Math.round(tpl.baseReward * scale);
        player.activeVillagerTask = {
            villagerId: v.id,
            giverName: v.name,
            title: tpl.title,
            type: tpl.type,
            target: scaledTarget,
            progress: 0,
            reward: scaledReward,
            desc: tpl.desc.replace(String(tpl.target), String(scaledTarget))
        };
        saveProgress();
        document.getElementById('villagerModal').classList.add('hidden');
        showToast(`Accepted task from ${v.name}: ${tpl.title}`, 'border-amber-400 text-amber-200');
    });

    // Mobile/Touch Walk Controls
    const leftWalkBtn = document.getElementById('townWalkLeftBtn');
    const rightWalkBtn = document.getElementById('townWalkRightBtn');
    leftWalkBtn.addEventListener('pointerdown', () => { townKeys.left = true; });
    leftWalkBtn.addEventListener('pointerup', () => { townKeys.left = false; });
    leftWalkBtn.addEventListener('pointerleave', () => { townKeys.left = false; });
    rightWalkBtn.addEventListener('pointerdown', () => { townKeys.right = true; });
    rightWalkBtn.addEventListener('pointerup', () => { townKeys.right = false; });
    rightWalkBtn.addEventListener('pointerleave', () => { townKeys.right = false; });

    document.querySelectorAll('.town-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeTownTab = btn.getAttribute('data-town-tab');
            const targetBuilding = TOWN_BUILDINGS.find(b => b.tab === activeTownTab);
            if (targetBuilding) {
                townPlayerX = targetBuilding.xPct;
                townTargetX = targetBuilding.xPct;
            }
            renderTownModal();
        });
    });

    // Catch Continue
    document.getElementById('catchContinueBtn').addEventListener('click', () => {
        document.getElementById('catchModal').classList.add('hidden');
    });

    document.getElementById('openCampaignBtn').addEventListener('click', () => {
        renderCampaignModal();
        document.getElementById('campaignModal').classList.remove('hidden');
    });
    document.getElementById('closeCampaignBtn').addEventListener('click', () => {
        document.getElementById('campaignModal').classList.add('hidden');
    });

    // Leaderboard
    document.getElementById('openLeaderboardBtn').addEventListener('click', () => {
        showFeatureBriefing('leaderboard', {
            icon: 'trophy',
            kicker: 'Global Standings',
            title: 'International Fishery Registry',
            subtitle: 'Compare your combined treasury, boat hold, and industrial fleet valuation against rival captains.',
            proceedLabel: 'View Rankings',
            bullets: [
                'Net Worth combines liquid cash, livewell inventory, and business assets.',
                'Expand your fleet in Empire HQ to overtake international syndicates.'
            ]
        }, () => {
            renderLeaderboardModal();
            document.getElementById('leaderboardModal').classList.remove('hidden');
        });
    });
    document.getElementById('closeLeaderboardBtn').addEventListener('click', () => {
        document.getElementById('leaderboardModal').classList.add('hidden');
    });

    // Risk & Contraband
    document.getElementById('openRiskBtn').addEventListener('click', () => {
        showFeatureBriefing('risk', {
            icon: 'alert',
            kicker: 'High-Stakes Operations',
            title: 'Syndicate & Contraband Tactics',
            subtitle: 'Activate aggressive harvesting methods for massive multipliers—at the risk of Coast Guard patrols.',
            proceedLabel: 'Open Risk Ledger',
            bullets: [
                'Boosts fish sale values, rare specimen luck, and passive fleet output.',
                'Every landed catch rolls against your active patrol bust percentage.'
            ]
        }, () => {
            renderRiskModal();
            document.getElementById('riskModal').classList.remove('hidden');
        });
    });
    document.getElementById('closeRiskBtn').addEventListener('click', () => {
        document.getElementById('riskModal').classList.add('hidden');
    });

    // Empire HQ
    document.getElementById('openBusinessBtn').addEventListener('click', () => {
        showFeatureBriefing('empire', {
            icon: 'empire',
            kicker: 'Industrial Tycoon',
            title: 'Maritime Empire & Fleet HQ',
            subtitle: 'Invest profits into stalls, deckhands, trawlers, and offshore rigs for automated passive income.',
            proceedLabel: 'Manage Empire',
            bullets: [
                'Generates continuous income per second even while casting.',
                'Permanently multiplies the sale price of every fish you catch.'
            ]
        }, () => {
            renderBusinessModal();
            document.getElementById('businessModal').classList.remove('hidden');
        });
    });
    document.getElementById('closeBusinessBtn').addEventListener('click', () => {
        document.getElementById('businessModal').classList.add('hidden');
    });

    // Locations / Charts
    const openCharts = () => {
        showFeatureBriefing('charts', {
            icon: 'compass',
            kicker: 'Navigation Charts',
            title: 'Six Global Expedition Waters',
            subtitle: 'Each region features 100 exclusive endemic species, its own Harbor Town, and higher base payouts.',
            proceedLabel: 'Open Sea Charts',
            bullets: [
                '600 total species across Creek, Lake, Atoll, Fjord, Abyssal Trench & Polar Shelf.',
                'Unlock new waters automatically as your Net Worth grows.'
            ]
        }, () => {
            renderLocationsModal();
            document.getElementById('locationsModal').classList.remove('hidden');
        });
    };
    document.getElementById('openLocationsBtn').addEventListener('click', openCharts);
    document.getElementById('openLocationsQuickBtn').addEventListener('click', openCharts);
    document.getElementById('closeLocationsBtn').addEventListener('click', () => {
        document.getElementById('locationsModal').classList.add('hidden');
    });

    // FishDex Encyclopedia
    document.getElementById('openDexBtn').addEventListener('click', () => {
        renderDexModal();
        document.getElementById('dexModal').classList.remove('hidden');
    });
    document.getElementById('dexRegionFilter').addEventListener('change', renderDexModal);
    document.getElementById('closeDexBtn').addEventListener('click', () => {
        document.getElementById('dexModal').classList.add('hidden');
    });

    // Harpoon Mode Toggle
    document.getElementById('harpoonToggleBtn').addEventListener('click', () => {
        player.harpoonMode = !player.harpoonMode;
        saveProgress();
        updateHUD();
    });

    // Canvas Pointer Input (Handles both Sea Fishing & Full-Screen Town Walking/Entering/Talking)
    canvas.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        if (worldScene === 'TOWN') {
            const modalOpen = !document.getElementById('townBuildingModal').classList.contains('hidden')
                || !document.getElementById('villagerModal').classList.contains('hidden');
            if (modalOpen) return;
            const clickPct = Math.max(0.09, Math.min(0.93, e.clientX / width));
            townTargetX = clickPct;

            const tappedVillager = TOWN_VILLAGERS.find(v => Math.abs(clickPct - v.xPct) < 0.055);
            if (tappedVillager && Math.abs(townPlayerX - tappedVillager.xPct) < 0.085) {
                openVillagerDialogue(tappedVillager);
                return;
            }

            const clickedBuilding = TOWN_BUILDINGS.find(b => Math.abs(clickPct - b.xPct) < 0.065);
            if (clickedBuilding && Math.abs(townPlayerX - clickedBuilding.xPct) < 0.085) {
                if (clickedBuilding.id === 'boat') leaveHarborTown();
                else if (clickedBuilding.tab) openBuildingInterior(clickedBuilding.tab);
            }
            return;
        }

        if (state === GAME_STATE.IDLE) {
            startChargingCast();
        } else if (state === GAME_STATE.BITE) {
            setHookAndStartReeling();
        } else if (state === GAME_STATE.REELING) {
            reelHoldingInput = true;
            handleTimingStrike();
        } else if (state === GAME_STATE.HARPOONING) {
            fireHarpoonBolt();
        }
    });

    window.addEventListener('pointerup', () => {
        reelHoldingInput = false;
        if (worldScene === 'SEA' && state === GAME_STATE.CHARGING) {
            releaseCast();
        }
    });

    // Keyboard Input (Fishing + Full-Screen Town Boardwalk Walking & Interaction)
    window.addEventListener('keydown', (e) => {
        if (worldScene === 'TOWN') {
            const modalOpen = !document.getElementById('townBuildingModal').classList.contains('hidden')
                || !document.getElementById('villagerModal').classList.contains('hidden');
            if (e.code === 'ArrowLeft' || e.code === 'KeyA') townKeys.left = true;
            if (e.code === 'ArrowRight' || e.code === 'KeyD') townKeys.right = true;
            if ((e.code === 'KeyE' || e.code === 'Enter') && !modalOpen) {
                e.preventDefault();
                const nearest = getNearestTownTarget();
                if (nearest.kind === 'villager') {
                    openVillagerDialogue(nearest.data);
                } else if (nearest.dist < 0.10) {
                    if (nearest.data.id === 'boat') leaveHarborTown();
                    else if (nearest.data.tab) openBuildingInterior(nearest.data.tab);
                }
            }
            return;
        }

        if (e.code === 'Space') {
            const anyModalOpen = ['startMenuScreen', 'transitionSplash', 'catchModal', 'leaderboardModal', 'riskModal', 'businessModal', 'locationsModal', 'dexModal', 'confirmResetModal']
                .some(id => !document.getElementById(id).classList.contains('hidden'));
            if (anyModalOpen) return;

            e.preventDefault();
            if (state === GAME_STATE.IDLE && !e.repeat) {
                startChargingCast();
            } else if (state === GAME_STATE.BITE && !e.repeat) {
                setHookAndStartReeling();
            } else if (state === GAME_STATE.REELING) {
                reelHoldingInput = true;
                if (!e.repeat) handleTimingStrike();
            } else if (state === GAME_STATE.HARPOONING && !e.repeat) {
                fireHarpoonBolt();
            }
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') townKeys.left = false;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') townKeys.right = false;

        if (e.code === 'Space') reelHoldingInput = false;
        if (worldScene === 'SEA' && e.code === 'Space' && state === GAME_STATE.CHARGING) {
            e.preventDefault();
            releaseCast();
        }
    });
}

// Main Simulation Update & Animation Loop
let lastFrameTime = performance.now();
let passiveAccum = 0;

function updateSimulation(dt, timeSec) {
    eventTimeRemaining -= dt;
    if (eventTimeRemaining <= 0) {
        cycleWorldEvent();
    }

    const passiveRate = getPassiveIncomePerSec();
    if (passiveRate > 0) {
        passiveAccum += passiveRate * dt;
        if (passiveAccum >= 1) {
            const whole = Math.floor(passiveAccum);
            passiveAccum -= whole;
            player.coins += whole;
            player.lifetimeEarnings = (player.lifetimeEarnings || 0) + whole;
            updateHUD();
        }
    }

    clouds.forEach(c => {
        c.x += c.speed * dt;
        if (c.x > width + 80) c.x = -80;
    });
    seagulls.forEach(g => {
        g.x += g.speed * dt;
        g.y += Math.sin(timeSec * 2 + g.flapPhase) * 6 * dt;
        if (g.x > width + 60) g.x = -60;
    });

    if (worldScene === 'TOWN') {
        updateTownSimulation(dt);
        return;
    }

    const waterY = getWaterlineY();
    bubbles.forEach(b => {
        b.y -= b.speed * dt;
        if (b.y < waterY + 6) {
            b.y = height - 10;
            b.x = Math.random() * width;
        }
    });

    if (getActiveWorldEvent().id === 'storm') {
        rainDrops.forEach(r => {
            r.y += r.speed * dt;
            r.x -= r.speed * 0.22 * dt;
            if (r.y > height) {
                r.y = -20;
                r.x = Math.random() * (width + 100);
            }
        });
    }

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 260 * dt;
        p.life -= dt;
        if (p.life <= 0) particles.splice(i, 1);
    }

    // Cast Power Oscillation
    if (state === GAME_STATE.CHARGING) {
        castPower += castChargeDir * 1.15 * dt;
        if (castPower >= 1) {
            castPower = 1;
            castChargeDir = -1;
        } else if (castPower <= 0.1) {
            castPower = 0.1;
            castChargeDir = 1;
        }
    }

    // Bobber Flight to Target Water Depth
    if (state === GAME_STATE.CASTING) {
        const dx = bobber.targetX - bobber.x;
        const dy = bobber.targetY - bobber.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 14) {
            bobber.x = bobber.targetX;
            bobber.y = bobber.targetY;
            state = GAME_STATE.WAITING;
            waitTimer = 0;
            sound.playSplash(0.9);
            spawnSplashParticles(bobber.x, bobber.y, 12, '#bae6fd');
            updateActionPrompt('Waiting for a visible fish to approach your lure...', 'bg-sky-400');
        } else {
            bobber.x += (dx / dist) * 560 * dt;
            bobber.y += (dy / dist) * 560 * dt;
        }
    }

    // Ambient Fish Swimming & Visible Attraction to Bobber (Eliminates Invisible Catches)
    const ev = getActiveWorldEvent();
    ambientFish.forEach(f => {
        f.tailPhase += dt * (f.species.isSwift ? 15 : 8);

        if (state === GAME_STATE.WAITING) {
            const distToBobber = Math.hypot(bobber.x - f.x, bobber.y - f.y);
            const attractRadius = 210 * ev.biteMult;

            if (distToBobber < attractRadius) {
                f.attracted = true;
                f.dir = bobber.x >= f.x ? 1 : -1;
                const approachSpeed = Math.max(68, f.speed * 1.25);
                f.x += ((bobber.x - f.x) / Math.max(1, distToBobber)) * approachSpeed * dt;
                f.y += ((bobber.y - f.y) / Math.max(1, distToBobber)) * approachSpeed * dt;

                if (distToBobber < 18) {
                    triggerVisibleFishBite(f);
                }
                return;
            }
        }

        f.attracted = false;
        f.x += f.dir * f.speed * dt;
        if (f.x > width + 50) f.dir = -1;
        if (f.x < -50) f.dir = 1;
    });

    // Bite Reaction Timer
    if (state === GAME_STATE.BITE) {
        biteWindowTimer -= dt;
        if (hookedFish) {
            hookedFish.x = bobber.x;
            hookedFish.y = bobber.y;
        }
        if (biteWindowTimer <= 0) {
            showToast('Too slow! The fish stole the bait and swam off.', 'border-slate-500 text-slate-300');
            resetToIdle();
        }
    }

    // Reeling 6-Challenge Physics Simulation
    if (state === GAME_STATE.REELING && hookedFish) {
        const sp = hookedFish.species;
        const cType = activeReelChallenge.id;
        const needleSpeed = (1.10 + sp.fightStrength * 0.90) * ev.needleMult;

        if (cType === 'tension_hold') {
            // Buoyancy float drifts down with current, rises when holding input
            const lift = reelHoldingInput ? 0.72 : -0.48;
            reelNeedlePos = Math.max(0.04, Math.min(0.96, reelNeedlePos + lift * dt));
            const inZone = Math.abs(reelNeedlePos - reelZoneCenter) <= reelZoneWidth * 0.55;
            if (inZone) {
                reelProgress += (0.34 - sp.fightStrength * 0.08) * dt;
                reelFeedbackText = 'HOLDING TENSION!';
                reelFeedbackColor = '#34d399';
                reelFeedbackTimer = 0.25;
                if (reelProgress >= 1) {
                    completeCatch(hookedFish);
                    return;
                }
            } else {
                reelProgress = Math.max(0.02, reelProgress - 0.14 * dt);
            }
        } else if (cType === 'sonar_ring') {
            reelRingRadius -= (0.68 + sp.fightStrength * 0.35) * ev.needleMult * dt;
            if (reelRingRadius <= 0.08) reelRingRadius = 1.0;
            reelProgress = Math.max(0.02, reelProgress - (0.04 + sp.fightStrength * 0.03) * dt);
        } else if (cType === 'tide_dial') {
            reelDialAngle = (reelDialAngle + (2.6 + sp.fightStrength * 1.6) * ev.needleMult * dt) % (Math.PI * 2);
            reelProgress = Math.max(0.02, reelProgress - (0.04 + sp.fightStrength * 0.03) * dt);
        } else {
            // classic_bar, triple_rhythm, dual_pendulum
            reelNeedlePos += reelNeedleDir * needleSpeed * dt;
            if (reelNeedlePos >= 1) {
                reelNeedlePos = 1;
                reelNeedleDir = -1;
            } else if (reelNeedlePos <= 0) {
                reelNeedlePos = 0;
                reelNeedleDir = 1;
            }
            reelNeedle2Pos = 1 - reelNeedlePos;
            reelProgress = Math.max(0.02, reelProgress - (0.042 + sp.fightStrength * 0.035) * dt);
        }

        hookedFish.x = bobber.x + Math.sin(timeSec * 18) * 6;
        hookedFish.y = bobber.y + Math.cos(timeSec * 14) * 4;

        if (reelFeedbackTimer > 0) reelFeedbackTimer -= dt;
    }

    // Harpoon Mini-Game Aim Sweep (with Magnetic Slowdown near Target), Smooth Leviathan Path & Generous Hitbox
    if (state === GAME_STATE.HARPOONING && hookedFish) {
        harpoonWaveTimer += dt;
        const harpoonLvl = player.upgrades.harpoon || 1;
        const tip = getRodTipPos();
        const idealAngle = Math.atan2(hookedFish.y - tip.y, hookedFish.x - tip.x);
        const angleDelta = Math.abs(idealAngle - harpoonAimAngle);
        harpoonLockQuality = Math.max(0, Math.min(1, 1 - angleDelta / 0.16));

        // Slow down aim sweep when aligned with the Leviathan so firing feels crisp & fair
        const baseAimSpeed = harpoonLvl >= 2 ? 0.56 : 0.68;
        const aimSpeed = baseAimSpeed * (1 - harpoonLockQuality * 0.55);
        harpoonAimAngle += harpoonAimDir * aimSpeed * dt;
        if (harpoonAimAngle > 0.88) {
            harpoonAimAngle = 0.88;
            harpoonAimDir = -1;
        } else if (harpoonAimAngle < 0.06) {
            harpoonAimAngle = 0.06;
            harpoonAimDir = 1;
        }

        // Predictable, smooth Leviathan patrol path
        const minTx = Math.max(getBoatPos().x + 185, width * 0.38);
        const maxTx = width - 95;
        const minTy = waterY + 65;
        const maxTy = height - 75;

        harpoonTargetPos.x += harpoonTargetPos.vx * dt;
        harpoonTargetPos.y += Math.sin(harpoonWaveTimer * 1.4) * 34 * dt;
        if (harpoonTargetPos.x > maxTx) {
            harpoonTargetPos.x = maxTx;
            harpoonTargetPos.vx = -Math.abs(harpoonTargetPos.vx);
        } else if (harpoonTargetPos.x < minTx) {
            harpoonTargetPos.x = minTx;
            harpoonTargetPos.vx = Math.abs(harpoonTargetPos.vx);
        }
        harpoonTargetPos.y = Math.max(minTy, Math.min(maxTy, harpoonTargetPos.y));

        hookedFish.x = harpoonTargetPos.x;
        hookedFish.y = harpoonTargetPos.y;
        hookedFish.dir = harpoonTargetPos.vx >= 0 ? 1 : -1;
        hookedFish.tailPhase += dt * 9;

        // Bolt Flight & Generous Hitbox Detection
        if (harpoonFlight && harpoonFlight.active) {
            harpoonFlight.x += harpoonFlight.vx * dt;
            harpoonFlight.y += harpoonFlight.vy * dt;

            const hitRadius = harpoonLvl >= 2 ? 64 : 54;
            const distToLeviathan = Math.hypot(harpoonFlight.x - hookedFish.x, harpoonFlight.y - hookedFish.y);

            if (distToLeviathan <= hitRadius) {
                harpoonFlight.active = false;
                harpoonHits++;
                sound.playTimingHit(true, harpoonHits);
                spawnSplashParticles(hookedFish.x, hookedFish.y, 18, '#fbbf24');

                if (harpoonHits >= harpoonHitsRequired) {
                    completeCatch(hookedFish);
                    return;
                } else if (harpoonBoltsLeft <= 0) {
                    sound.playSnap();
                    showToast(`Out of harpoon bolts! ${hookedFish.species.name} broke free into the deep!`, 'border-rose-400 text-rose-200');
                    resetToIdle();
                    return;
                } else {
                    showToast(`Direct Harpoon Hit (${harpoonHits}/${harpoonHitsRequired})! Fire again!`, 'border-amber-400 text-amber-200');
                }
            } else if (harpoonFlight.x > width + 40 || harpoonFlight.y > height + 40 || harpoonFlight.y < 0) {
                harpoonFlight.active = false;
                sound.playTimingMiss();
                if (harpoonBoltsLeft <= 0) {
                    sound.playSnap();
                    showToast(`Missed final harpoon bolt! ${hookedFish.species.name} escaped!`, 'border-rose-400 text-rose-200');
                    resetToIdle();
                    return;
                } else {
                    showToast(`Bolt missed! ${harpoonBoltsLeft} bolt${harpoonBoltsLeft === 1 ? '' : 's'} remaining.`, 'border-slate-400 text-slate-200');
                }
            }
        }
    }
}

function gameLoop(now) {
    const dt = Math.min(0.05, (now - lastFrameTime) / 1000);
    lastFrameTime = now;
    const timeSec = now * 0.001;

    updateSimulation(dt, timeSec);
    if (worldScene === 'TOWN') {
        renderFullTownScene(timeSec);
    } else {
        renderScene(timeSec);
    }
    requestAnimationFrame(gameLoop);
}

function startSereneWaters() {
    resizeCanvas();
    initEnvironment();
    setupUIEventListeners();
    renderCharacterSelectionGrid();
    updateHUD();
    if (pendingOfflineReport) {
        const mins = Math.max(1, Math.round(pendingOfflineReport.elapsedSec / 60));
        showToast(`Fleet Offline Yield (${mins}m away): +$${formatMoney(pendingOfflineReport.earned)}!`, 'border-emerald-400 text-emerald-200');
        saveProgress();
        pendingOfflineReport = null;
    }
    requestAnimationFrame(gameLoop);
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', startSereneWaters);
} else {
    startSereneWaters();
}
    
