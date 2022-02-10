Fature: Dashboard Account

@SquadC-178 @automated
  Scenario: User successfully edit account on dasbor akun saya
    Given User navigate to email login page via url
    And User input registered email and registered password
    And User redirected to the subscription page
    And User on Kompasid homepage
    And User tap menu on Kompasid homepage
    And User will navigate to dasbor akun
    And User tap on edit icon
    And User input users first name
    And User input users last name
    When User tap update button
    Then first name and last name changes will be saved successfully
