import { browser } from "protractor";
import { Before,After,Status} from "cucumber";

//Runs before each test
Before({timeout: 100 * 1000}, async () => {
    try {
        await browser.waitForAngularEnabled(false);
        await browser.driver.manage().window().maximize();
    } catch (e) {
        console.log('Error-Hooks-Before',e);
    }
});

//Runs after each test
After(async function(scenario) {
    try {
        //Attached screenshot of the application if step fails
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
             const screenShot = await browser.takeScreenshot();
             await this.attach(screenShot, "image/png");
        } 
    } catch (e) {
        console.log('Error-Hooks-After',e);
    }
});