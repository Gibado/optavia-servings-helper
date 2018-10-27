// TODO add methods to calculate what different portions would meet the criteria for the following checks
var optaviaCalculator = {
  isLeanOption: function(model) {
    var resultBool = true;
    if (model.calories < 250 || model.calories > 300) {
      resultBool = false;
    } else if (model.protien < 25) {
      resultBool = false;
    } else if (model.carbs > 15) {
      resultBool = false;
    }

    return resultBool;
  },

  calcLeanType: function(model) {
    if (model.fat < 0) {
      return "invalid fat level: " + model.fat;
    } else if (model.fat < 5) {
      return "leanest";
    } else if (model.fat < 10) {
      return "leaner";
    } else {
      return "lean";
    }
  },

  isHealthyFat: function(model) {
    var resultBool = true;
    if (model.calories < 45 || model.calories > 60) {
      resultBool = false;
    } else if (model.fat < 3 || model.fat > 6) {
      resultBool = false;
    } else if (model.carbs >= 5) {
      resultBool = false;
    }

    return resultBool;
  },

  isCondiment: function(model) {
    var resultBool = true;
    if (model.calories >= 30) {
      resultBool = false;
    } else if (model.carbs >= 1) {
      resultBool = false;
    }

    return resultBool;
  },

  isGreen: function(model) {
    var resultBool = true;
    if (model.calories > 25) {
      resultBool = false;
    } else if (model.carbs > 5) {
      resultBool = false;
    }

    return resultBool;
  }
}
