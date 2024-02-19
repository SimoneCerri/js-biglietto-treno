//Ask kilometers to client
let kilometers = Number (prompt ("How many kilometers do you will travel ?"));
console.log("Passanger will travel for: " + kilometers + "km");

//Ask age to client
let age = Number (prompt("What's your age again? cit."));
console.log("Passanger's age: " + age + " years old");

//Price = 0.21 * km
let price = kilometers * 0.21;
console.log("Ticket full price: " + price + "\u20AC");

//if age < 18 = 20 % discount
//if age > 65 = 40 % discount
let discount;
if (age < 18)
{
    discount = price * .20 ;
}
else if (age > 65)
{
    discount = price * .40 ;
}
else
{
    discount = price ;
}
console.log("Passenger's discount is " + discount + "\u20AC" );

//final_price in human - form(2 max numbers after float point)
let final_price = (price - discount).toFixed(2) ;
console.log("Ticket final price will be: " + final_price + "\u20AC");
alert("You will pay " + final_price + " \u20AC for your ticket");

