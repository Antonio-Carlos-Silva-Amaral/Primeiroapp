import React, { lazy, Suspense, useState} from 'react'
import Heder from '../../components/Header/header'
import './style.css'
import Video from '../../assets/videodobatma.mp4'
import Cards from '../../components/cards'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO-do-Batman.jpg'


function Home(){

    


    
    

    return(
        <>

            <Heder />

            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                        <video controls className='trailer-video'>
                            <source src={Video}/>
                            Seu navegador não possuí suporte para video
                        </video>
                    
                    <div id='sinopse'>
                        <p className='description'> Após dois anos espreitando as ruas como Batman, Bruce Wayne se Encontra nas profundezas mais sombrias de Gotham City. Com Poucos aliados confiáveis, o vigilante solitário se estabelece como a Personificação da vingança para a população.
                        </p>
                        <button className='buton'>Comprar ingresso</button>
                    </div>
                </div>
            </div>

            <Cards/>

            <footer>
        <img style={{objectFit:'contain'}} id="logo" src={Logo}/>
        <spam>Todos os direitos reservados ©</spam>
        <spam>Desenvolvido por: Antônio Carlos</spam>

        <nav class="footer-navegar">
            <ul class="footer-lista"> 
            
            <Link style={{textDecoration: 'none'}} to='/'>
            <li >Home</li>
            </Link>
            
            <Link style={{textDecoration: 'none'}}  to='/contato'>
            <li>Contato</li>
            </Link>
            <Link style={{textDecoration: 'none'}}  to='/foto'>
            <li>Fotos</li>
            </Link>
            <Link to='/comentario'>
            <li >Comentário</li>
            </Link>
            
          
            </ul>
            
        </nav>
    </footer>
        
        </>
    )
}


export default Home