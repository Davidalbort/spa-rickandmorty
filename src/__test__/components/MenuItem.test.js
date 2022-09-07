import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import { fireEvent, prettyDOM } from '@testing-library/dom';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import { AppContext } from '../../context/Appcontext';

describe('<MenuItem />', () => {
    let dataMock = {
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
    
    
    test('renders of component', () => {
         
        render(<MenuItem character={dataMock} />)
        const name = screen.getByText('Rick Sanchez');
        expect(name).toBeInTheDocument()

    });
    test('click on button calls event handler once', () =>{
        const mockHandler = jest.fn();
        render(<MenuItem character={dataMock} handleClick={mockHandler} />);
        const button = screen.getByText('VIEW');
        fireEvent.click(button);
        expect(mockHandler).toBeCalledTimes(1)
    });
});