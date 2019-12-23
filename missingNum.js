
function missingNum(arr) {
	let numbersSet = new Set(arr)
	console.log(numbersSet)
	let counter = 1
	while(counter < 10){
		if (!numbersSet.has(counter)){
			console.log(counter)
			break
		} else {
			counter += 1
		}
	}
}

missingNum([1,2,3,4,6,7,8,9,10])