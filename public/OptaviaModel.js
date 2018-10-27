var optaviaModel = {
  calories: 0,
  protien: 0,   // in grams
  carbs: 0,     // in grams
  fat: 0,       // in grams

  details: function() {
    var stringResults = "";
    stringResults += "Calories: " + this.calories;
    stringResults += ", Carbs: " + this.carbs;
    stringResults += ", Fat: " + this.fat;
    stringResults += ", Protien: " + this.protien;
    return stringResults;
  }
}
