describe ('pizza', function() {
  it("creates a new pizza order with the given properties", function() {
  var testPizza = new Pizza("Large", 1);
  expect(testPizza.size).to.equal("Large");
  expect(testPizza.topping).to.equal(1);
  });
  it("adds the price method to the pizza constructor", function() {
  var testPizza = new Pizza("Large", 1);
  expect(testPizza.price()).to.equal(11);
  });
});
