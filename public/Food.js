var FoodFactory = {
  createFood: function(name, size, units, calories, carbs, fat, protien) {
    return {
      name: name,
      size: size,
      units: units,
      calories: calories,
      carbs: carbs,
      fat: fat,
      protien: protien,

      getNewServing: function(multiplier) {
        return FoodFactory.createFood(name, size * multiplier, units, calories * multiplier, carbs * multiplier, fat * multiplier, protien * multiplier);
      },

      outputServings: function(scalingResults) {
        if (scalingResults.error) {
          return "Doesn't meet these criteria";
        } else {
          var minSize = scalingResults.min * this.size;
          var maxSize = scalingResults.max * this.size;
          return minSize + " - " + maxSize + " " + units;
        }
      }
    };
  },

  createDefaultFood: function() {
    return this.createFood("Default Food", 0.0, "cups", 0, 0, 0, 0);
  }
}
