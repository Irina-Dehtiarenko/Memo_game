const colors = ['red', 'red', 'blue', 'blue', 'yellow', 'yellow', 'green', 'green', 'brown', 'brown', 'gray', 'gray', 'violet', 'violet', 'lightgreen', 'lightgreen', 'cadetblue', 'cadetblue']

let div = [...document.querySelectorAll('div')]//żeby ta zmienna była prawdziwą tablicą

let activeCard = ''
let activeCards = []

const showColor = (e) => {
	e.target.classList.remove('hidden')
	activeCard = e.target
	if (activeCard === activeCards[0]) {
		return
	}

	if (activeCards.length === 0) {
		activeCards.push(activeCard)
		return
	} else {
		div.forEach(divColor => divColor.removeEventListener('click', showColor))

		activeCards.push(activeCard)
		console.log(activeCards)
	}



}

const init = () => {

	div.forEach(divColor => {
		const index = Math.floor(Math.random() * colors.length)
		divColor.classList.add(colors[index])
		colors.splice(index, 1)
	})


	setTimeout(() => {
		div.forEach(divColor => {
			divColor.classList.add('hidden')

			divColor.addEventListener('click', showColor)
		})

	}, 1500)

}


init()