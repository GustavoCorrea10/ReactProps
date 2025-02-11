import './App.css'
//import Home from './pages/home/Home'

function App() {

//let usuario: string = "turma 79"

return (
  <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
  </div>
)
}

export default App
