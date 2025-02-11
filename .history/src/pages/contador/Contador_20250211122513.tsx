import { useState } from "react"

function Contador() {

  //uma variavel chamada valor, com uma função chamada setValor
  //useState(0) serve para monstrar o valor/estado inicial dessa variavel
const [valor, setValor] = useState(0);  

function handleClick(){ // handle -> lidar
  //chama a função setValor e atualiza o valor com + 1
  //a mesma coisa que valor++
  setValor(valor + 1)
}
  return (
    <div>
      <h2>Componente Contador</h2>
      <p>o valor é:  {valor}</p>
      <button onClick={handleClick}> Adicionar 1</button>
    </div>
  )
}

export default Contador