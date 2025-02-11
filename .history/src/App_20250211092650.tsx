import './App.css'
import Home from './pages/home/Home'

function App() {

let usuario: string = "turma 79"

  return (
    <>
        <Home 
        titulo={usuario}
         texto='Este é o componente Home, que recebe props.'
         />

         <Home 
         texto='Vai corinthians'
         titulo='corinthians'
         />
    </>
  )
}

export default App
