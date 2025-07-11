# Rei Dashboard v1

A modern, responsive, and modular dashboard application built with **Vue 3**, **TypeScript**, and **Vite**.
This project was developed as my first Vue experience after years of React, to get hands-on with Vue's ecosystem and best practices.

> **Note:** v2 will be built with my own [rei-uikit](https://github.com/ramazandogna/rei-uikit) component library.

[Live Demo](https://rei-dashboard-client.vercel.app/)
[Project Repository](https://github.com/ramazandogna/rei-dashboard-client)

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Core Components](#core-components)
- [How to Run](#how-to-run)
- [About v2](#about-v2)
- [License](#license)

---

## Features

- **Authentication**: Login & Register with form validation and toast notifications.
- **Dashboard**: Overview cards, statistics, and charts.
- **User Table**: Paginated, sortable, and selectable user table (mock data).
- **UI Kit**: Custom Button, Modal, Card, Bar, Loader, and more.
- **Dark Mode**: LocalStorage-based theme toggle.
- **Responsive Layout**: Adaptive sidebar, navbar, and mobile-friendly design.
- **Reusable Layouts**: Authenticated and guest layouts.
- **Vue Router**: Protected and public routes.
- **State Management**: Local state and custom hooks (no Vuex/Pinia for simplicity).
- **Modern CSS**: UnoCSS utility classes, custom gradients, and animations.

---

## Screenshots

### Dashboard

![Dashboard](https://github.com/ramazandogna/rei-dashboard-client/blob/main/src/assets/images/dashboard.png?raw=true)

### Login

![Login](https://github.com/ramazandogna/rei-dashboard-client/blob/main/src/assets/images/login.png?raw=true)

### Register

![Register](https://github.com/ramazandogna/rei-dashboard-client/blob/main/src/assets/images/register.png?raw=true)

---

## Tech Stack

- **Vue 3** (Composition API, `<script setup>`)
- **TypeScript**
- **Vite** (Lightning-fast dev/build)
- **UnoCSS** (Atomic CSS engine)
- **Chart.js** + **vue-chartjs** (Data visualization)
- **Vue Router** (Routing)
- **Axios** (HTTP requests)
- **Vue Toast Notification** (User feedback)
- **Eric Meyer Reset** (CSS reset)
- **Prettier** + **Tailwind Plugin** (Code formatting)

---

## Project Structure

```
src/
  assets/         # Images, fonts, global styles
  components/     # Reusable UI components (Button, Modal, Table, etc.)
    Banner/       # Dashboard summary cards
    charts/       # Chart components and configs
    tables/       # UserTable (sortable, paginated)
  data/           # Static menu/navbar data
  hooks/          # Custom composables (modal, logout, sideMenu)
  layouts/        # LayoutAuthentication, LayoutGuestUser
  router/         # Vue Router config
  types/          # TypeScript interfaces/types
  views/          # Page components (Home, Auth, UI, Tables, etc.)
  main.ts         # App entry point
```

---

## Core Components

- **LayoutAuthentication.vue**: Main layout with Navbar & SideMenu for authenticated users.
- **SideMenu.vue / NavBar.vue**: Dynamic navigation, responsive, SVG icons.
- **Home.vue**: Dashboard overview, summary cards, charts, and user table.
- **UserTable.vue**: Sortable, paginated, selectable table (mocked with JSONPlaceholder).
- **Button.vue**: Highly customizable, supports icons, gradients, and mini/normal types.
- **Modal.vue**: Simple modal with slot support and composable state.
- **Bar.vue**: Alert/info bar with different types (normal, error, success, blue).
- **Loader.vue**: SVG animated loader for async states.
- **UI.vue**: UI Kit showcase for all reusable components.

---

## How to Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## About v2

- **This is Rei Dashboard v1.**
- v2 will be built with my own [rei-uikit](https://github.com/ramazandogna/rei-uikit) for a more scalable, design-system-driven approach.
- This project was coded as a Vue learning journey after years of React, to use in my new job and to compare Vue/React paradigms hands-on.

---

## License

MIT

---

> _Developed by [ramazandogna](https://github.com/ramazandogna) • For feedback, open an issue or reach out on GitHub._
