//Business Logic

class pie {
  pieStyle (crust, sauce, toppings,) {
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
  }
}

Pie.prototype.crust = function() {
  if (this.crust === "Personal") {
    return 6;
  } else if (this.crust === "Medium") {
    return 8;
  } else if (this.crust === "Large") {
    return 12;
  } else {
    alert ("Select a size");
  }
}

Pie.prototype.toppings = function () {
if (this.toppings.length !=0) {
   let toppingsTotal = this.toppings.length *1;return toppingsTotal;
  } else {
    alert ("Choose Toppings");
  }
}

Pie.prototype.comboCost = function (crustTotal, toppingsTotal) {
  let totalCost= crustTotal + toppingsTotal;
  $(this.#showTotalCost).html(totalCost);
}

// UI Logic

$(document).ready(function() {
  $("#PizzaSelection").submit(function(event){
    event.preventDefault();
    $(this.#orderInput).show();

  })
})
