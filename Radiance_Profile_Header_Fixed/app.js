/**
 * RADIANCE — Mobile & Desktop AI Personal Styling Prototype
 * Flow:
 * Screen 0: Radiance Home (Home First Experience)
 * Screen 1: Upload / Live Camera Photo Input
 * Screen 2: AI Personal Analysis
 * Screen 3: Personal Color Analysis
 * Screen 4: Multiple Personalized Outfit Combinations (4+ Looks)
 * Screen 5: Complete Look (With Try-On Photo Header)
 * Screen 6: Shop This Look (EXCLUSIVELY Myntra & Meesho)
 * Screen 7: Virtual Try-On (Draped Overlay & Garment Pins)
 * Screen 8: Saved Look Dossier
 * Screen 9: Final Radiance Screen (Manifesto & Closet)
 */

// ============================================================================
// 1. EMBEDDED HIGH-FASHION EDITORIAL SVG PORTRAITS (100% OFFLINE)
// ============================================================================
const PRESET_AVATARS = {
  aria: "assets/avatars/aria.webp",
  chloe: "assets/avatars/chloe.webp",
  maya: "assets/avatars/maya.webp",
  elena: "assets/avatars/elena.webp"
};

// ============================================================================
// 2. COMPREHENSIVE STYLING PROFILES (DETERMINISTIC MOCK AI)
// ============================================================================
const STYLING_PROFILES = {
  aria: {
    id: "aria",
    name: "Aria",
    season: "Soft Autumn Glow",
    skinTone: { name: "Warm Medium", hex: "#C68B59" },
    undertone: { type: "Warm", family: "Golden Honey", desc: "Radiant golden undertone with warm caramel warmth." },
    styleProfile: "Modern • Architectural • Fluid",
    styleDesc: "Warm earthy draping, tailored structure and clean minimalist lines.",
    colors: {
      best: [
        { name: "Terracotta Rust", hex: "#C85A32" },
        { name: "Warm Champagne", hex: "#DFB15B" },
        { name: "Raw Ecru", hex: "#F5EFEB" },
        { name: "Dark Espresso", hex: "#231915" },
        { name: "Spiced Ochre", hex: "#B8860B" },
        { name: "Warm Olive", hex: "#6E7A4A" },
        { name: "Soft Sienna", hex: "#A0522D" },
        { name: "Rose Sand", hex: "#C27D60" }
      ],
      complementary: [
        { name: "Antique Sage", hex: "#7D9D8B" },
        { name: "Deep Teal", hex: "#1F4E5B" },
        { name: "Desert Sand", hex: "#D9C7B6" },
        { name: "Burnt Copper", hex: "#8C4728" }
      ],
      avoid: [
        { name: "Electric Cyan", hex: "#00FFFF" },
        { name: "Stark Chalk White", hex: "#FFFFFF" },
        { name: "Neon Magenta", hex: "#FF00FF" },
        { name: "Cold Ash Grey", hex: "#9E9E9E" }
      ],
      combinations: [
        { name: "Earthy Luxe", desc: "Terracotta + Ecru + Rose Sand", dots: ["#C85A32", "#F5EFEB", "#C27D60"] },
        { name: "Executive Drape", desc: "Warm Champagne + Dark Espresso", dots: ["#DFB15B", "#231915", "#F5EFEB"] },
        { name: "Casual Harmony", desc: "Spiced Ochre + Warm Olive + Ecru", dots: ["#B8860B", "#6E7A4A", "#F5EFEB"] }
      ]
    }
  },

  chloe: {
    id: "chloe",
    name: "Chloe",
    season: "Deep Winter Frost",
    skinTone: { name: "Cool Porcelain", hex: "#F3D7CA" },
    undertone: { type: "Cool", family: "Rosy Ivory", desc: "Luminescent cool undertone with subtle blue-pink subsurface." },
    styleProfile: "Architectural • Minimal • Sharp",
    styleDesc: "High-contrast silhouettes, crisp tailoring and jewel-toned accents.",
    colors: {
      best: [
        { name: "Midnight Navy", hex: "#1A365D" },
        { name: "Emerald Glaze", hex: "#065F46" },
        { name: "Crisp Pure White", hex: "#F8FAFC" },
        { name: "Obsidian Noir", hex: "#0F172A" },
        { name: "Rich Berry Jam", hex: "#9F1239" },
        { name: "Ice Silver", hex: "#E2E8F0" },
        { name: "Cobalt Azure", hex: "#1D4ED8" },
        { name: "Plum Noir", hex: "#4C1D95" }
      ],
      complementary: [
        { name: "Frosted Rose", hex: "#F472B6" },
        { name: "Steel Slate", hex: "#475569" },
        { name: "Periwinkle", hex: "#818CF8" },
        { name: "Titanium", hex: "#94A3B8" }
      ],
      avoid: [
        { name: "Mustard Orange", hex: "#D97706" },
        { name: "Dull Khaki", hex: "#78716C" },
        { name: "Warm Olive", hex: "#65A30D" },
        { name: "Peach Rust", hex: "#FB923C" }
      ],
      combinations: [
        { name: "High Contrast", desc: "Midnight Navy + Pure White + Silver", dots: ["#1A365D", "#F8FAFC", "#E2E8F0"] },
        { name: "Jeweled Power", desc: "Emerald Glaze + Obsidian + Berry", dots: ["#065F46", "#0F172A", "#9F1239"] },
        { name: "Frosted Chill", desc: "Ice Silver + Cobalt Azure + Navy", dots: ["#E2E8F0", "#1D4ED8", "#1A365D"] }
      ]
    }
  },

  maya: {
    id: "maya",
    name: "Maya",
    season: "Rich Bronze Glow",
    skinTone: { name: "Deep Bronze", hex: "#8D5524" },
    undertone: { type: "Warm", family: "Sunlit Amber", desc: "Velvety rich mahogany with golden-amber highlights." },
    styleProfile: "Modern Luxe • Fluid Drama",
    styleDesc: "Rich vibrant saturation, flowing textiles and burnished gold hardware.",
    colors: {
      best: [
        { name: "Saffron Gold", hex: "#F59E0B" },
        { name: "Rust Clay", hex: "#C2410C" },
        { name: "Warm Amber", hex: "#D97706" },
        { name: "Forest Emerald", hex: "#166534" },
        { name: "Burnished Bronze", hex: "#78350F" },
        { name: "Dark Roast", hex: "#29180E" },
        { name: "Sunlit Terracotta", hex: "#EA580C" },
        { name: "Royal Copper", hex: "#B45309" }
      ],
      complementary: [
        { name: "Turquoise Wave", hex: "#0D9488" },
        { name: "Molten Gold", hex: "#FBBF24" },
        { name: "Warm Camel", hex: "#B45309" },
        { name: "Deep Marigold", hex: "#F59E0B" }
      ],
      avoid: [
        { name: "Pale Washed Grey", hex: "#D1D5DB" },
        { name: "Dusty Lavender", hex: "#C084FC" },
        { name: "Chalky Mint", hex: "#A7F3D0" },
        { name: "Ashen Taupe", hex: "#9CA3AF" }
      ],
      combinations: [
        { name: "Solar Majesty", desc: "Saffron Gold + Dark Roast + Molten Gold", dots: ["#F59E0B", "#29180E", "#FBBF24"] },
        { name: "Warm Heritage", desc: "Rust Clay + Burnished Bronze + Amber", dots: ["#C2410C", "#78350F", "#D97706"] },
        { name: "Jewel Contrast", desc: "Forest Emerald + Saffron + Royal Copper", dots: ["#166534", "#F59E0B", "#B45309"] }
      ]
    }
  },

  elena: {
    id: "elena",
    name: "Elena",
    season: "Muted Soft Summer",
    skinTone: { name: "Neutral Olive", hex: "#A67C52" },
    undertone: { type: "Neutral", family: "Neutral Olive", desc: "Velvety olive tone with soft champagne undertones." },
    styleProfile: "Quiet Luxury • Soft Structure",
    styleDesc: "Heathered textures and tonal gradients with subtle elegance.",
    colors: {
      best: [
        { name: "Dusty Sage", hex: "#7D9D8B" },
        { name: "Heather Mauve", hex: "#A37081" },
        { name: "Slate Azure", hex: "#5B758E" },
        { name: "Vintage Cream", hex: "#F8F4EB" },
        { name: "Cocoa Espresso", hex: "#48322B" },
        { name: "Dusty Rosewood", hex: "#9B4D57" },
        { name: "Antique Jade", hex: "#4B6358" },
        { name: "Soft Muted Plum", hex: "#674846" }
      ],
      complementary: [
        { name: "Champagne Pearl", hex: "#CBB18B" },
        { name: "Muted Teal", hex: "#3B7A75" },
        { name: "Soft Sand", hex: "#D6C7B2" },
        { name: "Pewter", hex: "#6B7280" }
      ],
      avoid: [
        { name: "Neon Acid Yellow", hex: "#FFFF00" },
        { name: "Electric Lime", hex: "#76FF03" },
        { name: "Carbon Black", hex: "#111111" },
        { name: "Traffic Orange", hex: "#FF5722" }
      ],
      combinations: [
        { name: "Sage + Cream", desc: "Dusty Sage + Vintage Cream + Champagne", dots: ["#7D9D8B", "#F8F4EB", "#CBB18B"] },
        { name: "Mauve + Cocoa", desc: "Heather Mauve + Cocoa Espresso + Azure", dots: ["#A37081", "#48322B", "#5B758E"] },
        { name: "Rosewood + Sand", desc: "Dusty Rosewood + Soft Sand + Cocoa", dots: ["#9B4D57", "#D6C7B2", "#48322B"] }
      ]
    }
  }
};

