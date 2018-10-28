// Used to alter the serving size of a food and test if it can fit into the given restrictions
var Scalar = {
  createBounds: function(foodValueName, lowValue, highValue) {
    if (lowValue != null && highValue!= null && lowValue > highValue) {
      console.error("Please make sure the low bounds are smaller than the upper bounds");
    }
    return {typeName: foodValueName, lowValue: lowValue, highValue: highValue};
  },

  findBounds: function(foodValue, lowValue, highValue) {
    if (lowValue != null && highValue!= null && lowValue > highValue) {
      console.error("Please make sure the low bounds are smaller than the upper bounds");
    }

    var minSize = 0;
    var maxSize = null;

    if (lowValue != null && lowValue > 0) {
      minSize = lowValue / foodValue;
    }
    if (highValue != null) {
      maxSize = highValue / foodValue;
    }

    return {min: minSize, max: maxSize};
  },

  scaleIntoBounds: function(food, boundsArray) {
    var bounds = [];

    boundsArray.forEach(function (item, index) {
      bounds.push(Scalar.findBounds(food[item.typeName], item.lowValue, item.highValue));
    });

    var minSize = 0;
    var maxSize = null;

    bounds.forEach(function(item, index) {
      if (item.min > minSize) {
        minSize = item.min;
      }
      if (maxSize == null || (item.max != null && item.max < maxSize)) {
        maxSize = item.max;
      }
    });

    var results = {min: minSize, max: maxSize};

    if (maxSize != null && minSize > maxSize) {
      results.error = "Invalid min max thus won't fit in bounds";
    }

    return results;
  }
}
