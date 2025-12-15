# PlayWright-Agent - GreenKart E-Commerce Test Suite

A comprehensive automated test suite for the **GreenKart e-commerce application** using **Playwright Test** framework. This project includes detailed test planning and automated tests for search functionality, with extensibility for additional test areas.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Organization](#test-organization)
- [Test Coverage](#test-coverage)
- [Application Under Test](#application-under-test)
- [Contributing](#contributing)

## 🎯 Overview

This project automates testing of the GreenKart e-commerce application at https://rahulshettyacademy.com/seleniumPractise/#/

**Current Features:**
- ✅ 6 automated search functionality tests
- ✅ Comprehensive test plan covering 15 functional areas with 50+ test cases
- ✅ Support for Chromium, Firefox, and WebKit browsers
- ✅ Page setup/teardown with hooks
- ✅ Real-time test reporting

## 📁 Project Structure

```
PlayWright-Agent/
├── tests/
│   ├── search-functionality.spec.ts    # Search feature automated tests
│   ├── seed.spec.ts                    # Test setup seed file
│   └── example.spec.ts                 # Example tests
├── specs/
│   ├── # GreenKart - Test Plan.md     # Master test plan document (15 areas, 50+ test cases)
│   └── README.md                       # Test plan documentation
├── playwright-report/                  # Test execution reports (auto-generated)
├── test-results/                       # Test result artifacts (auto-generated)
├── e2e/
│   └── example.spec.ts                # E2E example tests
├── package.json                        # Project dependencies
├── playwright.config.ts                # Playwright configuration
└── README.md                           # This file
```

## 📦 Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Internet connection** (to access the application under test)

## 🚀 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd /Users/latikapargain/Downloads/PlayWright-Agent
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## ▶️ Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode (with browser window visible)
```bash
npx playwright test --headed
```

### Run Tests for a Specific Browser
```bash
# Chromium
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# WebKit
npx playwright test --project=webkit
```

### Run Specific Test File
```bash
npx playwright test tests/search-functionality.spec.ts
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests with UI Mode (interactive)
```bash
npx playwright test --ui
```

### Generate and View Test Report
```bash
npm test
npx playwright show-report
```

## 📊 Test Organization

### Current Implementation

#### Search Functionality Tests (`tests/search-functionality.spec.ts`)
**Status:** ✅ All 6 tests passing

| Test Case | Description | Status |
|-----------|-------------|--------|
| Search for Product by Name | Tests exact name matching | ✅ |
| Search with Partial Name Match | Tests substring filtering | ✅ |
| Search with Non-Existent Product | Tests empty result handling | ✅ |
| Search Functionality Behavior with Case | Tests case-insensitive partial matching | ✅ |
| Search Filters Dynamically as User Types | Tests real-time filtering | ✅ |
| Search Handles Whitespace Correctly | Tests whitespace and edge cases | ✅ |

**Execution Time:** ~8.3 seconds (total for all 6 tests)

### Planned Test Areas

The comprehensive test plan in `specs/# GreenKart - Test Plan.md` outlines 15 functional areas:

1. ✅ **Search Functionality** (6 tests - automated)
2. **Quantity Management** (3 tests - pending)
3. **Add to Cart Functionality** (3 tests - pending)
4. **Cart Management** (3 tests - pending)
5. **Checkout Process** (2 tests - pending)
6. **Promo Code / Discount** (3 tests - pending)
7. **Top Deals / Offers Section** (5 tests - pending)
8. **Delivery Date Selection** (2 tests - pending)
9. **Navigation & External Links** (2 tests - pending)
10. **Header Information Display** (2 tests - pending)
11. **Edge Cases & Error Handling** (3 tests - pending)
12. **Product Price Validation** (1 test - pending)
13. **UI/UX Responsiveness** (2 tests - pending)
14. **Data Integrity** (1 test - pending)
15. **Browser Compatibility** (varies - pending)

**Total Coverage:** 50+ test cases across 15 functional areas

## 🌐 Application Under Test

**GreenKart - Selenium Practice Application**
- **URL:** https://rahulshettyacademy.com/seleniumPractise/#/
- **Type:** React SPA with hash-based routing
- **Features Tested:**
  - Product catalog with 30+ items
  - Real-time search functionality
  - Quantity selection and validation
  - Add to cart operations
  - Shopping cart management
  - Checkout flow
  - Promo code handling
  - Offers/deals section with pagination
  - Delivery date picker

### Search Behavior Notes
- Search is **case-insensitive** with **partial matching**
- Example: "app" finds "Apple", "tom" finds "Tomato"
- Non-matching searches return 0 results
- Search filters dynamically as user types

## 🔧 Configuration

### Playwright Config (`playwright.config.ts`)

The project is configured with:
- **Base URL:** https://rahulshettyacademy.com/seleniumPractise/#/
- **Timeout:** 30 seconds per test
- **Retries:** 0 (can be configured per test)
- **Workers:** 1 (sequential execution)
- **Projects:** Chromium, Firefox, WebKit

### Test Setup

Each test includes:
- `beforeEach()` hook that navigates to the application and waits for products to load
- Proper wait strategies for dynamic content
- Clear selector strategies using h4 tags for product headings

## ⚙️ Locator Strategies Used

- **Product Headings:** `h4` tag selector
- **Search Input:** `getByRole('searchbox', { name: 'Search for Vegetables and Fruits' })`
- **Dynamic Waits:** `waitForSelector()`, `waitForLoadState('networkidle')`

## 📝 Test Plan Documentation

For detailed test plans, acceptance criteria, and expected results, see:
- **Master Test Plan:** `specs/# GreenKart - Test Plan.md`
- **Test Defect Report Format:** Documented in test plan
- **Test Execution Notes:** Documented in test plan

## 🐛 Troubleshooting

### Tests Timeout
- Increase timeout in `playwright.config.ts` timeout property
- Check network connectivity to the application
- Ensure product elements have fully loaded

### Selector Issues
- Use Playwright Inspector: `npx playwright test --debug`
- Check browser DevTools for correct selectors
- Refer to `h4` tag selector for product headings

### Browser Installation Issues
```bash
npx playwright install --with-deps
```

## 📈 Test Metrics

**Current Status:**
- **Total Tests:** 6 (Search Functionality)
- **Passing:** 6 ✅
- **Failing:** 0
- **Coverage:** 1 of 15 functional areas
- **Execution Time:** ~8.3 seconds
- **Pass Rate:** 100%

## 🔄 CI/CD Integration

To integrate with CI/CD pipelines:
```bash
# Run headless tests (default)
npm test

# Generate report for CI
npm test -- --reporter=html

# Run with specific reporter
npm test -- --reporter=junit
```

Reports are generated in:
- HTML Report: `playwright-report/`
- JUnit: `test-results/`

## 📚 Resources

- **Playwright Documentation:** https://playwright.dev
- **Application URL:** https://rahulshettyacademy.com/seleniumPractise/#/
- **Test Plan Details:** See `specs/` directory

## 👥 Contributing

To add new tests:

1. Follow the existing test pattern in `search-functionality.spec.ts`
2. Use descriptive test names matching the test plan
3. Include proper setup/teardown with `beforeEach()` hooks
4. Add clear assertions with expected results
5. Test both positive and negative scenarios
6. Update this README with new test coverage information

### Test Template
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.waitForSelector('h4', { timeout: 10000 });
  });

  test('Test Case Name', async ({ page }) => {
    // Your test code here
    expect(result).toBe(expected);
  });
});
```

## 📄 License

This project is created for testing purposes on the GreenKart practice application.

---

**Last Updated:** December 2025  
**Status:** Active Development  
**Next Priority:** Automate Quantity Management tests (Test Section 3)
