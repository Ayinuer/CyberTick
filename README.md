# 🕒 CyberTick 



### License Version Control
**Current Version:** 1.0.0  
**Last Updated:** 2026-01-18  

👉 **[Explore the live website](https://github.com/Ayinuer/CyberTick)**

---

### 📌 Project Description
**CyberTick** is a high-end, responsive web application featuring a sleek **Glassmorphism** design. It combines aesthetic elegance with utility, offering a dual-mode clock interface and a security lockdown module designed for deep focus and system protection.

It follows a modern design philosophy, utilizing CSS backdrop filters, golden accents, and a mobile-first grid to ensure a premium experience on any device.

---

### 📋 Table of Contents
* 🎯 [Project Goals & Vision](#-project-goals--vision)
* 🖼️ [Visual & Technical Showcase](#-visual--technical-showcase)
* 💻 [Tech Stack & Design System](#-tech-stack--design-system)
* ✅ [Validation & Performance Evidence](#-validation--performance-evidence-lo2)
* 📱 [Responsive Design and UX Details](#-responsive-design-and-ux-details)
* ✅ [User Stories & Features](#-user-stories--features)
* 🛠️ [Setup & Local Run](#-setup--local-run)

---

### 🎯 Project Goals & Vision

| Category | Description |
| :--- | :--- |
| **Core Mission** | To provide a distraction-free, aesthetic time-tracking tool that integrates security protocols (Lockdown) to encourage deep work. |
| **Target Audience** | Creative professionals, developers, and students who value minimalist aesthetics and productivity tools. |
| **User Goals** | Toggle between clock styles instantly, switch themes based on environment, and trigger focus-lockdown sessions. |

---

### 🖼️ Visual & Technical Showcase

#### 1. Responsive Adaptability
Demonstrates consistent layout behavior across desktop, tablet, and mobile.
* **Mobile-first development approach**
* **Bootstrap 5.3.3 grid system** for layout consistency
* **Fluid Typography** that scales based on viewport width

#### 2. Full Site View
* **🏠 Analog Mode (index.html)**: Traditional 12-number face with smooth hand transitions.
* **🫁 Digital Mode**: High-contrast, minimalist 24-hour display with formatted date.
* **ℹ️ Lockdown View**: Full-screen security overlay with high-blur backdrop filters.

#### 3. Key Feature: Mode & Theme Toggling
* **Category-based Toggles**: Smooth transitions between Analog/Digital and Light/Dark.
* **Implementation**: Pure JavaScript state management with CSS Variable injection.
* **Micro-interactions**: Hover lift effects on control buttons using `transform: translateY(-3px)`.

---

### 💻 Tech Stack & Design System

**Tech Stack**
* **HTML5** — Semantic structure
* **CSS3** — Modular architecture with Glassmorphism (`backdrop-filter`)
* **JavaScript (ES6)** — Trigonometric math for clock hands and async Lockdown timers
* **Bootstrap 5.3.3** — Responsive grid and utilities
* **Typography**: Garamond & Inter

**Color Palette (CSS Variables)**

| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--primary-gold` | `#FFD700` | Hands, Logos & Highlights |
| `--bg-dark` | `#0a0a0a` | Main background (Dark Mode) |
| `--glass-bg` | `rgba(255,255,255,0.1)` | Clock face & UI Cards |
| `--text-light` | `#f4f4f4` | Secondary typography |

---

### ✅ Validation & Performance Evidence (LO2)

This project has been fully audited to ensure code quality and accessibility.

* **W3C HTML Validation**: Passed for all structural elements.
* **W3C CSS Validation**: Verified modular stylesheet architecture.
* **Lighthouse Score**: 95+ for Performance, Accessibility, and Best Practices.

---

### 📱 Responsive Design and UX Details

| Page/State | Feature | Implementation |
| :--- | :--- | :--- |
| **Global** | Glassmorphism | `backdrop-filter: blur(10px)` |
| **Analog** | Hand Logic | CSS `transform-origin` + JS Date Math |
| **Lockdown** | Focus Flow | Full-screen absolute overlay + Z-index 9999 |
| **UI** | Buttons | Ghost button design with hover transitions |

---

### ✅ User Stories & Features

| User Story | Outcome |
| :--- | :--- |
| **Immediate Value** | Current time visible immediately on page load. |
| **Visual Choice** | Users can choose between classic or modern clock styles. |
| **Deep Focus** | Triggering Lockdown blurs background distractions. |
| **Night Use** | Dark Mode reduces eye strain in low-light environments. |

---

### 🛠️ Setup & Local Run

```bash
# Clone the repository
git clone [https://github.com/Ayinuer/CyberTick.git](https://github.com/Ayinuer/CyberTick.git)

# Navigate to the directory
cd CyberTick

# Open in your browser
open index.html
# CyberTick