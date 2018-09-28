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
let cost= 0;
$(".activities").append("<p></p>");

//When JS FRAMEWORKS is selected
$("input[name='js-frameworks']").on("click", function(){
  if($(this).is(":checked")){
    //adds $100 to cost
    cost = cost + 100;
    $(".activities p").text("Total: $ " + cost);
    //conflicting option turned to red
    $("[name='express']").attr("disabled", "true").parent().css({"color":"red"});
  } else {
    //subtracts $100 from cost
    cost = cost - 100;
    $(".activities p").text("Total: $ " + cost);
    //if FRAMEWORKS is not selcted the other time slot should be available
     $("[name='express']").removeAttr("disabled").parent().css({"color":"green"});
    }
 });
 //When EXPRESS is selected
 $("input[name='express']").on("click", function(){
  if($(this).is(":checked")){
    //adds $100 to cost
    cost = cost + 100;
    $(".activities p").text("Total: $ " + cost);
    //conflicting option turned to red
    $("[name='js-frameworks']").attr("disabled", "true").parent().css({"color":"red"});
  } else {
    //subtracts $100 from cost
    cost = cost - 100;
    $(".activities p").text("Total: $ " + cost);
    //If EXPRESS is not selected other time slot should be available
     $("[name='js-frameworks']").removeAttr("disabled").parent().css({"color":"green"});
    }
 });

 //When JS LIBS is selected
 $("input[name='js-libs']").on("click", function(){
  if($(this).is(":checked")){
    //adds $100 to cost
    cost = cost + 100;
    $(".activities p").text("Total: $ " + cost);
    //conflicting option is turned to red
    $("[name='node']").attr("disabled", "true").parent().css({"color":"red"});
  } else {
    //subtracts $100 from cost
    cost = cost - 100;
    $(".activities p").text("Total: $ " + cost);
    //if JS LIBS is not selcted other time slot should be avaiable
    $("[name='node']").removeAttr("disabled").parent().css({"color":"green"});
    }
 });

 //When NODE is selected
 $("input[name='node']").on("click", function(){
  if($(this).is(":checked")){
    //adds $100 to cost
    cost = cost + 100;
    $(".activities p").text("Total: $ " + cost);
    //turns the time that conflicts to red
    $("[name='js-libs']").attr("disabled", "true").parent().css({"color":"red"});
  } else {
    //subtracts $100 from cost
    cost = cost - 100;
    $(".activities p").text("Total: $ " + cost);
    //if NODE is not selected other time slot should be available
    $("[name='js-libs']").removeAttr("disabled").parent().css({"color":"green"});
    }
 });

// Adds correct amount to total for non conflicting options

//When BUILD TOOLS is selected
$("input[name='build-tools']").on("click", function(){
  if($(this).is(":checked")){
    //adds $100 to cost
    cost = cost + 100;
    $(".activities p").text("Total: $ " + cost);
  } else {
    //subtracts $100 from cost
    cost = cost - 100;
    $(".activities p").text("Total: $ " + cost);
    }
  });
  //When NPM is selected
  $("input[name='npm']").on("click", function(){
  if($(this).is(":checked")){
    //adds $100 to cost
    cost = cost + 100;
    $(".activities p").text("Total: $ " + cost);
  } else {
    //subtracts $100 from cost
    cost = cost - 100;
    $(".activities p").text("Total: $ " + cost);
    }
  });
  //When MAIN is selected
  $("input[name='all']").on("click", function(){
    if($(this).is(":checked")){
    //adds $200 to cost
    cost = cost + 200;
    $(".activities p").text("Total: $ " + cost);
  } else {
    //subtracts $200 from cost
    cost = cost - 200;
    $(".activities p").text("Total: $ " + cost);
   }
  });

//              PAYMENT INFO SECTION AND FORM VALIDATION
$("#payment").val("credit card");
$("P")
