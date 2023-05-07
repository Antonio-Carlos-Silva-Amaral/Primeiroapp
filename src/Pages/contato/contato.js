import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO-do-Batman.jpg'
import './style.css'


function Contato(){
    return(
        <>
            <header>
            <img id="logo" src={Logo}/>
            <nav>
                <ul>
                        <Link to='/'>
                        <li>Home</li>
                        </Link>
                </ul>
            </nav>
            </header>
    
    <section className="banner" id="imagem">
        <aside className="descricao">Bem-vindo ao atendimento ao Clinte!</aside>
    </section>
    


    <div className="paragrafo">
        <p>
            Tem mais alguma dúvida ou sugestão? Entre em contato conosco preenchendo o 
            formulário abaixo, com suas informações e sua mensagem! Entraremos em contato
            o mais breve possível!!!
        </p>
    </div>

    <div className="formulario-e-imagem">
        <div className="formularios">
          <form>
            <label for="campo-de-nome">Nome:</label>
            <input type="text" name="Nome" id="campo-de-nome" required placeholder="Digite aqui seu nome"/><br></br>

            <label for="campo-de-email">Email:</label>
            <input type="email" name="Email" id="campo-de-email" required placeholder="Deixe seu email aqui!" /><br></br>

            <label for="campo-de-numero">Telefone para contato:</label>
            <input type="tel" name="numero" id="campo-de-numero" required placeholder="(xx) xxxxx-xxxx "/><br></br>

            <label for="duvidas">Deixe aqui sua dúvida ou sugestão:</label>
            <textarea name="duvidas"></textarea>

            <button>Enviar</button>
            </form>
        </div>
        <div className="fundo-img">
            
        </div>
    </div>

    <footer>
        
        <nav className="rodape-navegarr">
            <ul className="rodape-lista">
                     <Link to='/'>
                    <li>Home</li>
                    </Link>
            </ul>
             </nav>

     </footer>


          
        </>
    )
}


export default Contato