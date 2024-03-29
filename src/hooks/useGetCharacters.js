import { useState } from "react";

const initialState= {
    characters:[],
}

const useInitialState = () =>{
    const [state, setState]= useState(initialState);
    const [viewCharacter,setViewCharacter]=useState([]);
    const [toogleInformation, setToogleInformation]=useState(false);

    const addToCharacter= (payload) => {
        if(payload){
            setState({
                ...state,
                characters:[payload,...state.characters],
            })

        }
    }
    const addToCharacterById= (character) => {
        if(character){
            setViewCharacter(character);

        }
    }
    return {
        state,
        addToCharacter,
        addToCharacterById,
        viewCharacter,
        toogleInformation,
        setToogleInformation,


    }


}

export {useInitialState};