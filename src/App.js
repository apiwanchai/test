import React, { useState, useEffect  } from 'react'
import './App.css'
import cute from './cute.png'


const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

const SEARCHAPI ="http://localhost:3030/api/cards?limit=30&name=picha&type=normal";
const App = () => {
	const [pokemons, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredpokemon] = useState([]);
  const [isHovering,setIshovering] = useState(false)
  
  
  
  const url = "http://localhost:3030/api/cards/?_limit=20'"

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setPokemon(json.cards)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
    setFilteredpokemon(
      pokemons.filter((poke) =>
        poke.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    
  }, [search, pokemons]);
  
  

  
	

	return (
		<div className='app'>
      <h1 className='text'>My PokeDex</h1>
      <input type="text" className="form-control " placeholder="Find Poekmon" onChange={(e) => setSearch(e.target.value) }/>
      <div className = 'scoll'> 
      	{filteredPokemon.map((item) => (
				<div  className='flex box '   >
         <img  
                src={item.imageUrl}
                alt={item.id}
                className="img"
           />
        <div >
          <h1 >{item.name}</h1> 
          <div className='skill'>
          <h3 >HP:</h3>
          <div className='skillbar'>
            <div className='skillbar-hp'>
            </div>
          </div>
          </div>

          <div className='skill'>
          <h3 >Str:</h3>
          <div className='skillbar'>
            <div className='skillbar-hp'>
            </div>
          </div>
          </div>

          
          <div className='skill'>
          <h3 >Weak:</h3>
          <div className='skillbar'>
            <div className='skillbar-hp'>
            </div>
          </div>
          </div>
      
          <img  
                src={cute}
                alt={item.id}
                className="cute"
           />
          
				</div>
        <button className='text1'>ADD</button>
				</div>
			))}
      </div>
		</div>
	);
};

export default App;
