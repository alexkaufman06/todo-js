$(document).ready(function() {
  $("form#new-to-do").submit(function(event) {
    event.preventDefault();

    var newName = $("input#new-name").val();
    var newDescription = $("input#new-description").val();
    var newToDo = { name: newName, description: newDescription, status: false };
    $("#todo").append("<li><span class='to-do-item'>" + newToDo.name + "</span></li>");

    $("input#new-name").val("");
    $("input#new-description").val("");

    $(".to-do-item").last().click(function() {
      $("#show-todo").show();
      $("#show-todo h2").text(newToDo.name);
      $(".description").text(newToDo.description);
    });
  });
});
