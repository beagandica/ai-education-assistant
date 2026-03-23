# AI Education Assistant

[![Deploy to GitHub Pages](https://github.com/beagandica/ai-education-assistant/actions/workflows/deploy.yml/badge.svg)](https://github.com/beagandica/ai-education-assistant/actions/workflows/deploy.yml)

## Overview

AI Education Assistant is a beginner-friendly learning tool designed to make coding more approachable. It helps students understand concepts, debug common errors, explore guided practice, and access explanations in English and Spanish. The project is intentionally built as a static site to maximize accessibility, affordability, and ease of deployment.

## Features

- 🎓 **Ask a Question** — get structured explanations for beginner coding topics
- 💻 **Explain Code** — paste JavaScript or Python code and get line-by-line explanations
- 🐛 **Explain Error** — input error messages and get beginner-friendly fix guidance
- 🧠 **Practice Mode** — multiple choice quizzes on variables, loops, conditionals, functions
- 🗺️ **Learning Paths** — guided roadmaps for Python, JavaScript, and Web Development
- 🌐 **Bilingual** — full English and Spanish support
- 📱 **Responsive** — works on desktop, tablet, and mobile

## Tech Stack

| Layer        | Technology                        |
| ------------ | --------------------------------- |
| Build Tool   | [Vite](https://vite.dev/)         |
| Framework    | [React 19](https://react.dev/)    |
| Language     | TypeScript                        |
| Routing      | React Router                      |
| Styling      | CSS (no framework)                |
| Hosting      | GitHub Pages                      |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Local Development

```bash
git clone https://github.com/beagandica/ai-education-assistant.git
cd ai-education-assistant
npm install
npm run dev
```

The development server will start at `http://localhost:5173`.

## Building for Production

```bash
npm run build
npm run preview
```

`npm run build` outputs optimized static files to the `dist/` directory. `npm run preview` serves the production build locally for testing.

## Deployment

The project auto-deploys to **GitHub Pages** via GitHub Actions on every push to the `main` branch. The workflow is defined at `.github/workflows/deploy.yml`.

> **Note:** The app uses `HashRouter` instead of `BrowserRouter` to ensure client-side routing works correctly on GitHub Pages, which does not support single-page app URL rewrites.

## Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Hero, Footer, feature cards, etc.)
├── data/             # Static content datasets for quizzes, errors, topics, and learning paths (EN + ES)
├── lib/              # Core logic — code/error/question explainers, practice questions, i18n
├── pages/            # Route-level page components (Home, Ask, ExplainCode, ExplainError, Practice, LearningPaths)
├── types/            # Shared TypeScript type definitions
├── App.tsx           # Root component with route definitions
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Design Philosophy

This project is mission-driven, built by [Beatris Mendez Gandica](https://www.beagandica.com), founder of [Nuevo Foundation](https://www.nuevofoundation.org/), to expand access to coding education for students everywhere. The interface uses a warm, supportive tone and a color palette drawn from Nuevo Foundation's branding. Every design decision - from bilingual content to zero-cost hosting - prioritizes making learning as accessible as possible.

## License

This project is licensed under the [MIT License](LICENSE).
