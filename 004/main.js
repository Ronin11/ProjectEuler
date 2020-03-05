//projecteuler.net/problem=4

const isPrime = number => {
	const numString = number.toString()
	let i = 0
	let j = numString.length - 1
	while(numString[i] === numString[j]){
		i += 1
		j -= 1
		if(i >= j){
			return true
		}
	}

	return false
}

const generatePalindromeFactor = number => {
	let maxPalindrome = 0
	for(let i = number; i > 0; i--){
		for(let j = number; j > 0; j--){
			const product = i*j
			if(product > maxPalindrome && isPrime(product)){
				maxPalindrome = product
			}
		}
	}

	return maxPalindrome
}

const maxNumber = 999
const largestPalindrome = generatePalindromeFactor(maxNumber)

console.log(`The largest palindrome product of ${maxNumber} is ${largestPalindrome}`)

