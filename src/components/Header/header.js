import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/LOGO-do-Batman.jpg'
import './style.css'


function Heder (){

    

  const navegarem = useNavigate()


    return(

       

      <header>
        <img id='logo' src={Logo}></img>
        <nav>
          <ul>
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
        </header>
    )
}



export default Heder