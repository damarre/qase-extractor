Fature: Akun

@SquadC-139	@automated
Scenario: User able to access Tentang Harian Kompas pages from menu Akun
Given User on Kompasid onboarding
 And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on Kompasid homepage
And User click akun icon in homepage
When User tap "\<Tentang Harian Kompas>" menu from landing page
Then User will navigate to "\<Tentang Harian Kompas>" menu akun page
