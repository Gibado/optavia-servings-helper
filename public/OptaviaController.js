var optaviaController = {
  model: optaviaModel,
  calc: optaviaCalculator,
  factory: FoodFactory,

  updateModel: function() {
    var name = document.getElementById("nameInput").value;
    var size = parseFloat(document.getElementById("sizeInput").value);
    var units = document.getElementById("unitsInput").value;
    var calories = parseInt(document.getElementById("caloriesInput").value);
    var carbs = parseInt(document.getElementById("carbsInput").value);
    var fat = parseInt(document.getElementById("fatInput").value);
    var protien = parseInt(document.getElementById("protienInput").value);

    this.model.selectedFood = this.factory.createFood(name, size, units, calories, carbs, fat, protien);
  },

  refreshValues: function() {
    var food  = this.model.selectedFood;
    var isLean = this.calc.isLeanOption(food);
    var isLeaner = this.calc.isLeanerOption(food);
    var isLeanest = this.calc.isLeanestOption(food);
    var isHealthyFat = this.calc.isHealthyFat(food);
    var isCondiment = this.calc.isCondiment(food);
    var isGreen = this.calc.isGreen(food);

    document.getElementById("modelTest").textContent = this.model.details();

    document.getElementById("leanType").innerHTML = "<b>Lean:</b> " + isLean + "<br/><b>Leaner:</b> " + isLeaner + "<br/><b>Leanest:</b> " + isLeanest;
    document.getElementById("fatDetails").textContent = isHealthyFat;
    document.getElementById("condimentDetails").textContent = isCondiment;
    document.getElementById("greenDetails").textContent = isGreen;
  }
}
