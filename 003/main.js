//projecteuler.net/problem=3

//Generates prime numbers up to  sqrt(n)
const generatePrimes = number => {
	const primes = [2]
	// Start with the next prime (3), iterate over odd numbers, as 2 is the only even prime
	for(let i = 3; i < Math.sqrt(number) / 2; i += 2){

		//Fundamentally, a prime number is a number that isn't divisible by the preceding prime numbers
		let isPrime = true
		for(let prime of primes){
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

const generateLargestFactor = number => {
	const primes = generatePrimes(number)
	for(let i = primes.length - 1; i >= 0; i--){
		if(number % primes[i] === 0){
			return primes[i]
		}
	}
}

//const number = 13195
const number = 600851475143
const largestFactor = generateLargestFactor(number)

console.log(`The largest factor of ${number} is ${largestFactor}`)

