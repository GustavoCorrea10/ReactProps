import { useEffect, useState } from "react";


//função chamada Tarefa
function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('Tarefa pendente');

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