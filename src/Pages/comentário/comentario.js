import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO-do-Batman.jpg'
import './style.css'

function Comentario (){
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
            <div className="titulo">
        <h1>Alguns Feddbacks sobre o Filme</h1>
    </div>

    <div className="paizao">
    <div className="container primeiro">
        <img src="https://www.itanagra.ba.gov.br/admin/equipe/6398afed3ddad.jpg"/>
        <p className="animal">
            Daniel Barral
        </p>
        <p>
            Filme sensacional. Foi um dos melhores filmes de heróis que já assisti. Robert Pattinson ficou incrível e combina muito bem com o personagem. Parabéns Matt Reeves!!
        </p>
        <p className="meiao">
            Daniel Barral
        </p>
    </div> 
    {/*Comentário 2*/}
    <div className="container">
        <img src="https://www.itanagra.ba.gov.br/admin/equipe/6398afed3ddad.jpg"/>
        <p className="animal">
            Nelson J
        </p>
        <p className="comentario2">
            Excelente roteiro, ator principal e coadjuvantes. Pattinson manda bem, embora eu mesmo não esperasse, sombrio, rústico, refém de Alfred e Gordon como figuras paternas e morais. O filme o mostra evoluindo da vingança para a esperança, uma Mulher Gato muito determinada e um vilão de pimeira, o Charada e a expectativa de ascenção do Pinguim. Não perca! Nada cansativo. Boas recordações do Batman grande detetive furtivo dos anos 60 que aprisionava e embolava os capangas dos vilões,mas desta vez nada pop.
        </p>
        <p className="meiao">
            Nelson J
            </p>
    </div> 
     {/*comentário 3*/}
    <div className="container">
        <img src="https://www.itanagra.ba.gov.br/admin/equipe/6398afed3ddad.jpg"/>
        <p className="animal">
            Michelle A
        </p>
        <p className="comentario3">
            Filme emocionante do início ao fim, com uma cena de perseguição de tirar o fôlego. A atuação do Robert foi muito boa, realmente passou um ar sombrio. Lembrando que a narrativa acontece no início da transformação do Batman, sem carros e aviões cheio de tecnologia, mas ficou bacana assim. Ele apanhou muito o que deixa o personagem mais "real", mas bateu demais. A interpretação do charada também foi sensacional. Espero que tenha continuação.
        </p>
        <p className="meiao">
            Michelle A
        </p>
    </div> 
     {/* comentário 4*/}
    <div className="container quarto">
        <img src="https://www.itanagra.ba.gov.br/admin/equipe/6398afed3ddad.jpg"/>
        <p className="animal">
            Andrei Andrad
        </p>
        <p>
            Simplesmente um filmaço !!! quem critica e fala que é ruim nem deve ser gente...
        </p>
        <p className="meiao">
            Andrei Andrade
        </p>
    </div> 
     {/*comentario 5*/}
     <div className="container">
        <img src="https://www.itanagra.ba.gov.br/admin/equipe/6398afed3ddad.jpg"/>
        <p className="animal">
            Zorante
        </p>
        <p>
            Maravilhoso. Superou todas as expectativas. O Batman que sempre quisemos ver no cinema, diferente de todos os outros, profundo, almático, detetive, triste. Enfim, sem palavras. De longe um dos melhores filmes de super herói. Batman mais uma vez sendo arte.
        </p>
        <p className="meiao">
            Zorante
        </p>
    </div> 


   </div>
        </>
    )
}


export default Comentario