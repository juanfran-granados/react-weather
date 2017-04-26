var names = ['JF', 'Luis', 'Amets'];

/*names.forEach(function(name){
	console.log('foreEach', name);
});

names.forEach((name) => {
	console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Andr'));

var person = {
	name: 'Juanfran',
	greet: function () {
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name);
		})
	}
}

person.greet(); */

function add (a, b) {
	return a + b;
}

var addExpression = (a, b) => a + b;
var addStatement = (a, b) => {
	return a + b;
}

console.log(add(1,3));
console.log(add(2,4));
console.log(addExpression(1,3));
console.log(addExpression(2,4));
console.log(addStatement(1,3));
console.log(addStatement(2,4));
