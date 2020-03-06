// projecteuler.net/problem=15
const treeMaker = () => {
	const id = 0
	const createNode = isEnd => ({
		isEnd,
		id: id++,
		rightChild: undefined,
		leftChild: undefined,
		addRightChild: child => rightChild = child,
		addLeftChild: child => leftChild = child
	})

	const createTree = size => {
		// Generates the vertices of the graph. I.E. a size of 2 will result in a 3 x 3 graph
		size += 1
		const base = createNode()
		let node = base
		for(let i = 0; i < size; i++){
			let newRightNode = createNode()
			node.addRightChild(newRightNode)
			for(let j = 0; j < size; j++){
				let newLeftNode = createNode()
				node.addLeftChild(newLeftNode)
			}
			node = newRightNode
		}

		return base
	}

	return {
		createTree
	}
}


const constraint = 2
const maker = treeMaker()
const paths = maker.createTree(constraint)

console.log(`Total paths in a size ${constraint} grid: ${paths}`)

