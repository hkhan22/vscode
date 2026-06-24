import test from '@playwright/test';


test('USPS Mouse Hover Test', async ({ page }) => {

    // Navigate to USPS
    await page.goto('https://www.usps.com/');

    await page.waitForTimeout(5000); // wait for 5 seconds to ensure the page is fully loaded

    //maximize the browser window
    await page.setViewportSize({ width: 1920, height: 1080 });

    //hover over quick tools
    await page.locator("//*[text()='Quick Tools']").hover();

    await page.waitForTimeout(5000); // wait for 5 seconds to ensure the hover effect is visible

    //click on track a package
    await page.locator("//*[@alt='Tracking Icon']").click();






})