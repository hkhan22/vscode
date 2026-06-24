import { test } from '@playwright/test';

test('Bing Search with multiple keywords', async ({ page }) => {

    let sports = Array<string>();
    sports.push("Soccer");
    sports.push("Basketball");
    sports.push("Tennis");
    sports.push("Swimming");
    sports.push("Running");


    for (let i = 0; i < sports.length; i++) {
        // Navigate to Bing
        await page.goto('https://www.bing.com');

        // enter a keyword in the search box and submit
        await page.locator("//*[@name='q']").fill(sports[i]);
        await page.waitForTimeout(5000); // wait for 1 second before submitting the search form

    //submit the search form by pressing the Enter key
        await page.locator("//*[@name='q']").press('Enter');

    // Wait for the search results to load
        await page.waitForTimeout(5000); // wait for 5 seconds to ensure the search results are loaded

    //capture the search result text
        let results = await page.locator("//*[@class= 'sb_count']").textContent();
        console.log(results);
        let arrayResults = results?.split(' ');
        console.log("search results count: " + arrayResults?.[1]);
    }

    //for testing
});
