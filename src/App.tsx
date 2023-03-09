import React, { useState } from 'react'

import * as A from './style'

const App = () => {
	const [peso, setPeso] = useState('');
	const [altura, setAltura] = useState('');
	const [msg, setMsg] = useState('');

	function calc() {
		if(isNaN(Number(altura)) || isNaN(Number(peso))) return

		const alt = Number(altura) / 100;
		const imc = Number(peso) / (alt * alt);

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
				<input
					type='range'
					min={10}
					max={500}
					placeholder='Peso em (kg)'
					value={peso}
					onChange={(e) => {
						if (isNaN(Number(e.target.value))) setPeso('')
						else setPeso(e.target.value)
					}}
				/>

				<input
					type='range'
					min={50}
					max={300}
					placeholder='Altura em (cm)'
					value={altura}
					onChange={(e) => {
						if (isNaN(Number(e.target.value))) setAltura('')
						else setAltura(e.target.value)
					}}
				/>
				<output>24</output>

				<button onClick={calc}>Calcular</button>
			</A.AppInputArea>

			<h2>{msg}</h2>
		</A.AppScreen>
	)
}

export default App