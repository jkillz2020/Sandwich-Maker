// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var meats = [];
  // Private variable to store the different meat prices
  var meatPrices = {"turkey": 1.00, 
                    "ham": 1.75,
                    "bacon": 1.60,
                    "roast beef": 1.85
                    };

  // Augment the original object with another method
  maker.addMeat = function(meat) {
    meats.push(meat);
    console.log("meat", meats);
  };

  //  remove meat
   maker.removeMeat = function(meat) {
    var index = meats.indexOf(meat);
    if(index !== -1) {
      meats.splice(index, 1);
    }
   };
  // add meat price
  maker.addMeatPrices = function() {
    var totalMeatPrice = 0
    for (var i = 0; i < meats.length; i++) {
      totalMeatPrice += meatPrices[meats[i]]
    }
    return totalMeatPrice;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker  || {});