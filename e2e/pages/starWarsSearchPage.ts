import { element, by, browser, ElementFinder, ExpectedConditions} from "protractor";

const timeout:number = 5000;

export class StarWarsSearchPage{

    //Element locators
    peopleRadioButton:ElementFinder= element(by.id('people'));
    plantsRadioButton:ElementFinder= element(by.id('planets'));
    searchButton:ElementFinder= element(by.xpath('//button[@type="submit"]'));
    searchField:ElementFinder= element(by.id('query'));

    //Check navigated to the Star Wars search page with the define timeout range
    async isNavigateToSearch(urlText){
        let isNavigated:boolean = false;
        try {
            await browser.get('http://' + urlText + ':4200/');
            isNavigated = await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath('//h1[contains(text(),"The Star Wars Search")]'))), timeout);
        } catch (e) {
            console.log('Error-StarWarsSearchPage-clickOnPeopleRadioButton',e);
        }
        return isNavigated;
    }

    //Click on People radio button
    async isClickOnPeopleRadioButton():Promise<boolean>{
        let isClicked:boolean = false;
        try {
            await this.peopleRadioButton.click();
            isClicked = true;
        } catch (e) {
            console.log('Error-StarWarsSearchPage-clickOnPeopleRadioButton',e);
        }
        return isClicked;
    }

    //Click on Planet radio button
    async isClickOnPlanetsRadioButton():Promise<boolean>{
        let isClicked:boolean = false;
        try {
            await this.plantsRadioButton.click();
            isClicked = true;
        } catch (e) {
            console.log('Error-StarWarsSearchPage-clickOnPeopleRadioButton',e);
        }
        return isClicked;
    }

    //Type on search field
    async isSearchPeople(name):Promise<boolean>{
        let isSearched:boolean = false;
        try {
            await this.searchField.sendKeys(name);
            isSearched= true;
        } catch (e) {
            console.log('Error-StarWarsSearchPage-searchPeople',e);
        }
        return isSearched;
    }

    //Clear the search field
    async isClearSearchField():Promise<boolean>{
        let isCleared:boolean = false;
        try {
            await this.searchField.clear();
            isCleared= true;
        } catch (e) {
            console.log('Error-StarWarsSearchPage-searchPeople',e);
        }
        return isCleared;
    }

    //Click on search button
    async isClickOnSearchButton():Promise<boolean>{
        let isClicked:boolean = false;
        try {
            await this.searchButton.click();
            isClicked = true;
        } catch (e) {
            console.log('Error-StarWarsSearchPage-clickOnPeopleRadioButton',e);
        }
        return isClicked;
    }

    //Check people radio button is selected
    async isPeopleRadioButtonSelected():Promise<boolean>{
        let isSelected:boolean = false;
        try {
            isSelected = await this.peopleRadioButton.isSelected();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-isPeopleRadioButtonSelected',e);
        }
        return isSelected;
    }

    //Check planet radio button is selected
    async isPlanetsRadioButtonSelected():Promise<boolean>{
        let isSelected:boolean = false;
        try {
            isSelected = await this.plantsRadioButton.isSelected();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-isPlanetsRadioButtonSelected',e);
        }
        return isSelected;
    }

    //Compare given list of character data is correct
    async verifyAllSearchResultsForCharacter(character,gender, birthYear, eyeColor, skinColor):Promise<boolean>{
        let isCheck:boolean = true;
        try {
            let expectedResultRows:string[]=[gender,birthYear,eyeColor,skinColor];
            let actualResultRows:string= await element.all(by.xpath('//h6[contains(text(),"'+character+'")]/../div[@class="row"]/div[@class="col-sm-10"]')).getText();
            
            //Check expected and actual data sets are matched
            if(actualResultRows.length==expectedResultRows.length){
                //Loop and compare the data
                for(let i=0;i<actualResultRows.length;i++){
                    //If data match fails, print the current actual and expected value. Also remove spaces, before comparing data
                    if(expectedResultRows[i].replace(' ','')!=actualResultRows[i].replace(' ','')){
                        isCheck = false;
                        console.log('Actual Result- '+actualResultRows[i]);
                        console.log('Expected Result- '+expectedResultRows[i]);
                        break;
                    }
                }
            }else{
                isCheck = false;
                console.log('Actual Result length is NOT equal to expected result length');
                console.log('Actual Result length- '+actualResultRows.length);
                console.log('Expected Result length- '+expectedResultRows.length);
            }
        } catch (e) {
            console.log('Error-StarWarsSearchPage-verifyAllSearchResultsForCharacter',e);
        }
        return isCheck;
    }

    //Check searched character name is visible within the define timeout range
    async isCheckCharacterDataLoaded(characterNameInCard):Promise<boolean>{
        let isLoaded:boolean = false;
        try {
            isLoaded = await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath('//h6[contains(text(),"'+characterNameInCard+'")]'))), timeout);
        } catch (e) {
            console.log('Error-StarWarsSearchPage-isCheckCharacterDataLoaded',e);
        }
        return isLoaded;
    }

    //Check Not found label is visible with in the given range
    async isCheckNotFoundLabelIsVisible(labelText):Promise<boolean>{
        let isVisible:boolean = false;
        try {
            isVisible = await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath('//div[contains(text(),"'+labelText+'")]'))), timeout);
        } catch (e) {
            console.log('Error-StarWarsSearchPage-isCheckNotFoundLabelIsVisible',e);
        }
        return isVisible;
    }

    //Get population text
    async getPopulation():Promise<string>{
        let population:string = null;
        try {
            population = await element.all(by.css('div.col-sm-10')).get(0).getText();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-getPopulation',e);
        }
        return population;
    }

    //Get climate text
    async getClimate():Promise<string>{
        let climate:string = null;
        try {
            climate = await element.all(by.css('div.col-sm-10')).get(1).getText();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-getClimate',e);
        }
        return climate;
    }

    //Get gravity text
    async getGravity():Promise<string>{
        let gravity:string = null;
        try {
            gravity = await element.all(by.css('div.col-sm-10')).get(2).getText();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-getGravity',e);
        }
        return gravity;
    }

    //Get gender text
    async getGender():Promise<string>{
        let genderText:string = null;
        try {
            genderText = await element.all(by.css('div.col-sm-10')).get(0).getText();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-getGender',e);
        }
        return genderText;
    }

    //Get birth year text
    async getBirthYear():Promise<string>{
        let birthYear:string = null;
        try {
            birthYear = await element.all(by.css('div.col-sm-10')).get(1).getText();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-getBirthYear',e);
        }
        return birthYear;
    }

    //Get eye color text
    async getEyeColor():Promise<string>{
        let eyeColor:string = null;
        try {
            eyeColor = await element.all(by.css('div.col-sm-10')).get(2).getText();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-getEyeColor',e);
        }
        return eyeColor;
    }

    //Get skin color text
    async getSkinColor():Promise<string>{
        let skinColor:string = null;
        try {
            skinColor = await element.all(by.css('div.col-sm-10')).get(3).getText();
        } catch (e) {
            console.log('Error-StarWarsSearchPage-getSkinColor',e);
        }
        return skinColor.replace(' ','');
    }
    
}