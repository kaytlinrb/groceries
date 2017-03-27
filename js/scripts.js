
$(document).ready(function() {
  $("#form").submit(function(event) {

    var itemsInput = ["item1", "item2", "item3"];

    var groceries = itemsInput.map(function(itemInput) {
      return $("input#" + itemInput).val();
    });
    console.log(groceries);

    items.sort().toUpperCase();

    items.forEach(function(item) {
       $("ul").append("<li>" + item + "</li>");
    });

    $("form").hide();

    event.preventDefault();
  });
});
