import React, { useState } from 'react'
import charactersList, { filterByHouse, getAllHouses } from './charactersList'
import "./characters.style.css";

const initialHousesState = getAllHouses();
let houseName = "All",characters=charactersList,myListHouses;

function Characters() {

  const [houses, setHouses] = useState(initialHousesState);

  /**
   * Toggles the active state of the given house name
   * @param {string} houseName 
   */
  const toggleHouseActive = (houseName) => {
    setHouses(state => state.map(item => 
      (item.name !== houseName) ? item : {...item, active: !item.active }
    ))

  
  }

  const handleClick = (e) => {
    houseName = e.target.name

    setHouses(initialHousesState);

    if (houseName === "All") {
      // dislay all characters
      const myArray =charactersList;

      characters=charactersList
      myListHouses = myArray.map((item) => <p>{item}</p>)
   
      return myListHouses;
      
    }

    toggleHouseActive(houseName)

    // display all characters of active house
    characters = filterByHouse(houseName);
  //  console.log(characters)
   
  }

  return (
    <div className="container">
      <div className="menu">
        <h4>Houses</h4>
        <div className="houses">
          {houses?.map((house) => (
            <button 
              key={house.name}
              name={house.name} 
              className={house.active ? "active" : ""}
              onClick={handleClick}
            >
              {house.name}
            </button>)
          )}
        </div>


        <h2>{houseName}</h2>        
        {characters?.map((character) => (
      <div key={character.id}>       
      <h4>{character.fullName}</h4>
      <img  src={character.imageUrl} alt="" />
      </div>
      )
        )}
        </div>
    </div>
  )
}

export default Characters