Fature: User successfully login via onboarding page

Scenario: Scenario Login
Given User on Kompasid onboarding
And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
When User input registered email and registered password
Then User on Kompasid homepage
