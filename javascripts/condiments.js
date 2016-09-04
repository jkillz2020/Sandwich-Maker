// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var condiments = [];
  // Private variable to store the different Condiment prices
  var condimentPrices = {"mayonnaise": .25, 
                          "ketchup": .25,
                          "mustard": .25,
                          "BBQ": .35
                          };

  // Augment the original object with another method
  maker.addCondiment = function(condiment) {
    condiments.push(condiment);
  };

  //  remove Condiment
   maker.removeCondiment = function(condiment) {
    var index = condiments.indexOf(condiment);
    if(index !== -1) {
      condiments.splice(index, 1);
    }
   };
  // add Condiment price
  maker.addCondimentPrices = function() {
    var totalCondimentPrice = 0
    for (var i = 0; i < condiments.length; i++) {
      totalCondimentPrice += condimentPrices[condiments[i]]
    }
    return totalCondimentPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker  || {});