import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
});
test.describe('Assertions', () => {
    test('should verify the URL', async ({ page }) => {
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/')
    })
    test('should verify the title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet')
    })
    test('should verify visibility', async ({ page }) => {
        await expect(page.locator('h1')).toBeVisible()
    })
    test('should verify exact text', async ({ page }) => {
        const headerText = await page.locator('h2').textContent()
        expect(headerText).toBe('Available Examples')
    })
    test('should verify contained text', async ({ page }) => {
        await expect(page.locator('body')).toContainText('WYSIWYG')
    })
    test('should verify counted links', async ({ page }) => {
        await expect(page.locator('a')).toHaveCount(46)
    })
    test('should verify checkboxes', async ({ page }) => {
        await page.getByText('Checkboxes').click()
        await page.getByRole('checkbox').nth(0).check()
        await expect(page.getByRole('checkbox').nth(0)).toBeChecked()
        await page.getByRole('checkbox').nth(1).uncheck()
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked()
    })
    test('should verify value', async ({ page }) => {
        await page.getByText('Key Presses').click()
        await page.locator('#target').fill('12')
        await expect(page.locator('#target')).toHaveValue('12')
    })
    test('should verify element is enabled', async ({ page }) => {
        await page.getByText('Form Authentication').click()
        await expect(page.locator('button[type="submit"]')).toBeEnabled()

    })
})