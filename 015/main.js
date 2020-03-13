// projecteuler.net/problem=15

const buildGraph = size => {
	const arr = []

	for(let i = 0; i < size; i++){
		arr.push(new Array(size))
	}

	return arr
}

const binomialer = graph => {
	for(let x = 0; x < graph.length; x++){
		for(let y = 0; y < graph[x].length; y++){
			if(y === 0 || x === 0){
				graph[x][y] = 1
			}else{
				graph[x][y] = graph[x - 1][y] + graph[x][y - 1]
			}
		}
	}
	return graph[graph.length - 1][graph[0].length - 1]
}

const constraint = 21
const graph = buildGraph(constraint)
const paths = binomialer(graph)

console.log(`Total paths in a size ${constraint} grid: ${paths}`)

