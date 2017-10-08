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
    if(key.key == 71){
      console.log(alert("You have pressed the 'g' key"))
    }
  })
}

$(document).ready(function(){

// call functions here

});
