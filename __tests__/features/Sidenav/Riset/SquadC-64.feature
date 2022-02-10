Fature: Riset

@SquadC-64	@automated
Scenario: User Successfully VIew Article List WIth Tap on Riset Submenu
Given User on Kompasid onboarding
And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on Kompasid homepage
When User tap "\<Riset>" from category
Then User validate chardtumb "\<Riset>" category page
