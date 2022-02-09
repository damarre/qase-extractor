Fature: User able to access Hubungi Kami pages from menu Akun

Scenario: null
Given User on Kompasid onboarding
 And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on Kompasid homepage
And User click akun icon in homepage
When User tap "\<Hubungi Kami>" menu from landing page
Then User will navigate to "\<Hubungi Kami>" menu akun page
