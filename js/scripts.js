function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.price = function() {
    var price = 10;
    var size = this.size
    var topping = this.topping

    if ((size === "large") && (topping === 1)) {
      return price +=1;
  } else if ((size === "large") && (topping === 2)) {
    return price +=2;
  } else if ((size === "large") && (topping === 2)) {
    return price +=3;
  } else if ((size === "medium") && (topping === 1)) {
    return price;
  } else if ((size === "medium") && (topping === 2)) {
    return price +=1;
  } else if ((size === "medium") && (topping === 3)) {
    return price +=2;
  } else if ((size === "small") && (topping === 1)) {
    return price -=1;
  } else if ((size === "small") && (topping === 2)) {
    return price;
  } else if ((size === "small") && (topping === 3)) {
    return price +=1;
  } else {
    return price;
  }
  };
