import { useState } from "react";
import Home from "../home/Home";

function Login() {

    //variavel chamada isLogged, com um função chamada setIsLogged
    //useState é para monstrar o valor/estado inicail da variavel
    const [isLogged, setIsLogged] = useState(false);

    
    if (isLogged == true) {
        return <Home titulo="Componente Home" texto="Bem-vindo de Volta!" />;
    }

    return (
        <>

            <div>
                <h2>Componente Login</h2>
                <button onClick={() => setIsLogged(true)}>Entrar</button>
            </div>


        </>
    )
}

export default Login