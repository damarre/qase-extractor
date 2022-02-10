Fature: Hiburan

@SquadC-164	@tobeautomated
Scenario: User Successfully VIew Article List WIth Tap on Hiburan Submenu
Given User on Kompasid onboarding
And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on Kompasid homepage
When User tap "\<Hiburan>" from category
Then User validate chardtumb "\<Hiburan>" category page
