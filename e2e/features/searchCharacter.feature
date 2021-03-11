Feature: Search for character

Background: Navigate to The Star Wars Search page
    Given The app is open on "localhost"
    
    Scenario Outline: When search a valid character
        Given user click on People radio button
        Then user type "<CharacterName>" in search
        Then user click on search button
        Then check search result is loaded for "<CharacterName>"
        Then "<CharacterName>" "<Gender>" "<BirthYear>" "<EyeColor>" "<SkinColor>" should display

        Examples:
            | CharacterName  | Gender | BirthYear | EyeColor | SkinColor  |
            | Luke Skywalker | male   | 19BBY     | blue     | fair       |
            | Leia Organa    | female | 19BBY     | brown    | light      |  
            | R2-D2          | n/a    | 33BBY     | red      | white,blue |
            

    Scenario Outline: When search a valid character which has multiple result set
        Given user click on People radio button
        Then user type "Darth" in search
        Then user click on search button
        Then check search result is loaded for "<CharacterName1>"
        Then "<CharacterName1>" "<Gender1>" "<BirthYear1>" "<EyeColor1>" "<SkinColor1>" should display
        Then check search result is loaded for "<CharacterName2>"
        Then "<CharacterName2>" "<Gender2>" "<BirthYear2>" "<EyeColor2>" "<SkinColor2>" should display

        Examples:
            | CharacterName1  | Gender1 | BirthYear1 | EyeColor1 | SkinColor1  | CharacterName2  | Gender2 | BirthYear2 | EyeColor2 | SkinColor2 |
            | Darth Vader     | male    | 41.9BBY    | yellow    | white       | Darth Maul      | male    | 54BBY      | yellow    | red        |


    Scenario Outline: When search an invalid character
        Given user click on People radio button
        Then user type "<CharacterName>" in search
        Then user click on search button
        Then user see Not found label

        Examples:
            | CharacterName  |
            | Ramindu        |
            | @#$@!##        |
            |  asd vs br     |


    Scenario Outline: When search a valid character and change the search to PlanetName
        Given user click on People radio button
        Then user type "<CharacterName>" in search
        Then user click on search button
        Then check search result is loaded for "<CharacterName>"
        Given user click on Planet radio button
        Then user click on search button
        Then user see Not found label

        Examples:
            | CharacterName  |
            | Luke Skywalker |


    Scenario Outline: When clear a search result and hit search
        Given user click on People radio button
        Then user type "<CharacterName>" in search
        Then user click on search button
        Then check search result is loaded for "<CharacterName>"
        And user clear the search field
        Then user click on search button
        Then check previous search result for "<CharacterName>" got cleared

        Examples:
            | CharacterName  |
            | Luke Skywalker |