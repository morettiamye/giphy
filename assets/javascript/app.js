
// Array of Topics
var topics = ["sailor moon", "cardcaptor sakura", "kumamon", "japan", "pikachu"]

// Function to make buttons
function makeButtons() {

    // Delete prior to add
    $("#topicButton").empty();

    // Loop through  Topics and create buttons
    for (var i = 0; i < topics.length; i++) {
        var topicButton = $("<button>");

        // Class
        topicButton.addClass("topicButton");

        // Add ATTR
        topicButton.attr("data-name", topics[i]);
        console.log(topics[i]);

        // give the button the text of the index... 
        topicButton.text(topics[i]);

        // Add button to HTML...
        $("#topicButton").append(topicButton);
    }
}


// Handle Events When button is Clicked
// This function handles events when a button is clicked...
$("#addTopic").on("click", function (event) {

    //validate the user input....


    //prevent default action with click...
    event.preventDefault();

    // grab the text from the input box...
    var jpnTopics = $("#topicInput").val();

    // The heroInput is then added to topics array...
    topics.push(jpnTopics);

    // call makeButtons which handles the topics array
    makeButtons();
});

// Call the makeButton(); to display items currently in array...
makeButtons();

$(document).on("click", ".topicButton", function () {



    // // Giphy API 6wGN1rPGCzoddp4qnZotWSXYUNbpyNgk
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=6wGN1rPGCzoddp4qnZotWSXYUNbpyNgk&limit=10";

    //AJAX Request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var results = response.data;
            console.log(results);



        })

    })