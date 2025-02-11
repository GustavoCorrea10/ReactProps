import { useEffect, useState } from "react";


//função chamada Tarefa
function Tarefa() {

  //variavel chamada completed, com uma função chamada setCompleted e o estado/valor inicial == false
  const [completed, setCompleted] = useState(false);
  //variavel chamada tarefa, com uma função chamada setTarefa e o estado/valor inicial == "tarefa pendente"
  const [tarefa, setTarefa] = useState('Tarefa pendente');



  //useEffect fica de olho no  [completed]
  //ela tem uma arrow function
  //ele vai ser acionado quando clicar no botão
  useEffect(() => {
  //se o completed for true ele exibe a mensagem
    if (completed == true) { 
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed]);// aqui é pra ficar observando a variavel completed
  //então ele fica observando a variavel completed, e quando o botão for clicado, ele converte essa variavel que é false em true
  //e aundo ele for true, ele exibe a mensagem do setTarfea, que vai ser editado dentro do if


  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
    </div>
  )
}

export default Tarefa