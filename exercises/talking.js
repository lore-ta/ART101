// A says
let messagesA = ["Pika Pika", "ur so pretty", "What color would u like it to be", "So pick one"];
let counterA = 0;

// B says
let messagesB = ["Pik-Pik", "Thanks..I don't like orange, change it", "Not this one"];
let counterB = 0;

// when A is clicked
// A speaks when counterA == counterB
$("#character-a").click(function () {

    if (counterA == 3) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p class='message-A'>Pikachu: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB = 1000;
        $("#turn-message").html("Pick a color below.");
    }
    else if (counterA == counterB) {
        $("#chat").append("<p class='message-A'>Pikachu: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        $("#turn-message").html("Click B!");
    }

});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {
        $("#chat").append("<p class='message-B'>Pikabaddie: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;
        $("#turn-message").html("Click A!");
    }

});

// function with a parameter + conditional (this is the lab requirement)
function changeColor(color) {
    $("body").css("background-color", color);

    if (color == "yellow") {
        $("#chat").append("<p class='message-B'>Pikabaddie: how did u do that</p>");
    } else {
        $("#chat").append("<p class='message-B'>Pikabaddie: still do not like it</p>");
    }

    $("#answers").css("display", "none");
    $("#turn-message").html("The end. Refresh to play again.");
}

// color buttons call the function
$("#answer-black").click(function () {
    changeColor("black");
});

$("#answer-yellow").click(function () {
    changeColor("yellow");
});