var optaviaController = {
  model: optaviaModel,
  calc: optaviaCalculator,

  updateModel: function() {
    this.model.calories = parseInt(document.getElementById("caloriesInput").value);
    this.model.carbs = parseInt(document.getElementById("carbsInput").value);
    this.model.fat = parseInt(document.getElementById("fatInput").value);
    this.model.protien = parseInt(document.getElementById("protienInput").value);
  },

  refreshValues: function() {
    var isLean = this.calc.isLeanOption(this.model);
    var leanType = this.calc.calcLeanType(this.model);
    var isHealthyFat = this.calc.isHealthyFat(this.model);
    var isCondiment = this.calc.isCondiment(this.model);
    var isGreen = this.calc.isGreen(this.model);

    document.getElementById("modelTest").textContent = this.model.details();

    document.getElementById("leanDetails").textContent = isLean;
    document.getElementById("leanType").textContent = leanType;
    document.getElementById("fatDetails").textContent = isHealthyFat;
    document.getElementById("condimentDetails").textContent = isCondiment;
    document.getElementById("greenDetails").textContent = isGreen;
  }
}
