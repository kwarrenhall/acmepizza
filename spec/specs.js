describe ('pizza', function() {
  it("creates a new pizza order with the given properties", function() {
  var testPizza = new Pizza("Large", "Pepperoni");
  expect(testPizza.size).to.equal("Large");
  expect(testPizza.topping).to.equal("Pepperoni");
  });
  it("adds the price method to the pizza constructor", function() {
  var testPizza = new Pizza("Large", "Pepperoni");
  expect(testPizza.price()).to.equal(11);
  });
});
