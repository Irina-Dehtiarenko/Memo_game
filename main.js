const colors = ['red', 'red', 'blue', 'blue', 'yellow', 'yellow', 'green', 'green', 'brown', 'brown', 'gray', 'gray', 'violet', 'violet', 'lightgreen', 'lightgreen', 'cadetblue', 'cadetblue']

let divs = [...document.querySelectorAll('div')]
let activeCard = ''
let activeCards = []

const gamePairs = colors.length / 2
let gameResult = 0
const startTime = new Date().getTime();

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
		divs.forEach(divColor => divColor.removeEventListener('click', showColor))

		activeCards.push(activeCard)
	}

	setTimeout(() => {

		if (activeCards[0].className === activeCards[1].className) {
			activeCards.forEach(element => element.classList.add('off'))

			divs = divs.filter(div => {
				return !div.classList.contains("off")
			})

			gameResult++

			if (gameResult === gamePairs) {
				const endTime = new Date().getTime()

				const gameTime = Math.round((endTime - startTime) / 1000)

				alert(`Wygraleś! Twój czas to ${gameTime} sekund(y)`)

				location.reload()
			}

		} else {
			activeCards.forEach(element => element.classList.add('hidden'))
		}
		activeCard = ''
		activeCards = []


		divs.forEach(divColor => divColor.addEventListener('click', showColor))

	}, 1000)

}

const init = () => {

	divs.forEach(divColor => {
		const index = Math.floor(Math.random() * colors.length)
		divColor.classList.add(colors[index])
		colors.splice(index, 1)
	})


	setTimeout(() => {
		divs.forEach(divColor => {
			divColor.classList.add('hidden')

			divColor.addEventListener('click', showColor)
		})

	}, 1500)

}


init()