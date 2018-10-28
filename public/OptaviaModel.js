var optaviaModel = {
  selectedFood: FoodFactory.createDefaultFood(),
  getName: function() {
    return this.selectedFood.name;
  },
  getSize: function() {
    return this.selectedFood.size;
  },
  getUnits: function() {
    return this.selectedFood.units;
  },
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
    stringResults += "Name: " + this.getName();
    stringResults += ", Serving size: " + this.getSize() + " " + this.getUnits();
    stringResults += ", Calories: " + this.getCalories();
    stringResults += ", Carbs: " + this.getCarbs();
    stringResults += ", Fat: " + this.getFat();
    stringResults += ", Protien: " + this.getProtien();
    return stringResults;
  }
}
