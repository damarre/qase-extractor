Fature: User Get Error Login With Invalid Format Email

Scenario: null
Given User on Kompasid onboarding
And User skip onboarding
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input invalid email
And User input registered password
When User click login button
Then User get error invalid email format
