import React, { useContext, useEffect } from "react";
import { StyledAside } from "../styles/containers/Menu";
import { AppContext } from "../context/Appcontext";
import { state,toogleInformation,addToCharacterById } from "../hooks/useGetCharacters"
import { MenuItem } from "../components/MenuItem/MenuItem";


const Menu = () => {
    const {state,toogleInformation,addToCharacterById,setToogleInformation}=useContext(AppContext);
    useEffect(() => {
        if(!toogleInformation){
            addToCharacterById(state.characters[0]);
        }
    },[state]);
    const handletoAddCharacter = person => {
        addToCharacterById(person);
        setToogleInformation(true);
    }
    return(
        <StyledAside>
            <h1>History</h1>
            {state.characters.length< 2 ? <h1>No se ha cargado ningún personaje</h1>:null}
            {state && state.characters.map(character => {
                return character.name ? <MenuItem  character={character} key={`History${character.id}`} handleClick={handletoAddCharacter}/>:null
            })}
            
        </StyledAside>
    )
}

export {Menu};