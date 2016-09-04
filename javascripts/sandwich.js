var SandwichMaker = (function(maker){
  var bread = "";
  var cheese = "";
  var meat = "";
  var veggies = "";
  var condiments = "";
// Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    totalPrice: function() {
      return maker.addMeatPrices() +
      return maker.addVeggiePrices() +
      return maker.addBreadPrices() +
      return maker.addCheesePrices() +
      return maker.addCondimentPrices();
    }
  }
    // getBread: function(){
    //   return bread;
    // },
    // setBread: function(newBread){
    //   return bread = newBread;
    // },
    // getCheese : function(){
    //   return cheese;
    // },
    // setCheese : function(newCheese){
    //   return cheese = newCheese;
    // },
    // getMeat : function(){
    //   return meat;
    // },
    // setMeat : function(newMeat){
    //   return meat = newMeat;
    // },
    // getVeggies : function(){
    //   return veggies;
    // },
    // setVeggies : function(newVeggies){
    //   return veggies = newVeggies;
    // },
    // getCondiments : function(){
    //   return condiments;
    // },
    // setCondiments : function(newCondiments){
    //   return condiments = newCondiments;
    // },

})(SandwichMaker || {});
