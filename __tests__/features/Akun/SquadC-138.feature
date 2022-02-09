Fature: User able to access Tentang Aplikasi pages from menu Akun

Scenario: null
Given User on Kompasid onboarding
 And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on Kompasid homepage
And User click akun icon in homepage
When User tap "\<Tentang Aplikasi>" menu from landing page
Then User will navigate to "\<Tentang Aplikasi>" menu akun page
