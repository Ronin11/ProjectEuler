//projecteuler.net/problem=6

const generateSumOfSquares = number => {
	let sum = 0
	for(let i = 1; i <= number; i++){
		sum += i * i
	}

	return sum
}

const generateSquareOfSum = number => {
	let sum = 0
	for(let i = 1; i <= number; i++){
		sum += i
	}

	return sum * sum
}

const sumSquareDifference = number => generateSquareOfSum(number) - generateSumOfSquares(number)

const maxNumber = 100
const difference = sumSquareDifference(maxNumber)

console.log(`The sum square difference of ${maxNumber} is ${difference}`)

