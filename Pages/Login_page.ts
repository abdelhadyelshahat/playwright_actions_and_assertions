
import {Locator} from "@playwright/test"
import BasePage from "./BasePage";
export class LoginPage extends BasePage{
    
    // Locators 
     private readonly usernameLocator:     Locator   = this.page.locator(`#username-input`);;
     private readonly passwordLocator:     Locator   = this.page.locator(`#password-input`);;
     private readonly loginButtonLocator:  Locator   = this.page.locator(`#btn-login`); 
     private readonly showPasswordIcon:    Locator   = this.page.locator(`#btn-toggle-password`);
     private readonly pageURL : string = `https://nebula-test-lab-lv1.vercel.app/#send-get`
     private readonly pageTitle : string = 'Nebula TestLab – Test Automation Practice'

    // Methods
    async goToThisPage()
    {
          await this.page.goto(this.pageURL);

    }

    async assertOnPageTitleAndURL()
    {
        await this.assertions.assertOnPageTitleAndURL(this.pageTitle, this.pageURL)
    }



    async enterUsername(username : string )
    {
       await  this.actions.enterTextInField(this.usernameLocator,username)
    }

    async enterPassword(password: string )
    {
       await  this.actions.enterTextInField(this.passwordLocator,password)
    }

    async clickOnLoginBtn ()
    {
        await this.actions.clickOnTheButton(this.loginButtonLocator);
    }


}