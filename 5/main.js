//projecteuler.net/problem=5

const generateSmallestMultiple = number => {
	// Start at 2520 as it seems like a good idea. Iterating by 2, as has to be divisible by 2.
	for(let bigNum = 2520;; bigNum += 2){
		let isMultiple = true
		for(let i = number; i > 1; i--){
			if(bigNum % i !== 0){
				isMultiple = false
				break
			}
		}
		if(isMultiple){
			return bigNum
		}
	}
	return "BAD"
}

const maxNumber = 20
const smallestMultiple = generateSmallestMultiple(maxNumber)

console.log(`The smallest multiple of ${maxNumber} is ${smallestMultiple}`)

