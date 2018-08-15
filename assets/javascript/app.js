// Array
var topics = ["sailor moon", "cardcaptor sakura", "kumamon", "wtf japan", "doge", "maru"]

// For Loop to append buttons
function makeButtons() {
    for (let index = 0; index < topics.length; index++) {
        var button = $("<button>");
        button.addClass("topics-btn btn-info rounded");
        button.attr("data-name", topics[index]);
        button.text(topics[index]);
        $("#buttons").append(button);
    }
}

makeButtons();

// When user clicks button, grab 10 static gifs and place on page

function displayGif() {
    // Giphy API
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=6wGN1rPGCzoddp4qnZotWSXYUNbpyNgk&limit=10";

    // Ajax Request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(results)

        for (var index = 0; index < results.length; index++) {
            if (results[index].rating !== "r") {
                var gifDiv = $("<div>");
                
                // gifDiv.addClass("gif")
                var topicsGifs = $("<img>");

                // Setting gif attributes 
                topicsGifs.attr("src", results[index].images.fixed_height_still.url);
                topicsGifs.attr("data-still", results[index].images.fixed_height_still.url)
                topicsGifs.attr("data-animate", results[index].images.fixed_height.url)
                topicsGifs.attr("data-state", "still")
                topicsGifs.addClass("img")

                // Checking ratings
                var rating = results[index].rating;
                var p = $("<p>").text("Rating: " + rating);
                p.addClass("rating")

                gifDiv.append(topicsGifs);
                gifDiv.append(p);

                $("#gifsGoHere").append(gifDiv);

            }

        }
    });

};

// Play gif, stop gif
$(document).on("click", ".img", function () {
    var state = $(this).attr("data-state");
    //Play Gif
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("data-state", "playing")
    }
    // Stop Gif
    else {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
});



// Makes the Magic Happen
$(document).on("click", ".topics-btn", displayGif);


