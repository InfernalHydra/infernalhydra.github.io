const portfolioData = [
    {
        "name" : "Forward Tutoring",
        "description" : "A website that provides free online tutoring. Made numerous improvements to the administrative managing tools and the backend.",
        "url" : "https://forwardtutoring.net"
    },
    {
        "name": "Aid The Cause Donations Tracker",
        "description" : "A website to help keep track of donations and give live statistics on the donations for Aid the Cause, a charity event",
        "url" : "https://github.com/InfernalHydra/DonationsWebsite"
    },
    {
        "name": "GoPerform",
        "description" : "An application to help street performers get discovered.  Built for SXSW Hackathon 2019",
        "url" : "https://github.com/InfernalHydra/GoPerform"
    },
    {
        "name" : "Flappy MMO",
        "description" : "A flappy bird clone with multiplayer support",
        "url" : "https://github.com/InfernalHydra/FlappyMMO"
    },
    {
        "name" : "Spotify Mini Player",
        "description" : "A functional miniplayer for Spotify",
        "url" : "https://github.com/InfernalHydra/SpotifyMiniPlayer" 
    }
];

$(document).ready(function() {
    for(let i = 0; i < portfolioData.length; i++)
    {
        let colNum = i % 3;
        let colName = `#column-${colNum}`;

        let {name, description, url} = portfolioData[i];
        let card = `
        <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            ${name}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            ${description}
          </div>
        </div>
        <footer class="card-footer">
          <a href="${url}" target="_blank" class="card-footer-item">Project Page</a>
        </footer>
        </div>
        `

        $(colName).append(card)
    }
});

