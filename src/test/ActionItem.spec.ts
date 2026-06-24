import test from '@playwright/test';

test('Get Text from element', async ({ page }) => {
  // Navigate to Bing
  await page.goto('https://www.bing.com');

  //maximize the browser window
  await page.setViewportSize({ width: 1920, height: 1080 });

  //wait for the page to load
  await page.waitForTimeout(5000);

  const getTitle = await page.title();
  console.log("Title of the page: " + getTitle);

  // Use Playwright's expect with a regex to handle variations in the title
  await expect(page).toHaveTitle(/Bing/);











});