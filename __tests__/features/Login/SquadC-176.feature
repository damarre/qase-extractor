Fature: Login

@SquadC-176 @automated
  Scenario: User Get Error Login With Mismatch Password
    Given User on Kompasid onboarding
    And User skip onboarding
    And Subscription page will have displayed
    And User navigate to kompas id login page via onboarding page
    And User input registered email
    And User input invalid password
    When User click login button
    Then User get error wrong password
