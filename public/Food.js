var FoodFactory = {
  createFood: function(calories, carbs, fat, protien) {
    return {
      name: "food",
      calories: calories,
      carbs: carbs,
      fat: fat,
      protien: protien
    };
  },

  createDefaultFood: function() {
    return this.createFood(0,0,0,0);
  }
}
