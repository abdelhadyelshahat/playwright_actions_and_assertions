import { Page } from "@playwright/test";
import Actions from "../Utilties/Actions";
import Assertions from "../Utilties/Assertions";


export default class BasePage 
{
    protected  page : Page;

    public readonly actions : Actions;
    public readonly assertions: Assertions ; 

    constructor(page : Page)
    {
        this.page = page;
        this.actions = new Actions(this.page)
        this.assertions = new Assertions(this.page)

    }




}
