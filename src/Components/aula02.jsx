import React from 'react'

function Profile({name, lastname, idade}) {

	return(
        <div>
            <p>Bem vindo: {name} {lastname}</p>
            
            {idade ? <p>{idade}</p> : <p>Erro, não conseguiu ler a idade</p> }
    
        </div>

	)
}

export default Profile