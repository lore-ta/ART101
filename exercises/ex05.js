function paintPage(color) {
   $("body").css("background-color", color);
}


paintPage ("cyan");
 
// the clicker button program 

// we create a variable named "count", the initia; value is 0

let count=0;
let colorsCount=0; // new line

// an indexed array of data
let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

// we listend for when an htnl element with id "needy-button" is clicked and then...

$("#needy-button").click( function(){ 

    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value + 1

    count = count +1; 

    console.log(count);
    console.log(colors[colorsCount]); // changed line

    // now let's find our button and set a new text for it

    buttonText="I was kicked " + count + " times and color is " + colors[colorsCount];
    
   paintPage(colors[colorsCount]);
     $("body").css("background-color")

    $("#needy-button").html( buttonText ); 

    $("body").css( "background-color", colors[colorsCount] ); // changed line

     $("body").append("<img src='fm" + count +".jpg'>");


    // if we are run out of colors start fron the first one anew

    colorsCount = colorsCount +1;  // new line

    if ( colorsCount >= 8 ) { colorsCount = 0;  } // new line

    if ( count >= 16 ) { $("#needy-button").aftex  ("<p>my mood is...wild</p>"); }
    else if (count>=13) {$("#needy-button").after ("<p>my mood is...really agitated</p>"); }
    else if (count >=5) {$("#needy-button").after ("<p>my mood is...agitated</p>"); }
    
    $("needy-button").after("<p>my mood is...default </p>");

});

$("#green").click(function () {

    console.log("green was clicked");
    paintPage("green");

});

$("#orange").click(function () {

    console.log("orange was clicked");
    paintPage("orange");
    
});

$(".color-circle").css("background-color",$(this).attr("id") );

$(".color-circle").click ( function (){ 

    console.log ("a circle was clicked");
    paintPage (this.id);

})