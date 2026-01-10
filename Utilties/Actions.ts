import { expect, Locator, Page } from "@playwright/test";

export default class Actions {

  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterTextInField(locator: Locator, text: string) {
    await expect(locator).toBeVisible();
    await locator.fill(text);
  }

  async enterTextInFieldSequential(locator: Locator, text: string, timeoutTimeInSecond: number) {
    await expect(locator).toBeVisible();

    await locator.pressSequentially(text, { delay: (timeoutTimeInSecond * 1000) });

  }


  async clickOnTheButton(locator: Locator) {
    await expect(locator).toBeEnabled();
    await locator.click();
  }

  async dbClickOnTheButton(locator: Locator) {
    await locator.dblclick();
  }


  async handelSimpleAlertAndPressOK() {
    this.page.once('dialog', async (dialog) => {
      console.log(`the dialog massage for assertion :  ${dialog.message()}`);
      await dialog.accept();

    })
  }
  async handelSimpleAlertAndPressCancel() {
    this.page.once('dialog', async (dialog) => {
      console.log(`the dialog massage for assertion :  ${dialog.message()}`);
      await dialog.dismiss();

    })
  }
   async handelPromptAlertAndPressOK(promptMessage : string) {
    this.page.once('dialog', async (dialog) => {
      console.log(`the dialog massage for assertion :  ${dialog.message()}`);
      await dialog.accept(promptMessage);

    })
  }


  async selectFromDropdownListByValue(dropdownLocator: Locator, value: string) {
    await dropdownLocator.selectOption({ value: value })
  }

  async selectFromDropdownListByLable(dropdownLocator: Locator, label: string) {
    await dropdownLocator.selectOption({ label: label })
  }

  async selectFromDropdownListByIndex(dropdownLocator: Locator, index: number) {
    await dropdownLocator.selectOption({ index: index })

  }

  async selectMultiSelceDropdownlist(dropdownlistLocator: Locator, options: any[]) {
    await dropdownlistLocator.selectOption(options)
  }


  async dragElementAToElementB(elmentALocator : Locator , elementBLocatro : Locator )
  {
    await elmentALocator.hover()
    await this.page.mouse.down();
    await elementBLocatro.hover();
    await this.page.mouse.up();
  }

}