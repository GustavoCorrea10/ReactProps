﻿//parametros ou props do home
//titulo e texto

interface homeProps {
  titulo:string;
  texto: string;
}



function Home(props: homeProps) {
  return (
    <div>
      <h2>{props.texto}</h2>
      <h2>{props.titulo}</h2>
    </div>
  )
}

export default Home