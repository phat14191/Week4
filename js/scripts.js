// User Interface Logic
$(document).ready(function(){
  $('form.pizza-order').submit(function(event){
    $("input[type=checkbox]:checked").each(function(){
        pizzaToppings.push($(this).val());
        // console.log(pizzaToppings);
    });

    var pizzaSize = $('input:radio[name=pizza]:checked').val();
    var newPizza = new Pizza(pizzaSize, pizzaToppings);

    console.log(newPizza);

    $("#priceHide").show();
    $("#priceOutput").text(newPizza.pizzaCost.append(2));

   event.preventDefault();
  });
});


// Business Logic
  var pizzaToppings = [];
  function Pizza (pizzaSize, pizzaToppings){
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCost = 0;
  }

  Pizza.prototype.pizzaResult = function() {
    if (this.pizzaSize === "personal") {
      this.pizzaCost =+ 7;
    } else if (this.pizzaSize === "small") {
      this.pizzaCost =+ 9;
    } else if (this.pizzaSize === "medium") {
      this.pizzaCost =+ 10;
    } else if (this.pizzaSize === "large") {
      this.pizzaCost =+ 12;
    } else {
      alert("Pick your size please!");
    }
    for (var i = 0; i < this.pizzaToppings.length; i++) {
      this.pizzaCost = this.pizzaCost + .75;
    }
  }
