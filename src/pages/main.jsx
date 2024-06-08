import React from 'react'
import './main.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Pessoas from '../Components/Pessoas'


function Main() {
	return(
		<div>
			<Header/>
            <Pessoas/>
			<div className='main-content'>
				<h1>Alguma merda</h1>
			<Footer/>
			</div>
		</div>
	)
}


export default  Main 