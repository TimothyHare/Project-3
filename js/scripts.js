// This is your JS for project 3
// Focus for Name
$("#name").focus();

//                                 JOB ROLE SECTION
// Text field for other option
$("#other-title").hide()
$("#title").change(function (){
  if ($(this).val() == "other"){
    $("#other-title").show();
  }else{
    $("#other-title").hide();
  }
});
//                                 T-SHIRT INFORMATION SECTION
// T-Shirt Color
const $colorOfShirt= $("#colors-js-puns");
const $designOfShirt= $("#design");
//appropriate theme when JS PUNS is chosen
$colorOfShirt.hide();
$designOfShirt.change(function(){
  if($("#design option:selected").text()=== "Theme - JS Puns"){
    $colorOfShirt.show();
     $("#color").val("cornflowerblue")
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
//appropriate theme when HEART JS is chosen
$designOfShirt.change(function() {
    if ($("#design option:selected").val() === "heart js") {
     $colorOfShirt.show();
      $("#color").val("tomato");
      $("#color option[value = tomato]").show();
      $("#color option[value = steelblue]").show();
      $("#color option[value = dimgrey]").show();
      $("#color option[value = cornflowerblue]").hide();
      $("#color option[value = darkslategrey]").hide();
      $("#color option[value = gold]").hide();

    }
  });

//                          ACTIVITY REGISTRATION
//cost variable and append paragraphs that can let cost change
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
// credit card option is default
$("#payment").val("credit card");
$("P").eq(1).hide();
$("p").eq(2).hide();
//when card is chosen only card info available
$("#payment").change(function(){
  if ($("#payment option:selected").val()==="credit card"){
    $(".credit-card").show();
    $(".col-6 col").show();
    $(".col-3 col").show();
    $("#exp-month").show();
    $("#exp-year").show();
    $("P").eq(1).hide();
    $("p").eq(2).hide();
  }
});
// when paypal is chosen only paypal info available
$("#payment").change(function(){
  if ($("#payment option:selected").val()==="paypal"){
    $(".credit-card").hide();
    $(".col-6 col").hide();
    $(".col-3 col").hide();
    $("#exp-month").hide();
    $("#exp-year").hide();
    $("P").eq(1).show();
    $("p").eq(2).hide();
  }
});
// when bitcion is chosen only bitcoin info available
$("#payment").change(function(){
  if ($("#payment option:selected").val()==="bitcoin"){
    $(".credit-card").hide();
    $(".col-6 col").hide();
    $(".col-3 col").hide();
    $("#exp-month").hide();
    $("#exp-year").hide();
    $("P").eq(1).hide();
    $("p").eq(2).show();
  }
});

// Only Accept Numeric input
$(function () {
  //keypress function for credit card, zip code, or cvv
  $("#cc-num,#zip,#cvv").keypress(function (evt) {
     // error message for non numeric input
     if (evt.which != 8 && evt.which != 0 && (evt.which < 48 || evt.which > 57)) {
               return false;
    }
   });
});

//credit card number length
$("#cc-num").attr({"maxlength":16, "minlength":13});
//zip code number length
$("#zip").attr({"maxlength":5, "minlength":5});
//CVV number length
$("#cvv").attr({"maxlength":3, "minlength":3});

//Error variables
let nameEr = "<p> Please Enter Your Name<p>";
let emailEr = "<p> Please Enter Valid Email. Example dave@teamtreehouse.com <p>"
let activityEr = "<p> please slect an activity <p>";
let designEr = "<p> Please select a design <p>";
let zipEr = "<p> Zip code must be at 5  numeric digits <p>";
let ccEr = "<p> Credit Card must be between 13 numeric digits and 16 numeric digits <p>";
let cvvEr = "<p> CVV must be 3 numeric digits <p>";
let payEr = "<p> Please select payment option <p>";


$("form div: first").append(nameEr).append(emailEr).append(activityEr).append(designEr).append(zipEr).append(ccEr).append(cvvEr).append(payEr);
$("form div: first p: contains ('Name')").hide();
$("form div: first P: contains ('Email')").hide();
$("form div: first P: contains ('Activity')").hide();
$("form div: first p: contains ('Design')").hide();
$("form div: first p: contains ('Zip')").hide();
$("form div: first p: contains ('Credit Card')").hide();
$("form div: first p: contains ('CVV')").hide();
$("form div: first p: contains ('Payment Option')").hide();

$('button').on('click', function(event) {

// Name Validation
if ($("name").val() ==""){
  $("form div: first p: contains ('Name')").show();
  $("form div: first p: contains ('Name')").css("color","red");
  $("#name").css("borderColor","red")
event.preventDefault();
alert("Name Required");
}else{
$("form div: first p: contains ('Name')").hide();
$("#name").css("borderColor","black");
}

// Email Validation
if ($('#mail').val() == "" || validateEmail($("#mail").val())) {
   $("form div:first p:contains ('Email')").show();
   $("form div:first p:contains ('Email')").css('color', 'red');
   $("#mail").css("borderColor", "red");
   event.preventDefault();
   alert('Enter Email address');
 } else {
   $('form div:first p:contains("Email")').hide();
   $('#mail').css("borderColor", "black");
 }
 function validateEmail(sampleEmail) {
var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sampleEmail)) {
    return false;
  } else {
      return true;
    }
  }

  //Activity Validation
  if ($(".activities input:checkbox:checked").length < 1) {
    event.preventDefault();
    $("form div:first p:contains('Activity')").show();
    $("form div:first p:contains('Activity')").css("color", "red");
    alert("Select Activity");
  } else {
    $("form div:first p:contains('Activity')").hide();
  }

  // Design Validation
  if ($("#design option:first").is(":checked")) {
    $("form div:first p:contains('Design')").show();
    $("form div:first p:contains('Design')").css("color", "red");
    event.preventDefault();
    alert("Select Design");
  } else {
    $("form div:first p:contains('Design')").hide();
  }
});

//Zip Code Validation
if (($("#payment option[value='credit card']").is(":checked") && $("#zip").val() == "" ) || ($("#payment option[value='credit card']").is(":checked") && $("#zip").val().length < 5 ) ){
          error = 1;
          $("form div:first p:contains('Zip Code')").show();
          alert("Enter 5 Digit Zip Code");
          $("form div:first p:contains('Zip Code')").css("color", "red");
          $("#zip").css('borderColor', 'red');
        } else {
          $("form div:first p:contains('Zip Code')").hide();
          $("#zip").css("borderColor", "black");
}

// Credit Card Validation
if ($("#payment option[value='credit card']").is(":checked") && ccVal == "") {
         error = 1;
         $("form div:first p:contains('Credit Card')").show();
         alert("Enter 13 to 16 digit card number");
         $("form div:first p:contains('Credit Card')").css("color", "red");
         $("#cc-num").css("borderColor", "red");
       } else {
         $("form div:first p:contains('Credit Card')").hide();
         $("#cc-num").css("borderColor", "black");
       }

//CVV Validation
       if (($("#payment option[value='credit card']").is(":checked") && $('#cvv').val() == "" ) || ($("#payment option[value='credit card']").is(":checked") && $('#cvv').val().length < 3) ){
          error = 1;
          $("form div:first p:contains('CVV')").show();
          alert("Enter 3 digit CVV code");
          $("form div:first p:contains('CVV')").css("color", "red");
          $("#cvv").css("borderColor", "red");
        } else {
          $("form div:first p:contains('CVV')").hide();
          $("#cvv").css("borderColor", "black");
        }

//Payment Option Selection Validation
        if ($("#design option:first").is(":checked")) {
          $("form div:first p:contains('Payment Option')").show();
          $("form div:first p:contains('Payment Option')").css("color", "red");
          event.preventDefault();
          alert("Select Payment Option");
          error = 1;
        } else {
          $("form div:first p:contains('Payment Option')").hide();
        }

        if (error) {
            return false;
        } else {
            return true;

        }

    });
});
