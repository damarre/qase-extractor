Fature: User Get Error Register With Empty Email

Scenario: null
Given User on Kompasid onboarding
And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User click free registration
And User input name
And User input empty email
And User input password
When User click button sign in
Then User get error email required
