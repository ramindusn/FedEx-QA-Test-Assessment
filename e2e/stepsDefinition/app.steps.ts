import { StarWarsSearchPage } from "../pages/starWarsSearchPage";

const { Given,Then} = require('cucumber');
const { browser, by } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

//create an object of the StarWarsSearchPage class
let starWarsSearchPage = new StarWarsSearchPage();

Given('The app is open on {string}', { timeout: 25 * 1000 }, async (urlText:String) => {
    await chai.expect(starWarsSearchPage.isNavigateToSearch(urlText)).to.eventually.be.true;
    await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

Given('user click on People radio button', { timeout: 25 * 1000 }, async () =>{
    await chai.expect(starWarsSearchPage.isClickOnPeopleRadioButton()).to.eventually.be.true;
    await chai.expect(starWarsSearchPage.isPeopleRadioButtonSelected()).to.eventually.be.true;
    await chai.expect(starWarsSearchPage.isPlanetsRadioButtonSelected()).to.eventually.be.false;
});

Given('user click on Planet radio button',  { timeout: 25 * 1000 }, async () => {
    await chai.expect(starWarsSearchPage.isClickOnPlanetsRadioButton()).to.eventually.be.true;
    await chai.expect(starWarsSearchPage.isPlanetsRadioButtonSelected()).to.eventually.be.true;
    await chai.expect(starWarsSearchPage.isPeopleRadioButtonSelected()).to.eventually.be.false;
});

Then('user type {string} in search', { timeout: 25 * 1000 }, async (characterName) =>{
    await chai.expect(starWarsSearchPage.isSearchPeople(characterName)).to.eventually.be.true;
});

Then('user click on search button', { timeout: 25 * 1000 },async () =>{
    await chai.expect(starWarsSearchPage.isClickOnSearchButton()).to.eventually.be.true;
});

Then('check search result is loaded for {string}', { timeout: 25 * 1000 },async (characterName) =>{
    await chai.expect(starWarsSearchPage.isCheckCharacterDataLoaded(characterName)).to.eventually.be.true;
});

Then('{string} {string} {string} {string} {string} should display', { timeout: 25 * 1000 },async  (character,gender, birthYear, eyeColor, skinColor) =>{
    await chai.expect(starWarsSearchPage.verifyAllSearchResultsForCharacter(character,gender, birthYear, eyeColor, skinColor)).to.eventually.be.true;
});

Then('user see Not found label', { timeout: 25 * 1000 },async () =>{
    await chai.expect(starWarsSearchPage.isCheckNotFoundLabelIsVisible("Not found.")).to.eventually.be.true;
});

Then('{string} {string} {string} should display',  { timeout: 25 * 1000 },async  (population, climate, gravity) =>{
    await chai.expect(starWarsSearchPage.getPopulation()).to.eventually.equal(population);
    await chai.expect(starWarsSearchPage.getClimate()).to.eventually.equal(climate);
    await chai.expect(starWarsSearchPage.getGravity()).to.eventually.equal(gravity);
});

Then('user clear the search field', { timeout: 25 * 1000 },async()=>{
    await chai.expect(starWarsSearchPage.isClearSearchField()).to.eventually.be.true;
});

Then('check previous search result for {string} got cleared', { timeout: 25 * 1000 },async(characterName) =>{
    await chai.expect(starWarsSearchPage.isCheckCharacterDataLoaded(characterName)).to.eventually.be.false;
});
