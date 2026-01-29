import { expect, Locator } from "@playwright/test";
import BasePage from "./BasePage";
import * as TestData from '../Test_Data/TestData.json'


export class HomePage extends BasePage {

    /** section one locators */
    private readonly clickSectionOneLocator: Locator = this.page.locator(`[href="#send-get"]`);;
    private readonly nameLocator: Locator = this.page.locator(`#name`);
    private readonly emailLocator: Locator = this.page.locator(`#email`);
    private readonly sectionOneButtonSubmitLocator: Locator = this.page.locator('#btn-submit-echo');
    private readonly jsonAppeardLocator: Locator = this.page.locator(`[id="echo-output"]>pre`);

    /** section two locators  */

    private readonly clickingsectionTwoLocator: Locator = this.page.locator(`[href="#clicking"]`);
    private readonly incrementButtonLocator: Locator = this.page.locator(`#btn-increment`);
    private readonly incrementButtonText: Locator = this.page.locator(`#click-count`);
    private readonly toggelButtonLocator: Locator = this.page.locator(`#btn-toggle`);
    private readonly toggelStateLocator: Locator = this.page.locator(`#toggle-state`);
    private readonly dbClickButtonLocator: Locator = this.page.locator(`#btn-double`);


    /** section three locators  */
    private readonly sectionThreeBtn: Locator = this.page.locator(`#link-3`);
    private readonly javaCheckbox: Locator = this.page.locator(`//input[@id="chk-java"]`);
    private readonly seleniumCheckbox: Locator = this.page.locator(`//label[text()='Selenium']/input`);
    private readonly apiCheckbox: Locator = this.page.locator(`//label[text()='API']/input`)
    private readonly jsonAssetionText: Locator = this.page.locator(`pre[id="checks-summary"]`);
    private readonly midRadioBox: Locator = this.page.locator(`#rdo-mid`);


    /**section Nine Locators */
    private readonly sectionNineBtnLocator: Locator = this.page.locator(`#link-9`);
    private readonly sectionNineSingleDropdownListLocator: Locator = this.page.locator('#single-select')
    private readonly sectionNineMultiDropdownListLocator: Locator = this.page.locator('#multi-select')
    private readonly MultiSelectOptions: any[] = [{ value: TestData.sectionNineData.MultiSelectOptions["value "] }, { label: "UI" }, { index: 3 }]
    private readonly expectedVauleOnSingleDropdownList: string = "edge"
    private readonly expectedValuesOnMultiSelectDropdwonList: string[] = ["api", "ui", "perf"]


    /**section twelve locators  */
    private readonly sectiontwelveBtn: Locator = this.page.locator(`#link-12`);
    private readonly simpleAlertBtn: Locator = this.page.locator(`#btn-alert`);
    private readonly confirmAlertBtn: Locator = this.page.locator(`#btn-confirm`);
    private readonly confirmoutMessage: Locator = this.page.locator(`#confirm-out`);
    private readonly promptAlertBtn: Locator = this.page.locator(`#btn-prompt`);
    private readonly confirmPromptMessage: Locator = this.page.locator(`#prompt-out`)
    private readonly promptAlertInput: string = "Abdelhady"
    private readonly CancelAlertExpectedAssertionMessage: string = "Cancel"
    private readonly OKAlertExpectedAssertionMessage: string = "OK"


    // section five Locators 
      private readonly sectionFiveBtn: Locator = this.page.locator(`#link-5`);
      private readonly draggableItemALocator: Locator = this.page.locator(`#draggable-Item-A`);
      private readonly dropSectionLocator: Locator = this.page.locator(`#drop-right`);


    /** section one Actions */
    async clickOnFirstSectionBtn() {
        await this.actions.clickOnTheButton(this.clickSectionOneLocator);
    }

    async enterNameSectionOne(name: string) {
        await this.actions.enterTextInField(this.nameLocator, name)
    }

    async enterEmailSectionOne(email: string) {
        await this.actions.enterTextInFieldSequential(this.emailLocator, email, 1);
    }

    async pressSubmitButton() {
        await this.actions.clickOnTheButton(this.sectionOneButtonSubmitLocator);
    }

    async assertOnJsonAppeard(assertionName: string) {

        await this.assertions.assertOnTextOnJson(this.jsonAppeardLocator, assertionName)
    }


    /**section two actions  */
    async clickOnSectionTWoBtn() {
        await this.actions.clickOnTheButton(this.clickSectionOneLocator);

    }

    async clickOnIncrementBtn() {
        await this.actions.clickOnTheButton(this.incrementButtonLocator);
    }

