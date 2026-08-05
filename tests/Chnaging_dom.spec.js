const { test, expect } = require('@playwright/test');

test('Challenging DOM - click foo twice and print answers', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/challenging_dom');

  const heading = page.locator('h3');
  const fooButton = page.locator('a.button.success');
  const answerArea = page.locator('#canvas');

  await expect(heading).toContainText('Challenging DOM');
  await expect(answerArea).toBeVisible();

  await fooButton.click();
  await page.waitForTimeout(5000); // Wait for 1 second to ensure the answer is updated

  const answer1Text = await page.locator('body').textContent();
  const answer1 = answer1Text.match(/Answer:\s*(\d+)/i)?.[1];

  console.log('Click 1 answer text:', answer1Text);
  console.log('Click 1 answer:', answer1);
  expect(answer1).toBeTruthy();

  await fooButton.click();
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the answer is updated

  const answer2Text = await page.locator('body').textContent();
  const answer2 = answer2Text.match(/Answer:\s*(\d+)/i)?.[1];

  console.log('Click 2 answer text:', answer2Text);
  console.log('Click 2 answer:', answer2);
  expect(answer2).toBeTruthy();
});
