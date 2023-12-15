import { test, expect } from '@playwright/test';

    test ('Scenario_2', async ({ page }) => {

    const welcomeToTheInternetText = page.getByRole ('heading', { name: 'Welcome to the-internet' });

    const multipleWindowsButton = page.getByRole ('link', { name: 'Multiple Windows' });

    const clickHereButton = page.getByRole ('link', { name: 'Click Here' });

    const openingNewWindowText = page.getByRole ('heading', { name: 'Opening a new window' });

    const newWindowText = page.getByRole ('heading', { name: 'New Window' });

    await page.goto('https://the-internet.herokuapp.com/');

    await expect(welcomeToTheInternetText).toBeVisible();

    await multipleWindowsButton.click();

    await clickHereButton.click();

    await expect(openingNewWindowText).toBeVisible();

    await expect(newWindowText).toBeVisible();

  });