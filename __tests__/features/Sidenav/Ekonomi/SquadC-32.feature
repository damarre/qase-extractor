Fature: Ekonomi

@SquadC-32 @automated
  Scenario: User Successfully VIew Article List WIth Tap on Ekonomi Submenu
    Given User navigate to email login page via url
 	And User input registered email and registered password 
 And User on Kompasid homepage
    When User tap 'Ekonomi' from category
    Then User validate chardtumb 'Ekonomi' category page
