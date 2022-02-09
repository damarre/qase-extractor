Fature: User successfully search article

Scenario: null
Given User on Kompasid onboarding
And User skip onboading
And Subscription page will have displayed
And User navigate to kompas id login page via onboarding page
And User input registered email and registered password
And User on Kompasid homepage
And User click search icon in homepage
Then User search Jakarta keyword
When Articles Jakarta will have displayed
