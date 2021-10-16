
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

else if($("#check1").prop("checked") === false && $("#check2").prop("checked")=== false && $("#check3").prop("checked") === false && $("#check4").prop("checked") === false && $("#check4").prop("checked") === false){
    alert("you should fil them all")
 }
 else if ($("#check1").prop("checked") === true && $("#check2").prop("checked")=== true && $("#check3").prop("checked") === true && $("#check4").prop("checked") === true && $("#check4").prop("checked") === true){
   alert("you should specify your choice")
}
  }

$("#sub").click(function(){
  $("#inp").hide();
})
function sum () {
  var res1 = $('#i1').val() * 70
  var res2 = $('#i2').val() * 75
  var res3 = $('#i3').val() * 75
  var res4 = $('#i4').val() * 20
  var res5 = $('#i5').val() * 25
  var res6 = $('#i6').val() * 35
  var res7 = $('#i7').val() * 75
  var res8 = $('#i8').val() * 75
  var res9 = $('#i9').val() * 75
  var res = res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8 + res9
  var price = $('<h1></h1>')
  price.text('Total price ' + res + 'DT')
  price.appendTo($("#facture"))
}



















