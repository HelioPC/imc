import React, { useState } from 'react'

import * as A from './style'

const App = () => {
	const [peso, setPeso] = useState<number>();
	const [altura, setAltura] = useState<number>();
	const [msg, setMsg] = useState('');

	function calc() {
		if(!altura || !peso) return

		const alt = altura / 100;
		const imc = peso / (alt * alt);

		if (imc < 18.6) {
			setMsg('Você está abaixo do seu peso! Seu IMC: ' + imc.toFixed(2))
		} else if (imc >= 18.6 && imc < 24.9) {
			setMsg('Peso ideal! Seu IMC: ' + imc.toFixed(2))
		} else if (imc >= 24.9 && imc < 34.9) {
			setMsg('Você está levemente acima do seu peso! Seu IMC: ' + imc.toFixed(2))
		} else {
			setMsg('Você está levemente acima do seu peso! Seu IMC: ' + imc.toFixed(2))
		}
	}

	return (
		<A.AppScreen>
			<h1>Calculadora IMC</h1>
			<span>Vamos calcular o seu imc</span>

			<A.AppInputArea>
				<input type='number' placeholder='Peso em (kg)' value={peso} onChange={(e) => setPeso(parseFloat(e.target.value))} />

				<input type='number' placeholder='Altura em (cm)' value={altura} onChange={(e) => setAltura(parseFloat(e.target.value))} />

				<button onClick={calc}>Calcular</button>
			</A.AppInputArea>

			<h2>{msg}</h2>
		</A.AppScreen>
	)
}

export default App