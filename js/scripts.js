//Business Logic


class pieStyle {
  constructor(crust, sauce, toppings) {
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
  }
  totalCost() {
    return (crust + sauce + toppings);
  }
}

//Pie.prototype.crust = function() {
//  if (this.crust === "Personal") {
//    return 6;
//  } else if (this.crust === "Medium") {
//    return 8;
//  } else if (this.crust === "Large") {
//    return 12;
//  } else {
//    alert ("Select a size");
//  }
//}
//
//Pie.prototype.toppings = function () {
//if (this.toppings.length !=0) {
//   let toppingsTotal = this.toppings.length *1;return toppingsTotal;
//  } else {
//   alert ("Choose Toppings");
//  }
//}

//Pie.prototype.comboCost = function (crustTotal, toppingsTotal) {
//  let totalCost= crustTotal + toppingsTotal;
//  $("#showTotalCost").html(totalCost);
//}

// UI Logic

$(document).ready(function() {
  $("form#PizzaSelection").submit(function(event){
    event.preventDefault();
    let crust = parseInt($("input:radio[class = crust]:checked").val());
    let sauce = parseInt($("input:radio[class = sauce]:checked").val());
    let toppings = parseInt($("input:checkbox[class = toppings]:checked").val());
    let costTotal = crust+sauce+toppings;
    alert (costTotal);

  });
});
