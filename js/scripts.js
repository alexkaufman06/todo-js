$(document).ready(function() {
  $("form#new-to-do").submit(function(event) {
    event.preventDefault();

    var newTask = $("#new-task").val();

    $("#todo").append("<li>" + newTask + "</li>");

    $("#new-task").val("");


    $("#todo").last().click(function(li) {
      $(li.target).appendTo("#complete");

      $("#complete").last().click(function(li) {
        $(li.target).remove();
      });
    });
  });
});
