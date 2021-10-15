
function refresh(){
  location.reload();
  }
  $("#por1").hide()
  $("#por2").hide()
  $("#por3").hide()
  $("#por4").hide()
  function checkPlants()
  {  
      if($("#check1").prop("checked")){
           $("#por1").show()
      }
   else if($("#check2").prop("checked")){
          $("#por2").show()
      }
    else if($("#check3").prop("checked")){
          $("#por3").show()
  }
else  if($("#check4").prop("checked")){
      $("#por4").show()
}
else if($("#check1").prop("checked") === false && $("#check2").prop("checked")=== false && $("#check3").prop("checked") === false && $("#check4").prop("checked") === false ){
    alert("you should fil them all")
 }
}
$("#sub").click(function(){
  $("#inp").hide();
})



















