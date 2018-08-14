var topics = ["sailor moon", "cardcaptor sakura", "kumamon", "japan", "pikachu"]

//For Loop for making buttons     
for (let index = 0; index < topics.length; index++) {
    
     // Creates Buttons
    $("#buttons").append("<button>" + topics[index] +"</button>");
    console.log("buttons created");
};


// On Click Listener
$("button").on("click", function() {
    var topic = $(this).attr("data-topic");

    // Giphy API 6wGN1rPGCzoddp4qnZotWSXYUNbpyNgk
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=6wGN1rPGCzoddp4qnZotWSXYUNbpyNgk&limit=10";

    //AJAX Request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        var results = response.data;
        console.log(results);

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

          // Only taking action if the photo has an appropriate rating
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
           
            var gifDiv = $("#gifs");

            // Storing the result item's rating
            var rating = results[i].rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            var topicImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            topicImage.attr("src", results[i].images.original_still.url);

            // Appending the paragraph and topicImage we created to the "gifDiv" div we created
            $("gifDiv").append(results);
            $("gifDiv").append(p);
            $("gifDiv").append(topicImage);

            }
        }
    })
})

