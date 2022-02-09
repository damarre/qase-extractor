Fature: User play tetopi from homepage

Scenario: null
Given User navigate to email login page via url
 And User input registered email and registered password
And User on Kompasid homepage
 And User tap tetopi on kompasid homepage
And comper audio player will shown
 And User tap expand button
 And fuper audio player will shown
 And User tap collapse button
 And User tap play button
 When User tap close button
 Then comper audio player will not shown
