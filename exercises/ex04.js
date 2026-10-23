// the clicker button program 

let count = 0; 

// an indexed array of data// 
let colors = ["green","orange","brown","yellow","gold","purple","red","pink"];

let buttonText="";


$("#needy-button").click ( function(){


    // what to do when the button is clicked
    count = count + 1;
   
    console.log(count); 
    console.log(colors[colorsCount]); 

    // now let's find our button and set a new text for it

    buttonText=" ur a bitch " + count + " times and color is " + colors[colorsCount];

    $("#needy-button").html ( buttonText );
    
    $("body").css("background-color", colors[count-1])

    $("body").append("<img src='fm" + count +".jpg'>");

    if (count >=8) {count = 0;}


// $ means to find a variable on our html, () expected to put something inside of it. # for id, . for class. what goes inside of paranthsis
// everything that will happen when click is clicked. {} there is some meaning chunk of code, multistep statement "molecular statements"
// dont proceed until each part of the code is finished "an undividable unit"
// can combine operations by using "."  square bracket means I'm going to provide the list "an array"
// Arrays are already lists (JS will do it on it's own) JS begins counting from 0
// each list has a number id // 

colorsCount = colorsCount +1;

if ( colorsCount >=8 ) { colorsCount =0;}

 }); 


