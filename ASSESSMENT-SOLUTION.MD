# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Ramindu Sankha Nanayakkara
Email:ramindusn@gmail.com
Contact no:+94716394748
Skype id:sankhars

Please find the answers to below questions in the in this project and also in Remarks.
3. In the [README.MD](./README.md) file, you will see the APP Specs, this will be the basis for you test cases. Please read these carefully.
4. Write test automation scripts **using Cucumber and Protractor (BDD approach)** that would document the user stories, verify the application features, whilst also including comments on code you write
5. Please report any bugs or anomalies you will find
6. Also note that the sourcecode of the app is running on your machine so you have full access to make your test code as efficient as possible

## Remarks 

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

Thank you, and I enjoy a lot while doing this assessment.
I'm looking forward to see your feedback.

Ramindu Sankha Nanayakkara
(2021-03-11)
