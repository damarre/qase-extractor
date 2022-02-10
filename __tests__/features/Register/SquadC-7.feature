Fature: Register

@SquadC-7	@automated
Scenario: User Get Error Register With Empty Password
Given User on Kompasid onboarding
And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User click free registration
User input name
 And User input email
And User input empty password
When User click button sign in
Then User get error password required
