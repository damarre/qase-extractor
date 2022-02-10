Fature: Login

@SquadC-173 @automated
Scenario: User Get Error Login With Empty Email
Given User on Kompasid onboarding
And User skip onboarding
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input empty email
And User input registered password
When User click login button
Then User get error empty email
