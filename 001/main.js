// projecteuler.net/problem=1

const generateSum = maxNumber => {
	let sum = 0
	for(let i = 3; i < maxNumber; i += 3){
		if(i * 3 % 5 !== 0){
			sum += i
		}
	}
	for(let i = 5; i < maxNumber; i += 5){
		sum += i
	}
	return sum
} 

const max = 1000
const sum = generateSum(max)

console.log(`Multiples of ${max}: ${sum}`)

