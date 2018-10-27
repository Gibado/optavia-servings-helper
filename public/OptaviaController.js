var optaviaController = {
  model: optaviaModel,
  calc: optaviaCalculator,
  factory: FoodFactory,

  updateModel: function() {

    var calories = parseInt(document.getElementById("caloriesInput").value);
    var carbs = parseInt(document.getElementById("carbsInput").value);
    var fat = parseInt(document.getElementById("fatInput").value);
    var protien = parseInt(document.getElementById("protienInput").value);

    var food = this.factory.createFood(calories, carbs, fat, protien);
    this.model.selectedFood = food;
  },

  refreshValues: function() {
    var food  = this.model.selectedFood;
    var isLean = this.calc.isLeanOption(food);
    var leanType = this.calc.calcLeanType(food);
    var isHealthyFat = this.calc.isHealthyFat(food);
    var isCondiment = this.calc.isCondiment(food);
    var isGreen = this.calc.isGreen(food);

    document.getElementById("modelTest").textContent = this.model.details();

    document.getElementById("leanDetails").textContent = isLean;
    document.getElementById("leanType").textContent = leanType;
    document.getElementById("fatDetails").textContent = isHealthyFat;
    document.getElementById("condimentDetails").textContent = isCondiment;
    document.getElementById("greenDetails").textContent = isGreen;
  }
}
