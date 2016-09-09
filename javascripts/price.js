var SandwichMaker = (function(maker) {
var totalPrice = 0;

      maker.addPrices = function(toppingPrice) {
      totalPrice += maker.addCheesePrices();
      totalPrice += maker.addBreadPrices();
      totalPrice += maker.addMeatPrices();
      console.log("Total price: ", totalPrice);
      totalPrice += maker.addCondimentPrices();
      totalPrice += maker.addVeggiePrices();
      output.innerHTML = totalPrice;
    }
    
  return maker 

  })(SandwichMaker  || {});