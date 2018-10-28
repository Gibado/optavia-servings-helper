var testFood = FoodFactory.createFood("Test Food", 1, "Cup(s)", 50, 10, 5, 6);
optaviaModel.selectedFood = testFood;

optaviaModel.selectedFood = testFood.getNewServing(2);

optaviaController.refreshValues();

var testBoundArray = [];
testBoundArray.push(Scalar.createBounds("calories", 10, 50));
testBoundArray.push(Scalar.createBounds("carbs", 10, 50));
testBoundArray.push(Scalar.createBounds("fat", 10, null));
var testResults = Scalar.scaleIntoBounds(optaviaModel.selectedFood, testBoundArray);
