describe ('pizza', function() {
  it("creates a new pizza order with the given properties", function() {
    var testPizza = new Pizza("large", 1);
    expect(testPizza.toppings).to.equal(1);
    expect(testPizza.size).to.equal("large");
  });
});
