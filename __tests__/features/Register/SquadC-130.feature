Fature: Register

@SquadC-130 @automated
  Scenario: User Get Error Register With Password Length Less Than 6 Characters
    Given User on Kompasid onboarding
    And User skip onboading
    And Subscription page will have displayed
    And User navigate to kompas id login page via onboarding page
    And User click free registration
    And User input name
    And User input email
    And User input invalid password
    When User click button sign in
    Then User get error format password invalid
