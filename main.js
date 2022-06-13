const colors = ['red', 'red', 'blue', 'blue', 'yellow', 'yellow', 'green', 'green', 'brown', 'brown', 'gray', 'gray', 'violet', 'violet', 'lightgreen', 'lightgreen', 'cadetblue', 'cadetblue']

let div = [...document.querySelectorAll('div')]//żeby ta zmienna była prawdziwą tablicą

const init = () => {

	div.forEach(divColor => {
		const index = Math.floor(Math.random() * colors.length)
		divColor.classList.add(colors[index])
		colors.splice(index, 1)
	})


	setTimeout(() => {
		div.forEach(divColor => {
			divColor.classList.add('hidden')
		})
		//tutaj będzie nasłuchiwanie na lkiknięcie, na tym skończono
	}, 1500)

}


init()