import { test, expect, Page } from "@playwright/test";

interface LoginFields {
  username: string;
  password: string;
}

test.describe("Login page tests", () => {
  test.beforeEach("Go to Test Login Page", async ({ page }) => {
    const loginUrl = process.env.LOGIN_PAGE_URL as string;
    await page.goto(loginUrl);
  });

  test("Positive LogIn test", async ({ page }) => {
    const usernameField = page.locator('xpath=//input[@name="username"]');
    await usernameField.fill("student");

    const passwordField = page.locator('xpath=//input[@name="password"]');
    await passwordField.fill("Password123");

    const submitButton = page.locator('xpath=//button[@id="submit"]');
    await submitButton.click();
    await expect(page).toHaveURL(
      "https://practicetestautomation.com/logged-in-successfully/"
    );
    await expect(
      page.locator("p[class='has-text-align-center'] strong")
    ).toContainText("Congratulations student. You successfully logged in!");
    await expect(
      page.locator(
        "//a[@class='wp-block-button__link has-text-color has-background has-very-dark-gray-background-color']"
      )
    ).toBeVisible();
  });

  test("Negative username test", async ({ page }) => {
    const usernameField = page.locator('xpath=//input[@name="username"]');
    await usernameField.fill("incorrectUser");

    const passwordField = page.locator('xpath=//input[@name="password"]');
    await passwordField.fill("Password123");

    const submitButton = page.locator('xpath=//button[@id="submit"]');
    await submitButton.click();

    await expect(page.locator('xpath=//div[@id="error"]')).toBeVisible();
    await expect(page.locator('xpath=//div[@id="error"]')).toHaveText(
      "Your username is invalid!"
    );
  });

  test("Negative password test", async ({ page }) => {
    const usernameField = page.locator('xpath=//input[@name="username"]');
    await usernameField.fill("student");

    const passwordField = page.locator('xpath=//input[@name="password"]');
    await passwordField.fill("incorrectPassword");

    const submitButton = page.locator('xpath=//button[@id="submit"]');
    await submitButton.click();

    await expect(page.locator('xpath=//div[@id="error"]')).toBeVisible();
    await expect(page.locator('xpath=//div[@id="error"]')).toHaveText(
      "Your password is invalid!"
    );
  });
});
