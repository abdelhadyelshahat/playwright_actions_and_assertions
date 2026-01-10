import {test as basetest} from '@playwright/test'
import { LoginPage } from '../Pages/Login_page'
import { HomePage } from '../Pages/HomePage'



type Pages = {
    loginPage : LoginPage,
    homePage : HomePage
}


const testpages = basetest.extend<Pages>
({
    loginPage: async ({page},use) =>
    {
        await use(new LoginPage(page))
    },
    homePage : async({page},use)=>
    {
       await use(new HomePage(page))
    }
})


export const test = testpages
export const expect = testpages.expect