import { useState } from "react"

function Contador() {

  //logica do componente
const [valor, setValor] = useState(0);  // igual a " valor = 0 "

function handleClick(){
  setValor(valor + 1)
}
  return (
    <div>Componente Contador</div>
  )
}

export default Contador