// the clicker button progrm 

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

    buttonText="I was kicked " + count + " times and color is " + colors[colorsCount]; // changed line

    $("#needy-button").html( buttonText ); 

    $("body").css( "background-color", colors[colorsCount] ); // changed line

     $("body").append("<img src='fm" + count +".jpg'>");

    // if we are run out of colors start fron the first one anew

    colorsCount = colorsCount +1;  // new line

    if ( colorsCount >= 8 ) { colorsCount = 0;  } // new line

    if ( count >= 16 ) { $("#needy-button").after("<p>my mood is...wild</p>"); }
    else if (count>=13) {$("#needy-button").after ("<p>my mood is...really agitated</p>"); }
    else if (count >=5) {$("#needy-button").after ("<p>my mood is...agitated</p>"); }
    
    $("needy-button").after("<p>my mood is...default </p>");

});



// $ means to find a variable on our html, () expected to put something inside of it. # for id, . for class. what goes inside of paranthsis
// everything that will happen when click is clicked. {} there is some meaning chunk of code, multistep statement "molecular statements"
// dont proceed until each part of the code is finished "an undividable unit"
// can combine operations by using "."  square bracket means I'm going to provide the list "an array"
// Arrays are already lists (JS will do it on it's own) JS begins counting from 0
// each list has a number id // 