    async assertOnIncrementBtn() {
        await this.assertions.assertOnEelementToContianText(this.incrementButtonText, "1")
        // await expect().toContainText("1");
    }

    async clickOnToggleBtn() {
        await this.actions.clickOnTheButton(this.toggelButtonLocator)
    }

    async assertOnTheStateBtn() {
        await this.assertions.assertOnEelementToContianText(this.toggelStateLocator, "true")
        // await expect().toContainText()
    }

    async clickOnDoubleClickBtn() {
        await this.actions.dbClickOnTheButton(this.dbClickButtonLocator)
    }


    /** section three actions  */


    async clickOnSectionThreeBtn() {
        await this.actions.clickOnTheButton(this.sectionThreeBtn)
    }
    async clickOnJavaCheckBox() {
        await this.actions.clickOnTheButton(this.javaCheckbox);
    }

    async clickOnSeleniumCheckBox() {
        await this.actions.clickOnTheButton(this.seleniumCheckbox);
    }

    async clickOnAPICheckBox() {
        await this.actions.clickOnTheButton(this.apiCheckbox);
    }

    async clickonMidRadioBox() {
        await this.actions.clickOnTheButton(this.midRadioBox);
    }

    async assertOnSectionThreeActions() {
        await this.assertions.assertOnTextOnJson(this.jsonAssetionText, `"java": true,
         "selenium": true,
         "api": false
         },
        "level": "mid"`)
    }

    /** Actions on section nine  */
    async clickONSectionNineBtn() {
        await this.actions.clickOnTheButton(this.sectionNineBtnLocator)
    }

    async selectChromeFromDropdownListByValue() {
        await this.actions.selectFromDropdownListByValue(this.sectionNineSingleDropdownListLocator, "chrome")

    }

    async selectFireFoxFromDropdownListBylabel() {
        await this.actions.selectFromDropdownListByLable(this.sectionNineSingleDropdownListLocator, "Firefox")

    }

    async selectEdgeFromDropdownListByindex() {
        await this.actions.selectFromDropdownListByIndex(this.sectionNineSingleDropdownListLocator, 2)

    }

    async selectMultiFromDropdownList() {
        await this.actions.selectMultiSelceDropdownlist(this.sectionNineMultiDropdownListLocator, this.MultiSelectOptions)
    }

    async assertOnTheSingleDropdownListValue() {
        await this.assertions.assertOnSingleDropdwonListValue(this.sectionNineSingleDropdownListLocator, this.expectedVauleOnSingleDropdownList)
    }

    async assertOnTheMultiDropdwonListValues() {
        await this.assertions.assertOnMultiDropdwonListValue(this.sectionNineMultiDropdownListLocator, this.expectedValuesOnMultiSelectDropdwonList)
    }

    /**section twelve actions  */
    async clickOnTwleveSectionBtn() {
        await this.actions.clickOnTheButton(this.sectiontwelveBtn);

    }
    async clickOnTheSimpleAlretBtn() {
        await this.actions.clickOnTheButton(this.simpleAlertBtn);

    }
    async clickOnTheConfirmAlretBtn() {
        await this.actions.clickOnTheButton(this.confirmAlertBtn);

    }
    async clickOnThePromptAlretBtn() {
        await this.actions.clickOnTheButton(this.promptAlertBtn);

    }
    
    async listenAndHandelTheSimpleAlretWithOk() {
        await this.actions.handelSimpleAlertAndPressOK()
    }
    async listenAndHandelTheConfirmAlretWithCance() {
        await this.actions.handelSimpleAlertAndPressCancel()
    }

    async listenAndHandelThePromptAlretWithOk() {
        await this.actions.handelPromptAlertAndPressOK(this.promptAlertInput)
    }

    async assertOnTheSimpleAlertToBeCancel() {
        await this.assertions.assertOnEelementToContianText(this.confirmoutMessage, this.CancelAlertExpectedAssertionMessage)
    }
    async assertOnTheSimpleAlertToBeOK() {
        await this.assertions.assertOnEelementToContianText(this.confirmoutMessage, this.OKAlertExpectedAssertionMessage)
    }
    async assertOnThePromptAlertToBeOK() {
        await this.assertions.assertOnEelementToContianText(this.confirmPromptMessage, this.promptAlertInput)
    }



    /** section five actions  */
    async clickOnSectionFiveBtn()
    {
        await this.actions.clickOnTheButton(this.sectionFiveBtn)
    }
    async dragAndDropEelement()
    {
        await this.actions.dragElementAToElementB(this.draggableItemALocator,this.dropSectionLocator)
    }
}

