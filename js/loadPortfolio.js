const templateData =
[
    {
        "name" : "Forward Tutoring",
        "description" : "A website that provides free online tutoring. Made improvements to the administrative tools and the backend.",
        "url" : "https://forwardtutoring.net"
    },
    {
        "name": "Aid The Cause Donations Tracker",
        "description" : "A website to help keep track of donations and give live statistics on the donations for Aid the Cause, a charity event.",
        "url" : "https://github.com/InfernalHydra/DonationsWebsite"
    },
    {
        "name": "GoPerform",
        "description" : "An application to help street performers get discovered.  Built for SXSW Hackathon 2019.",
        "url" : "https://github.com/InfernalHydra/GoPerform"
    },
    {
        "name" : "Flappy MMO",
        "description" : "A flappy bird clone with multiplayer support.",
        "url" : "https://github.com/InfernalHydra/FlappyMMO"
    }
];

$(document).ready(function() {
    for(let i = 0; i < portfolioData.length; i++)
    {
        let colNum = i % 3;
        let colName = `#column-${colNum}`;

        let {name, description, url} = portfolioData[i];
        let card =

        $(colName).append(card)
    }
});

