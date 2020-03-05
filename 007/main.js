//projecteuler.net/problem=7

const primes = [2]

const isPrime = number => {
	for(let prime of primes){
		if(number % prime === 0){
			return false
		}
	}

	return true
}

const generatePrimes = number => {
	for(let i = 3; primes.length - 2 <= number; i += 2){
		if(isPrime(i)){
			primes.push(i)
		}
	}
		
	return primes[number - 1]
}


const iteration = 10001
const prime = generatePrimes(iteration)

console.log(`The ${iteration}th is ${prime}`)

