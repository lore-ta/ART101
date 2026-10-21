// the clicker button program 

let count = 0; 

let colors = ["green","orange","brown","yellow","gold","purple","red","pink"];

let buttonText="";


$("#needy-button").click ( function(){


    // what to do when the button is clicked
    count = count + 1;
   
    console.log(count); 
    console.log(colors[count-1]); 
    buttonText=" ur a bitch " + count + " times and color is " + colors[count-1];

    $("#needy-buttion").html ( buttonText );
    
    $("body").css("background-color", colors[count-1] );

    $("body").append("<img src='piraguas" +colors[count-1] +".jpg'>");

 }); 

// $ means to find a variable on our html, () expected to put something inside of it. # for id, . for class. what goes inside of paranthsis
// everything that will happen when click is clicked. {} there is some meaning chunk of code, multistep statement "molecular statements"
// dont proceed until each part of the code is finished "an undividable unit"
// can combine operations by using "."  square bracket means I'm going to provide the list "an array"
// Arrays are already lists (JS will do it on it's own) JS begins counting from 0
// each list has a number id // 

//green,orange,brown,yellow,gold,purple,red,pink//




