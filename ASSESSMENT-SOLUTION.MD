# Soulution

# Installation
npm install 

# Run
npm run e2e

# Report
End of the run cucumber report will get open in the browser with passed failed results with attaching failed step screenshots.

### Solution
I used page object model to the automation framework with Cucumber BBD.
And did the exception handling with proper error message indicating which class, which method is throwing the error. (Syntax for error message--> "Error-'ClassName'-'MethodName'" )
Feature directory is where all the feature files are located. Used scenario outlines to support multiple data sets to test.
Pages directory is my logical layer where all the page classes are located.
Stepdefinition directory is my assertion layer where definition to the step is define.
Support directory is where I handle common support through out the test including Hooks where used to control the before and after test commands. 
Test-reports directory is where I out put the cucumber.json as well as the cucumber.html report.

I believe reporting is the most important feature in an automation framework.
Used this https://www.npmjs.com/package/cucumber-html-reporter plugin to generate cucumber.html report. Its define in protractor.conf.js file under "onComplete".
