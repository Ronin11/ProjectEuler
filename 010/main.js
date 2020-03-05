//projecteuler.net/problem=10

const generatePrimes = maxNumber => {
	const primes = [2]

	for(let i = 3; i < maxNumber; i += 2){
		let isPrime = true
		for(const prime of primes){
			if(i % prime === 0){
				isPrime = false
				break
			}
		}
		if(isPrime){
			primes.push(i)
		}
	}
	return primes
}

const generatePrimeSum = maxNumber => {
	const primes = generatePrimes(maxNumber)
	return primes.reduce((acc, val) => acc + val)
}


//const maxNumber = 10
const maxNumber = 2000000
const sum = generatePrimeSum(maxNumber)

console.log(`The prime summation to ${maxNumber} is ${sum}`)

