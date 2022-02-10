Fature: Dashboard Account

@SquadC-179 @automated
 Scenario: User successfully view user's subscription status
  Given User navigate to email login page via url
  And User input registered email and registered password
  And User redirected to the subscription page
  And User on Kompasid homepage
  And User tap menu on Kompasid homepage
  And User click account on sidenav
  And User will navigate to dasbor akun
  When User tap on Status Langganan
  Then users subscription status will be displayed
