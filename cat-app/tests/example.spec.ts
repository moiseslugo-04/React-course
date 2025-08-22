import { test, expect } from '@playwright/test'
const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX = 'https://cataas.com'
test('name', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  const text = await page.getByRole('paragraph').textContent()
  const imageSRC = await page.getByRole('img').getAttribute('src')
  expect(imageSRC?.startsWith(CAT_PREFIX)).toBeTruthy()
  expect(text?.length).toBeGreaterThan(0)
})
