
$(document).ready(function() {
  $("#form").submit(function(event) {

    var itemsInput = ["item1", "item2", "item3"];

    var groceries = itemsInput.map(function(itemInput) {
      return $("input#" + itemInput).val();
    });
    console.log(groceries);

    groceries.sort();

    groceries.forEach(function(grocery) {
       $("ul").append("<li>" + grocery.toUpperCase() + "</li>");
    });

    $("form").hide();

    event.preventDefault();
  });
});
