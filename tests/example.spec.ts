import {test,expect,Locator} from "@playwright/test"


test.beforeEach(`login test case for nabula`, async  ({page})=> {

let usernameLocator : Locator = page.locator(`#username-input`);
let passwordLOcator : Locator = page.locator(`#password-input`);
let loginButtonLocator : Locator = page.locator(`#btn-login`);
let showPasswordIcon : Locator = page.locator(`#btn-toggle-password`)

await page.goto(`https://nebula-test-lab-lv1.vercel.app/#send-get`);
await enterTextInField(usernameLocator,"trainer");
await enterTextInField(passwordLOcator,"selenium123");


await expect(showPasswordIcon).toHaveScreenshot();
await clickOnTheButton(loginButtonLocator);

// 




})

test(`section one : send and get data`, async ({page})=>
{
  let clickSectionOneLocator : Locator = page.locator(`[href="#send-get"]`);
  await clickOnTheButton(clickSectionOneLocator);

  let nameLocator : Locator = page.locator(`#name`);
  await enterTextInField(nameLocator,"Abdelhady");

  let emailLocator : Locator = page.locator(`#email`);
  await enterTextInFieldSequential(emailLocator,"hady@gmail.com",1);

  let sectionOneButtonSubmitLocator : Locator = page.locator('#btn-submit-echo');
  await clickOnTheButton(sectionOneButtonSubmitLocator);

  // assertion 
  let jsonAppeardLocator : Locator = page.locator(`[id="echo-output"]>pre`);
  await expect(jsonAppeardLocator).toContainText(`"name": "Abdelhady"`);
  
})


test(`section two : clicking`, async ({page})=>
  {

  let clickingsectionTwoLocator : Locator = page.locator(`[href="#clicking"]`);

  let incrementButtonLocator : Locator = page.locator(`#btn-increment`);

  let incrementButtonText : Locator = page.locator(`#click-count`); 

  let toggelButtonLocator : Locator = page.locator(`#btn-toggle`);

  let toggelStateLocator : Locator= page.locator(`#toggle-state`);

  let dbClickButton : Locator = page.locator(`#btn-double`);



  // Actions  on first button 
  await clickOnTheButton(clickingsectionTwoLocator);
  await clickOnTheButton(incrementButtonLocator);
  // assertions 
  await expect(incrementButtonText).toContainText("1");

  // Actions  on second button 
  await clickOnTheButton(toggelButtonLocator);
  // Actions  on second button 
  await expect(toggelStateLocator).toContainText("true");

  //listenr for the dbClickbutton because it gives an alret 
  page.once(`dialog`,async(dialog)=>
  {
    console.log(`the dialog massage for assertion :  ${dialog.message}`);
    await dialog.accept();

  })

  // actions 
  await dbClickOnTheButton(dbClickButton);

})

test(`section three`, async ({page})=>
{
    let sectionThreeBtn : Locator= page.locator(`#link-3`);

    let javaCheckbox : Locator = page.locator(`//input[@id="chk-java"]`);
    let seleniumCheckbox : Locator = page.locator(`//label[text()='Selenium']/input`);
    let apiCheckbox  : Locator = page.locator(`//label[text()='API']/input`)
    let jsonAssetionText : Locator = page.locator(`pre[id="checks-summary"]`);
    let midRadioBox : Locator = page.locator(`#rdo-mid`);
    // actions 
    await clickOnTheButton(sectionThreeBtn);
    await javaCheckbox.check();
    await seleniumCheckbox.check();
    await apiCheckbox.uncheck();
    await midRadioBox.check();

    // assertions 
    await expect(jsonAssetionText).toContainText(`"java": true,
    "selenium": true,
    "api": false
  },
  "level": "mid"`);

})


test(`section four : dropdown list `, async ({page})=>
{
  // locators 
  let sectionFourBtn : Locator = page.locator(`#link-9`);
  // let singelDropdwonList : Locator = page.locator();



  // actions 
  await clickOnTheButton(sectionFourBtn);
  // page.selectOption(`#single-select`,{
  //   value : "chrome"
  // })
  
  //  page.selectOption(`#single-select`,{
  //   label : "Firefox"
  // })

  await page.selectOption(`#single-select`,{
    index:2
    })

  await page.selectOption(`#multi-select`,[{
    value : "api"},
    {label: "UI"},
    {index : 3}
  ])
})


test(`section twelve: Alerts`, async({page}) => 
{
  let sectiontwelveBtn : Locator = page.locator(`#link-12`);
  let simpleAlertBtn : Locator = page.locator(`#btn-alert`);
  let confirmAlertBtn : Locator = page.locator(`#btn-confirm`);
  let confirmoutMessage : Locator = page.locator(`#confirm-out`);

  let promptAlertBtn : Locator = page.locator(`#btn-prompt`);
  let confirmPromptMessage : Locator = page.locator(`#prompt-out`)

  let promptAlertInput : string = "Abdelhady"

  await clickOnTheButton(sectiontwelveBtn);


  page.once(`dialog`,async (alert)=>
  {
    expect(alert.message()).toContain(`Simple alert`);
    await alert.accept();
  })
  await clickOnTheButton(simpleAlertBtn)

  page.once(`dialog`, async(alert)=>
  {
    await expect(alert.message()).toContain(`Are you sure?`);
    await alert.dismiss();
  })

    await clickOnTheButton(confirmAlertBtn);
    await expect(confirmoutMessage).toContainText(`Cancel`)


    page.once(`dialog`, async (alert)=>
    {
      await expect(alert.message()).toContain(`Type anything:`);
      await alert.accept(promptAlertInput)
    })
    await clickOnTheButton(promptAlertBtn);
    await expect(confirmPromptMessage).toHaveText(promptAlertInput)
    // actions 
})


test(`section five : Drag & drop`, async ({page}) => 
{
  let sectionFiveBtn : Locator = page.locator(`#link-5`);
  let draggableItemALocator : Locator = page.locator(`#draggable-Item-A`);
  let dropSectionLocator : Locator = page.locator(`#drop-right`);






  await clickOnTheButton(sectionFiveBtn);
  await draggableItemALocator.hover();
  await page.mouse.down();
  await dropSectionLocator.hover();
  await page.mouse.up();


})

// Helper functions 

async function enterTextInField(locator : Locator , text : string)
{
  await expect(locator).toBeVisible();
  await locator.fill(text);
}

async function enterTextInFieldSequential(locator : Locator , text : string , timeoutTimeInSecond : number)
{
   await expect(locator).toBeVisible();

   await locator.pressSequentially(text,{delay:(timeoutTimeInSecond * 1000)});

}


async function clickOnTheButton(locator : Locator)
{
  await expect(locator).toBeVisible();
  await locator.click();
}

async function dbClickOnTheButton(locator:Locator)
{
  await locator.dblclick();
}