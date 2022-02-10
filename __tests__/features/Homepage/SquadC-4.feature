Fature: Homepage

@SquadC-4	@automated
Scenario: User able to access Terbaru pages from Home page
Given User on Kompasid onboarding
And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on Kompasid homepage
When User tap "\<category>" category from landing page
Then User will navigate to "\<category>" category page
