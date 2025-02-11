import { useState } from "react"

function Contador() {

  //logica do componente
const [valor, setValor] = useState(0);  // igual a " valor = 0 "

function handleClick(){ // handle -> lidar
  //chama a função setValor e atualiza o valor com + 1
  //a mesma coisa que valor++
  setValor(valor + 1)
}
  return (
    <div>
      <h2>Componente Contador</h2>
      <p></p>
      <button onClick={handleClick}> Adicionar 1</button>
      
      </div>
  )
}

export default Contador