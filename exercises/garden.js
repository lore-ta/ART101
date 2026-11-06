//.click (...) runs this function when the Add button is clicked. 
$("#add-button").click(function (){
//.val()reads the field; .trim() removed spaces at either end.
let label = $("#item-label").val().trim();

if (label == "") {
    $("#message").text ("Say creature name");
}

else {
    //HTML inside $(...) creates a new element, not yet on the page. 
    let item = $("<li></li>");
    //.text(...)sets its label literally, including < and >. 
    item.text(label); 
    //.appemd(...) adds it after the existing list items. 
    $("#items").append(item); 
    //Clear the field and return focus for the next item.
    $("#item-label").val("");
    $("#item-label").focus();
    $("message").text("");
}
});