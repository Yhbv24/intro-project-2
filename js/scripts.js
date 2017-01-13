$(function() {
  $("#get_started").click(function() { // This is the button that takes the user through the next steps //
    $("#index_content").hide();
    $(".jumbotron").text("Here we go!");
    $("#quiz_intro").show();
    $("#name_age").fadeIn(500);
  });

  $("#name_age").submit(function(event) { // This is the button to initiate the survey section //
    var name = $("input#user_name").val();
    var experience = $("#experience").val();

    if (!name) { // Forces user to enter something in field //
      alert("Please enter your name.")
    } else if (experience === "veteran") {
      $("h1").text("Hey, " + name + "!");
      $("#name_age").hide()
      $("#veteran").fadeIn(500)
      $("#quiz_intro").hide()
    } else if (experience === "some" || experience === "none") {
      $("h1").text("Welcome, " + name + "!");
      $("#name_age").hide()
      $("#some").fadeIn(500)
      $("#interests").fadeIn(500)
      $("#quiz_intro").hide()
    } else {
      $("h1").text("Welcome, " + name + "!");
      $("#name_age").hide()
      $("#after_name_input_text").fadeIn(500)
      $("#quiz_intro").hide()
      $("#interests").fadeIn(500)
    }

    event.preventDefault();
  });

  $("#interests").submit(function(event) { // This is the button to submit the survey's first section //
    var interests = $("input:radio[name=interests]:checked").val();
    var app_or_web = $("input:radio[name=app_or_web]:checked").val();
    var mobile_or_business = $("input:radio[name=mobile_or_business]:checked").val();

    if (!interests || !app_or_web || !mobile_or_business) { // Forces user to enter something in fields //
      alert("Please make sure to fill out all of the answers.")
    } else if ((interests === "both" || interests === "front") && app_or_web === "web" && mobile_or_business === "flexible") {
      $("#some").hide()
      $("#interests").hide()
      $("#after_name_input_text").hide()
      $("#front_end_recommend").fadeIn(500)
    } else if (interests === "both" && app_or_web === "app" && mobile_or_business === "large_scale") {
      $("#some").hide()
      $("#interests").hide()
      $("#after_name_input_text").hide()
      $("#java_android_recommend").fadeIn(500)
    } else if (interests === "back" && app_or_web === "app" && mobile_or_business === "large_scale") {
      $("#some").hide()
      $("#interests").hide()
      $("#after_name_input_text").hide()
      $("#c_net_recommend").fadeIn(500)
    } else if (interests === "back" && app_or_web === "web" && mobile_or_business === "large_scale") {
      $("#some").hide()
      $("#interests").hide()
      $("#after_name_input_text").hide()
      $("#ruby_rails").fadeIn(500)
    } else if (interests === "both" && app_or_web === "web" && mobile_or_business === "large_scale") {
      $("#some").hide()
      $("#interests").hide()
      $("#after_name_input_text").hide()
      $("#php_drupal").fadeIn(500)
    } else if (interests === "front" && app_or_web === "app") {
        if (mobile_or_business === "large_scale" || mobile_or_business === "flexible") {
          $("#some").hide()
          $("#interests").hide()
          $("#after_name_input_text").hide()
          $("#ux_interest").fadeIn(500)
        }
    } else {
      $("#some").hide()
      $("#interests").hide()
      $("#after_name_input_text").fadeIn(500)
      $("h3").text("Sorry, but I didn't program selections catered to your needs. Looks like I need to continue my studies!")
    }

    event.preventDefault();
  });

  $("#ux_interest").submit(function(event) {
    var ux_interest = $("input:radio[name=ux_interest]:checked").val();

    if (ux_interest === "yes") {
      $("#ux_interest").hide()
      $("#ux_yes").show();
    } else {
      $("#ux_interest").hide()
      $("#ux_no").show()
    }

    event.preventDefault();
  });
});
