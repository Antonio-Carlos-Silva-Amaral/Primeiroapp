import React, { useContext } from 'react'
import { UserContext1 } from '../../contexts/useContexts'

function Profile (){

    const {login} = useContext(UserContext1)

    return(

        <div>
           {login? 'dados do usuário': 'Faça seu login para ter acesso as informações'}
        </div>
    )
}

export default Profile