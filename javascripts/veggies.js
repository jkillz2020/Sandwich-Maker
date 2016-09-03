// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var veggies = [];
  // Private variable to store the different veggie prices
  var veggiePrices = {"lettuce": .75, 
                      "tomato": .80,
                      "onion": .35,
                      "pickle": .25
                      };

  // Augment the original object with another method
  // Augment the original object with another method
  maker.addVeggie = function(veggie) {
    veggies.push(veggie);
  };

  //  remove veggie
   maker.removeVeggie = function(veggie) {
    var index = veggies.indexOf(veggie);
    if(index !== -1) {
      veggies.splice(index, 1);
    }
   };
  // add veggie price
  maker.addVeggiePrices = function() {
    var totalVeggiePrice = 0
    for (var i = 0; i < veggies.length; i++) {
      totalVeggiePrice += veggiePrices[veggies[i]]
    }
    return totalVeggiePrice;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);