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

	setTimeout(() => {

		if (activeCards[0].className === activeCards[1].className) {
			console.log('Win')
			activeCards.forEach(element => element.classList.add('off'))

		} else {
			console.log('Lose')

			activeCards.forEach(element => element.classList.add('hidden'))
		}
		activeCard = ''
		activeCards = []

		console.log(activeCard)
		console.log(activeCards.length)

		div.forEach(divColor => divColor.addEventListener('click', showColor))

	}, 1000)

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