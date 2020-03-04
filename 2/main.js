// projecteuler.net/problem=2


const generateSum = maxNumber => {
	let i = 1
	let j = 2
	let k
	let sum = 2 // Starting with 2
	while(j < maxNumber){
		k = i + j
		if(k % 2 === 0){
			sum += k
		}
		i = j
		j = k
	}
	return sum
}

const maxNumber = 4000000
const sum = generateSum(maxNumber)

console.log(`Sum of evens: ${sum}`)
