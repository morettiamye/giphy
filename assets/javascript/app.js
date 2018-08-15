// Array
var topics = ["sailor moon", "cardcaptor sakura", "kumamon", "wtf japan", "doge", "maru"]

// For Loop to append buttons
for (let index = 0; index < topics.length; index++) {
    $("#buttons").append("<button>" + topics[index] + "</button>");
    
}

// When user clicks button, grab 10 static gifs and place on page

// Display rating of gif

// When user clicks gif, gif should play

// When user clicks again, gif should stop

// Form to search / Adds topic to array, adds button



// Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=6wGN1rPGCzoddp4qnZotWSXYUNbpyNgk&limit=10";


