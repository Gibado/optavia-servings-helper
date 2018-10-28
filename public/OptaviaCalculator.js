// TODO add methods to calculate what different portions would meet the criteria for the following checks
var optaviaCalculator = {
  getLeanBounds: function() {
    return [Scalar.createBounds("calories", 250, 300),
        Scalar.createBounds("protien", 25, null),
        Scalar.createBounds("carbs", 0, 15)];
  },

  isLeanOption: function(food) {
    var bounds =this.getLeanBounds();
    bounds.push(Scalar.createBounds("fat", 10, null));

    var results = Scalar.scaleIntoBounds(food, bounds);

    return food.outputServings(results);
  },

  isLeanerOption: function(food) {
    var bounds =this.getLeanBounds();
    bounds.push(Scalar.createBounds("fat", 5, 10));

    var results = Scalar.scaleIntoBounds(food, bounds);

    return food.outputServings(results);
  },

  isLeanestOption: function(food) {
    var bounds =this.getLeanBounds();
    bounds.push(Scalar.createBounds("fat", 0, 5));

    var results = Scalar.scaleIntoBounds(food, bounds);

    return food.outputServings(results);
  },

  isHealthyFat: function(food) {
    var bounds = [Scalar.createBounds("calories", 45, 60),
        Scalar.createBounds("fat", 4, 6),
        Scalar.createBounds("carbs", 0, 5)];
    var results = Scalar.scaleIntoBounds(food, bounds);

    return food.outputServings(results);
  },

  isCondiment: function(food) {
    var bounds = [Scalar.createBounds("calories", 0, 30),
        Scalar.createBounds("carbs", 0, 1)];
    var results = Scalar.scaleIntoBounds(food, bounds);

    return food.outputServings(results);
  },

  isGreen: function(food) {
    var bounds = [Scalar.createBounds("calories", 0, 25),
        Scalar.createBounds("carbs", 0, 5)];
    var results = Scalar.scaleIntoBounds(food, bounds);

    return food.outputServings(results);
  }
}
