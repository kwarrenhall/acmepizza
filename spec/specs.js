describe ('pizza', function() {
  it("creates a new pizza order with the given properties", function() {
  var testPizza = new Pizza(1, "large");
  expect(testPizza.topping).to.equal(1);
  expect(testPizza.size).to.equal("large");
  });
  it("adds the price method to the pizza constructor", function() {
  var testPizza = new Pizza(1, "large");
  expect(testPizza.price()).to.equal(10);
  });
});
