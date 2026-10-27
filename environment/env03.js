let environmentTitle = "soul smeared";

let environmentElements = [" mountains "," ocean", "grass"," trains "];

let mainEntity = {
    name: "gut feeling",
    type: "intuition",
    mood: "uneasy",
    isMoving: "true",
    favoriteElement: environmentElements[3]
};


let disturbCount = 0

$("#title-button").click(function () { 
    $("#environment-output").html("<h2>" + environmentTitle + "</h2>");

});

$("#elements-button").click(function () {
    let message = "<p>This place contains:</p>";
    message = message + "<p>" + environmentElements[0] + "</p>";
    message = message + "<p>" + environmentElements[1] + "</p>";
    message = message + "<p>" + environmentElements[2] + "</p>";
    message = message + "<p>" + environmentElements[3] + "</p>";
    message = message + "<p>" + environmentElements[4] + "</p>";
    $("#environment-output").html(message);
});

$("#entity-button").click(function () {
    let message = "<p>Name: " + mainEntity.name + "</p>";
    message = message + "<p>Type: " + mainEntity.type + "</p>";
    message = message + "<p>Mood: " + mainEntity.mood + "</p>";
    message = message + "<p>Favorite element: " + mainEntity.favoriteElement + "</p>";
    $("#environment-output").html(message);
});

$("#count-button").click(function () {
    disturbCount = disturbCount + 1;
    $("#environment-output").html("<p>you disturbed this place " + disturbCount + " times.</p>");
});