function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

Pizza.prototype.price = function() {
    var price = 10;

  if ((this.size === "Large") && (this.topping1 === "Pepperoni" && this.topping2 === "Mushroom")) {
      return price += 3;
  } else if ((this.size === "Large") && (this.topping1 === "Pepperoni" && this.topping2 === "Jalapeno")) {
    return price += 3;
  } else if ((this.size === "Large") && (this.topping1 === "Pepperoni" && this.topping === "Garlic")) {
    return price += 3;
  } else if ((this.size === "Large") && (this.topping1 === "Sausage" && this.topping2 === "Mushroom")) {
    return price += 3;
  } else if ((this.size === "Large") && (this.topping1 === "Sausage" && this.topping2 === "Jalapeno")) {
    return price += 3;
  } else if ((this.size === "Large") && (this.topping1 === "Sausage" && this.topping2 === "Garlic")) {
    return price += 3;
  } else if ((this.size === "Large") && (this.topping1 === "Peperoni")) {
    return price += 2;
  } else if ((this.size === "Large") && (this.topping1 === "Sausage")) {
    return price += 2;
  } else if ((this.size === "Large") && (this.topping2 === "Mushroom")) {
    return price += 2;
  } else if ((this.size === "Large") && (this.topping2 === "Jalapeno")) {
    return price += 2;
  } else if ((this.size === "Large") && (this.topping2 === "Garlic")) {
    return price += 2;
  } else if ((this.size === "Medium") && (this.topping1 === "Pepperoni" && this.topping2 === "Mushroom")) {
    return price += 1;
  } else if ((this.size === "Medium") && (this.topping1 === "Pepperoni" && this.topping2 === "Jalapeno")) {
    return price += 1;
  } else if ((this.size === "Medium") && (this.topping1 === "Pepperoni" && this.topping === "Garlic")) {
    return price += 1;
  } else if ((this.size === "Medium") && (this.topping1 === "Sausage" && this.topping2 === "Mushroom")) {
    return price += 1;
  } else if ((this.size === "Medium") && (this.topping1 === "Sausage" && this.topping2 === "Jalapeno")) {
    return price += 1;
  } else if ((this.size === "Medium") && (this.topping1 === "Sausage" && this.topping2 === "Garlic")) {
    return price += 1;
  } else if ((this.size === "Medium") && (this.topping1 === "Peperoni")) {
    return price;
  } else if ((this.size === "Medium") && (this.topping1 === "Sausage")) {
    return price;
  } else if ((this.size === "Medium") && (this.topping2 === "Mushroom")) {
    return price;
  } else if ((this.size === "Medium") && (this.topping2 === "Jalapeno")) {
    return price;
  } else if ((this.size === "Medium") && (this.topping2 === "Garlic")) {
    return price;
  } else if ((this.size === "Small") && (this.topping1 === "Pepperoni" && this.topping2 === "Mushroom")) {
      return price -= 1;
  } else if ((this.size === "Small") && (this.topping1 === "Pepperoni" && this.topping2 === "Jalapeno")) {
    return price -= 1;
  } else if ((this.size === "Small") && (this.topping1 === "Pepperoni" && this.topping2 === "Garlic")) {
    return price -= 1;
  } else if ((this.size === "Small") && (this.topping1 === "Sausage" && this.topping2 === "Mushroom")) {
    return price -= 1;
  } else if ((this.size === "Small") && (this.topping1 === "Sausage" && this.topping2 === "Jalapeno")) {
    return price -= 1;
  } else if ((this.size === "Small") && (this.topping1 === "Sausage" && this.topping === "Garlic")) {
    return price -= 1;
  } else if ((this.size === "Small") && (this.topping1 === "Peperoni")) {
    return price -= 2;
  } else if ((this.size === "Small") && (this.topping1 === "Sausage")) {
    return price -= 2;
  } else if ((this.size === "Small") && (this.topping2 === "Mushroom")) {
    return price -= 2;
  } else if ((this.size === "Small") && (this.topping2 === "Jalapeno")) {
    return price -= 2;
  } else if ((this.size === "Small") && (this.topping2 === "Garlic")) {
    return price -= 2;
  }
    return price;
  }

// Interface//
$(document).ready(function() {
  var newPizza;
  $("form#pizza").submit(function(event) {
      event.preventDefault();

      var pizzaSize = $("select#size").val();
      var pizzaTopping1 = $("select#topping1").val();
      var pizzaTopping2 = $("select#topping2").val();
      var newPizza = new Pizza(pizzaSize, pizzaTopping1, pizzaTopping2);
      var price = newPizza.price();

    // if (pizzaSize === "" || pizzaTopping === "") {
    //   return alert("Please make all selections");
    //   $(".show-price").hide();
    // }
    

  $(".show-price").show();
  $("#showPizzaSize").text(" " + pizzaSize);
  $("#pizzaTopping1").text("" + pizzaTopping1);
  $("#pizzaTopping2").text("" + pizzaTopping2);
  $("#pizzaPrice").text(" $" + price);


  });
});
