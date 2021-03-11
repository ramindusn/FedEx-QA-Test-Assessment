import { element, by, browser, until, ElementFinder, ExpectedConditions, promise, WebElement } from "protractor";

export class ElementHandler{

    static elementHandler:ElementHandler;

    public static getInstance():ElementHandler{
        if( ElementHandler.elementHandler == null)
        {
            ElementHandler.elementHandler = new ElementHandler
            return ElementHandler.elementHandler;
        }
        else{
            return ElementHandler.elementHandler;
        }
    }

    async visibilityOfElementLocated(element:ElementFinder){
        await browser.wait(ExpectedConditions.visibilityOf(element),2000);
    }

}