var optaviaModel = {
  selectedFood: FoodFactory.createDefaultFood(),
  getCalories: function() {
    return this.selectedFood.calories;
  },
  getProtien: function() {
    return this.selectedFood.protien;
  },   // in grams
  getCarbs: function() {
    return this.selectedFood.carbs;
  },     // in grams
  getFat: function() {
    return this.selectedFood.fat;
  },       // in grams

  details: function() {
    var stringResults = "";
    stringResults += "Calories: " + this.getCalories();
    stringResults += ", Carbs: " + this.getCarbs();
    stringResults += ", Fat: " + this.getFat();
    stringResults += ", Protien: " + this.getProtien();
    return stringResults;
  }
}
