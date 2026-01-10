import { Page,Locator , expect } from "@playwright/test";

export default class Assertions{

    page : Page; 
    constructor (page : Page)
    {
        this.page = page; 
    }

    async assertOnPageTitleAndURL(pageTitle: string , pageURL : string)
    {
        await expect(this.page).toHaveTitle(pageTitle);
        await expect(this.page).toHaveURL(pageURL)
    }

    async assertOnTextOnJson (jsonLocator : Locator , expectedText : string)
    {
        await expect(jsonLocator).toContainText(expectedText)
    }

    async assertOnEelementToContianText(element : Locator , expectedText : string )
    {
        await expect(element).toContainText(expectedText)
    }
    async assertOnSingleDropdwonListValue(dropdownLocator : Locator , value : string)
    {
        await expect(dropdownLocator).toHaveValue(value);
    }

     async assertOnMultiDropdwonListValue(dropdownLocator : Locator , values : any[])
    {
        await expect(dropdownLocator).toHaveValues(values);
    }
}