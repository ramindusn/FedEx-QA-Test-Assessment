Feature: Search for planet

Background: Navigate to The Star Wars Search page
    Given The app is open on "localhost"
    
    Scenario Outline: When search a valid planet
        Given user click on Planet radio button
        Then user type "<PlanetName>" in search
        Then user click on search button
        Then check search result is loaded for "<PlanetName>"
        Then "<Population>" "<Climate>" "<Gravity>" should display

        Examples:
            | PlanetName   | Population | Climate    | Gravity     |
            | Alderaan     | 2000000000 | temperate  | 1 standard  |
            | Hoth         | unknown    | frozen     | 1.1 standard  |


    Scenario Outline: When search an invalid Planet
        Given user click on Planet radio button
        Then user type "<PlanetName>" in search
        Then user click on search button
        Then user see Not found label

        Examples:
            | PlanetName   |
            | Ramindu      |
            | @#$@!##      |
            |  asd vs br   |


    Scenario Outline: When search a valid Planet and change the search to character
        Given user click on Planet radio button
        Then user type "<PlanetName>" in search
        Then user click on search button
        Then check search result is loaded for "<PlanetName>"
        Given user click on People radio button
        Then user click on search button
        Then user see Not found label

        Examples:
            | PlanetName   |
            | Alderaan     |
            | Hoth         |


    Scenario Outline: When clear a search result and hit search
        Given user click on Planet radio button
        Then user type "<PlanetName>" in search
        Then user click on search button
        Then check search result is loaded for "<PlanetName>"
        And user clear the search field
        Then user click on search button
        Then check previous search result for "<PlanetName>" got cleared

        Examples:
            | PlanetName |
            | Alderaan   |
            | Hoth       |