/*let name="Jane Ostin";
console.log(NAME);

let secname="John Smit";
console.log(SECNAME);
let thirdname="Ariana Grande";
console.log(THIRDNAME);

/*let name="Marilyn Manson";
let name="Billie Eilish"; */

var name = prompt("What's your name?");
alert("Hello "+ name);

var bdayDate = prompt("When are you born?");
var age = (2022-bdayDate);
alert("your age " + age);

var side = prompt("indicate the side of the square");
var perimeter = (side*4);
alert("perimeter of the square " + perimeter);

var radius = prompt("enter the radius of the circle");
var area = (3.14*(radius*2));
alert("circle area " + area.toFixed(2));

var distance = prompt("enter the distance in kilometers between the two cities");
var time = prompt("how many hours you want to get from one city to another");
var speed= (distance/time);
alert("speed to be on time " + speed);

const dollar = (29.54);
const euro = (29.6);

var giveMoney = prompt("how many dollars do you have");
var getMoney = ((dollar/euro)*giveMoney);
alert("get " + getMoney.toFixed(2) + " euro");
