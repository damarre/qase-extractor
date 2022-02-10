Fature: Search

@SquadC-8	@automated
Scenario: User successfully search article
Given User on kompasid onboarding
And User skip onboading
And subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on kompasid homepage
And User click search icon in homepage
Then User search jakarta keyword
When articles jakarta will have displayed
