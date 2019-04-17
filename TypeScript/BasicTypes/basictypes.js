//boolean
var isDone;
isDone = true;
//number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//string
var message = "This is a message";
var message2 = 'This is a message';
var fullName = "\u0130brahim Bavl\u0131";
var age = 25;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//Arrays
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//Enum
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
;
var day1 = Days.Monday;
//Varsayılan olarak 0'dan başlar. 1'den başlaması için;
var Days2;
(function (Days2) {
    Days2[Days2["Monday"] = 1] = "Monday";
    Days2[Days2["Tuesday"] = 2] = "Tuesday";
    Days2[Days2["Wednesday"] = 3] = "Wednesday";
    Days2[Days2["Thursday"] = 4] = "Thursday";
    Days2[Days2["Friday"] = 5] = "Friday";
    Days2[Days2["Saturday"] = 6] = "Saturday";
    Days2[Days2["Sunday"] = 7] = "Sunday";
})(Days2 || (Days2 = {}));
;
//Veya hepsini elle kendin ayarla
var Days3;
(function (Days3) {
    Days3[Days3["Monday"] = 1] = "Monday";
    Days3[Days3["Tuesday"] = 2] = "Tuesday";
    Days3[Days3["Wednesday"] = 4] = "Wednesday";
    Days3[Days3["Thursday"] = 10] = "Thursday";
    Days3[Days3["Friday"] = 55] = "Friday";
    Days3[Days3["Saturday"] = 88] = "Saturday";
    Days3[Days3["Sunday"] = 123] = "Sunday";
})(Days3 || (Days3 = {}));
;
var sunday = Days3[123];
console.log(sunday);
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
