//define functions here
function getIt(){
  $('p').click(function(){
    alert("Hey!")
    return
  })
}

function frameIt(){
  $('img').on('load', function(){
    $( "p" ).addClass(.tasty)
    return
  })
}

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.key == 71){
      alert("You have pressed the 'g' key")
      return
    }
  })
}

$(document).ready(function(){

// call functions here

});
