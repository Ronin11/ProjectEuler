// projecteuler.net/problem=12

const triangular = () => {
	let current = 1
	let index = 2

	return () => {
		current += index
		index++
		return current
	}
}

const generateNext = triangular()

const generateDivisors = number => {
	const divisors = [1]
	for(let i = 2; i < number / 2; i++){
		if(number % i === 0){
			divisors.push(i)
		}
	}

	divisors.push(number)

	return divisors
}


const zhuLiDoTheThing = divisorCount => {
	while(true){
		const triangularNumber = generateNext()
		const divisors = generateDivisors(triangularNumber)
		if(divisors.length >= divisorCount){
			return triangularNumber
		}
	}
} 

//const constraint = 5
const constraint = 500
const number = zhuLiDoTheThing(constraint)

console.log(`Triangular number for ${constraint} divsors is ${number}`)

