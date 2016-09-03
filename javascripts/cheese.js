// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var cheeses = [];

  // Private variable to store the different bread prices
  var cheesePrices = {"mozzarella": 1.40, 
                      "swiss": 1.45,
                      "provolone": 1.50,
                      "american": .85
                      };

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    cheeses.push(cheese);
  };

  //  remove cheese
   maker.removeCheese = function(cheese) {
    var index = cheeses.indexOf(cheese);
    if(index !== -1) {
      cheeses.splice(index, 1);
    }
   };
  // add cheese price
  maker.addCheesePrices = function() {
    var totalCheesePrice = 0
    for (var i = 0; i < cheeses.length; i++) {
      totalCheesePrice += cheesePrices[cheeses[i]]
    }
    return totalCheesePrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);