import { useState } from "react"

function Contador() {

  //uma variavel chamada valor, com uma função chamada setValor
  //useState(0) serve para monstrar o valor/estado inicial dessa variavel
const [valor, setValor] = useState(0);  


//função chamada handleClick()
//quando ela for chamada, ela aciona a função setValor e adiciona mais 1 a variavel valor 
function handleClick(){ // handle -> lidar
 
  setValor(valor + 1)
}



// aqui retornamos os intens dessa função e tambem temos um botão que chama a função handClick
//quando o botão é clicado ele ativa a função handleClick e adiciona mais um a variavel valor
  return (
    <div>
      <h2>Componente Contador</h2>
      <p>o valor é:  {valor}</p>
      <button onClick={handleClick}> Adicionar 1</button>
    </div>
  )
}

export default Contador