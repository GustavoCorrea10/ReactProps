//parametros ou props do home
//titulo e texto

//instanciando os objetos atraves da interface
interface homeProps {
  titulo:string;
  texto: string;
}


//função chamada home, onde tem o props como parametro
//props é do tipo homeProps
//então ele tera acesso aos objtos de homeProps
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