# Simple Playwright Automation Project

This is a basic Playwright automation project for testing the ASX website.


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

### Browser-Specific Testing

#### Run tests on specific browsers (headless)
```bash
# Run tests only on Chrome (Chromium)
npm run test:chromium

# Run tests only on Firefox
npm run test:firefox

# Run tests only on Safari (WebKit)
npm run test:webkit
```

#### Run tests on specific browsers with visible browser
```bash
# Run Chrome tests with visible browser
npm run test:chromium:headed

# Run Firefox tests with visible browser
npm run test:firefox:headed

# Run Safari tests with visible browser
npm run test:webkit:headed
```

## Continuous Integration

This project includes GitHub Actions workflow that automatically runs tests on:
- **Push** to `main` or `develop` branches
- **Pull Requests** to `main` branch

The workflow:
- Installs Node.js 18
- Installs project dependencies
- Installs Playwright browsers
- Runs all tests across all browsers
- Uploads test results and reports as artifacts
- Stores artifacts for 30 days

View workflow runs in the [Actions tab](https://github.com/achaljoshi/simplePlaywrightProject/actions) of your repository.
