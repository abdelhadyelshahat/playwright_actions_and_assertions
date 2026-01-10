// import { test } from "@playwright/test"
import {test} from '../Fixtures/fixtures'
import { LoginPage } from "../Pages/Login_page";
import { HomePage } from "../Pages/HomePage";
import * as TestData from '../Test_Data/TestData.json'


test.beforeEach(`login test case for nabula`, async ({ page ,loginPage}) => {

  // let loginPgae: LoginPage = new LoginPage(page)
  await loginPage.goToThisPage();

  await loginPage.assertOnPageTitleAndURL();

  await loginPage.enterUsername(TestData.validCredentials.username);
  await loginPage.enterPassword(TestData.validCredentials.password);
  await loginPage.clickOnLoginBtn();
   


})

test(`section one : send and get data`, async ({ page, homePage }) => {
  // let homePage: HomePage = new HomePage(page);
  await homePage.clickOnFirstSectionBtn();

  await homePage.enterNameSectionOne(TestData.SectionOneData.Name)
  await homePage.enterEmailSectionOne(TestData.SectionOneData.email)
  await homePage.pressSubmitButton();
  await homePage.assertOnJsonAppeard(TestData.SectionOneData.Name);


})


test(`section two : clicking`, async ({ page , homePage}) => {
  // let homepage: HomePage = new HomePage(page);

  // Actions  on first button 
  await homePage.clickOnSectionTWoBtn();
  await homePage.clickOnIncrementBtn();
  await homePage.assertOnIncrementBtn();
  await homePage.clickOnToggleBtn();
  await homePage.assertOnTheStateBtn();
  await homePage.actions.handelSimpleAlertAndPressOK();

  await homePage.clickOnDoubleClickBtn();
})

test(`section three`, async ({ page , homePage}) => {

  // let homePage: HomePage = new HomePage(page)


  await homePage.clickOnSectionThreeBtn()
  await homePage.clickOnJavaCheckBox();
  await homePage.clickOnSeleniumCheckBox()
  await homePage.clickonMidRadioBox();
  await homePage.assertOnSectionThreeActions();


})


test(`section nine : dropdown list `, async ({ page , homePage}) => {
  // let homePage : HomePage = new HomePage (page); 


  await homePage.clickONSectionNineBtn();
  await  homePage.selectChromeFromDropdownListByValue();
  await  homePage.selectFireFoxFromDropdownListBylabel()
  await  homePage.selectEdgeFromDropdownListByindex();

  await homePage.assertOnTheSingleDropdownListValue()
  await   homePage.selectMultiFromDropdownList();
  await homePage.assertOnTheMultiDropdwonListValues();

})


test(`section twelve: Alerts`, async ({ page , homePage }) => {

  // let homePage : HomePage = new HomePage(page);

  await homePage.clickOnTwleveSectionBtn();
  await homePage.listenAndHandelTheSimpleAlretWithOk()
  await homePage.clickOnTheSimpleAlretBtn();

  await homePage.listenAndHandelTheConfirmAlretWithCance()
  await homePage.clickOnTheConfirmAlretBtn();
  await homePage.assertOnTheSimpleAlertToBeCancel();

  await homePage.listenAndHandelThePromptAlretWithOk()
  await homePage.clickOnThePromptAlretBtn()
  await homePage.assertOnThePromptAlertToBeOK()
 
})


test(`section five : Drag & drop`, async ({ page , homePage }) => {
  // let homePage : HomePage = new HomePage(page)


  await  homePage.clickOnSectionFiveBtn();

  await homePage.dragAndDropEelement();

})

