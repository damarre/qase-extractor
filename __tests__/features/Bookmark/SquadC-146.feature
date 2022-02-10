Fature: Bookmark

@SquadC-146 @automated
  Scenario: User Successfully Bookmark Article With Tap On Bookmark Icon in Cardthumb
    Given User navigate to email login page via url
    When User input registered email and registered password
    Then User on Kompasid homepage
    And User tap Bookmark on kompasid homepage
    And snack bar successfully bookmark article will shown
    And User click akun icon in homepage
    And User tap 'Baca Nanti' menu from landing page
    When User remove bookmark on bookmark page
    Then empty article on bookmark page will shown
