import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
});
test.describe('Login', () => {
    test('should be able to log in with correct credentials', async ({ page }) => {
        await page.locator('#username').click()
        await page.locator('#username').fill('tomsmith')
        await page.locator('#password').click()
        await page.locator('#password').fill('SuperSecretPassword!')
        await page.getByRole('button', { name: 'Login' }).click()
        await expect(page.locator('h2')).toContainText('Secure Area')
        await page.locator('.button').click()
        await expect(page.locator('h2')).toContainText('Login Page')
    })

})