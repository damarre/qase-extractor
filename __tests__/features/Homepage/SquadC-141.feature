Fature: Homepage

@SquadC-141 @automated
  Scenario: User able to access Bebas Akses pages from Home page
     Given User navigate to email login page via url
    And User input registered email and registered password
     And User on Kompasid homepage
     When User tap Bebas Akses category from landing page
    Then User will navigate to Bebas Akses category page
