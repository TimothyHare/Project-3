// This is your JS for project 3
// Focus for Name
$("#name").focus();

//                                 JOB ROLE SECTION
// Text field for other option
$("#other-title").hide()
$("#title").on("click", function (){
  if ($(this).val = "other"){
    $("#other-title").show();
  }else{
    $("#other-title").hide();
  }
});
//                                 T-SHIRT INFORMATION SECTION
// T-Shirt Color
const $colorOfShirt= $("#colors-js-puns");
const $designOfShirt= $("#design");
$colorOfShirt.hide();
$designOfShirt.on("click", function(){
  if($("#design option:selected").text()=== "Theme - JS Puns"){
    $colorOfShirt.show();
     $("#color option[value = cornflowerblue]").show();
     $("#color option[value = darkslategrey]").show();
     $("#color option[value = gold]").show();
     $("#color option[value = tomato]").hide();
     $("#color option[value = steelblue]").hide();
     $("#color option[value = dimgrey]").hide();
   } else if ($("#design option:selected").text() === "Select Theme") {
  $colorOfShirt.hide();
}
});
$designOfShirt.on("click", function() {
    if ($("#design option:selected").val() === "heart js") {
     $colorOfShirt.show();
      $("#color option[value = tomato]").show();
      $("#color option[value = steelblue]").show();
      $("#color option[value = dimgrey]").show();
      $("#color option[value = cornflowerblue]").hide();
      $("#color option[value = darkslategrey]").hide();
      $("#color option[value = gold]").hide();

    }
  });

//                             ACTIVITY REGISTRATION
