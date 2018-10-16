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
// When only the select method is chosen
$("#payment").change(function(){
  if ($("#payment option:selected").val() === "select_method"){
  $(".credit-card").hide();
  $(".col-6 col").hide();
  $(".col-3 col").hide();
  $("#exp-month").hide();
  $("#exp-year").hide();
  $("p").eq(1).hide();
  $("p").eq(2).hide();
  }
});

//Appended spans to alert user for non-submition
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("#mail").prev().append("<div></div>");

//NAME validation
$(".container").submit(function(){
  //form submition variable
  let isFormValid = true;
  $("#name:input").each(function(){
    if ($.trim($(this).val()).length == 0){
      //if section is not filled in, input highlighted
      $(this).addClass("highlight").css("border", "1px solid red");
      //the form is not submitted
      isFormValid = false;
      //span stating the form will not submit
      $("form span:nth-of-type(1n)").text("Please enter your name.").css("display", "block").css("color", "red");
  }
    else{
     //when fixed, things return to normal
     $(this).removeClass("highlight").css("border", "none");
     //remove span
     $("form span:nth-of-type(1n)").text("Please enter your name.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});
// EMAIL validation
  $(".container").submit(function(){
    //form submition variable
    let isFormValid = true;
    $("#mail:input").each(function(){
        if ($.trim($(this).val()).length == 0){
            //if section not filled, input highlighted
            $(this).addClass("highlight").css("border", "1px solid red");
            isFormValid = false;
            // span stating form will not submit
            $("form span:nth-of-type(2n)").text("Please enter a valid email.").css("display", "block").css("color", "red");
        } else{
            //when fixed things return to normal
            $(this).removeClass("highlight").css("border", "none");
            //remove span
            $("form span:nth-of-type(2n)").text("Please enter a valid email.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});

//Only valid emails
  $("#mail").keyup(function(){
    $("#mail").filter(function(){
    var email=$("#mail").val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     if( !emailReg.test( email ) ) {
      $("label div").text("Enter a valid email.").css("display", "block").css("color", "red");
     } else {
      $("label div").text("Enter a valid email.").css("display", "none");
     }
    });
  });

  //ACTIVITIES Validation
  $(".container").submit(function(){
    //form submition variable
    let isFormValid = true;
    $(".activities").each(function(){
        if ($(".activities input:checked").length < 1){
           //if section not checked,name highlighted
            $(this).addClass("highlight").css("display", "block").css('color', 'red');
            isFormValid = false;
            //span stating form will not submit
            $("form span:nth-of-type(3n)").text("Choose at least one activity.").css("display", "block").css("color", "red");
        }
        else {
            //when fixed, things return to normal
            $(this).removeClass("highlight").css("display", "block").css('color', 'black');
            //remove span
            $("form span:nth-of-type(3n)").text("Choose at least one activity.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});
// CREDIT CARD NUMBER validation
$(".container").submit(function(){
  //form submition variable
  let isFormValid = true;
  if ($("#payment option:eq(1)").is(":selected")){
  $("#cc-num:input").each(function(){
    if ($.trim($(this).val()).length < 13 || !$.isNumeric($(this).val())) {
        //if section is not filled correctly, input is highlighted
        $(this).addClass("highlight").css("border", "1px solid red");
        isFormValid = false;
        //span stating form will not submit
        $("form span:nth-of-type(4n)").text("Credit Card Number must be at least 13 digits long.").css("display", "block").css("color", "red");
    } else if (($(this).val()).length > 16 || !$.isNumeric($(this).val())) {
      //if section is not filled correctly, input is highlighted
      $(this).addClass("highlight").css("border", "1px solid red");
      isFormValid = false;
      //span stating form will not submit
      $("form span:nth-of-type(4n)").text("Credit Card Number must be 16 or fewer digits long.").css("display", "block").css("color", "red");
  }
    else{
        //when fixed, things return to normal
        $(this).removeClass("highlight").css("border", "none");
        //remove span
        $("form span:nth-of-type(4n)").text("Enter a valid credit card number. Must be 13-16 digits long.").css("display", "none").css("color", "red");
    }
  });
  } else {
    isFormValid = true;
  }
return isFormValid;
});
    //ZIP CODE Validation
    $(".container").submit(function(){
      //form submition variable
      let isFormValid = true;
      if ($("#payment option:eq(1)").is(":selected")){
    $("#zip:input").each(function(){
      if ($.trim($(this).val()).length < 5 || ($(this).val()).length > 5 || !$.isNumeric($(this).val())){
        //if section not filled correctly, input is highlighted
        $(this).addClass("highlight").css("border", "1px solid red");
        //span stating the form will not submit
        $("form span:nth-of-type(5n)").text("Enter a valid zip code.").css("display", "block").css("color", "red");
        isFormValid = false;
    } else{
        //when fixed, things return to normal
        $(this).removeClass("highlight").css("border", "none");
        //remove span
        $("form span:nth-of-type(5n)").text("Enter a valid zip code.").css("display", "none").css("color", "red");
      }
    });
  } else {
    isFormValid = true;
  }
return isFormValid;
});
    //CVV validation
    $(".container").submit(function(){
      //form submition variable
      let isFormValid = true;
      if ($("#payment option:eq(1)").is(":selected")){
        $("#cvv:input").each(function(){
          if ($.trim($(this).val()).length < 3 || ($(this).val()).length > 3 || !$.isNumeric($(this).val())){
            //if section not filled correctly, input is highlighted
            $(this).addClass("highlight").css("border", "1px solid red");
            isFormValid = false;
            //span stating the form will not submit
            $("form span:nth-of-type(6n)").text("Enter a valid cvv.").css("display", "block").css("color", "red");
          } else {
            //when fixed, things return to normal
            $(this).removeClass("highlight").css("border", "none");
            //remove span
            $("form span:nth-of-type(6n)").text("Enter a valid cvv.").css("display", "none").css("color", "red");
          }
        });
      } else {
        isFormValid = true;
      }
return isFormValid;
    });
//SELECT PAYMENT validation
$(".container").submit(function(){
  //form submition variable
  let isFormValid = true;
  if ($("#payment option:eq(0)").is(":selected")){
    $("#payment").addClass("highlight").css("border", "1px solid red");
    isFormValid = false;
    //span stating the form will not submit
    $("form span:nth-of-type(7n)").text("Enter a source of payment.").css("display", "block").css("color", "red");
  } else {
     //when fixed, things return to normal
     $("form span:nth-of-type(7n)").text("Enter a source of payment.").css("display", "none").css("color", "red");
     isFormValid = true;
  }
  return isFormValid;
});

//If page is submitted with error, and user changes payment option, previous info is erased
$(".container").submit(function(){
  //form submition variable
  let isFormValid = true;
    $("#payment").change(function(){
     $("#cvv:input").removeClass("highlight").css("border", "none");
     $("#zip:input").removeClass("highlight").css("border", "none");
     $("#cc-num:input").removeClass("highlight").css("border", "none");
     $("#payment").removeClass("highlight").css("border", "none");
     isFormValid = true;
  })
  return isFormValid;
});
