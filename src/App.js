import { useState } from 'react';
import './App.css';


function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [msg, setMsg] = useState('');

  function calc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMsg("Você está abaixo do seu peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMsg("Peso ideal! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setMsg("Você está levemente acima do seu peso! Seu IMC: " + imc.toFixed(2))
    }else{
      setMsg("Você está levemente acima do seu peso! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu imc</span>

      <div className='area-input'>
        <input type="text" placeholder='Peso em (kg)' value={peso} onChange={(e) => setPeso(e.target.value)} />

        <input type="text" placeholder='Altura em (cm)' value={altura} onChange={(e) => setAltura(e.target.value)} />

        <button onClick={calc}>Calcular</button>
      </div>

      <h2>{msg}</h2>
    </div>
  );
}

export default App;
