import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en')
  })

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/247 Sales Agent/)
  })

  test('renders hero section', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('247 Sales Agent')
  })

  test('renders download button', async ({ page }) => {
    const downloadLink = page.getByRole('link', { name: /download/i })
    await expect(downloadLink).toBeVisible()
    await expect(downloadLink).toHaveAttribute('href', /app-release\.apk/)
  })

  test('renders pricing section', async ({ page }) => {
    await expect(page.getByText(/Choose Your Scale/i)).toBeVisible()
  })

  test('renders security section', async ({ page }) => {
    await expect(page.getByText(/Enterprise-Grade Security/i)).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('language switcher works', async ({ page }) => {
    await page.goto('/en')
    await page.getByRole('link', { name: 'PT' }).click()
    await expect(page).toHaveURL(/\/pt/)
    await expect(page.getByText(/Escolha Sua Escala/i)).toBeVisible()
  })

  test('skip link is visible on focus', async ({ page }) => {
    await page.goto('/en')
    await page.keyboard.press('Tab')
    const skipLink = page.getByRole('link', { name: /skip to main content/i })
    await expect(skipLink).toBeVisible()
  })
})

test.describe('Accessibility', () => {
  test('has main content landmark', async ({ page }) => {
    await page.goto('/en')
    await expect(page.locator('main#main-content')).toBeVisible()
  })

  test('has navigation landmark', async ({ page }) => {
    await page.goto('/en')
    await expect(page.locator('nav')).toBeVisible()
  })
})

test.describe('SEO', () => {
  test('has meta description', async ({ page }) => {
    await page.goto('/en')
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /enterprise-grade/i)
  })

  test('has Open Graph tags', async ({ page }) => {
    await page.goto('/en')
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute('content', /247 Sales Agent/)
  })
})
