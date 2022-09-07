import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import { CharacterItem } from '../../components/CharacterItem/CharacterItem';
import { prettyDOM} from '@testing-library/dom';

describe('<CharacterItem />', () => {
    test('Show name in the header', () => {
        const data = {
            created: "2017-11-04T18:48:46.250Z",
            gender: "Male",
            id: "1",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            location: {__typename: 'Location', name: 'Citadel of Ricks'}, 
            name: "Rick Sanchez",
            origin: {__typename: 'Location', dimension: 'Dimension C-137'},
            species: "Human",
            status: "Alive",
        
        }
        const characteritem = render( <CharacterItem character={data}/>);
        const headerElemnt = characteritem.getByText('Rick Sanchez');
        expect(headerElemnt).toBeInTheDocument();
        
    });
});