// ============================================================================
// 3. CURATED OUTFIT CATALOG (PERSONALIZED PER PROFILE — 4+ COMBINATIONS EACH)
// STRICT REQUIREMENT: STORE VALUES MUST EXCLUSIVELY BE "Myntra" OR "Meesho"
// ============================================================================
const PROFILE_OUTFITS = {
  // --------------------------------------------------------------------------
  // ARIA (Warm Medium / Soft Autumn Glow)
  // --------------------------------------------------------------------------
  aria: [
    {
      id: "aria-cas",
      title: "Smart Casual Terracotta Drape",
      category: "Casual",
      tag: "SIGNATURE LOOK",
      score: "98.8%",
      swatches: ["#C85A32", "#F5EFEB", "#231915", "#C27D60"],
      pieces: {
        top: "Terracotta Oversized Silk-Cotton Shirt",
        bottom: "Tailored Ecru Denim Slacks",
        shoes: "White Minimalist Leather Court Sneakers",
        accessories: "Rose-Gold Minimal Mesh Watch"
      },
      why: "These warm earthy tones complement your golden undertone while keeping the silhouette clean and modern.",
      tryOnPins: {
        top: { name: "Terracotta Shirt", desc: "Silk-Cotton Blend · Terracotta" },
        bottom: { name: "Ecru Denim Slacks", desc: "Raw Ecru · Relaxed Taper" },
        acc: { name: "Court Sneakers & Watch", desc: "Rose Gold Mesh Watch & White Sneakers" }
      },
      products: [
        {
          id: "p-aria-1",
          productName: "Relaxed Fit Terracotta Overshirt",
          category: "Tops",
          color: "Terracotta Rust",
          price: 1499,
          store: "Myntra",
          emoji: "👔",
          productUrl: "https://www.myntra.com/search?q=terracotta-overshirt"
        },
        {
          id: "p-aria-2",
          productName: "Straight-Leg Ecru Denim Slacks",
          category: "Bottoms",
          color: "Raw Ecru",
          price: 1399,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=ecru-trousers"
        },
        {
          id: "p-aria-3",
          productName: "Pure White Leather Court Sneakers",
          category: "Shoes",
          color: "Crisp White",
          price: 1699,
          store: "Myntra",
          emoji: "👟",
          productUrl: "https://www.myntra.com/search?q=white-leather-sneakers"
        },
        {
          id: "p-aria-4",
          productName: "Rose Gold Sleek Mesh Watch",
          category: "Accessories",
          color: "Rose Gold",
          price: 599,
          store: "Meesho",
          emoji: "⌚",
          productUrl: "https://www.meesho.com/search?q=rose-gold-watch"
        }
      ]
    },
    {
      id: "aria-col",
      title: "College Olive Utility Layer",
      category: "College",
      tag: "CAMPUS READY",
      score: "97.9%",
      swatches: ["#6E7A4A", "#F5EFEB", "#231915", "#DFB15B"],
      pieces: {
        top: "Olive Utility Overshirt & Warm Cream Tee",
        bottom: "Dark Espresso Straight Trousers",
        shoes: "Retro Gum-Sole Court Trainers",
        accessories: "Vintage Canvas & Leather Daypack"
      },
      why: "Olive utility layering creates natural texture that softens and enriches golden skin tones effortlessly.",
      tryOnPins: {
        top: { name: "Olive Utility Overshirt", desc: "Warm Olive · Relaxed Fit" },
        bottom: { name: "Dark Espresso Trousers", desc: "Deep Espresso · Clean Hem" },
        acc: { name: "Gum-Sole Trainers", desc: "Off-White & Dark Roast Canvas" }
      },
      products: [
        {
          id: "p-aria-5",
          productName: "Cotton Utility Overshirt in Olive",
          category: "Tops",
          color: "Warm Olive",
          price: 1299,
          store: "Myntra",
          emoji: "👕",
          productUrl: "https://www.myntra.com/search?q=olive-overshirt"
        },
        {
          id: "p-aria-6",
          productName: "Relaxed Pleated Espresso Trousers",
          category: "Bottoms",
          color: "Dark Espresso",
          price: 1199,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=espresso-trousers"
        },
        {
          id: "p-aria-7",
          productName: "Retro Court Trainers with Gum Sole",
          category: "Shoes",
          color: "Off-White / Gum",
          price: 1799,
          store: "Myntra",
          emoji: "👟",
          productUrl: "https://www.myntra.com/search?q=gum-sole-trainers"
        },
        {
          id: "p-aria-8",
          productName: "Minimalist Canvas Commuter Backpack",
          category: "Accessories",
          color: "Dark Roast",
          price: 599,
          store: "Meesho",
          emoji: "🎒",
          productUrl: "https://www.meesho.com/search?q=canvas-backpack"
        }
      ]
    },
    {
      id: "aria-for",
      title: "Executive Warm Champagne Crepe",
      category: "Formal",
      tag: "POWER DRESSING",
      score: "99.4%",
      swatches: ["#DFB15B", "#231915", "#C27D60", "#F5EFEB"],
      pieces: {
        top: "Asymmetric Draped Silk Blouse in Warm Champagne",
        bottom: "High-Rise Fluted Trousers in Midnight Espresso",
        shoes: "Pointed Rose-Gold Nude Mules",
        accessories: "Sculpted Rose-Gold Torque Collar"
      },
      why: "Warm champagne reflects gentle ambient light upward while dark espresso anchors modern executive authority.",
      tryOnPins: {
        top: { name: "Champagne Draped Blouse", desc: "Warm Champagne · Silk Crepe" },
        bottom: { name: "Fluted Espresso Trousers", desc: "Midnight Espresso · High-Rise" },
        acc: { name: "Rose-Gold Mules & Choker", desc: "Rose Gold Leather & Sculpted Metal" }
      },
      products: [
        {
          id: "p-aria-9",
          productName: "Draped Asymmetric Satin Silk Blouse",
          category: "Tops",
          color: "Warm Champagne",
          price: 1799,
          store: "Myntra",
          emoji: "👚",
          productUrl: "https://www.myntra.com/search?q=champagne-silk-blouse"
        },
        {
          id: "p-aria-10",
          productName: "High-Waist Tailored Crepe Trousers",
          category: "Bottoms",
          color: "Midnight Espresso",
          price: 1499,
          store: "Myntra",
          emoji: "👖",
          productUrl: "https://www.myntra.com/search?q=crepe-trousers"
        },
        {
          id: "p-aria-11",
          productName: "Pointed Toe Nude Rose-Gold Mules",
          category: "Shoes",
          color: "Nude Rose Gold",
          price: 1399,
          store: "Meesho",
          emoji: "👠",
          productUrl: "https://www.meesho.com/search?q=rose-gold-mules"
        },
        {
          id: "p-aria-12",
          productName: "Architectural Sculpted Metal Choker",
          category: "Accessories",
          color: "Brushed Rose Gold",
          price: 499,
          store: "Meesho",
          emoji: "✨",
          productUrl: "https://www.meesho.com/search?q=metal-choker"
        }
      ]
    },
    {
      id: "aria-tra",
      title: "Heritage Burnt Terracotta Silk",
      category: "Traditional",
      tag: "FESTIVE COUTURE",
      score: "99.2%",
      swatches: ["#C85A32", "#DFB15B", "#F5EFEB", "#8C4728"],
      pieces: {
        top: "Handcrafted Zari Chanderi Kurta in Burnt Terracotta",
        bottom: "Ecru Raw Silk Flared Palazzo Trousers",
        shoes: "Rose-Gold Velvet Embroidered Festive Juttis",
        accessories: "Polki Rose-Gold Statement Jhumkas"
      },
      why: "Handwoven terracotta and soft antique gold celebrate warm skin radiance during cultural celebrations.",
      tryOnPins: {
        top: { name: "Zari Chanderi Kurta", desc: "Burnt Terracotta · Zari Weft" },
        bottom: { name: "Raw Silk Palazzo", desc: "Ecru Silk · Gold Border" },
        acc: { name: "Polki Jhumkas & Juttis", desc: "Rose Gold Polki & Embroidered Velvet" }
      },
      products: [
        {
          id: "p-aria-13",
          productName: "Zari Embroidered Chanderi Festive Kurta",
          category: "Tops",
          color: "Burnt Terracotta",
          price: 2199,
          store: "Myntra",
          emoji: "🪷",
          productUrl: "https://www.myntra.com/search?q=terracotta-chanderi-kurta"
        },
        {
          id: "p-aria-14",
          productName: "Flared Raw Silk Gold Border Palazzo",
          category: "Bottoms",
          color: "Raw Silk Ecru",
          price: 999,
          store: "Meesho",
          emoji: "✨",
          productUrl: "https://www.meesho.com/search?q=silk-palazzo"
        },
        {
          id: "p-aria-15",
          productName: "Handcrafted Velvet Embroidered Juttis",
          category: "Shoes",
          color: "Velvet Rose Gold",
          price: 1299,
          store: "Myntra",
          emoji: "🥿",
          productUrl: "https://www.myntra.com/search?q=velvet-juttis"
        },
        {
          id: "p-aria-16",
          productName: "Polki Rose-Gold Chandbali Jhumkas",
          category: "Accessories",
          color: "Rose Gold",
          price: 699,
          store: "Meesho",
          emoji: "💎",
          productUrl: "https://www.meesho.com/search?q=polki-jhumkas"
        }
      ]
    },
    {
      id: "aria-par",
      title: "Liquid Copper Evening Glam",
      category: "Party",
      tag: "AFTER-DARK GLAM",
      score: "99.5%",
      swatches: ["#C27D60", "#231915", "#DFB15B", "#E8B89E"],
      pieces: {
        top: "Cowl-Neck Copper Satin Slip Top",
        bottom: "Dark Chocolate Fluid Palazzo Trousers",
        shoes: "Rose-Gold Metallic Strappy Heels",
        accessories: "Crystal Fringe Evening Clutch Bag"
      },
      why: "Liquid satin catches candlelight and dim ambient hues, accentuating warm bone structure with sophisticated shine.",
      tryOnPins: {
        top: { name: "Copper Satin Top", desc: "Copper Bronze · Silk Satin" },
        bottom: { name: "Pooling Chocolate Slacks", desc: "Dark Chocolate · Fluid Drape" },
        acc: { name: "Rose-Gold Strappy Heels", desc: "Metallic Leather & Crystal Clutch" }
      },
      products: [
        {
          id: "p-aria-17",
          productName: "Cowl Neck Liquid Satin Party Top",
          category: "Tops",
          color: "Copper Bronze",
          price: 1399,
          store: "Myntra",
          emoji: "✨",
          productUrl: "https://www.myntra.com/search?q=cowl-neck-satin-top"
        },
        {
          id: "p-aria-18",
          productName: "Fluid Dark Chocolate Wide-Leg Slacks",
          category: "Bottoms",
          color: "Dark Chocolate",
          price: 1199,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=wide-leg-slacks"
        },
        {
          id: "p-aria-19",
          productName: "Metallic Rose Gold Ankle Strap Heels",
          category: "Shoes",
          color: "Warm Rose Gold",
          price: 1899,
          store: "Myntra",
          emoji: "👠",
          productUrl: "https://www.myntra.com/search?q=metallic-strap-heels"
        },
        {
          id: "p-aria-20",
          productName: "Crystal Fringe Shimmer Evening Clutch",
          category: "Accessories",
          color: "Rose-Gold Shimmer",
          price: 699,
          store: "Meesho",
          emoji: "👛",
          productUrl: "https://www.meesho.com/search?q=evening-clutch"
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // CHLOE (Cool Porcelain / Deep Winter Frost)
  // --------------------------------------------------------------------------
  chloe: [
    {
      id: "chloe-cas",
      title: "Monochrome Slate & Crisp Navy",
      category: "Casual",
      tag: "COOL REFINEMENT",
      score: "99.1%",
      swatches: ["#1A365D", "#F8FAFC", "#475569", "#E2E8F0"],
      pieces: {
        top: "Crisp Navy Poplin Overshirt over White Tank",
        bottom: "Slate Grey Tailored Straight Trousers",
        shoes: "Pure White Leather Court Sneakers",
        accessories: "Silver Mesh Minimalist Watch"
      },
      why: "Crisp navy and icy slate create a striking contrast that illuminates rosy porcelain undertones.",
      tryOnPins: {
        top: { name: "Navy Poplin Shirt", desc: "Deep Navy · 100% Crisp Poplin" },
        bottom: { name: "Slate Grey Slacks", desc: "Cool Slate · Tailored Dart" },
        acc: { name: "White Sneakers & Silver Watch", desc: "Clean Leather Court · Brushed Silver" }
      },
      products: [
        {
          id: "p-chl-1",
          productName: "Crisp Poplin Button-Down in Midnight Navy",
          category: "Tops",
          color: "Midnight Navy",
          price: 1399,
          store: "Myntra",
          emoji: "👔",
          productUrl: "https://www.myntra.com/search?q=navy-poplin-shirt"
        },
        {
          id: "p-chl-2",
          productName: "Slate Grey High-Rise Tailored Trousers",
          category: "Bottoms",
          color: "Cool Slate",
          price: 1299,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=slate-grey-trousers"
        },
        {
          id: "p-chl-3",
          productName: "Clean Court Minimal White Leather Sneakers",
          category: "Shoes",
          color: "Pure White",
          price: 1699,
          store: "Myntra",
          emoji: "👟",
          productUrl: "https://www.myntra.com/search?q=white-leather-sneakers"
        },
        {
          id: "p-chl-4",
          productName: "Silver Minimalist Mesh Steel Watch",
          category: "Accessories",
          color: "Polished Silver",
          price: 549,
          store: "Meesho",
          emoji: "⌚",
          productUrl: "https://www.meesho.com/search?q=silver-mesh-watch"
        }
      ]
    },
    {
      id: "chloe-col",
      title: "Varsity Emerald & Charcoal",
      category: "College",
      tag: "IVY CONTRAST",
      score: "98.2%",
      swatches: ["#065F46", "#F8FAFC", "#0F172A", "#818CF8"],
      pieces: {
        top: "Emerald Green Cable-Knit Vest over White Tee",
        bottom: "Charcoal Relaxed Denim Slacks",
        shoes: "Retro Monochrome Court Trainers",
        accessories: "Midnight Waterproof Daypack"
      },
      why: "Deep emerald gemstone tones pop crisply against cool skin, bringing out vibrant eye and facial contrast.",
      tryOnPins: {
        top: { name: "Emerald Knit Vest", desc: "Jewel Emerald · Cotton Cable" },
        bottom: { name: "Charcoal Slacks", desc: "Dark Charcoal · Relaxed" },
        acc: { name: "Monochrome Trainers", desc: "Black & White Court Sole" }
      },
      products: [
        {
          id: "p-chl-5",
          productName: "V-Neck Cable Knit Vest in Emerald Green",
          category: "Tops",
          color: "Emerald Green",
          price: 1299,
          store: "Myntra",
          emoji: "🧶",
          productUrl: "https://www.myntra.com/search?q=emerald-knit-vest"
        },
        {
          id: "p-chl-6",
          productName: "Straight Fit Charcoal Denim Jeans",
          category: "Bottoms",
          color: "Washed Charcoal",
          price: 1199,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=charcoal-jeans"
        },
        {
          id: "p-chl-7",
          productName: "Monochrome Retro Court Trainers",
          category: "Shoes",
          color: "Black / Pure White",
          price: 1799,
          store: "Myntra",
          emoji: "👟",
          productUrl: "https://www.myntra.com/search?q=retro-court-trainers"
        },
        {
          id: "p-chl-8",
          productName: "Minimalist Commuter Bag in Midnight",
          category: "Accessories",
          color: "Midnight Noir",
          price: 599,
          store: "Meesho",
          emoji: "🎒",
          productUrl: "https://www.meesho.com/search?q=commuter-backpack"
        }
      ]
    },
    {
      id: "chloe-for",
      title: "Sculptural Cobalt Executive",
      category: "Formal",
      tag: "ARCHITECTURAL",
      score: "99.6%",
      swatches: ["#1D4ED8", "#0F172A", "#E2E8F0", "#F8FAFC"],
      pieces: {
        top: "Ice Blue Draped Silk Shirt",
        bottom: "Midnight Navy Tailored Crepe Trousers",
        shoes: "Silver Pointed Stiletto Mules",
        accessories: "Silver Torque Minimal Choker"
      },
      why: "Icy blue and sharp navy create a pristine, razor-sharp corporate presence that flatters cool-toned complexions.",
      tryOnPins: {
        top: { name: "Ice Blue Silk Shirt", desc: "Ice Blue · Fluid Drape" },
        bottom: { name: "Midnight Navy Trousers", desc: "Dark Navy · Crepe Darts" },
        acc: { name: "Silver Mules & Choker", desc: "Metallic Silver Leather & Torque" }
      },
      products: [
        {
          id: "p-chl-9",
          productName: "Ice Blue Fluid Silk Collared Shirt",
          category: "Tops",
          color: "Ice Blue",
          price: 1899,
          store: "Myntra",
          emoji: "👚",
          productUrl: "https://www.myntra.com/search?q=ice-blue-silk-shirt"
        },
        {
          id: "p-chl-10",
          productName: "Tailored Wide Crepe Trousers in Midnight",
          category: "Bottoms",
          color: "Midnight Navy",
          price: 1499,
          store: "Myntra",
          emoji: "👖",
          productUrl: "https://www.myntra.com/search?q=midnight-trousers"
        },
        {
          id: "p-chl-11",
          productName: "Pointed Toe Silver Metallic Mules",
          category: "Shoes",
          color: "Metallic Silver",
          price: 1299,
          store: "Meesho",
          emoji: "👠",
          productUrl: "https://www.meesho.com/search?q=silver-mules"
        },
        {
          id: "p-chl-12",
          productName: "Polished Silver Geometric Collar Choker",
          category: "Accessories",
          color: "Silver",
          price: 499,
          store: "Meesho",
          emoji: "✨",
          productUrl: "https://www.meesho.com/search?q=silver-choker"
        }
      ]
    },
    {
      id: "chloe-tra",
      title: "Royal Sapphire Brocade",
      category: "Traditional",
      tag: "FESTIVE REGAL",
      score: "99.3%",
      swatches: ["#1A365D", "#E2E8F0", "#F8FAFC", "#9F1239"],
      pieces: {
        top: "Royal Cobalt Chanderi Kurta with Silver Zari",
        bottom: "Pure White Brocade Flared Palazzo",
        shoes: "Silver Embroidered Velvet Juttis",
        accessories: "Kundan Silver Statement Jhumkas"
      },
      why: "Cool sapphire paired with lustrous silver zari enhances alabaster clarity without competing warmth.",
      tryOnPins: {
        top: { name: "Cobalt Zari Kurta", desc: "Royal Cobalt · Fine Silver Zari" },
        bottom: { name: "Brocade Palazzo", desc: "Pure White · Silver Boota" },
        acc: { name: "Kundan Silver Jhumkas", desc: "Faceted Kundan & Silver Juttis" }
      },
      products: [
        {
          id: "p-chl-13",
          productName: "Royal Cobalt Chanderi Kurta with Silver Zari",
          category: "Tops",
          color: "Royal Cobalt",
          price: 2299,
          store: "Myntra",
          emoji: "🪷",
          productUrl: "https://www.myntra.com/search?q=cobalt-kurta-silver-zari"
        },
        {
          id: "p-chl-14",
          productName: "Pure White Woven Brocade Palazzo",
          category: "Bottoms",
          color: "Crisp Pure White",
          price: 999,
          store: "Meesho",
          emoji: "✨",
          productUrl: "https://www.meesho.com/search?q=brocade-palazzo"
        },
        {
          id: "p-chl-15",
          productName: "Silver Thread Embroidered Festive Juttis",
          category: "Shoes",
          color: "Metallic Silver",
          price: 1399,
          store: "Myntra",
          emoji: "🥿",
          productUrl: "https://www.myntra.com/search?q=silver-juttis"
        },
        {
          id: "p-chl-16",
          productName: "Faceted Kundan & Pearl Silver Jhumkas",
          category: "Accessories",
          color: "Silver White",
          price: 699,
          store: "Meesho",
          emoji: "💎",
          productUrl: "https://www.meesho.com/search?q=kundan-jhumkas"
        }
      ]
    },
    {
      id: "chloe-par",
      title: "Obsidian & Emerald Gala",
      category: "Party",
      tag: "AFTER-DARK DRAMA",
      score: "99.7%",
      swatches: ["#065F46", "#0F172A", "#E2E8F0", "#9F1239"],
      pieces: {
        top: "Emerald Green Satin Slip Top",
        bottom: "Obsidian Black Pooling Palazzo Slacks",
        shoes: "Silver Metallic Strappy Heels",
        accessories: "Crystal Fringe Evening Bag"
      },
      why: "Jewel-emerald silk against obsidian creates luminous Hollywood glamour on high-contrast cool skin.",
      tryOnPins: {
        top: { name: "Emerald Satin Top", desc: "Jewel Emerald · High Luster" },
        bottom: { name: "Obsidian Slacks", desc: "Jet Black · Pooling Drape" },
        acc: { name: "Silver Strappy Heels", desc: "Metallic Silver & Crystal Bag" }
      },
      products: [
        {
          id: "p-chl-17",
          productName: "Emerald Jewel Satin Camisole Top",
          category: "Tops",
          color: "Emerald Green",
          price: 1499,
          store: "Myntra",
          emoji: "✨",
          productUrl: "https://www.myntra.com/search?q=emerald-satin-top"
        },
        {
          id: "p-chl-18",
          productName: "High-Waist Fluid Slacks in Jet Black",
          category: "Bottoms",
          color: "Obsidian Black",
          price: 1199,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=black-slacks"
        },
        {
          id: "p-chl-19",
          productName: "Silver Metallic Stiletto Strappy Heels",
          category: "Shoes",
          color: "Silver",
          price: 1899,
          store: "Myntra",
          emoji: "👠",
          productUrl: "https://www.myntra.com/search?q=silver-strappy-heels"
        },
        {
          id: "p-chl-20",
          productName: "Fringe Crystal Evening Minaudière",
          category: "Accessories",
          color: "Shimmer Silver",
          price: 699,
          store: "Meesho",
          emoji: "👛",
          productUrl: "https://www.meesho.com/search?q=crystal-minaudiere"
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // MAYA (Deep Bronze / Rich Warm Amber)
  // --------------------------------------------------------------------------
  maya: [
    {
      id: "maya-cas",
      title: "Sun-Baked Saffron & Camel",
      category: "Casual",
      tag: "WARM SATURATION",
      score: "99.0%",
      swatches: ["#F59E0B", "#B45309", "#29180E", "#FBBF24"],
      pieces: {
        top: "Saffron Linen Overshirt over Ecru Tank",
        bottom: "Warm Camel Straight-Fit Slacks",
        shoes: "Clean White Court Sneakers",
        accessories: "Burnished Gold Minimal Watch"
      },
      why: "Saffron and camel reflect pure golden light, bringing out deep mahogany undertones with high-end warmth.",
      tryOnPins: {
        top: { name: "Saffron Linen Shirt", desc: "Golden Saffron · Pure Linen" },
        bottom: { name: "Camel Slacks", desc: "Warm Camel · Clean Darts" },
        acc: { name: "Court Sneakers & Gold Watch", desc: "White Leather & Burnished Gold" }
      },
      products: [
        {
          id: "p-may-1",
          productName: "Pure Linen Oversized Shirt in Saffron Gold",
          category: "Tops",
          color: "Saffron Gold",
          price: 1499,
          store: "Myntra",
          emoji: "👔",
          productUrl: "https://www.myntra.com/search?q=saffron-linen-shirt"
        },
        {
          id: "p-may-2",
          productName: "Straight-Fit Pleated Trousers in Camel",
          category: "Bottoms",
          color: "Warm Camel",
          price: 1299,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=camel-trousers"
        },
        {
          id: "p-may-3",
          productName: "Court White Leather Casual Sneakers",
          category: "Shoes",
          color: "Crisp White",
          price: 1699,
          store: "Myntra",
          emoji: "👟",
          productUrl: "https://www.myntra.com/search?q=white-leather-sneakers"
        },
        {
          id: "p-may-4",
          productName: "Burnished Gold Mesh Dial Watch",
          category: "Accessories",
          color: "Warm Gold",
          price: 599,
          store: "Meesho",
          emoji: "⌚",
          productUrl: "https://www.meesho.com/search?q=gold-mesh-watch"
        }
      ]
    },
    {
      id: "maya-col",
      title: "Rich Rust & Honey Campus",
      category: "College",
      tag: "WARM COLLEGIATE",
      score: "98.4%",
      swatches: ["#C2410C", "#F59E0B", "#29180E", "#78350F"],
      pieces: {
        top: "Rust Corduroy Overshirt & Warm Honey Tee",
        bottom: "Dark Roast Chino Trousers",
        shoes: "Tan Leather Retro Trainers",
        accessories: "Cognac Calfskin Daypack"
      },
      why: "Warm corduroy textures in terracotta rust harmonize smoothly with deep golden skin, projecting organic energy.",
      tryOnPins: {
        top: { name: "Rust Corduroy Shirt", desc: "Deep Rust · Soft Wale" },
        bottom: { name: "Dark Roast Chinos", desc: "Dark Roast · Tapered" },
        acc: { name: "Tan Trainers & Daypack", desc: "Cognac Leather Accents" }
      },
      products: [
        {
          id: "p-may-5",
          productName: "Buttoned Corduroy Overshirt in Rust Red",
          category: "Tops",
          color: "Rust Clay",
          price: 1399,
          store: "Myntra",
          emoji: "👕",
          productUrl: "https://www.myntra.com/search?q=rust-corduroy-shirt"
        },
        {
          id: "p-may-6",
          productName: "Slim Tapered Chinos in Dark Espresso Roast",
          category: "Bottoms",
          color: "Dark Roast",
          price: 1199,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=dark-brown-chinos"
        },
        {
          id: "p-may-7",
          productName: "Tan Suede & Leather Retro Trainers",
          category: "Shoes",
          color: "Tan Leather",
          price: 1799,
          store: "Myntra",
          emoji: "👟",
          productUrl: "https://www.myntra.com/search?q=tan-retro-trainers"
        },
        {
          id: "p-may-8",
          productName: "Vintage Cognac Faux Leather Daypack",
          category: "Accessories",
          color: "Cognac Brown",
          price: 599,
          store: "Meesho",
          emoji: "🎒",
          productUrl: "https://www.meesho.com/search?q=cognac-backpack"
        }
      ]
    },
    {
      id: "maya-for",
      title: "Amber Gold Power Tailoring",
      category: "Formal",
      tag: "IMPERIAL STATURE",
      score: "99.5%",
      swatches: ["#D97706", "#29180E", "#FBBF24", "#78350F"],
      pieces: {
        top: "Amber Silk Wrap Blouse",
        bottom: "Mahogany Tailored Crepe Trousers",
        shoes: "Burnished Gold Bit Loafers",
        accessories: "Sculpted Gold Torque Collar"
      },
      why: "Amber silk draped over mahogany trousers frames rich skin with royal warmth and executive commanding elegance.",
      tryOnPins: {
        top: { name: "Amber Silk Wrap Blouse", desc: "Warm Amber · Silk Satin" },
        bottom: { name: "Mahogany Crepe Slacks", desc: "Mahogany Roast · High Waist" },
        acc: { name: "Gold Bit Loafers & Torque", desc: "Burnished Gold Hardware" }
      },
      products: [
        {
          id: "p-may-9",
          productName: "Wrap Front Silk Blouse in Warm Amber",
          category: "Tops",
          color: "Warm Amber",
          price: 1899,
          store: "Myntra",
          emoji: "👚",
          productUrl: "https://www.myntra.com/search?q=amber-silk-blouse"
        },
        {
          id: "p-may-10",
          productName: "High-Rise Tailored Slacks in Mahogany",
          category: "Bottoms",
          color: "Mahogany Brown",
          price: 1499,
          store: "Myntra",
          emoji: "👖",
          productUrl: "https://www.myntra.com/search?q=mahogany-trousers"
        },
        {
          id: "p-may-11",
          productName: "Burnished Gold Horsebit Heeled Loafers",
          category: "Shoes",
          color: "Burnished Gold",
          price: 1399,
          store: "Meesho",
          emoji: "👞",
          productUrl: "https://www.meesho.com/search?q=gold-loafers"
        },
        {
          id: "p-may-12",
          productName: "Heavy Sculpted Metal Torque Neckpiece",
          category: "Accessories",
          color: "Antique Gold",
          price: 549,
          store: "Meesho",
          emoji: "✨",
          productUrl: "https://www.meesho.com/search?q=gold-torque-necklace"
        }
      ]
    },
    {
      id: "maya-tra",
      title: "Royal Ochre Gota Heritage",
      category: "Traditional",
      tag: "MAHARAJA LUXE",
      score: "99.4%",
      swatches: ["#F59E0B", "#78350F", "#FBBF24", "#C2410C"],
      pieces: {
        top: "Deep Ochre Anarkali Kurta with Gold Gota",
        bottom: "Amber Raw Silk Flared Palazzo",
        shoes: "Handcrafted Golden Embroidered Mojaris",
        accessories: "Antique Gold Filigree Chandbalis"
      },
      why: "Ochre and golden gota patti create magnificent contrast against bronze skin, turning festival gatherings into royal moments.",
      tryOnPins: {
        top: { name: "Ochre Gota Kurta", desc: "Deep Ochre · Heavy Gota Patti" },
        bottom: { name: "Amber Silk Palazzo", desc: "Warm Amber · Gold Border" },
        acc: { name: "Mojaris & Chandbalis", desc: "Zari Mojari & Antique Chandbalis" }
      },
      products: [
        {
          id: "p-may-13",
          productName: "Deep Ochre Festive Anarkali with Gota Patti",
          category: "Tops",
          color: "Deep Ochre",
          price: 2399,
          store: "Myntra",
          emoji: "🪷",
          productUrl: "https://www.myntra.com/search?q=ochre-anarkali-gota"
        },
        {
          id: "p-may-14",
          productName: "Raw Silk Flared Palazzo in Warm Amber",
          category: "Bottoms",
          color: "Warm Amber",
          price: 999,
          store: "Meesho",
          emoji: "✨",
          productUrl: "https://www.meesho.com/search?q=amber-silk-palazzo"
        },
        {
          id: "p-may-15",
          productName: "Golden Zari Embroidered Traditional Mojaris",
          category: "Shoes",
          color: "Golden Zari",
          price: 1299,
          store: "Myntra",
          emoji: "🥿",
          productUrl: "https://www.myntra.com/search?q=gold-mojaris"
        },
        {
          id: "p-may-16",
          productName: "Antique Gold Filigree Meenakari Chandbalis",
          category: "Accessories",
          color: "Antique Gold",
          price: 699,
          store: "Meesho",
          emoji: "💎",
          productUrl: "https://www.meesho.com/search?q=antique-chandbalis"
        }
      ]
    },
    {
      id: "maya-par",
      title: "Molten Gold Midnight Soirée",
      category: "Party",
      tag: "AFTER-DARK RADIANCE",
      score: "99.8%",
      swatches: ["#FBBF24", "#29180E", "#F59E0B", "#C2410C"],
      pieces: {
        top: "Molten Gold Shimmer Satin Slip Top",
        bottom: "Dark Espresso Fluid Palazzo Trousers",
        shoes: "Metallic Gold Strappy High Heels",
        accessories: "Gold Minaudière Hard-Case Bag"
      },
      why: "Molten gold sheen against bronze skin is the pinnacle of evening luxury, capturing every ray of ambient lighting.",
      tryOnPins: {
        top: { name: "Molten Gold Satin Top", desc: "Metallic Gold · Liquid Satin" },
        bottom: { name: "Dark Espresso Slacks", desc: "Dark Espresso · Fluid Drape" },
        acc: { name: "Gold Strappy Heels", desc: "Metallic Gold & Hardcase Clutch" }
      },
      products: [
        {
          id: "p-may-17",
          productName: "Shimmer Satin Cowl Neck Top in Molten Gold",
          category: "Tops",
          color: "Molten Gold",
          price: 1599,
          store: "Myntra",
          emoji: "✨",
          productUrl: "https://www.myntra.com/search?q=gold-satin-cowl-top"
        },
        {
          id: "p-may-18",
          productName: "Wide-Leg Flowing Slacks in Dark Espresso",
          category: "Bottoms",
          color: "Dark Espresso",
          price: 1199,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=espresso-wide-slacks"
        },
        {
          id: "p-may-19",
          productName: "High Stiletto Strappy Heels in Metallic Gold",
          category: "Shoes",
          color: "Metallic Gold",
          price: 1899,
          store: "Myntra",
          emoji: "👠",
          productUrl: "https://www.myntra.com/search?q=gold-stiletto-heels"
        },
        {
          id: "p-may-20",
          productName: "Structured Gold Hardcase Evening Clutch",
          category: "Accessories",
          color: "Polished Gold",
          price: 799,
          store: "Meesho",
          emoji: "👛",
          productUrl: "https://www.meesho.com/search?q=gold-evening-clutch"
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // ELENA (Neutral Olive / Muted Soft Summer)
  // --------------------------------------------------------------------------
  elena: [
    {
      id: "elena-cas",
      title: "Dusty Sage & Heather Mauve",
      category: "Casual",
      tag: "QUIET LUXURY",
      score: "98.9%",
      swatches: ["#7D9D8B", "#F8F4EB", "#A37081", "#CBB18B"],
      pieces: {
        top: "Dusty Sage Relaxed Linen Shirt",
        bottom: "Heather Mauve Tailored Slacks",
        shoes: "Off-White Minimalist Leather Court Sneakers",
        accessories: "Champagne Pearl Mesh Watch"
      },
      why: "Subtle muted tones like dusty sage and heather neutralize green undertones, yielding an understated quiet luxury feel.",
      tryOnPins: {
        top: { name: "Dusty Sage Linen Shirt", desc: "Dusty Sage · Relaxed Linen" },
        bottom: { name: "Heather Mauve Slacks", desc: "Heather Mauve · Soft Drape" },
        acc: { name: "Court Sneakers & Watch", desc: "Off-White Court & Pearl Watch" }
      },
      products: [
        {
          id: "p-ele-1",
          productName: "Relaxed Linen Shirt in Dusty Sage",
          category: "Tops",
          color: "Dusty Sage",
          price: 1399,
          store: "Myntra",
          emoji: "👔",
          productUrl: "https://www.myntra.com/search?q=dusty-sage-linen-shirt"
        },
        {
          id: "p-ele-2",
          productName: "Soft Tailored Slacks in Heather Mauve",
          category: "Bottoms",
          color: "Heather Mauve",
          price: 1299,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=mauve-slacks"
        },
        {
          id: "p-ele-3",
          productName: "Off-White Clean Court Leather Sneakers",
          category: "Shoes",
          color: "Vintage Cream",
          price: 1699,
          store: "Myntra",
          emoji: "👟",
          productUrl: "https://www.myntra.com/search?q=off-white-court-sneakers"
        },
        {
          id: "p-ele-4",
          productName: "Champagne Pearl Dial Minimal Watch",
          category: "Accessories",
          color: "Champagne Pearl",
          price: 549,
          store: "Meesho",
          emoji: "⌚",
          productUrl: "https://www.meesho.com/search?q=pearl-dial-watch"
        }
      ]
    },
    {
      id: "elena-col",
      title: "Collegiate Cocoa & Azure",
      category: "College",
      tag: "VINTAGE ACADEMIA",
      score: "98.1%",
      swatches: ["#F8F4EB", "#5B758E", "#48322B", "#6B7280"],
      pieces: {
        top: "Vintage Cream Cable-Knit Vest & Slate Azure Tee",
        bottom: "Cocoa Espresso Tapered Trousers",
        shoes: "Pewter Court Retro Trainers",
        accessories: "Sage Canvas Commuter Satchel"
      },
      why: "Vintage cream knitwear combined with cocoa espresso brings cozy academic softness to neutral olive pigmentation.",
      tryOnPins: {
        top: { name: "Vintage Cream Vest", desc: "Cream Cable · Azure Base" },
        bottom: { name: "Cocoa Espresso Slacks", desc: "Deep Cocoa · Tapered Cut" },
        acc: { name: "Pewter Trainers & Satchel", desc: "Muted Pewter & Sage Canvas" }
      },
      products: [
        {
          id: "p-ele-5",
          productName: "Cable-Knit Layering Vest in Vintage Cream",
          category: "Tops",
          color: "Vintage Cream",
          price: 1299,
          store: "Myntra",
          emoji: "🧶",
          productUrl: "https://www.myntra.com/search?q=cream-cable-knit-vest"
        },
        {
          id: "p-ele-6",
          productName: "Tapered Cotton Chinos in Cocoa Espresso",
          category: "Bottoms",
          color: "Cocoa Espresso",
          price: 1199,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=cocoa-trousers"
        },
        {
          id: "p-ele-7",
          productName: "Retro Court Trainers with Pewter Detail",
          category: "Shoes",
          color: "Pewter / Off-White",
          price: 1799,
          store: "Myntra",
          emoji: "👟",
          productUrl: "https://www.myntra.com/search?q=pewter-trainers"
        },
        {
          id: "p-ele-8",
          productName: "Canvas Shoulder Messenger Bag in Sage",
          category: "Accessories",
          color: "Dusty Sage",
          price: 599,
          store: "Meesho",
          emoji: "🎒",
          productUrl: "https://www.meesho.com/search?q=canvas-satchel"
        }
      ]
    },
    {
      id: "elena-for",
      title: "Dusty Rosewood Minimal Tailored",
      category: "Formal",
      tag: "SUBTLE AUTHORITY",
      score: "99.4%",
      swatches: ["#9B4D57", "#4B6358", "#CBB18B", "#F8F4EB"],
      pieces: {
        top: "Dusty Rosewood Crepe Blouse",
        bottom: "Antique Jade Straight-Fit Trousers",
        shoes: "Champagne Nude Heeled Mules",
        accessories: "Brushed Muted Brass Collar Necklace"
      },
      why: "Rosewood and antique jade form a sophisticated complementary balance that elevates olive tones naturally.",
      tryOnPins: {
        top: { name: "Rosewood Crepe Blouse", desc: "Dusty Rosewood · Silk Crepe" },
        bottom: { name: "Antique Jade Slacks", desc: "Antique Jade · High Rise" },
        acc: { name: "Champagne Mules & Choker", desc: "Soft Champagne & Muted Brass" }
      },
      products: [
        {
          id: "p-ele-9",
          productName: "Fluid Crepe Tailored Blouse in Rosewood",
          category: "Tops",
          color: "Dusty Rosewood",
          price: 1799,
          store: "Myntra",
          emoji: "👚",
          productUrl: "https://www.myntra.com/search?q=rosewood-crepe-blouse"
        },
        {
          id: "p-ele-10",
          productName: "High-Waisted Straight Crepe Trousers in Jade",
          category: "Bottoms",
          color: "Antique Jade",
          price: 1499,
          store: "Myntra",
          emoji: "👖",
          productUrl: "https://www.myntra.com/search?q=jade-crepe-trousers"
        },
        {
          id: "p-ele-11",
          productName: "Pointed Toe Nude Champagne Leather Mules",
          category: "Shoes",
          color: "Champagne Pearl",
          price: 1299,
          store: "Meesho",
          emoji: "👠",
          productUrl: "https://www.meesho.com/search?q=champagne-mules"
        },
        {
          id: "p-ele-12",
          productName: "Brushed Muted Brass Rigid Choker",
          category: "Accessories",
          color: "Brushed Brass",
          price: 499,
          store: "Meesho",
          emoji: "✨",
          productUrl: "https://www.meesho.com/search?q=brass-choker"
        }
      ]
    },
    {
      id: "elena-tra",
      title: "Mint Sage & Organza Chanderi",
      category: "Traditional",
      tag: "ETHEREAL HERITAGE",
      score: "99.2%",
      swatches: ["#7D9D8B", "#F8F4EB", "#CBB18B", "#A37081"],
      pieces: {
        top: "Mint & Sage Embroidered Organza Kurta",
        bottom: "Champagne Raw Silk Palazzo",
        shoes: "Pastel Velvet Embroidered Juttis",
        accessories: "Rose Quartz & Pearl Statement Jhumkas"
      },
      why: "Sheer organza with delicate threadwork softens olive tones while reflecting gentle champagne luminescence.",
      tryOnPins: {
        top: { name: "Sage Organza Kurta", desc: "Mint & Sage · Zari Thread" },
        bottom: { name: "Champagne Silk Palazzo", desc: "Raw Silk · Gold Border" },
        acc: { name: "Rose Quartz Jhumkas & Juttis", desc: "Pastel Velvet & Rose Quartz" }
      },
      products: [
        {
          id: "p-ele-13",
          productName: "Sage Green Embroidered Organza Kurta",
          category: "Tops",
          color: "Dusty Sage",
          price: 2199,
          store: "Myntra",
          emoji: "🪷",
          productUrl: "https://www.myntra.com/search?q=sage-organza-kurta"
        },
        {
          id: "p-ele-14",
          productName: "Flared Raw Silk Palazzo in Soft Champagne",
          category: "Bottoms",
          color: "Champagne Pearl",
          price: 999,
          store: "Meesho",
          emoji: "✨",
          productUrl: "https://www.meesho.com/search?q=champagne-palazzo"
        },
        {
          id: "p-ele-15",
          productName: "Pastel Velvet Handcrafted Embroidered Juttis",
          category: "Shoes",
          color: "Pastel Mint",
          price: 1299,
          store: "Myntra",
          emoji: "🥿",
          productUrl: "https://www.myntra.com/search?q=pastel-velvet-juttis"
        },
        {
          id: "p-ele-16",
          productName: "Rose Quartz & Pearl Chandbali Jhumkas",
          category: "Accessories",
          color: "Rose Quartz",
          price: 699,
          store: "Meesho",
          emoji: "💎",
          productUrl: "https://www.meesho.com/search?q=rose-quartz-jhumkas"
        }
      ]
    },
    {
      id: "elena-par",
      title: "Muted Plum Satin Noir",
      category: "Party",
      tag: "REFINED NOCTURNE",
      score: "99.5%",
      swatches: ["#674846", "#48322B", "#CBB18B", "#F8F4EB"],
      pieces: {
        top: "Soft Muted Plum Satin Slip Top",
        bottom: "Heathered Charcoal Drape Slacks",
        shoes: "Champagne Metallic Strappy Heels",
        accessories: "Pewter Chain Evening Bag"
      },
      why: "Deep muted plum balances natural olive warmth with seductive evening mystery without washing out subtle undertones.",
      tryOnPins: {
        top: { name: "Plum Satin Top", desc: "Muted Plum · Fluid Silk Satin" },
        bottom: { name: "Charcoal Drape Slacks", desc: "Heather Charcoal · Wide Leg" },
        acc: { name: "Metallic Heels & Bag", desc: "Champagne Metallic & Pewter Chain" }
      },
      products: [
        {
          id: "p-ele-17",
          productName: "Silk Satin Draped Evening Top in Muted Plum",
          category: "Tops",
          color: "Soft Muted Plum",
          price: 1499,
          store: "Myntra",
          emoji: "✨",
          productUrl: "https://www.myntra.com/search?q=plum-satin-top"
        },
        {
          id: "p-ele-18",
          productName: "Heathered Charcoal Wide Fluid Trousers",
          category: "Bottoms",
          color: "Heather Charcoal",
          price: 1199,
          store: "Meesho",
          emoji: "👖",
          productUrl: "https://www.meesho.com/search?q=charcoal-fluid-trousers"
        },
        {
          id: "p-ele-19",
          productName: "Champagne Metallic Ankle Strap Stilettos",
          category: "Shoes",
          color: "Champagne Pearl",
          price: 1899,
          store: "Myntra",
          emoji: "👠",
          productUrl: "https://www.myntra.com/search?q=champagne-strappy-heels"
        },
        {
          id: "p-ele-20",
          productName: "Pewter Chain Mesh Evening Clutch",
          category: "Accessories",
          color: "Pewter",
          price: 699,
          store: "Meesho",
          emoji: "👛",
          productUrl: "https://www.meesho.com/search?q=pewter-evening-bag"
        }
      ]
    }
  ]
};

// ============================================================================
// 4. MAIN APPLICATION CONTROLLER
// ============================================================================
const RadianceApp = {
  viewMode: "mobile", // "mobile" (9:16) or "desktop" (16:9)
  currentScreen: 0,   // Starts at Screen 0: Radiance Home First!
  screenHistory: [0],
  activeProfile: STYLING_PROFILES.aria,
  currentPhotoUrl: PRESET_AVATARS.aria,
  activeCategory: "all",
  selectedOutfit: null,
  currentShopFilter: "all",
  currentShopSort: "recommended",
  savedLooks: [],
  isCustomPhoto: false,

  // Radiance Premium State (₹449 One-Time Payment)
  premiumUnlocked: false,
  pendingPremiumTarget: null,
  selectedPayMethod: "upi",

  // Camera State
  activeCameraStream: null,
  cameraFacingMode: "user",
  tempCapturedUrl: null,

  init() {
    this.updateClock();
    setInterval(() => this.updateClock(), 60000);
    this.loadSavedLooks();
    this.setupPresetPillImages();
    this.showPhotoPreview(this.currentPhotoUrl);

    // Default outfit to Aria's first look
    this.selectedOutfit = PROFILE_OUTFITS.aria[0];

    // Check localStorage for saved view mode
    const savedMode = localStorage.getItem("radiance_view_mode");
    if (savedMode === "desktop") {
      this.setViewMode("desktop", false);
    } else {
      this.setViewMode("mobile", false);
    }

    // Check localStorage for saved premium status
    try {
      this.premiumUnlocked = localStorage.getItem("radiance_premium_unlocked") === "true";
    } catch (e) {
      this.premiumUnlocked = false;
    }
    this.updatePremiumBadge();

    // Start on Screen 0 (Home First!)
    this.goToScreen(0);
    this.updateSavedBadge();
  },

  updateClock() {
    const timeEl = document.getElementById("status-time");
    if (!timeEl) return;
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    timeEl.textContent = `${hours % 12 || 12}:${minutes}`;
  },

  setupPresetPillImages() {
    const aria = document.getElementById("pthumb-aria");
    const chloe = document.getElementById("pthumb-chloe");
    const maya = document.getElementById("pthumb-maya");
    const elena = document.getElementById("pthumb-elena");

    if (aria) aria.src = PRESET_AVATARS.aria;
    if (chloe) chloe.src = PRESET_AVATARS.chloe;
    if (maya) maya.src = PRESET_AVATARS.maya;
    if (elena) elena.src = PRESET_AVATARS.elena;
  },

  // --------------------------------------------------------------------------
  // VIEW MODE SWITCHER: 📱 Mobile (9:16) | 💻 Desktop (16:9)
  // --------------------------------------------------------------------------
  setViewMode(mode, showNotification = true) {
    this.viewMode = mode;
    const shell = document.getElementById("device-shell");
    const btnMobile = document.getElementById("btn-mode-mobile");
    const btnDesktop = document.getElementById("btn-mode-desktop");

    if (mode === "desktop") {
      if (shell) shell.classList.add("desktop-mode");
      if (btnMobile) btnMobile.classList.remove("active");
      if (btnDesktop) btnDesktop.classList.add("active");
      if (showNotification) this.showToast("Switched to Desktop Studio View (16:9)");
    } else {
      if (shell) shell.classList.remove("desktop-mode");
      if (btnMobile) btnMobile.classList.add("active");
      if (btnDesktop) btnDesktop.classList.remove("active");
      if (showNotification) this.showToast("Switched to Mobile View (9:16)");
    }

    try {
      localStorage.setItem("radiance_view_mode", mode);
    } catch (e) {
      console.warn(e);
    }
  },

  // --------------------------------------------------------------------------
  // NAVIGATION & ROUTING (Screens 0 to 9)
  // --------------------------------------------------------------------------
  goToScreen(screenNum) {
    if (screenNum < 0 || screenNum > 9) return;

    // Camera safety: if leaving photo screen, ensure camera stream stops
    if (this.currentScreen === 1 && screenNum !== 1) {
      this.closeCamera();
    }

    // Premium Access Gating for Screens 3 through 8
    if (screenNum >= 3 && screenNum <= 8 && !this.premiumUnlocked) {
      this.requestPremiumAccess(screenNum);
      return;
    }

    if (this.currentScreen !== screenNum) {
      this.screenHistory.push(screenNum);
    }
    this.currentScreen = screenNum;

    // Toggle screen active classes
    document.querySelectorAll(".mobile-screen").forEach(screen => {
      screen.classList.remove("active");
    });
    const target = document.getElementById(`screen-${screenNum}`);
    if (target) {
      target.classList.add("active");
    }

    // Scroll body to top
    const bodyEl = document.getElementById("mobile-app-body");
    if (bodyEl) bodyEl.scrollTop = 0;

    // Update Header Back Button
    const backBtn = document.getElementById("header-back-btn");
    if (backBtn) {
      backBtn.style.visibility = screenNum > 0 ? "visible" : "hidden";
    }

    // Update Step Indicator
    this.updateStepIndicator(screenNum);

    // Screen specific updates
    if (screenNum === 2) {
      this.renderAnalysisResults();
    } else if (screenNum === 3) {
      this.renderPersonalColors();
    } else if (screenNum === 4) {
      this.renderOutfitRecommendations();
    } else if (screenNum === 5) {
      this.renderCompleteLook();
    } else if (screenNum === 6) {
      this.renderShopThisLook();
    } else if (screenNum === 7) {
      this.renderVirtualTryOn();
    } else if (screenNum === 8) {
      this.renderSavedLookScreen();
    }
  },

  proceedFromAnalysis() {
    if (!this.premiumUnlocked) {
      this.requestPremiumAccess(3);
    } else {
      this.goToScreen(3);
    }
  },

  goBack() {
    if (this.screenHistory.length > 1) {
      this.screenHistory.pop(); // Remove current
      const prev = this.screenHistory[this.screenHistory.length - 1];
      this.currentScreen = prev;

      document.querySelectorAll(".mobile-screen").forEach(screen => {
        screen.classList.remove("active");
      });
      const target = document.getElementById(`screen-${prev}`);
      if (target) target.classList.add("active");

      const bodyEl = document.getElementById("mobile-app-body");
      if (bodyEl) bodyEl.scrollTop = 0;

      const backBtn = document.getElementById("header-back-btn");
      if (backBtn) backBtn.style.visibility = prev > 0 ? "visible" : "hidden";

      this.updateStepIndicator(prev);

      if (prev === 4) this.renderOutfitRecommendations();
      if (prev === 5) this.renderCompleteLook();
      if (prev === 6) this.renderShopThisLook();
      if (prev === 7) this.renderVirtualTryOn();
    } else {
      this.goToScreen(0);
    }
  },

  quickJump(screenNum) {
    // Direct shortcut from Home feature cards
    if (!this.selectedOutfit) {
      const outfits = this.getCurrentProfileOutfits();
      this.selectedOutfit = outfits[0];
    }
    if (screenNum >= 3 && screenNum <= 8 && !this.premiumUnlocked) {
      this.requestPremiumAccess(screenNum);
      return;
    }
    this.goToScreen(screenNum);
  },

  updateStepIndicator(step) {
    const indicator = document.getElementById("mobile-step-indicator");
    const fill = document.getElementById("step-progress-fill");
    const label = document.getElementById("current-step-label");

    if (step === 0) {
      if (indicator) indicator.style.display = "none";
      return;
    }

    if (indicator) indicator.style.display = "block";

    const stepNames = [
      "",
      "Step 1 of 9 · Photo Input",
      "Step 2 of 9 · AI Personal Analysis",
      "Step 3 of 9 · Personal Colors",
      "Step 4 of 9 · Personalized Outfits",
      "Step 5 of 9 · Complete Look",
      "Step 6 of 9 · Shop Myntra & Meesho",
      "Step 7 of 9 · Virtual Try-On",
      "Step 8 of 9 · Saved Look Dossier",
      "Step 9 of 9 · Radiance Manifesto"
    ];

    if (fill) fill.style.width = `${(step / 9) * 100}%`;
    if (label) label.textContent = stepNames[step] || "";
  },

  getCurrentProfileOutfits() {
    const profKey = this.activeProfile.id || "aria";
    return PROFILE_OUTFITS[profKey] || PROFILE_OUTFITS.aria;
  },

  // --------------------------------------------------------------------------
  // SCREEN 1: PHOTO SELECTION & REAL CAMERA SUPPORT
  // --------------------------------------------------------------------------
  selectPreset(presetKey) {
    if (!STYLING_PROFILES[presetKey]) return;
    this.activeProfile = STYLING_PROFILES[presetKey];
    this.currentPhotoUrl = PRESET_AVATARS[presetKey];
    this.isCustomPhoto = false;

    // Automatically update selected outfit for this profile
    const outfits = this.getCurrentProfileOutfits();
    this.selectedOutfit = outfits[0];

    // Update active pill
    document.querySelectorAll(".mobile-preset-pill").forEach(p => p.classList.remove("active"));
    const activePill = document.querySelector(`.mobile-preset-pill[data-preset="${presetKey}"]`);
    if (activePill) activePill.classList.add("active");

    this.showPhotoPreview(this.currentPhotoUrl);
    this.showToast(`Selected model: ${this.activeProfile.name} (${this.activeProfile.skinTone.name})`);
  },

  handleFileSelect(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.startsWith("image/")) {
        this.showToast("Please select a valid image file.", "error");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        this.currentPhotoUrl = dataUrl;
        this.isCustomPhoto = true;

        document.querySelectorAll(".mobile-preset-pill").forEach(p => p.classList.remove("active"));
        this.extractChromaFromCustomPhoto(dataUrl);
        this.showPhotoPreview(dataUrl);
        this.showToast("Photo uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  },

  showPhotoPreview(url) {
    const empty = document.getElementById("upload-box-empty");
    const preview = document.getElementById("upload-box-preview");
    const camBox = document.getElementById("camera-viewfinder-box");
    const captBox = document.getElementById("camera-captured-box");
    const errBox = document.getElementById("camera-error-box");
    const imgEl = document.getElementById("mobile-preview-img");

    if (empty) empty.style.display = "none";
    if (camBox) camBox.style.display = "none";
    if (captBox) captBox.style.display = "none";
    if (errBox) errBox.style.display = "none";
    if (preview) preview.style.display = "flex";
    if (imgEl) imgEl.src = url;
  },

  // --------------------------------------------------------------------------
  // REAL CAMERA CONTROLS (navigator.mediaDevices.getUserMedia)
  // --------------------------------------------------------------------------
  async openCamera() {
    this.stopCameraStream();

    const empty = document.getElementById("upload-box-empty");
    const preview = document.getElementById("upload-box-preview");
    const camBox = document.getElementById("camera-viewfinder-box");
    const captBox = document.getElementById("camera-captured-box");
    const errBox = document.getElementById("camera-error-box");
    const video = document.getElementById("camera-video");

    if (empty) empty.style.display = "none";
    if (preview) preview.style.display = "none";
    if (captBox) captBox.style.display = "none";
    if (errBox) errBox.style.display = "none";
    if (camBox) camBox.style.display = "flex";

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.handleCameraError("Camera API is not supported in this browser context.");
      return;
    }

    try {
      const constraints = {
        video: {
          facingMode: this.cameraFacingMode,
          width: { ideal: 720 },
          height: { ideal: 960 }
        },
        audio: false
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.activeCameraStream = stream;
      if (video) {
        video.srcObject = stream;
        video.play();
      }
      this.showToast("📷 Live camera activated. Align your portrait.");
    } catch (err) {
      console.warn("Camera access error:", err);
      this.handleCameraError(err.message || "Camera permission was denied or device is unavailable.");
    }
  },

  handleCameraError(msg) {
    const camBox = document.getElementById("camera-viewfinder-box");
    const errBox = document.getElementById("camera-error-box");
    const errMsg = document.getElementById("camera-err-msg");

    if (camBox) camBox.style.display = "none";
    if (errBox) errBox.style.display = "flex";
    if (errMsg) errMsg.textContent = `Camera notice: ${msg} You can upload from gallery or quick-select a demo profile.`;
    this.showToast("Camera unavailable. Using gallery/demo options.", "error");
  },

  capturePhoto() {
    const video = document.getElementById("camera-video");
    const canvas = document.getElementById("camera-capture-canvas");
    const captBox = document.getElementById("camera-captured-box");
    const camBox = document.getElementById("camera-viewfinder-box");
    const captImg = document.getElementById("camera-captured-img");

    if (!video || !canvas) return;

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext("2d");

    // Mirror image horizontally to match selfie view
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    this.tempCapturedUrl = dataUrl;

    // Stop stream immediately after capture to release hardware
    this.stopCameraStream();

    if (camBox) camBox.style.display = "none";
    if (captBox) captBox.style.display = "flex";
    if (captImg) captImg.src = dataUrl;

    this.showToast("Snapshot captured! Review or use photo.");
  },

  retakePhoto() {
    this.tempCapturedUrl = null;
    this.openCamera();
  },

  useCapturedPhoto() {
    if (!this.tempCapturedUrl) return;

    this.currentPhotoUrl = this.tempCapturedUrl;
    this.isCustomPhoto = true;

    document.querySelectorAll(".mobile-preset-pill").forEach(p => p.classList.remove("active"));
    this.extractChromaFromCustomPhoto(this.currentPhotoUrl);

    this.showPhotoPreview(this.currentPhotoUrl);
    this.showToast("✓ Live photo set! Ready for style analysis.");

    // Direct transition to Analysis
    setTimeout(() => {
      this.startAnalysis();
    }, 450);
  },

  flipCamera() {
    this.cameraFacingMode = this.cameraFacingMode === "user" ? "environment" : "user";
    this.openCamera();
  },

  closeCamera() {
    this.stopCameraStream();
    const camBox = document.getElementById("camera-viewfinder-box");
    const captBox = document.getElementById("camera-captured-box");
    const errBox = document.getElementById("camera-error-box");

    if (camBox) camBox.style.display = "none";
    if (captBox) captBox.style.display = "none";
    if (errBox) errBox.style.display = "none";

    this.showPhotoPreview(this.currentPhotoUrl);
  },

  stopCameraStream() {
    if (this.activeCameraStream) {
      this.activeCameraStream.getTracks().forEach(track => {
        try {
          track.stop();
        } catch (e) {
          console.warn(e);
        }
      });
      this.activeCameraStream = null;
    }
  },

  extractChromaFromCustomPhoto(dataUrl) {
    const canvas = document.getElementById("analysis-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      try {
        const startX = Math.floor(canvas.width * 0.25);
        const startY = Math.floor(canvas.height * 0.25);
        const sampleW = Math.floor(canvas.width * 0.5);
        const sampleH = Math.floor(canvas.height * 0.5);

        const imgData = ctx.getImageData(startX, startY, sampleW, sampleH).data;
        let rSum = 0, gSum = 0, bSum = 0, count = 0;

        for (let i = 0; i < imgData.length; i += 16) {
          rSum += imgData[i];
          gSum += imgData[i + 1];
          bSum += imgData[i + 2];
          count++;
        }

        const avgR = Math.round(rSum / count);
        const avgG = Math.round(gSum / count);
        const avgB = Math.round(bSum / count);
        const hex = "#" + ((1 << 24) + (avgR << 16) + (avgG << 8) + avgB).toString(16).slice(1).toUpperCase();

        const warmth = avgR - avgB;
        const brightness = (avgR * 299 + avgG * 587 + avgB * 114) / 1000;

        if (warmth > 30 && brightness < 130) {
          this.activeProfile = JSON.parse(JSON.stringify(STYLING_PROFILES.maya));
          this.activeProfile.skinTone.hex = hex;
          this.activeProfile.skinTone.name = "Custom Sunlit Bronze";
        } else if (warmth < 18) {
          this.activeProfile = JSON.parse(JSON.stringify(STYLING_PROFILES.chloe));
          this.activeProfile.skinTone.hex = hex;
          this.activeProfile.skinTone.name = "Custom Cool Rose";
        } else if (Math.abs(avgR - avgG) < 16) {
          this.activeProfile = JSON.parse(JSON.stringify(STYLING_PROFILES.elena));
          this.activeProfile.skinTone.hex = hex;
          this.activeProfile.skinTone.name = "Custom Soft Olive";
        } else {
          this.activeProfile = JSON.parse(JSON.stringify(STYLING_PROFILES.aria));
          this.activeProfile.skinTone.hex = hex;
          this.activeProfile.skinTone.name = "Custom Warm Medium";
        }

        // Set default outfit for custom profile
        const outfits = this.getCurrentProfileOutfits();
        this.selectedOutfit = outfits[0];
      } catch (err) {
        this.activeProfile = STYLING_PROFILES.aria;
        this.selectedOutfit = PROFILE_OUTFITS.aria[0];
      }
    };
    img.src = dataUrl;
  },

  // --------------------------------------------------------------------------
  // SCREEN 2: AI PERSONAL ANALYSIS
  // --------------------------------------------------------------------------
  startAnalysis() {
    this.goToScreen(2);

    const animStage = document.getElementById("analysis-animation-stage");
    const resultsStage = document.getElementById("analysis-results-stage");
    const scannerImg = document.getElementById("m-scanner-img");

    if (animStage) animStage.style.display = "block";
    if (resultsStage) resultsStage.style.display = "none";
    if (scannerImg) scannerImg.src = this.currentPhotoUrl;

    const steps = ["anim-step-1", "anim-step-2", "anim-step-3", "anim-step-4"];
    steps.forEach(s => {
      const el = document.getElementById(s);
      if (el) { el.classList.remove("active", "completed"); }
    });

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const el = document.getElementById(steps[currentStep]);
        if (el) el.classList.add("active");
        if (currentStep > 0) {
          const prev = document.getElementById(steps[currentStep - 1]);
          if (prev) { prev.classList.remove("active"); prev.classList.add("completed"); }
        }
        currentStep++;
      } else {
        clearInterval(interval);
        const last = document.getElementById(steps[steps.length - 1]);
        if (last) { last.classList.remove("active"); last.classList.add("completed"); }

        setTimeout(() => {
          this.renderAnalysisResults();
          if (animStage) animStage.style.display = "none";
          if (resultsStage) {
            resultsStage.style.display = "block";
            resultsStage.classList.add("animate-fade-up");
          }
        }, 400);
      }
    }, 400);
  },

  renderAnalysisResults() {
    const prof = this.activeProfile;
    document.getElementById("m-result-avatar").src = this.currentPhotoUrl;
    document.getElementById("m-res-season-tag").textContent = prof.season;
    document.getElementById("m-res-profile-name").textContent = prof.skinTone.name;

    // Skin Tone
    document.getElementById("m-res-skin-tone").textContent = prof.skinTone.name;
    document.getElementById("m-res-skin-hex").textContent = prof.skinTone.hex;
    document.getElementById("m-res-tone-swatch").style.backgroundColor = prof.skinTone.hex;

    // Undertone
    document.getElementById("m-res-undertone-tag").textContent = prof.undertone.type;
    document.getElementById("m-res-undertone-val").textContent = prof.undertone.family;
    document.getElementById("m-res-undertone-desc").textContent = prof.undertone.desc;

    // Style Profile
    document.getElementById("m-res-style-profile").textContent = prof.styleProfile;
    document.getElementById("m-res-style-desc").textContent = prof.styleDesc;

    // Refresh premium badge & button state
    this.updatePremiumBadge();
  },

  // --------------------------------------------------------------------------
  // SCREEN 3: PERSONAL COLORS
  // --------------------------------------------------------------------------
  renderPersonalColors() {
    const prof = this.activeProfile;
    const colors = prof.colors;

    document.getElementById("m-colors-subtitle").textContent = 
      `Colors that complement your natural ${prof.skinTone.name} appearance.`;

    // 1. Best Colors (6-8 swatches)
    const bestGrid = document.getElementById("m-best-swatches-grid");
    bestGrid.innerHTML = colors.best.map(c => `
      <div class="m-swatch-box">
        <div class="m-swatch-color" style="background:${c.hex};"></div>
        <div class="m-swatch-meta">
          <div class="m-swatch-name">${c.name}</div>
          <div class="m-swatch-hex">${c.hex}</div>
        </div>
      </div>
    `).join("");

    // 2. Complementary Colors
    const compGrid = document.getElementById("m-comp-swatches-grid");
    compGrid.innerHTML = colors.complementary.map(c => `
      <div class="m-swatch-box">
        <div class="m-swatch-color" style="background:${c.hex};"></div>
        <div class="m-swatch-meta">
          <div class="m-swatch-name">${c.name}</div>
          <div class="m-swatch-hex">${c.hex}</div>
        </div>
      </div>
    `).join("");

    // 3. Colors to Avoid
    const avoidGrid = document.getElementById("m-avoid-swatches-grid");
    avoidGrid.innerHTML = colors.avoid.map(c => `
      <div class="m-avoid-box">
        <div class="m-avoid-color" style="background:${c.hex};">✕</div>
        <div class="m-avoid-meta">
          <div class="m-avoid-name">${c.name}</div>
        </div>
      </div>
    `).join("");

    // 4. Recommended Combinations
    const combosList = document.getElementById("m-combos-container");
    combosList.innerHTML = colors.combinations.map(cmb => `
      <div class="m-combo-row">
        <div>
          <div class="m-combo-title">${cmb.name}</div>
          <div class="m-combo-formula">${cmb.desc}</div>
        </div>
        <div class="m-combo-dots">
          ${cmb.dots.map(dot => `<div class="m-combo-dot" style="background:${dot};"></div>`).join("")}
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // SCREEN 4: PERSONALIZED OUTFITS (4+ COMBINATIONS & 3-BUTTON ACTIONS)
  // --------------------------------------------------------------------------
  setCategory(catKey) {
    this.activeCategory = catKey;

    document.querySelectorAll(".m-cat-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-cat") === catKey);
    });

    const catName = catKey === "all" ? "All Curated Looks" : `${catKey.charAt(0).toUpperCase() + catKey.slice(1)} Collection`;
    document.getElementById("m-cur-cat-badge").textContent = catName;

    this.renderOutfitRecommendations();
  },

  renderOutfitRecommendations() {
    const allOutfits = this.getCurrentProfileOutfits();
    let displayedOutfits = allOutfits;

    if (this.activeCategory !== "all") {
      displayedOutfits = allOutfits.filter(o => o.category.toLowerCase() === this.activeCategory.toLowerCase());
      if (displayedOutfits.length === 0) {
        displayedOutfits = allOutfits; // Fallback
      }
    }

    document.getElementById("m-cur-cat-count").textContent = `${displayedOutfits.length} Personalized Looks`;

    const container = document.getElementById("m-outfit-cards-container");
    container.innerHTML = displayedOutfits.map(outfit => {
      const isSelected = this.selectedOutfit && this.selectedOutfit.id === outfit.id;
      return `
        <div class="m-outfit-card ${isSelected ? 'selected' : ''}" id="card-${outfit.id}">
          <div class="m-card-top-header">
            <div>
              <span class="m-card-badge best" style="font-size:8.5px; margin-bottom:2px;">${outfit.category.toUpperCase()} · ${outfit.tag}</span>
              <h3 class="m-outfit-title">${outfit.title}</h3>
            </div>
            <div class="m-outfit-pal-strip">
              ${outfit.swatches.map(s => `<span class="m-pal-dot" style="background:${s};"></span>`).join("")}
            </div>
          </div>

          <div class="m-outfit-body">
            <div class="m-pieces-summary-list">
              <div class="m-piece-item"><span class="piece-label">Top:</span><span class="piece-val">${outfit.pieces.top}</span></div>
              <div class="m-piece-item"><span class="piece-label">Bottom:</span><span class="piece-val">${outfit.pieces.bottom}</span></div>
              <div class="m-piece-item"><span class="piece-label">Shoes:</span><span class="piece-val">${outfit.pieces.shoes}</span></div>
              <div class="m-piece-item"><span class="piece-label">Jewelry:</span><span class="piece-val">${outfit.pieces.accessories}</span></div>
            </div>

            <div class="m-why-banner">
              <strong>Why it works:</strong> ${outfit.why}
            </div>
          </div>

          <div class="m-card-footer-action">
            <span style="font-weight:600; font-size:11.5px; color:var(--rose-gold-dark);">Match Score: ${outfit.score}</span>
            <span style="font-size:10.5px; color:var(--text-dim);">Available on Myntra & Meesho</span>
          </div>

          <!-- 3-Button Action Row per Outfit Card -->
          <div class="m-card-triad-actions">
            <button class="outfit-action-btn outfit-btn-try" onclick="RadianceApp.selectOutfitAndTryOn('${outfit.id}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Try This Look</span>
            </button>

            <button class="outfit-action-btn outfit-btn-shop" onclick="RadianceApp.selectOutfitAndShop('${outfit.id}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span>Shop Look</span>
            </button>

            <button class="outfit-action-btn outfit-btn-save" onclick="RadianceApp.saveOutfitFromCard('${outfit.id}')" title="Save Look">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Save</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  selectOutfitAndOpen(outfitId) {
    const allOutfits = this.getCurrentProfileOutfits();
    const found = allOutfits.find(o => o.id === outfitId);
    if (found) {
      this.selectedOutfit = found;
      this.goToScreen(5);
    }
  },

  selectOutfitAndTryOn(outfitId) {
    const allOutfits = this.getCurrentProfileOutfits();
    const found = allOutfits.find(o => o.id === outfitId);
    if (found) {
      this.selectedOutfit = found;
      this.showToast(`Loading "${found.title}" into Virtual Try-On...`);
      this.goToScreen(7);
    }
  },

  selectOutfitAndShop(outfitId) {
    const allOutfits = this.getCurrentProfileOutfits();
    const found = allOutfits.find(o => o.id === outfitId);
    if (found) {
      this.selectedOutfit = found;
      this.showToast(`Curating Myntra & Meesho pieces for "${found.title}"...`);
      this.goToScreen(6);
    }
  },

  saveOutfitFromCard(outfitId) {
    const allOutfits = this.getCurrentProfileOutfits();
    const found = allOutfits.find(o => o.id === outfitId);
    if (found) {
      const prev = this.selectedOutfit;
      this.selectedOutfit = found;
      this.saveCurrentLook(true);
      this.selectedOutfit = prev || found;
    }
  },

  // --------------------------------------------------------------------------
  // SCREEN 5: COMPLETE LOOK
  // --------------------------------------------------------------------------
  renderCompleteLook() {
    const outfit = this.selectedOutfit || this.getCurrentProfileOutfits()[0];
    this.selectedOutfit = outfit;
    const card = document.getElementById("m-complete-look-card");

    card.innerHTML = `
      <!-- User Photo Try-On Preview Header -->
      <div class="m-complete-portrait-header">
        <img src="${this.currentPhotoUrl}" alt="User Fitted Look" class="m-complete-portrait-img">
        <div class="m-complete-portrait-badge">
          <span class="pulse-dot"></span> Fitted For ${this.activeProfile.name} · ${outfit.category}
        </div>
      </div>

      <div class="m-look-header" style="margin-top:14px;">
        <span class="m-look-category-tag">${outfit.category.toUpperCase()} COLLECTION · ${outfit.tag}</span>
        <h2 class="m-look-title">${outfit.title}</h2>
      </div>

      <div class="m-garments-breakdown">
        <!-- TOP -->
        <div class="m-garment-slot">
          <div class="m-garment-emoji">👔</div>
          <div class="m-garment-info">
            <span class="m-garment-type">TOP PIECE</span>
            <div class="m-garment-name">${outfit.pieces.top}</div>
          </div>
        </div>

        <!-- BOTTOM -->
        <div class="m-garment-slot">
          <div class="m-garment-emoji">👖</div>
          <div class="m-garment-info">
            <span class="m-garment-type">BOTTOM PIECE</span>
            <div class="m-garment-name">${outfit.pieces.bottom}</div>
          </div>
        </div>

        <!-- SHOES -->
        <div class="m-garment-slot">
          <div class="m-garment-emoji">👟</div>
          <div class="m-garment-info">
            <span class="m-garment-type">FOOTWEAR</span>
            <div class="m-garment-name">${outfit.pieces.shoes}</div>
          </div>
        </div>

        <!-- ACCESSORIES -->
        <div class="m-garment-slot">
          <div class="m-garment-emoji">💍</div>
          <div class="m-garment-info">
            <span class="m-garment-type">ACCESSORIES & JEWELRY</span>
            <div class="m-garment-name">${outfit.pieces.accessories}</div>
          </div>
        </div>
      </div>

      <div class="m-color-harmony-box">
        <div class="m-harmony-label">Color Harmony Palette</div>
        <div class="m-harmony-swatches-strip">
          ${outfit.swatches.map(hex => `<span class="m-harmony-dot" style="background:${hex};" title="${hex}"></span>`).join("")}
        </div>
        <p class="m-harmony-explanation">
          <strong>Why this look works:</strong> ${outfit.why}
        </p>
      </div>
    `;
  },

  // --------------------------------------------------------------------------
  // SCREEN 6: SHOP THIS LOOK (EXCLUSIVELY MYNTRA & MEESHO)
  // --------------------------------------------------------------------------
  renderShopThisLook() {
    const outfit = this.selectedOutfit || this.getCurrentProfileOutfits()[0];
    this.selectedOutfit = outfit;
    const products = outfit.products || [];

    // Bundle total
    const total = products.reduce((acc, p) => acc + p.price, 0);
    document.getElementById("m-bundle-total-price").textContent = `₹${total.toLocaleString('en-IN')}`;
    document.getElementById("m-bundle-count").textContent = `${products.length} Curated Pieces`;

    this.filterAndRenderProducts();
  },

  setShopFilter(filterCategory) {
    this.currentShopFilter = filterCategory;
    document.querySelectorAll(".m-filter-chip").forEach(chip => {
      chip.classList.toggle("active", chip.getAttribute("data-filter") === filterCategory);
    });
    this.filterAndRenderProducts();
  },

  handleShopSort(sortType) {
    this.currentShopSort = sortType;
    this.filterAndRenderProducts();
  },

  filterAndRenderProducts() {
    const outfit = this.selectedOutfit || this.getCurrentProfileOutfits()[0];
    let products = [...(outfit.products || [])];

    // Filter
    if (this.currentShopFilter !== "all") {
      products = products.filter(p => p.category.toLowerCase() === this.currentShopFilter.toLowerCase());
    }

    // Sort
    if (this.currentShopSort === "price-low") {
      products.sort((a, b) => a.price - b.price);
    } else if (this.currentShopSort === "price-high") {
      products.sort((a, b) => b.price - a.price);
    }

    const container = document.getElementById("m-products-list-container");
    if (products.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:24px; color:var(--text-dim); font-size:13px;">No items found in this category.</div>`;
      return;
    }

    container.innerHTML = products.map(p => {
      const storeClass = p.store.toLowerCase();
      return `
        <div class="m-product-card">
          <div class="m-product-thumb">${p.emoji || "🛍️"}</div>
          <div class="m-product-details">
            <div class="m-product-cat-row">
              <span class="m-prod-cat">${p.category}</span>
              <span style="opacity:0.4;">•</span>
              <span class="store-badge ${storeClass}">${p.store}</span>
            </div>
            <div class="m-product-name">${p.productName}</div>
            <div class="m-prod-color-note">Color: ${p.color}</div>
            <div class="m-prod-price-action">
              <span class="m-prod-price">₹${p.price.toLocaleString('en-IN')}</span>
              <a href="${p.productUrl}" target="_blank" rel="noopener noreferrer" class="m-shop-now-btn" onclick="RadianceApp.trackShopClick('${p.productName}', '${p.store}')">
                <span>Shop on ${p.store}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  trackShopClick(name, store) {
    this.showToast(`Opening ${name} on ${store}...`);
  },

  shopCompleteLook() {
    const outfit = this.selectedOutfit || this.getCurrentProfileOutfits()[0];
    const total = (outfit.products || []).reduce((acc, p) => acc + p.price, 0);
    this.showToast(`✨ Bundle mapped! All ${outfit.products.length} pieces on Myntra & Meesho (₹${total.toLocaleString('en-IN')}) ready for checkout.`);
  },

  // --------------------------------------------------------------------------
  // SCREEN 7: VIRTUAL TRY-ON
  // --------------------------------------------------------------------------
  renderVirtualTryOn() {
    const outfit = this.selectedOutfit || this.getCurrentProfileOutfits()[0];
    const stage = document.getElementById("m-tryon-stage");

    stage.innerHTML = `
      <div class="m-tryon-photo-frame">
        <img src="${this.currentPhotoUrl}" alt="Virtual Try-On" class="m-tryon-user-img">
        
        <!-- Subtle simulated outfit tint overlay -->
        <div class="m-tryon-tint-overlay" style="background: linear-gradient(180deg, transparent 35%, ${outfit.swatches[0]}33 55%, ${outfit.swatches[1]}44 85%);"></div>
        
        <div class="m-tryon-live-badge">
          <span class="pulse-dot"></span> Simulated Fit: ${outfit.title}
        </div>

        <!-- Garment Pin 1: Top -->
        <div class="m-tryon-pin m-pin-top">
          <div class="m-pin-dot">✦</div>
          <div class="m-pin-bubble">${outfit.tryOnPins.top.name}</div>
        </div>

        <!-- Garment Pin 2: Bottom -->
        <div class="m-tryon-pin m-pin-bottom">
          <div class="m-pin-dot">✦</div>
          <div class="m-pin-bubble">${outfit.tryOnPins.bottom.name}</div>
        </div>

        <!-- Garment Pin 3: Accessories -->
        <div class="m-tryon-pin m-pin-acc">
          <div class="m-pin-dot">✦</div>
          <div class="m-pin-bubble">${outfit.tryOnPins.acc.name}</div>
        </div>
      </div>
    `;
  },

  tryAnotherLook() {
    const allOutfits = this.getCurrentProfileOutfits();
    const currentIndex = allOutfits.findIndex(o => o.id === this.selectedOutfit.id);
    const nextIndex = (currentIndex + 1) % allOutfits.length;
    this.selectedOutfit = allOutfits[nextIndex];
    this.activeCategory = this.selectedOutfit.category.toLowerCase();

    this.renderVirtualTryOn();
    this.showToast(`Switched look to "${this.selectedOutfit.title}" (${this.selectedOutfit.category})`);
  },

  saveLookAndAdvance() {
    this.saveCurrentLook(false);
    this.goToScreen(8);
  },

  // --------------------------------------------------------------------------
  // SCREEN 8: SAVED LOOK (Dedicated Dossier Screen)
  // --------------------------------------------------------------------------
  renderSavedLookScreen() {
    const outfit = this.selectedOutfit || this.getCurrentProfileOutfits()[0];
    const total = (outfit.products || []).reduce((acc, p) => acc + p.price, 0);
    const storesList = [...new Set((outfit.products || []).map(p => p.store))].join(" & ");

    const container = document.getElementById("m-saved-dossier-card");
    container.innerHTML = `
      <div class="m-saved-hero-row">
        <div class="m-saved-avatar-wrap">
          <img src="${this.currentPhotoUrl}" alt="Fitted look">
        </div>
        <div class="m-saved-titles">
          <span class="m-saved-cat-eyebrow">${outfit.category.toUpperCase()} · ${outfit.tag}</span>
          <h3 class="m-saved-outfit-name">${outfit.title}</h3>
          <div style="display:flex; gap:4px; margin-top:4px;">
            ${outfit.swatches.map(hex => `<span class="m-pal-dot" style="background:${hex};"></span>`).join("")}
          </div>
        </div>
      </div>

      <div class="m-saved-pieces-grid">
        <div class="m-saved-piece-row">
          <span class="m-saved-piece-key">Top:</span>
          <span class="m-saved-piece-val">${outfit.pieces.top}</span>
        </div>
        <div class="m-saved-piece-row">
          <span class="m-saved-piece-key">Bottom:</span>
          <span class="m-saved-piece-val">${outfit.pieces.bottom}</span>
        </div>
        <div class="m-saved-piece-row">
          <span class="m-saved-piece-key">Shoes:</span>
          <span class="m-saved-piece-val">${outfit.pieces.shoes}</span>
        </div>
        <div class="m-saved-piece-row">
          <span class="m-saved-piece-key">Jewelry:</span>
          <span class="m-saved-piece-val">${outfit.pieces.accessories}</span>
        </div>
      </div>

      <div class="m-saved-stores-total-row">
        <div>
          <div style="font-size:9.5px; text-transform:uppercase; font-weight:700; color:var(--rose-gold-primary);">Available At</div>
          <div class="m-saved-stores-tags" style="color:var(--text-espresso); font-weight:700;">${storesList || "Myntra & Meesho"}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:9.5px; text-transform:uppercase; font-weight:700; color:var(--text-dim);">Est. Total</div>
          <div class="m-saved-total-price">₹${total.toLocaleString('en-IN')}</div>
        </div>
      </div>
    `;
  },

  // --------------------------------------------------------------------------
  // WARDROBE STORAGE & MODAL
  // --------------------------------------------------------------------------
  saveCurrentLook(showToastMsg = true) {
    if (!this.premiumUnlocked) {
      this.requestPremiumAccess("saved-looks");
      return;
    }

    const outfit = this.selectedOutfit || this.getCurrentProfileOutfits()[0];
    const lookId = `${outfit.id}-${Date.now()}`;
    const newEntry = {
      id: lookId,
      outfitId: outfit.id,
      title: outfit.title,
      category: outfit.category,
      pieces: outfit.pieces,
      swatches: outfit.swatches,
      photoUrl: this.currentPhotoUrl,
      timestamp: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
    };

    const exists = this.savedLooks.find(l => l.outfitId === outfit.id);
    if (!exists) {
      this.savedLooks.unshift(newEntry);
      this.persistSavedLooks();
      this.updateSavedBadge();
      if (showToastMsg) this.showToast("✨ Look saved to your Radiance Wardrobe!");
    } else {
      if (showToastMsg) this.showToast("This look is already in your wardrobe.");
    }
  },

  persistSavedLooks() {
    try {
      localStorage.setItem("radiance_saved_mobile_looks", JSON.stringify(this.savedLooks));
    } catch (e) {
      console.warn(e);
    }
  },

  loadSavedLooks() {
    try {
      const data = localStorage.getItem("radiance_saved_mobile_looks");
      if (data) this.savedLooks = JSON.parse(data);
    } catch (e) {
      this.savedLooks = [];
    }
  },

  updateSavedBadge() {
    const badge = document.getElementById("header-saved-count");
    if (badge) badge.textContent = this.savedLooks.length;
  },

  // --------------------------------------------------------------------------
  // USER PROFILE
  // --------------------------------------------------------------------------
  loadUserProfile() {
    try {
      const saved = JSON.parse(localStorage.getItem("radiance_user_profile") || "{}");
      this.userProfile = { ...this.userProfile, ...saved };
    } catch (e) {
      console.warn("Could not load profile", e);
    }
    this.updateProfileHeader();
  },

  updateProfileHeader() {
    const button = document.getElementById("header-profile-btn");
    const label = document.getElementById("header-profile-initial");
    if (label) {
      const name = (this.userProfile.fullName || "").trim();
      label.textContent = name ? name.charAt(0).toUpperCase() : "P";
    }
    if (button) button.title = this.userProfile.fullName ? `Profile: ${this.userProfile.fullName}` : "My Profile";
  },

  openProfileModal() {
    const p = this.userProfile;
    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.value = value || "";
    };
    set("profile-full-name", p.fullName);
    set("profile-email", p.email);
    set("profile-age", p.age);
    set("profile-gender", p.gender);
    set("profile-body-shape", p.bodyShape);
    set("profile-style-preference", p.stylePreference);
    const preview = document.getElementById("profile-photo-preview");
    if (preview) preview.src = p.photo || this.currentPhotoUrl || PRESET_AVATARS.aria;
    const season = document.getElementById("profile-season");
    if (season) season.textContent = this.activeProfile ? this.activeProfile.season : "Not analysed yet";
    const undertone = document.getElementById("profile-undertone");
    if (undertone) undertone.textContent = this.activeProfile?.undertone?.family || "Not analysed yet";
    const backdrop = document.getElementById("profile-modal-backdrop");
    if (backdrop) backdrop.classList.add("open");
  },

  closeProfileModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains("close-sheet-btn")) return;
    const backdrop = document.getElementById("profile-modal-backdrop");
    if (backdrop) backdrop.classList.remove("open");
  },

  saveUserProfile() {
    const get = id => (document.getElementById(id)?.value || "").trim();
    this.userProfile = {
      ...this.userProfile,
      fullName: get("profile-full-name"),
      email: get("profile-email"),
      age: get("profile-age"),
      gender: get("profile-gender"),
      bodyShape: get("profile-body-shape"),
      stylePreference: get("profile-style-preference")
    };
    try {
      localStorage.setItem("radiance_user_profile", JSON.stringify(this.userProfile));
      this.updateProfileHeader();
      this.closeProfileModal();
      this.showToast("Your profile has been saved.");
    } catch (e) {
      this.showToast("Could not save profile. Try a smaller photo.");
    }
  },

  handleProfilePhoto(event) {
    const file = event.target.files && event.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 320;
        const scale = Math.min(size / image.width, size / image.height, 1);
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
        this.userProfile.photo = canvas.toDataURL("image/jpeg", 0.78);
        const preview = document.getElementById("profile-photo-preview");
        if (preview) preview.src = this.userProfile.photo;
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  },

  openSavedModal() {
    if (!this.premiumUnlocked) {
      this.requestPremiumAccess("saved-looks");
      return;
    }

    const backdrop = document.getElementById("saved-modal-backdrop");
    const content = document.getElementById("saved-wardrobe-content");
    if (!backdrop || !content) return;

    if (this.savedLooks.length === 0) {
      content.innerHTML = `
        <div style="text-align:center; padding:32px 16px; color:var(--text-muted-taupe);">
          <p style="font-family:var(--font-serif); font-size:18px; color:var(--text-espresso); margin-bottom:4px;">No saved looks yet</p>
          <p style="font-size:12px; color:var(--text-dim);">Tap "Save Look" on any outfit card or during Virtual Try-On.</p>
        </div>
      `;
    } else {
      content.innerHTML = this.savedLooks.map(look => `
        <div style="display:flex; align-items:center; gap:12px; padding:10px; border-radius:var(--radius-lg); background:var(--bg-cream-soft); border:1px solid var(--border-subtle);">
          <div style="width:48px; height:54px; border-radius:var(--radius-sm); overflow:hidden; border:1px solid var(--rose-gold-light); flex-shrink:0;">
            <img src="${look.photoUrl}" alt="${look.title}" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="flex:1; min-width:0;">
            <div style="font-size:9.5px; font-weight:700; color:var(--rose-gold-primary); text-transform:uppercase;">${look.category}</div>
            <div style="font-size:13.5px; font-weight:700; color:var(--text-espresso); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${look.title}</div>
            <div style="font-size:10px; color:var(--text-dim);">Saved on ${look.timestamp}</div>
          </div>
          <button onclick="RadianceApp.deleteSavedLook('${look.id}')" style="background:none; border:none; color:var(--text-dim); cursor:pointer; padding:6px; font-size:14px;">✕</button>
        </div>
      `).join("");
    }

    backdrop.classList.add("open");
  },

  closeSavedModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains("close-sheet-btn")) return;
    const backdrop = document.getElementById("saved-modal-backdrop");
    if (backdrop) backdrop.classList.remove("open");
  },

  deleteSavedLook(id) {
    this.savedLooks = this.savedLooks.filter(l => l.id !== id);
    this.persistSavedLooks();
    this.updateSavedBadge();
    this.openSavedModal();
    this.showToast("Removed from saved wardrobe.");
  },

  startFreshSession() {
    this.screenHistory = [0];
    this.goToScreen(0);
    this.showToast("Welcome back to Radiance Home.");
  },

  // --------------------------------------------------------------------------
  // RADIANCE PREMIUM & PAYMENT PROTOTYPE CONTROLLER
  // --------------------------------------------------------------------------
  updatePremiumBadge() {
    const chip = document.getElementById("header-premium-chip");
    const verifiedBadge = document.getElementById("m-premium-verified-badge");
    const analysisBtnText = document.getElementById("m-analysis-btn-label");

    if (this.premiumUnlocked) {
      if (chip) chip.style.display = "inline-flex";
      if (verifiedBadge) verifiedBadge.style.display = "inline-flex";
      if (analysisBtnText) analysisBtnText.textContent = "See My Colors";
    } else {
      if (chip) chip.style.display = "none";
      if (verifiedBadge) verifiedBadge.style.display = "none";
      if (analysisBtnText) analysisBtnText.textContent = "See My Colors (Premium)";
    }
  },

  requestPremiumAccess(target) {
    this.pendingPremiumTarget = target;
    this.openPremiumModal();
  },

  openPremiumModal(target = null) {
    if (target !== null) {
      this.pendingPremiumTarget = target;
    }
    const modal = document.getElementById("premium-unlock-modal");
    if (modal) {
      modal.classList.add("open");
    }
  },

  closePremiumModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains("close-sheet-btn") && !e.target.classList.contains("premium-secondary-btn")) return;
    const modal = document.getElementById("premium-unlock-modal");
    if (modal) modal.classList.remove("open");
  },

  openPaymentModal() {
    // Dismiss unlock modal
    const unlockModal = document.getElementById("premium-unlock-modal");
    if (unlockModal) unlockModal.classList.remove("open");

    // Reset payment states
    const viewForm = document.getElementById("payment-view-form");
    const viewProcessing = document.getElementById("payment-view-processing");
    const viewSuccess = document.getElementById("payment-view-success");

    if (viewForm) viewForm.style.display = "block";
    if (viewProcessing) viewProcessing.style.display = "none";
    if (viewSuccess) viewSuccess.style.display = "none";

    this.selectPayMethod("upi");

    const payModal = document.getElementById("payment-modal");
    if (payModal) payModal.classList.add("open");
  },

  closePaymentModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains("close-sheet-btn")) return;
    const payModal = document.getElementById("payment-modal");
    if (payModal) payModal.classList.remove("open");
  },

  selectPayMethod(methodKey) {
    this.selectedPayMethod = methodKey;
    const methods = ["upi", "card", "netbanking"];
    methods.forEach(m => {
      const opt = document.getElementById(`pay-opt-${m}`);
      const radio = document.getElementById(`pay-radio-${m}`);
      if (opt) opt.classList.toggle("active", m === methodKey);
      if (radio) radio.textContent = m === methodKey ? "●" : "○";
    });
  },

  processPayment() {
    const viewForm = document.getElementById("payment-view-form");
    const viewProcessing = document.getElementById("payment-view-processing");
    const viewSuccess = document.getElementById("payment-view-success");

    if (viewForm) viewForm.style.display = "none";
    if (viewProcessing) viewProcessing.style.display = "block";

    // Simulate payment gateway communication (1.6s)
    setTimeout(() => {
      if (viewProcessing) viewProcessing.style.display = "none";
      if (viewSuccess) {
        viewSuccess.style.display = "block";
        viewSuccess.classList.add("animate-fade-up");
      }
    }, 1600);
  },

  completePaymentAndContinue() {
    this.premiumUnlocked = true;
    try {
      localStorage.setItem("radiance_premium_unlocked", "true");
    } catch (e) {
      console.warn(e);
    }
    this.updatePremiumBadge();

    const payModal = document.getElementById("payment-modal");
    if (payModal) payModal.classList.remove("open");

    this.showToast("✨ Welcome to Radiance Premium! All features unlocked.");

    // Direct routing to the target feature
    const target = this.pendingPremiumTarget;
    this.pendingPremiumTarget = null;

    if (target === "saved-looks") {
      this.openSavedModal();
    } else if (typeof target === "number" && target >= 3 && target <= 9) {
      this.goToScreen(target);
    } else {
      // Default journey continues to Personal Colors
      this.goToScreen(3);
    }
  },

  resetPremium() {
    this.premiumUnlocked = false;
    try {
      localStorage.removeItem("radiance_premium_unlocked");
    } catch (e) {}
    this.updatePremiumBadge();
    this.showToast("Radiance Premium reset for demo.");
  },

  // --------------------------------------------------------------------------
  // TOAST NOTIFICATIONS
  // --------------------------------------------------------------------------
  showToast(msg, type = "normal") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "radiance-toast";
    toast.innerHTML = `<span style="color:#DFB15B;">✦</span><span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  RadianceApp.init();
});
