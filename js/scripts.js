
$(document).ready(function() {
  $("#form").submit(function(event) {
    var foodInput = $("#food").val();
    var movieInput = $("#movie").val();
    var animalInput = $("#animal").val();

    var favorites = [];

    favorites.push(foodInput, movieInput, animalInput);
    var favorites2 = [];
    favorites2.push(favorites[1], favorites[2]);

    $("ul").append("<li>" + favorites2[0] + "</li>");
    $("ul").append("<li>" + favorites2[1] + "</li>");

    event.preventDefault();
  });
});
