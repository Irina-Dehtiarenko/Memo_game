const colors = ['red', 'red', 'blue', 'blue', 'yellow', 'yellow', 'green', 'green', 'brown', 'brown', 'gray', 'gray', 'violet', 'violet', 'lightgreen', 'lightgreen', 'cadetblue', 'cadetblue']

let divs = [...document.querySelectorAll('div')]//żeby ta zmienna była prawdziwą tablicą

let activeCard = ''
let activeCards = []

const gamePairs = colors.length / 2
let gameResult = 0
const startTime = new Date().getTime();// to jest objekt, sama Date - to pokazuje aktualny czas i cała date, ale metoda - getTime() - konwertuje to do milisekund
console.log(startTime)

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
			console.log('Win')
			activeCards.forEach(element => element.classList.add('off'))


			//FUNKCJA W METODZIE FILTER()M= MUSI COŚ ZWRACAĆ, CZYLI 'RETURN'(ale jeżeli napisać jednoliniowo i bez klamrek, to automatycznie to zwróci nasz kod):
			// divs = divs.filter(div => !div.classList.contains("off"))
			divs = divs.filter(div => {
				return !div.classList.contains("off")
			})

			gameResult++

			console.log(gameResult)
			if (gameResult === gamePairs) {
				console.log('Wygrana')
				const endTime = new Date().getTime()

				const gameTime = Math.round((endTime - startTime) / 1000)

				alert(`Wygraleś! Twój czas to ${gameTime} sekund(y)`)

				location.reload()//odświeża stronę - graj od początku
			}

		} else {
			console.log('Lose')

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