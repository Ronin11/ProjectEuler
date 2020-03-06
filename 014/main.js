// projecteuler.net/problem=14

const sequenceGenerator = sequenceLength => {
	const map = new Array(3000000) //Pre allocate array
	map[0] = 0
	map[1] = 0//define inital conditions		
	
	let max = 0
	let maxNum = 0

	const recursiveBoi = index => {
		if(map[index] !== undefined){
			return map[index]
		} else if (index % 2 === 0){
			map[index] = 1 + recursiveBoi(index / 2)
		} else{
			map[index] = 1 + recursiveBoi(index * 3 + 1)
		}
		return map[index]
	}

	for(let i = 2; i < sequenceLength; i++){
		const sequenceLength = recursiveBoi(i)
		if(sequenceLength > max){
			max = sequenceLength
			maxNum = i
		}
	}

	return maxNum
}

const constraint = 1000000
const maxSequenceLength = sequenceGenerator(constraint)

console.log(`Longest path under  ${constraint} is ${maxSequenceLength}`)

