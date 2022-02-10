Fature: Bookmark

@SquadC-147	@automated
Scenario: User Successfully Bookmark Article With Tap On Bookmark Icon in Article Details
Given User navigate to email login page via url
When User input registered email and registered password
Then User on Kompasid homepage
And User open detail article from homepage
And User tap on Bookmark on homepage detail article
And User click akun icon in homepage
And User tap 'Baca Nanti' menu from landing page
When User remove bookmark on bookmark page
Then empty article on bookmark page will shown
