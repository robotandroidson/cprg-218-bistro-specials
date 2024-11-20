const currentDate = new Date();
console.log(currentDate);


let currentDay = currentDate.getDay();
console.log (currentDay);
///let currentDay = 0;
//console.log(
//    currentDay
//);
 //Sunday is 0 Saturday is 6 //

if(currentDay==0){
    special_name.innerHTML = "$9 Deluxe Burger & Fries";
    special_image.src = "images/sunday.jpg";
    special_description = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.";
    //innerHTML is just changing text//
    //document.getElementById("special_name").innerHTML//
}
if(currentDay==1){
    special_name.innerHTML = "$12 Chicken Penne Alfredo";
    special_image.src = "images/monday.jpg";
    special_description = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top.  Side Caesar Salad included.";

}
if(currentDay==2){
    special_name.innerHTML = "$10 Any Small Pizza";
    special_image.src = "images/tuesday.jpg";
    special_description = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.";

}
if(currentDay==3){
    special_name.innerHTML = "Wednesday - 35¢ Chicken Wings";
    special_image.src = "images/wednesday.jpg";
    special_description = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that.";
}