// projecteuler.net/problem=13

const data = require('./numbers.json')


const findSum = () => {
	let sum = ""
	let colSum = 0
	for(let j = data[0].length - 1; j >= 0; j--){
		for(let i = 0; i < data.length; i++){
			colSum += Number(data[i][j])
		}
		sum = String(colSum)[String(colSum).length - 1] + sum
		colSum = Number(String(colSum).slice(0, String(colSum).length - 1))
	}

	return colSum + sum
}


const sum = findSum()
console.log("Sum: ", sum)

//console.log(`Sum: ${data.reduce((acc, val) => acc + val)}`)

