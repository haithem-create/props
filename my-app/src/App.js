import './App.css';
import ProfileComponent from './profile/profileComponent';
function App() {
  const handleName=()=>{
    alert(' Welcome Leonardo DiCaprio Profile');
  }
  return (
    <div className="App">
      <h1> Props </h1>
      <ProfileComponent fullName={"Leonardo DiCaprio"} 
            handleName={handleName}
            profession ={"Actor"}
            bio ={"Grandissant dans les quartiers de Los Angeles tels que Los Feliz puis Hollywood, le jeune Leonardo DiCaprio prend comme modèle le fils de sa belle-mère Peggy Ann Saunders, Adam Farrar, qui commence dès l'enfance une carrière d'acteur."}
            >  <img src={"/leo.jpg"} height={200} width ={200} alt ="leonardo"/>
    
            </ProfileComponent>

          
    </div>
  );
}

export default App;