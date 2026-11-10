# Playwright Actions & Assertions — TypeScript

A hands-on **Playwright + TypeScript** practice project that explores Playwright **actions** and **assertions** in depth, organised with the **Page Object Model** and **custom fixtures** — the building blocks used later in my larger hybrid framework.

![Playwright](https://img.shields.io/badge/Playwright-1.57-45ba4b?style=flat&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

## 📚 What's Covered

- **Login flow as a precondition** — a `beforeEach` logs in through a fixture-provided `LoginPage` (with page title & URL assertions) before every test.
- **Actions:**
  - Filling and submitting forms (send & get data sections)
  - Clicks, increment counters, toggle buttons, double-click
  - Handling JavaScript alerts (simple alert → OK)
- **Assertions:**
  - Page title and URL checks
  - Element state assertions (e.g. counter value, toggle state)
  - Verifying submitted data appears as JSON on the page
  - Visual snapshot comparisons (baselines stored in `tests/example.spec.ts-snapshots`)
- **Custom fixtures** — tests receive ready page objects (`loginPage`, `homePage`) instead of creating them manually.
- **Data-driven** — credentials and form data are kept in `Test_Data/TestData.json`, outside the test code.
- **Reusable utilities** — shared `Actions` (including alert handling) and `Assertions` classes.

## 📁 Project Structure

```
├── Fixtures/
│   └── fixtures.ts           # Custom fixtures (loginPage, homePage)
├── Pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   └── Login_page.ts
├── Test_Data/
│   └── TestData.json         # Credentials & form data
├── Utilties/
│   ├── Actions.ts
│   └── Assertions.ts
├── tests/
│   ├── example.spec.ts
│   └── example.spec.ts-snapshots/   # Visual baselines
├── playwright.config.ts
└── package.json
```

## 🚀 Getting Started

```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## 🛠️ Tech Stack

| Tool | Purpose |
| --- | --- |
| Playwright Test (`@playwright/test` 1.57) | UI testing |
| TypeScript | Test code |
| Node.js | Runtime |
