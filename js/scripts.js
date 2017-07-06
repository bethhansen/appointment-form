$(function() {
  $("form#appt").submit(function(event) {
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();

    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);

    // $("#output").show();
    event.preventDefault();
  });
});
