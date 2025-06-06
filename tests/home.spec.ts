import { expect, test } from '@playwright/test'

// Home page
test('home page should display correctly', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveURL('/')

  console.info('Home page was successfully displayed')
})
