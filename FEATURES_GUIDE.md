# Portfolio Animation Features - User Guide

## 🎮 Interactive Features Guide

### 1. **Explain Mode Toggle** (Available on all pages)
**Location:** Top-right of navbar

**How to use:**
- Click to toggle between "Simple" and "Advanced" modes
- Your preference is saved automatically (localStorage)
- Watch content across the entire site adapt to your choice

**What changes:**
- **Simple Mode:** Friendly, approachable language (e.g., "Company Value Calculator")
- **Advanced Mode:** Technical terminology (e.g., "DCF Quick Valuation")

---

### 2. **Complex Plane Hero** (Home Page)
**Location:** Home page (`/`) - below the main headline

**How to use:**
1. Look for the glowing blue point on the grid
2. Click and drag the point anywhere on the plane
3. Watch the interpretation update in real-time
4. Release to see the new interpretation

**What it shows:**
- **Horizontal axis (Real):** Value / Cashflows / Fundamentals
- **Vertical axis (Imaginary):** Risk / Uncertainty / Volatility
- **Simple Mode:** "Strong value, stable 📈" or "Speculative, high risk ⚠️"
- **Advanced Mode:** Complex number representation (z = a + bi)

---

### 3. **Interactive Formula Tooltips** (Risk Lab)
**Location:** `/risk-lab` page

**How to use:**
1. Hover over any highlighted term in the formulas (E, D, Re, Rd, CFt, r, t, etc.)
2. Read the tooltip that appears
3. Move to different terms to learn more

**Formula examples:**
- **WACC Formula:** Hover over "E" to learn about equity value
- **NPV Formula:** Hover over "CFt" to understand cash flows

**Mode differences:**
- **Simple:** "What investors expect to earn from stocks"
- **Advanced:** "Cost of equity - return required by equity investors (often CAPM)"

---

### 4. **Sensitivity Heatmap** (Risk Lab)
**Location:** `/risk-lab` page - right side of DCF calculator

**How to use:**
1. Enter values in the DCF calculator (Cash Flow, Growth Rate, Discount Rate)
2. Hover over any cell in the heatmap
3. Read the interpretation at the bottom

**Color coding:**
- 🟢 **Green:** Good - High valuation
- 🟡 **Yellow:** Moderate
- 🟠 **Orange:** Concerning
- 🔴 **Red:** Risky - Low valuation

**What it shows:**
How enterprise value changes when you adjust:
- WACC (Weighted Average Cost of Capital) - horizontal
- Growth Rate - vertical

---

### 5. **DCF Calculator** (Risk Lab)
**Location:** `/risk-lab` page - left side

**How to use:**
1. Enter **Yearly Cash Flow** (e.g., 1000000)
2. Enter **Growth Rate** (e.g., 5%)
3. Enter **Discount Rate** (e.g., 10%)
4. Watch the value calculate automatically
5. Read the interpretation below

**Requirements:**
- Discount Rate must be greater than Growth Rate
- All fields must have values

**Output:**
- Enterprise Value displayed in large text
- Real-time animation on value change
- Context-aware interpretation

---

### 6. **Project Filters** (Projects Page)
**Location:** `/projects` page - below the headline

**How to use:**
1. Click any filter chip: All, Valuation, Risk, Dashboards, Analytics/AI, Tools
2. Watch projects filter with smooth animation
3. Click "All" to reset

**Features:**
- Active filter highlighted with primary color
- Smooth transitions between filtered states
- Project categories shown as badges

---

### 7. **Folder Hover Effect** (Projects Page)
**Location:** `/projects` page - project cards

**How to use:**
1. Hover over any project card
2. Watch the folder tab appear at the top
3. See the card lift with shadow
4. Move away to collapse

**Visual feedback:**
- Folder tab slides down on hover
- Card elevates with enhanced shadow
- Smooth spring-based animation

---

### 8. **Flip Certification Cards** (Certifications Page)
**Location:** `/certifications` page

**How to use:**
1. Click any certification card
2. Watch it flip to reveal the back
3. Read "What This Adds" information
4. Click again to flip back

**Back side shows:**
- **Key Skills:** Badges showing specific abilities gained
- **Impact:** Description of how it helped
- Smooth 3D flip animation

**Examples:**
- CFA Level II → Asset Valuation, Equity Analysis, Fixed Income, Derivatives
- FRM Part I → Market Risk, Credit Risk, VaR Models, Risk Metrics

---

### 9. **Contact Form Animation** (Contact Page)
**Location:** `/contact` page

**How to use:**
1. Fill out all form fields (Name, Email, Subject, Message)
2. Click "Send Message"
3. Watch the delightful animation sequence:
   - Button shows spinning send icon
   - Green explosion fills the screen
   - Check mark appears with bounce
   - Paper plane flies off screen
   - Success message displays

**Note:** This is a demo form (doesn't actually send email)

---

### 10. **Timeline Pulse** (Experience Page)
**Location:** `/experience` page

**What to watch:**
- Timeline dots continuously pulse with subtle animation
- Cards slide in from alternating sides as you scroll
- Hover cards to see 3D tilt effect
- Notice the journey arrow at the bottom

---

## 🎨 Animation Types Used

### Entrance Animations
- **Fade + Slide:** Pages, sections, cards
- **Stagger:** Grid items, list items, badges
- **Scale:** Icons, tooltips, overlays

### Hover Effects
- **Lift:** Cards float up with shadow
- **Tilt:** 3D perspective rotation
- **Scale:** Buttons, chips, links
- **Color:** Text, backgrounds, borders

### Scroll Triggers
- **Viewport detection:** Elements animate when visible
- **Progressive reveal:** Content appears as you scroll
- **Parallax:** Subtle depth effects

### Interactive
- **Drag:** Complex Plane point
- **Flip:** Certification cards
- **Toggle:** Explain Mode switch
- **Filter:** Project categories

---

## 💡 Tips for Best Experience

1. **Try Explain Mode:** Toggle it on different pages to see how content adapts
2. **Hover Everything:** Many elements have hover states worth discovering
3. **Drag the Complex Plane:** It's the signature interactive feature
4. **Play with DCF Values:** Watch the heatmap update in real-time
5. **Flip All Certifications:** Each has unique skills and impact
6. **Submit the Contact Form:** The animation is worth seeing!

---

## 🚀 Performance Notes

- All animations respect `prefers-reduced-motion` system setting
- GPU-accelerated transforms used throughout
- Viewport detection prevents off-screen animations
- Lightweight implementation (no heavy canvas libraries)
- Smooth 60fps performance on modern devices

---

## 📱 Mobile Experience

All features work on touch devices:
- Tap instead of hover where applicable
- Drag works with touch on Complex Plane
- Flip cards with tap
- Filters with tap
- Responsive layouts throughout

---

Enjoy exploring the portfolio! 🎉
