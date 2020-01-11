const portfolioData = [
    {
        "name" : "Forward Tutoring",
        "description" : "A website that provides free online tutoring. Made numerous improvements to the administrative managing tools and the backend.",
        "url" : "https://github.com/garrettgu10/forward-tutoring"
    },
    {
      "name" : "SnapPack", 
      "description" : "A mobile application to help travelers pack.  Won best use of Google Cloud Services at HackTX 2019",
      "url" : "https://github.com/InfernalHydra/SnapPack"
    },
    {
        "name": "ATC Donations Tracker",
        "description" : "A website to help keep track of donations and give live statistics on the donations for Aid the Cause, a charity event",
        "url" : "https://github.com/InfernalHydra/DonationsWebsite"
    },
    {
        "name": "GoPerform",
        "description" : "An application to help street performers get discovered.  Built for SXSW Hackathon 2019",
        "url" : "https://github.com/InfernalHydra/GoPerform"
    },
    {
        "name" : "Spotify Mini Player",
        "description" : "A functional miniplayer for Spotify",
        "url" : "https://github.com/InfernalHydra/SpotifyMiniPlayer" 
    },
    {
      "name" : "Want to see more?",
      "description" : "Check out my Github below!",
      "url" : "https://github.com/InfernalHydra/"
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

