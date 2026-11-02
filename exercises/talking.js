// A says
let messagesA = ["How are u doing", "Sorry to hear that", "What color would u like it to be", "So pick one"];
let counterA = 0;

// B says
let messagesB = ["Terrible", "Color of the background sucks", "Not this one"];
let counterB = 0;

// when A is clicked
// A speaks when counterA == counterB
$("#character-a").click(function () {

    if (counterA == 3) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p class='message-A'>jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB = 1000;
        $("#turn-message").html("Pick a color below.");
    }
    else if (counterA == counterB) {
        $("#chat").append("<p class='message-A'>jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        $("#turn-message").html("Click B!");
    }

});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {
        $("#chat").append("<p class='message-B'>finn: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;
        $("#turn-message").html("Click A!");
    }

});

// function with a parameter + conditional (this is the lab requirement)
function changeColor(color) {
    $("body").css("background-color", color);

    if (color == "green") {
        $("#chat").append("<p class='message-B'>finn: how did u do that</p>");
    } else {
        $("#chat").append("<p class='message-B'>finn: still do not like it</p>");
    }

    $("#answers").css("display", "none");
    $("#turn-message").html("The end. Refresh to play again.");
}

// color buttons call the function
$("#answer-green").click(function () {
    changeColor("green");
});

$("#answer-pink").click(function () {
    changeColor("pink");
});