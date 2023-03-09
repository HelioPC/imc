import React, { useState } from 'react'

import * as A from './style'

const App = () => {
	const [peso, setPeso] = useState(0);
	const [altura, setAltura] = useState(0);
	const [msg, setMsg] = useState('');

	function calc() {
		if (isNaN(Number(altura)) || isNaN(Number(peso))) return

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
			<h1 className='sm:text-5xl text-2xl text-center font-bold'>Calculadora IMC</h1>
			<span className='text-center'>Vamos calcular o seu imc</span>

			<A.AppInputArea>
				<div className='flex sm:flex-row flex-col items-center mt-5 gap-5'>
					<div className='flex items-center'>
						<span>Peso</span>
						<span>: {peso} kg</span>
					</div>
					<input
						type='range'
						min={0}
						max={500}
						placeholder='Peso em (kg)'
						value={peso}
						onChange={(e) => {
							if (msg) setMsg('')
							setPeso(Number(e.target.value))
						}}
					/>
				</div>

				<div className='flex sm:flex-row flex-col items-center mt-5 gap-5'>
					<div className='flex items-center'>
						<span>Altura</span>
						<span>: {altura} cm</span>
					</div>
					<input
						type='range'
						min={0}
						max={300}
						placeholder='Altura em (cm)'
						value={altura}
						onChange={(e) => {
							if (msg) setMsg('')
							setAltura(Number(e.target.value))
						}}
					/>
				</div>

				<button
					className={`
						hover:scale-[1.01] duration-300 origin-bottom
						${(altura > 0 && peso > 0) ? 'scale-100' : 'scale-0'}
					`}
					onClick={calc}
				>
					Calcular
				</button>
			</A.AppInputArea>

			<h2>{msg}</h2>
		</A.AppScreen>
	)
}

export default App