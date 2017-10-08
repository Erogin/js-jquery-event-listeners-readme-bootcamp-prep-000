//define functions here
function getIt(){
  $('p').click(function(){
    alert("Hey!")
    return
  })
}

function frameIt(){
  $('img').on('load', function(){
    $("img").addClass('tasty')
    return
  })
}

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which == 71){
      alert("You have pressed the 'g' key")
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
    if ($( "input:first" ).val() === "correct") {
      alert('Your form is going to be submitted now')
      return
    }
  })
}

$(document).ready(function(){

// call functions here

});
