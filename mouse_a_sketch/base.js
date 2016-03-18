console.log("this is a sanity check");

$(document).ready(function(){
  $( "td" ).on( "mouseover", function() {
    $( this ).css( "background-color", $("input").val() );
  });

})
