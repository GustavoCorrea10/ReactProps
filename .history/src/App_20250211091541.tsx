import './App.css'
import Home from './pages/home/Home'

function App() {

let turma: string = "turma 79"

  return (
    <>
        <Home 
        titulo='Componente Home'
         texto='Este é o componente Home, que recebe props.'
         />
    </>
  )
}

export default App
