// projecteuler.net/problem=X

const generateSomething = constraint => {
	return constraint * constraint
} 

const constraint = 100
const sum = generateSomething(constraint)

console.log(`Multiples of ${constraint}: ${sum}`)

