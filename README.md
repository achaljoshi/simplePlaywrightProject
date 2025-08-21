# Simple Playwright Automation Project

This is a basic Playwright automation project for testing the ASX Online website.

## Project Structure

```
simpleplaywright/
├── package.json
├── playwright.config.ts
├── tests/
│   └── loginPage.spec.ts
└── README.md
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npm run install-browsers
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

## Test Description

The `loginPage.spec.ts` file contains a test class that:

- Navigates to the ASX Online homepage (https://www.asxonline.com/)
- Verifies the page loads correctly
- Checks for login options and navigation elements
- Validates the presence of key page sections
- Tests basic search functionality

## Configuration

The project is configured to run tests against:
- Chromium (Chrome)
- Firefox
- WebKit (Safari)

Tests will run in parallel by default and include screenshots on failure.

## Browser Support

- Chrome (Chromium)
- Firefox
- Safari (WebKit)
