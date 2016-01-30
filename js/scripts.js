function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;

}

Pizza.prototype.price = function() {
    var price = 10;
    var sizes = this.size
    var topping = this.topping

    if ((this.size === "large") && (this.topping === 1)) {
      return price += 1;
  } else if ((this.size === "large") && (this.topping === 2)) {
    return price += 2;
  } else if ((this.size === "large") && (this.topping === 2)) {
    return price += 3;
  } else if ((this.size === "medium") && (this.topping === 1)) {
    return price;
  } else if ((this.size === "medium") && (this.topping === 2)) {
    return price += 1;
  } else if ((this.size === "medium") && (this.topping === 3)) {
    return price += 2;
  } else if ((this.size === "small") && (this.topping === 1)) {
    return price -= 1;
  } else if ((this.size === "small") && (this.topping === 2)) {
    return price;
  } else if ((this.size === "small") && (this.topping === 3)) {
    return price += 1;
  }
    return price;
  }

// Interface//
$(document).ready(function() {
  var newPizza;
  $("form#pizza").submit(function(event) {
      event.preventDefault();

      var pizzaSize = $("select#size").val();
      var pizzaTopping = $("select#topping").val();
      var newPizza = new Pizza(pizzaSize, pizzaTopping);
      var price = newPizza.price();

    if (pizzaSize === "" || pizzaTopping === "") {
      return alert("Please make all selections");
      $(".show-price").hide();
    }


  $(".show-price").show();
  $("#showPizzaSize").text(" " + pizzaSize);
  $("#pizzaTopping").text("" + pizzaTopping);
  $("#pizzaPrice").text(" $" + price);


  });
});
