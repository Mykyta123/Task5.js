let Car = [{
	    id: 1,
	    marka: "Kia",
	    model: "Rio",
	    yearOfIssue: 2010,
	    color: "blue",
	    price: 18000,
	    registerNumber: "0565"
}, {
	    id: 2,
	    marka: "Kia",
	    model: "Sportage",
	    yearOfIssue: 2018,
	    color: "white",
	    price: 20000,
	    registerNumber: "1289"
},
{
	    id: 3,
	    marka: "Mazda",
	    model: "6",
	    yearOfIssue: 2010,
	    color: "red",
	    price: 9000,
	    registerNumber: "0328"
},
{
	    id: 4,
	    marka: "Chevrolet",
	    model: "Aveo",
	    yearOfIssue: 2010,
	    color: "white",
	    price: 5500,
	    registerNumber: "0567"
},
{
	    id: 5,
	    marka: "Nissan",
	    model: "Leaf",
	    yearOfIssue: 2018,
	    color: "green",
	    price: 15000,
	    registerNumber: "0271"
},
{
	    id: 6,
	    marka: "Nissan",
	    model: "Leaf",
	    yearOfIssue: 2012,
	    color: "blue",
	    price: 10000,
	    registerNumber: "0254"
},
{
	    id: 7,
	    marka: "Nissan",
	    model: "Leaf",
	    yearOfIssue: 2008,
	    color: "green",
	    price: 9000,
	    registerNumber: "2398"
},];

try {
for (let i in Car) {
	if ((Car[i].marka == "") || (Car[i].model == "") || (Car[i].yearOfIssue == "") || (Car[i].color == "") || (Car[i].price == "") || (Car[i].registerNumber == "")) {
		throw "ExceptionNullString";
	}

	else if (((Car[i].yearOfIssue) < 1900) || (Car[i].yearOfIssue > 2019)) {
		throw "ExceptionYear";
	}

	else if ((Car[i].price) < 100) {
		throw "ExceptionPrice";
	}

}} catch(Error) {
	if (Error == "ExceptionNullString") {
		alert("Don`t filled field!");
	}

	if (Error == "ExceptionYear") {
		alert("Wrong year!");
	}

	if (Error == "ExceptionPrice") {
		alert("Wrong price!");
	}
}

/*let marka = "Kia";
let model = "Leaf";
let years = 5;
let yearOfIssue = 2010;
let Price = 10000;*/

let marka = prompt("Введите марку автомобиля","Kia");

console.log("Список автомобилей заданной марки:");
for (let i in Car) {
	if (Car[i].marka === marka) {
		console.log(Car[i]);
	}
}

let model = prompt("Введите модель автомобиля","Leaf");
let years = prompt("Введите колличество лет эксплуатации автомобиля",5);

console.log("Список автомобилей заданной модели, которые эксплуатируются больше n лет:");
for (let i in Car) {
	if ((Car[i].model === model) && ((2019-Car[i].yearOfIssue) > years)) {
		console.log(Car[i]);
	}
}

let yearOfIssue = prompt("Введите год выпуска автомобиля",2010);
let Price = prompt("Введите цену автомобиля",10000);

console.log("Список автомобилей заданного года выпуска, цена которых больше указанной:");
for (let i in Car) {
	if ((Car[i].yearOfIssue === yearOfIssue) && (Car[i].price > Price)) {
		console.log(Car[i]);
	}
}