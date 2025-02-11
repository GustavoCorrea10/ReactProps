//parametros ou props do home
//titulo e texto

interface homeProps {
  titulo:string;
  texto: string;
}



function Home(props: homeProps) {
  return (
    //quando usamos {} dentro de uma tag HTML, estamos indicando que o que vai dentro da chaves é uma logica JS
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  )
}

export default Home