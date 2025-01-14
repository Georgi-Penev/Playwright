import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
});

test.describe('Add element', () => {
    test('should add element by locating it by role', async ({ page }) => {
        await page.getByRole('button', { name: 'Add Element' }).click()
        await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible()
        await page.getByRole('button', { name: 'Delete' }).click()
        await expect(page.getByRole('button', { name: 'Delete' })).toBeHidden()
    })
    test('should add element by locating it by text', async ({ page }) => {
        await page.getByText('Add Element').click()
        await expect(page.getByText('Delete')).toBeVisible()
        await page.getByText('Delete').click()
        await expect(page.getByText('Delete')).toBeHidden()
    })
    test('should add element by locating it by locator', async ({ page }) => {
        await page.locator('button').click()
        await expect(page.locator('.added-manually')).toBeVisible()
        await page.locator('.added-manually').click()
        await expect(page.locator('.added-manually')).toBeHidden()
    })
})