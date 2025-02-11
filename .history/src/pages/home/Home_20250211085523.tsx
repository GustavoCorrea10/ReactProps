//parametros ou props do home
//titulo e texto

interface homeProps {
  titulo:string;
  texto: string;
}



function Home(props: homeProps) {
  return (
    <div>Componente Home</div>
  )
}

export default Home