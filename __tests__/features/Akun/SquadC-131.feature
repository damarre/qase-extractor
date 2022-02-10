Fature: Akun

@SquadC-131 @automated
Scenario: User able to access Dasbor pages from menu Akun
Given User on Kompasid onboarding
 And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on Kompasid homepage
And User click akun icon in homepage
When User tap "\<Dasbor>" menu from landing page
Then User will navigate to "\<Dasbor>" menu akun page
