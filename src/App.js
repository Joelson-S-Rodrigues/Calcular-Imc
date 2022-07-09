import { useState } from 'react';

import './app.css';

export default function App() {
  const [peso, setPeso] = useState('');                       //O primeiro valor, peso, é o nosso estado atual.
  const [altura, setAltura] = useState('');            //O segundo valor, setAltura, é a função que é usada para atualizar nosso estado.
                                                      //Por fim, definimos o estado inicial como uma string vazia:useState("")
  const [mensagem, setMensagem] = useState(''); 

  function calcularImc() {
   const alt = altura / 100;
   const imc = peso / (alt * alt);

   if(imc < 18.6) {
    setMensagem("Você está abaixo do peso! Seu IMC:" + imc.toFixed(2))
   }
   else if(imc >= 18.6 && imc < 24.9){
    setMensagem("Peso ideal ! Seu IMC:" + imc.toFixed(2))
   }
   else if(imc >=24.9 && imc < 34.9) {
    setMensagem("Você está levemente acima do peso! Seu IMC:" + imc.toFixed(2))
   }
   else if(imc >34.9){
  setMensagem("Cuidado, você esta acima do peso! Seu IMC:" + imc.toFixed(2))
   }
  }


  return (
    <div className="app">

      <h1> Calcular IMC</h1>

      <span> Vamos calcular seu Imc </span>

      <div className="area-input">

        <input type="text"
          placeholder="Peso em (kg) Ex: 90 "
          value={peso}
          onChange={ (event) => setPeso(event.target.value)}
        />

        <input type="text"
          placeholder=" Altura em (cm) Ex: 170 "
          value={altura}
          onChange={ (event) => setAltura(event.target.value)}
        />

  
        <button onClick={calcularImc} >
          Calcular
        </button>

        


      </div>

      <h2>{mensagem} </h2>
    </div>
  )
}