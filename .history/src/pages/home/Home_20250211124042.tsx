//parametros ou props do home
//titulo e texto

//instanciando os objetos atraves da interface
interface homeProps {
  titulo:string;
  texto: string;
}


//função chamada home, onde tem o props como parametro
//props é do tipo homeProps
//então ele tera acesso aos objtos de homeProps(titulo e texto)
function Home(props: homeProps) {
  return (


    //no App.tsx quando fomos chamar o <Home/> teremos que passar o valor de titulo e texto
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  )
}


export default Home