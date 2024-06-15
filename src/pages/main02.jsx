import React, { useContext, useEffect } from 'react'
import './main.css'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Pessoas from '../Components/Pessoas'
import Profile from '../Components/aula02'
import { UserContext } from '../context/userContext'


function Main_01() {
    const{pessoas, setPessoas}=useContext(UserContext)
    useEffect(() => { 
        const fetchUsers = async () => {
            const response = await fetch('/pessoas.json');
                const data = await response.json();
                console.log(data)
                  setPessoas(data);
          };
        fetchUsers();
        }, [])
    
	return(
		<div>
			<Header/>
         
			<div className='main-content'>

				<h1>Alguma merda</h1>

                <Profile name={'Tchipa'} lastname={'Cumena'} idade={30}/>
                <Pessoas pessoas={pessoas}/>

			<Footer/>

			</div>
		</div>
	)


    
    
}



export default  Main_01


