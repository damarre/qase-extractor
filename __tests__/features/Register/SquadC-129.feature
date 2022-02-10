Fature: Register

@SquadC-129	@automated
Scenario: User get error Register With Invalid Email
Given User on Kompasid onboarding
And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User click free registration
And User input name
And User input invalid email
And User input password
When User click button sign in
Then User get error format email invalid
