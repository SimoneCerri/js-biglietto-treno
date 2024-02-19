//Ask kilometers to client
let kilometers = Number (prompt ("How many kilometers do you will travel ?"));
console.log(kilometers);

//Ask age to client
let age = Number (prompt("What's your age ?"));
console.log(age);

//Price = 0.21 * km
let price = kilometers * 0.21;
console.log(price);

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
console.log(discount);

//final_price in human - form(2 max numbers after float point)
let final_price = price - discount ;
console.log(final_price);
