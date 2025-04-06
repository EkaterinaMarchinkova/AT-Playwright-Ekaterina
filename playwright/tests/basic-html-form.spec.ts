import { test, expect, Page } from "@playwright/test";
import path from "path";

//Създадохме интерфейс и обект от него, който използваме долу в тестовете в случая Submit Form теста
interface Results {
  username: string;
  password: string;
  comments: string;
  dropdownValue: string;
}
const results: Results = {
  username: "testUser",
  password: "secret",
  comments: "Test comments",
  dropdownValue: "dd2",
};

const fillFileds = async (page: Page, resultsObj: Results) => {
  //Locate and fill username input
  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill(resultsObj.username);
  await expect(usernameInput).toHaveValue(resultsObj.username);

  //Locate and fill password field
  const passwordInput = page.locator('xpath=//input[@name="password"]');
  await passwordInput.fill(resultsObj.password);
  await expect(passwordInput).toHaveValue(resultsObj.password);

  //Locate and fill comments field
  const commentsField = page.locator('xpath=//textarea[@name="comments"]');
  await expect(commentsField).toBeVisible();
  await commentsField.fill(resultsObj.comments);
  await expect(commentsField).toHaveValue(resultsObj.comments);

  //Locate and check the checkbox
  const checkboxEl = page.locator("xpath=//input[@value='cb2']");
  await expect(checkboxEl).toBeVisible();
  await checkboxEl.check();
  await expect(checkboxEl).toBeChecked();

  //Locate and check the radio buttons
  const radion2 = page.locator('xpath=//input[@value="rd2"]');
  await radion2.check();
  await expect(radion2).toBeChecked();

  //Locate and select an option from dropdown
  const dropdown = page.locator('xpath=//select[@name="dropdown"]');
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption(resultsObj.dropdownValue);
  await expect(dropdown).toHaveValue(resultsObj.dropdownValue);

  //Locate upload button and upload a file
  const uploadButton = page.locator('xpath=//input[@type="file"]');
  const filePath = path.resolve(__dirname, "./tests.txt");

  await expect(uploadButton).toBeVisible();
  await uploadButton.setInputFiles(filePath);
};

test.describe("Test Basic HTML Form", () => {
  test.beforeEach("Go to HTML Form Page", async ({ page }) => {
    const htmlFormUrl = process.env.BASE_HTML_FORM_URL as string;
    await page.goto(htmlFormUrl);
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Reset Rorm", async ({ page }) => {
    const cancelBtn = page.locator('xpath=//input[@type="reset"]');
    await expect(cancelBtn).toBeVisible();
    await fillFileds(page, results);
    await cancelBtn.click();

    await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
      ""
    );
    await expect(page.locator("xpath=//input[@value='cb3']")).toBeChecked();
  });

  test("Submit Form", async ({ page }) => {
    const submitBtn = page.locator('xpath=//input[@type="submit"]');
    await expect(submitBtn).toBeVisible();
    await fillFileds(page, results);
    await submitBtn.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );

    const usernameVal = page.locator('xpath=//li[@id="_valueusername"]');
    await expect(usernameVal).toHaveText(results.username);
    const dropdownVal = page.locator('xpath=//li[@id="_valuedropdown"]');
    await expect(dropdownVal).toHaveText(results.dropdownValue);
  });
});
