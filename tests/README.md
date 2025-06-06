# Testing the Application with Playwright

## Installation

Playwright and all necessary dependencies are already installed in the project. If you received the project for the first time, make sure to install the browsers:

```bash
npx playwright install
```

## Running Tests

### Running All Tests

```bash
yarn test
```

### Running Tests with UI Mode

```bash
yarn test:ui
```

### Running Tests in Debug Mode

```bash
yarn test:debug
```

### Running a Specific Test

```bash
yarn test tests/sign-in.spec.ts
```

## Test Structure

- `tests/` - directory with tests
  - `sign-in.spec.ts` - tests for the sign-in page
  - `README.md` - test documentation

## Writing New Tests

When creating new tests, follow this structure:

```typescript
// Import necessary tools
import { test, expect } from '@playwright/test';

// Description of the test group
test.describe('Feature name', () => {
  // Individual tests in this group
  test('should do something specific', async ({ page }) => {
    // Test setup
    await page.goto('/example');
    
    // Actions
    await page.getByRole('button', { name: 'Button' }).click();
    
    // Result verification
    await expect(page.locator('.result')).toBeVisible();
  });
}); 