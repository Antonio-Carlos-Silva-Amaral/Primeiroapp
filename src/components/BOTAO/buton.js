import React from 'react'


function Botaodolaele({name,ativacao,evento,onClick}){
    return(
        <div className='containerdolaele'>
        <button onClick={()=> onClick(20)}  className={ativacao ? 'lanele' : 'cue'}>{name}</button>
        <span className='lanela'> tão salva </span>
        </div>
    )
}

export default Botaodolaele
