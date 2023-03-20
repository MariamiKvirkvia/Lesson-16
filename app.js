// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true-ს თუ რიცხვი არის ლუწი ან false-ს თუ რიცხვი არის კენტი.
function OddOrEven(a){
    if(a % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(OddOrEven(5));
console.log(OddOrEven(10));

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის პერიმეტრს.
function rectangleP(x, y){
    return 2 * (x + y);
}
console.log(rectangleP(2, 6));

// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის პერიმეტრს. პერიმეტრის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function squareP(x){
    return rectangleP(x, x);
}
console.log(squareP(11));

// 4. დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
function randomHundred(){
    return Math.round(Math.random() * 100);
}
console.log(randomHundred());

// 5. getCurrencySymbolFromCode ფუნქცია
function getCurrencySymbolFromCode(code){
    if (code === "USD"){
        return "$";
    }
    if (code === "EUR"){
        return "€";
    }
    if (code === "GEL"){
        return "ლ";
    }
    else{
        return "There is no such a code in our system."
    }
}
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("AED"));

// 6. The youngest among us :)
const workers = [
	{
		name: "Mariami",
		age: 27,
	},
	{
		name: "Ani",
		age: 22,
	},
	{
		name: "Kristine",
		age: 29,
	},
	{
		name: "Levani",
		age: 35,
	},
	{
		name: "Koba",
		age: 21,
	},
];
const youngestWorker = Math.min(...workers.map(item => item.age));
console.log(youngestWorker);
const oldestWorker = Math.max(...workers.map(item => item.age));
console.log(oldestWorker);