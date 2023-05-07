import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO-do-Batman.jpg'
import './style.css'


function Fotografia (){
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
    
      
        
       <section className="banner" id="imagem" >
       
       <aside  className="descricao-imagem">Seja Bem-Vindo a Galeria de Fotos  do Batman </aside>
      </section>




      <div className="container-do-card">
           <div className="a12">
               <div className="fundos1 animacao"></div>
               <div className="fundos2 animacao"></div>
               <div className="fundos3 animacao"></div>
               <div className="fundos4 animacao"></div>
               <div className="fundos5 animacao"></div>
               <div className="fundos6 animacao"></div>
           </div>
          
      </div>

      <footer>
       
       <nav className="rodape-navegar">
           <ul className="rodape-lista">
               <a href="./index.html">
                   <li>Home</li>
               </a>
           </ul>
       </nav>

   </footer>
   </>

    )
}


export default Fotografia