/*function getTempCallback (location, callback){
	callback(undefined, 78);
	callback('City not found');
}

getTempCallback('Barcelona', function (err, temp) {
	if(err){
		console.log('error', err);
	} else {
		console.log('success', temp);
	}
});

function getTempPromise (location){
	return new Promise(function (resolve, reject) {
		setTimeout( function(){
			resolve(79);
			reject('City not found');
		}, 1000);
	});
}

getTempPromise('Barcelona').then(function(temp){
	console.log('promise success', temp);
}, function(err){
	console.log('promise error', err);
});*/

// Challenge
function addPromise(a, b){
	return new Promise(function (resolve, reject){
		if( typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		}else{
			reject('not numbers')
		}
	});
}

addPromise(2,4).then(function(result){
	console.log('result', result);
}, function(err){
	console.log('promise error', err);
});
addPromise(2,'hola').then(function(result){
	console.log('result', result);
}, function(err){
	console.log('promise error', err);
});
