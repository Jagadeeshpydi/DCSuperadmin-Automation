import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';

test.describe('Login Page Test Cases', () => {
  test('Verify the login with valid data', async ({ page }) => {
    const login = new Login(page);

    await login.goto();

    const username = process.env.DC_USERNAME;
    const password = process.env.DC_PASSWORD;

    if (!username || !password) {
      throw new Error('DC_USERNAME or DC_PASSWORD is missing from .env');
    }

    await login.login(username, password);

    console.log('After login URL:', page.url());

    await expect(page).toHaveURL(
      /data-connector\/create-dc-source/
    );
  });
});