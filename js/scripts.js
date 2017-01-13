$(function() {
  $("#get_started").click(function() { // When button on index.html is clicked, it shows the next "page" //
    $("#index_content").hide();
    $(".jumbotron").text("Here we go!");
    $("#quiz_intro").show();
    $("#name_age").show();
  });

  $("#name_age").submit(function(event) { // This is the button to initiate the quiz section //
    var name = $("input#user_name").val();

    if (!name) { // Forces user to enter something //
      alert("Please enter your name.")
    } else {
      $("h1").text("Welcome, " + name + "!");
    }

    $("h3").text("Thanks! Now, we're going to ask some questions to get a better idea of what you like.")
    $("#name_age").hide();
    $("#interests").show();

    event.preventDefault();
  });
});
