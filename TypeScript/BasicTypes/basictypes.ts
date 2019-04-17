

//boolean
let isDone: boolean;

isDone = true;



//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;



//string
let message: string = "This is a message";
let message2: string = 'This is a message';

let fullName: string = `İbrahim Bavlı`;
let age: number = 25;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

console.log(sentence);

//Arrays
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


//Enum
enum Days { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };

let day1: Days = Days.Monday;

//Varsayılan olarak 0'dan başlar. 1'den başlaması için;
enum Days2 { Monday = 1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };

//Veya hepsini elle kendin ayarla
enum Days3 { Monday = 1, Tuesday = 2, Wednesday = 4, Thursday = 10, Friday = 55, Saturday = 88, Sunday = 123 };
let sunday: string = Days3[123];

console.log(sunday);


//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
