/*   goal: return tags in section tags and keys:values in div tags 

<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section>

*/
const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

// create function
const htmlInput = (computer) => {
    // use string interpolation to create the format inside the function 
    const objectToHtmlInterpolation = `<section id="computer--${computer.id}">\n
	\t<h1>Apple ${computer.make}</h1>\n
	\t<div>Model: ${computer.model}</div>\n
	\t<div>Memory: ${computer.specs.memory}</div>\n
	\t<div>Hard drive space: ${computer.specs.hardDrive}</div>\n
	\t<div>Processor speed: ${computer.specs.processor}</div>\n
</section>`
return objectToHtmlInterpolation

}

// create variable to hold function's output
const htmlOutput = htmlInput(computer)

console.log(htmlOutput)
