# 🏨 LuxStay — Modern Hotel Booking & Reservation Platform

A premium, full-featured hotel booking web application built with **React** and **Tailwind CSS**. Features a luxury aesthetic, real-time room availability filtering, interactive booking modal flows, and an intuitive guest reservation management system.

---

## 🎨 Design System & Color Palette

The interface is built around a modern, high-end hospitality aesthetic with a warm dark-mode toggle and rich accent colors:

| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Primary Accent** | `#D97706` / Amber Gold | CTAs, ratings, highlight borders, featured tags |
| **Secondary Accent** | `#0D9488` / Deep Teal | Availability badges, confirmation states |
| **Dark Neutral** | `#0F172A` / Slate 900 | Luxury dark background, main hero sections |
| **Light Neutral** | `#F8FAFC` / Slate 50 | Card containers, crisp readable text contrast |

---

## ✨ Key Features

- **Interactive Search & Date Picker:** Filter stays by destination, check-in / check-out dates, guest count, and price range.
- **Room Categorization & Filtering:** Browse suites, deluxe rooms, and penthouse options with instant filtering by amenities (Wi-Fi, Pool, Spa, Sea View).
- **Dynamic Pricing Calculator:** Calculates total night rates, service fees, tax breakdowns, and seasonal discounts in real time.
- **Detailed Room Showcase:** High-resolution image galleries, 360 virtual tour preview modals, guest reviews, and house rules.
- **Multi-Step Checkout Flow:** Guest details intake, room selection summary, and mock payment gateway integration.
- **Responsive Navigation:** Mobile-first sticky reservation bar for seamless booking on mobile devices.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (Vite)
- **Styling & UI:** Tailwind CSS (Custom Color Extensions, Glassmorphism Overlays)
- **Icons:** Lucide React
- **Date Handling:** `date-fns` / Native JavaScript Date API
- **Deployment:** Netlify / Vercel

---

## 💡 Dynamic Stay & Pricing Calculation Logic

The booking price engine dynamically computes nightly totals based on date ranges and room tiers:

```javascript
import { differenceInCalendarDays } from 'date-fns';

const calculateBookingTotal = (checkIn, checkOut, pricePerNight, taxRate = 0.12) => {
  if (!checkIn || !checkOut) return 0;
  
  const totalNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  const subtotal = totalNights * pricePerNight;
  const taxes = subtotal * taxRate;
  
  return {
    totalNights: Math.max(1, totalNights),
    subtotal,
    taxes,
    grandTotal: subtotal + taxes
  };
};
