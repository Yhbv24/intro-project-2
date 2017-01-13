$(function() {
  $("#name_age").submit(function(event) {
    var name = $("input#user_name").val();

    if (!name) {
      alert("Please enter your name.")
    } else {
      $("header h1").text("Welcome, " + name + "!");
      $("header h3").hide();
    }

    event.preventDefault();
  });
});
