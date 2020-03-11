// projecteuler.net/problem=15

const traverseGrid = (size, x, y) => {
	const xLim = x === size
	const yLim = y === size

	
	if(xLim && yLim){
		return 1
	}

	let paths = 0
	if(!yLim){
		paths +=  traverseGrid(size, x, y + 1)
	}
	if(!xLim){
		paths += traverseGrid(size, x + 1, y)
	}

	return paths
}

const constraint = 20
const paths = traverseGrid(constraint, 0, 0)

console.log(`Total paths in a size ${constraint} grid: ${paths}`)

