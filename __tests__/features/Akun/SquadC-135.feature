Fature: Akun

@SquadC-135 @automated
  Scenario: User able to access Pengaturan pages from menu Akun
    Given User on Kompasid onboarding
     And User skip onboading
    And Subscription page will have displayed
    And User navigate to kompas id login page via onboarding page
    And User input registered email and registered password
    And User on Kompasid homepage
    And User click akun icon in homepage
    When User tap "\<Pengaturan>" menu from landing page
    Then User will navigate to "\<Pengaturan>" menu akun page
