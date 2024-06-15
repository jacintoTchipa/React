
import { useContext , useEffect} from 'react';
import './App.css';
import Main_01 from './pages/main02';
import Projeto from './pages/page';
import { UserContext, UserProvider } from './context/userContext';
import Pessoas from './Components/Pessoas';



function App() {

  const{pessoas, setPessoas} = useContext(UserContext)
  
  useEffect(() => { 
		const fetchUsers = async () => {
			const response = await fetch('/pessoas.json');
				const data = await response.json();
				console.log(data)
			  	setPessoas(data);
		  };
		fetchUsers();
		}, [])
 
    
  return (
    <div className="App">

    <Main_01 />

    <Pessoas pessoas = {pessoas}/>
    
    </div>
  );
}

function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
export default AppWrapper;


