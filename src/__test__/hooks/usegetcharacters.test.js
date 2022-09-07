import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useInitialState } from "../../hooks/useGetCharacters";

describe('Test of useGetChararcters', ()=> {
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
    test('AddToCharacter must add a character', () => {
        const {result}= renderHook(() => useInitialState())
        act(() => {
            result.current.addToCharacter(dataMock)
        })
        expect(result.current.state.characters.length).toEqual(1)
    });
    test('AddToCharacter must be empty when add somethin empty',() => {
        const {result}= renderHook(() => useInitialState({}))
        act(() => {
            result.current.addToCharacter()
        })
        expect(result.current.state.characters.length).toEqual(0)
    });
    test('AddToCharacterById must add a character', () => {
        const {result}= renderHook(() => useInitialState())
        act(() => {
            result.current.addToCharacterById(dataMock)
        })
        expect(result.current.viewCharacter.name).toBe('Rick Sanchez')
    });
    test('AAddToCharacterById must be empty when add somethin empty',() => {
        const {result}= renderHook(() => useInitialState({}))
        act(() => {
            result.current.addToCharacterById({})
        })
        expect(result.current.viewCharacter).toEqual({})
    });
});