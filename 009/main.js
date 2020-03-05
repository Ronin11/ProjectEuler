//projecteuler.net/problem=9

const isPythagoreanTriplet = (a, b, c) => {
	if(a * a + b * b === c * c){
		return true
	}
	
	return false
}

const generatePythagoreanTriplet = sum => {
	for(let i = sum - 3; i > 0; i--){//Smallest triplet would be 1, 2, x
		for(let j = sum - ( i + 1); j > 0; j--){
			let k = sum - i - j

			if(isPythagoreanTriplet(k, j, i)){
				return { a: k, b: j, c: i } 

			}
		}
	}
	return {}
}


const sum = 1000
//const sum = 12
const triplet = generatePythagoreanTriplet(sum)
const product = triplet.a * triplet.b * triplet.c
console.log(`The triplet summing to ${sum} is ${triplet.a} ${triplet.b} ${triplet.c}. It's product is ${product}`)

