import { useEffect, useState } from "react";


//função chamada Tarefa
function Tarefa() {

  //variavel chamada completed, com uma função chamada setCompleted e o estado/valor inicial == false
  const [completed, setCompleted] = useState(false);
  //variavel chamada tarefa, com uma função chamada setTarefa e o estado/valor inicial == "tarefa pendente"
  const [tarefa, setTarefa] = useState('Tarefa pendente');

  //useEffect fica de olho no  [completed]
  useEffect(() => {
    if (completed == true) { 
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed]);


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