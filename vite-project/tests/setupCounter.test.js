import { test as playwrightTest, expect as playwrightExpect } from '@playwright/test';

playwrightTest.describe('setupCounter', () => {
    playwrightTest.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000'); // Replace with your actual URL
    });

    playwrightTest('initializes and updates on click', async ({ page }) => {
        const counterElement = await page.$('#counter'); // Ensure the element has the ID 'counter'
        await playwrightExpect(counterElement).toHaveText('count is 0');
        await counterElement.click();
        await playwrightExpect(counterElement).toHaveText('count is 1');
        await counterElement.click();
        await counterElement.click();
        await playwrightExpect(counterElement).toHaveText('count is 3');
    });

    playwrightTest('clamps the counter value between 0 and 10', async ({ page }) => {
        const counterElement = await page.$('#counter'); // Ensure the element has the ID 'counter'
        for (let i = 0; i < 11; i++) {
            await counterElement.click();
        }
        await playwrightExpect(counterElement).toHaveText('count is 10');
        await page.evaluate(() => {
            document.querySelector('#counter').innerHTML = 'count is 0';
        });
        for (let i = 0; i < 11; i++) {
            await counterElement.click();
        }
        await playwrightExpect(counterElement).toHaveText('count is 10');
    });
});