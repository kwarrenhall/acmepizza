function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;

}

Pizza.prototype.price = function() {
    var price = 10;

    if ((this.size === "Large") && (this.topping === "Pepperoni")) {
      return price += 1;
  } else if ((this.size === "Large") && (this.topping === "Jalapeno")) {
    return price += 1;
  } else if ((this.size === "Large") && (this.topping === "Garlic")) {
    return price += 1;
  } else if ((this.size === "Medium") && (this.topping === "Pepperoni")) {
    return price;
  } else if ((this.size === "Medium") && (this.topping === "Jalapeno")) {
    return price;
  } else if ((this.size === "Medium") && (this.topping === "Garlic")) {
    return price;
  } else if ((this.size === "Small") && (this.topping === "Pepperoni")) {
    return price -= 1;
  } else if ((this.size === "Small") && (this.topping === "Jalapeno")) {
    return price -= 1;
  } else if ((this.size === "Small") && (this.topping === "Garlic")) {
    return price -= 1;
  }
    return price;
  };

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
