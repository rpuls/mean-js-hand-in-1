

//1 Using the filter method:
var names = ["lars", "per", "Jan", "Peter", "Bo", "Frederik", "ib"];
var shortNames = names.filter(function (name) {
	return name.length <= 3;
});

console.log("Exersice 1-filter: " + shortNames.toString());

//1 Using the map method:
var upperNames = names.map(function (name) {
	return name.toUpperCase();
});

console.log("Exersice 1-map: " + upperNames.toString());

//2 homemade filter
function myFilter(array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
}

var shortNames2 = myFilter(names, function (name) {
	return name.length <= 3;
});

console.log("Exersice 2-filter: " + shortNames2.toString() + " Exersice solved: " + (shortNames.toString() == shortNames2.toString()));


//2 homemade map
function myMap(array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}
	return result;
}

var upperNames2 = myMap(names, function (name) {
	return name.toUpperCase();
});

console.log("Exersice 2-map: " + upperNames2.toString() + " Exersice solved: " + (upperNames.toString() == upperNames2.toString()));

//3 prototype filter
Array.prototype.myFilter = function (callback) {
	var result = [];
	for (var i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			result.push(this[i]);
		}
	}
	return result;
}
var shortNames3 = names.myFilter(function (name) {
	return name.length <= 3;
});

console.log("Exersice 3-filter: " + shortNames3.toString() + " Exersice solved: " + (shortNames.toString() == shortNames3.toString()));

//3 prototype map
Array.prototype.myMap = function (callback) {
	var result = [];
	for (var i = 0; i < this.length; i++) {
		result.push(callback(this[i]));
	}
	return result;
}
var upperNames3 = names.myMap(function (name) {
	return name.toUpperCase();
});

console.log("Exersice 3-map: " + upperNames3.toString() + " Exersice solved: " + (upperNames.toString() == upperNames3.toString()));

//4a 

// <ul>
//   <li>Lars</li>
//   <li>Peter</li>
//   <li>Jan</li>
//   <li>Bo</li>
// <ul>

var liArray = names.map(function(name){
	return "<li>" + name + "</li>";
});

var ul = "<ul>\n\t" + liArray.join("\n\t") + "\n</ul>";
console.log("Exersice 4a:\n"+ul);

//4b

// <table>
// <tr><td>Lars</td><td>1234567</td></tr>
// <tr><td>Lars</td><td>1234567</td></tr>
// </table>

var persons = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var trArray = persons.map(function(person){
	return "\n\t<tr><td>" + person.name + "</td><td>" + person.phone + "</td></tr>";
});

var table = "<table>" + trArray + "\n</table>";
console.log("Exersice 4b: \n"+table);

//4c

// class example
var names = ["kurt","ole","hans","ib"];

//This is MY version of forEach
function myforEach(callback){
    for(var i =0; i < this.length; i++){
        callback(this[i]);
    }
}
//myforEach((name)=>console.log(name));
Array.prototype.myforEach = myforEach;
// This is how I call (use) it
// Observe that it is provided with a callback
// identical to the one given to the original
//forEach method
myforEach(names,function(name){
    console.log(name);
    })