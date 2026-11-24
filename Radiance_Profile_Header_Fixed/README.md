# Radiance — AI Personal Styling Companion

> *“Discover the style that feels like you.”*

A demo-ready, responsive AI personal styling companion featuring dual **📱 Mobile (9:16)** and **💻 Desktop (16:9)** modes, real camera support, **Radiance Premium (₹449 One-Time Payment)** unlock system, personalized color analysis, multiple outfit combinations, and shopping exclusively from **Myntra** and **Meesho**.

---

## ✦ Key Capabilities & Features

### 1. Home First Experience (Screen 0)
- Opens directly into a clean, luxury Radiance Home.
- Monogram emblem, tagline, and brand description.
- **Start Styling** primary CTA.
- 6 Direct feature discovery cards:
  1. **Personal Color Analysis** (Chroma Engine)
  2. **Outfit Recommendations** (Curated Ensembles)
  3. **Complete Look** (Styling Dossier)
  4. **Shop Your Look** (Myntra & Meesho)
  5. **Virtual Try-On** (AI Drape Mirror)
  6. **Saved Looks** (Wardrobe Closet)

### 2. Dual Mode Viewport: 📱 Mobile | 💻 Desktop
- One-click top toggle between:
  - **📱 Mobile (9:16)**: Standard smartphone container with dynamic island, status bar, and portrait scrolling.
  - **💻 Desktop (16:9)**: Wide studio landscape layout with side-by-side columns and centered dialogs.
- Seamless mode switching preserves 100% of user data and styling progress.

### 3. Real Camera Photo Input (Screen 1)
- **Live Camera**: Uses `navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}})` with selfie mirroring and face oval alignment guides.
- **Capture & Review**: One-tap capture to canvas, with instant **Retake** and **Use This Photo** options.
- **Hardware Fallback**: Graceful handling when camera permissions are denied or unavailable.
- **Gallery Upload**: Instant file picker fallback.
- **Demo Presets**: 4 high-fashion diverse models (*Aria, Chloe, Maya, Elena*) with deterministic color profiles.

### 4. Basic AI Analysis & Radiance Premium (₹449 One-Time Payment)
- **Basic Preview**: Real-time chroma scanning animation diagnosed skin tone, undertone, and style profile.
- **₹449 One-Time Payment Unlock**:
  - **Zero Subscriptions**: No recurring charges, no monthly/annual fees.
  - **Checklist of Unlocks**:
    - AI Personal Color Analysis & Custom Swatches
    - Multiple AI Outfit Combinations (Casual, College, Formal, Party, Traditional)
    - Myntra + Meesho Product Recommendations
    - Complete Look Head-to-Toe Styling Dossier
    - Interactive Virtual Try-On Mirror
    - Digital Wardrobe & Saved Looks
    - Personalized Wardrobe Suggestions
  - **Realistic Payment Simulation**:
    - Select from **UPI** (GPay, PhonePe, Paytm, BHIM), **Card** (Credit/Debit), or **Net Banking**.
    - Realistic animated processing state (256-bit encrypted simulation).
    - Success verification screen with **“Welcome to Radiance Premium”**.
  - **Premium Badge**:
    - Displays `RADIANCE PREMIUM ✓` and `₹449 • One-time access` in header and profile once unlocked.
    - Persisted during the session so payment is never prompted again.

### 5. Personal Colors & Palettes (Screen 3)
- Unlocked in Premium:
  - **Best Colors** (8 power tones)
  - **Complementary Colors** (accent contrast)
  - **Colors to Avoid** (sallow/dulling tones)
  - **Recommended Combinations** (harmonious formulas)

### 6. Multiple Outfit Combinations (Screen 4)
- Generates at least 5 complete, personalized outfit combinations per profile.
- Categories: **All Looks**, **Casual**, **College**, **Formal**, **Traditional**, **Party**.
- Each outfit card includes:
  - Look title & category badge
  - Top, Bottom, Shoes, and Accessories pieces
  - Color palette dots
  - "Why it works" styling explanation
  - Match score
  - **3-Button Action Row per card**:
    - **Try This Look**: Direct jump to Virtual Try-On with that exact outfit.
    - **Shop Look**: Direct jump to Myntra & Meesho shopping for that exact outfit.
    - **Save**: Adds look directly to the wardrobe.

### 7. Complete Look Breakdown (Screen 5)
- User's fitted portrait preview at the top.
- Detailed slot breakdown of Top piece, Bottom piece, Footwear, and Jewelry.
- Color harmony swatches and explanation.
- Direct routes to Try-On, Shopping, and Saving.

### 8. Shopping Exclusively on Myntra & Meesho (Screen 6)
- **Strictly Two Stores**: Only **Myntra** and **Meesho** products (no other stores).
- Verified store pill badges (`.store-badge.myntra` and `.store-badge.meesho`).
- Item checklist and bundle total banner (e.g. ₹5,196).
- Category filtering (**All**, **Tops**, **Bottoms**, **Shoes**, **Accessories**).
- Sorting (**Recommended**, **Price: Low to High**, **Price: High to Low**).
- Direct "Shop on Myntra" / "Shop on Meesho" links.

### 9. Virtual Try-On & Digital Wardrobe (Screens 7 & 8)
- Real user portrait with simulated outfit drape overlay.
- Interactive garment pins for Top, Bottom, and Accessories.
- **Try Another Look** button dynamically cycles through all generated looks.
- Screen 8 Saved Look Dossier preserves photo, pieces, stores, and bundle price.
- Digital Wardrobe modal accessible anytime from the header heart chip.

---

## ✦ Technical Highlights

- **100% Client-Side & Offline Ready**: Runs directly in any modern browser without node dependencies or backend servers.
- **Deterministic AI Logic**: Predictable, reliable demo behavior for hackathon presentations.
- **Design Tokens**: Luxury serif typography (*Cormorant Garamond*), modern sans-serif (*Plus Jakarta Sans*), warm cream (`#FAF7F2`), espresso (`#231915`), and rose-gold (`#C27D60`).

---

## ✦ How to Launch

Double-click `launch.bat` or open `index.html` in any web browser.


## My Profile
- Open the circular profile button in the app header to edit your personal details.
- Profile fields include name, email, age, optional gender, body shape, and style preference.
- Upload a profile photo and view your current colour profile and undertone.
- Profile information is saved locally in the current browser using localStorage.
- Keep the `assets/avatars` folder beside `index.html`; it contains the four offline demo portraits.
