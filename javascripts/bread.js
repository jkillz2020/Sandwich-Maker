// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var breads = [];

  // Private variable to store the different bread prices
  var breadPrices = {"white": 1.00, 
                    "wheat": 1.45,
                    "rye": 1.35,
                    "ciabatta": 1.25
                    };

  // Augment the original object with another method
  maker.addBread = function(bread) {
    breads.push(bread);
  };

  //  remove bread
   maker.removeBread = function(bread) {
    var index = breads.indexOf(bread);
    if(index !== -1) {
      breads.splice(index, 1);
    }
   };
  // add bread price
  maker.addBreadPrices = function() {
    var totalBreadPrice = 0
    for (var i = 0; i < breads.length; i++) {
      totalBreadPrice += breadPrices[breads[i]]
    }
    return totalBreadPrice;
  };

  

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker  || {});