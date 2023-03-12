import {Character} from "../../../types/CharacterType";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCharacters} from "./actionCreators";

const KEY = "redux";
export function loadState() {
    try {
        const serializedState = localStorage.getItem(KEY);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

export async function saveState(state: any) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(KEY, serializedState);
    } catch (e) {
    }
}

interface CharactersState{
    characters: Character[];
    filteredCharacters: Character[];
    selectedCharacter: Character;
    inputValue: string;
    isLoading: boolean;
    error: string;
}

const initialState: CharactersState = {
    characters: [],
    filteredCharacters: [],
    selectedCharacter: {} as Character,
    inputValue: '',
    isLoading: true,
    error: ''
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setSelectedCharacter(state: CharactersState, action: PayloadAction<number>){
            const foundCharacter = state.characters.find(character => character.id === action.payload)
            if(foundCharacter){
                state.selectedCharacter = foundCharacter
            }
        },
        setFilteredCharacters(state: CharactersState, action: PayloadAction<{characters: Character[], value: string}>){
            state.filteredCharacters = action.payload.characters
            state.inputValue = action.payload.value
        }
    },
    extraReducers: {
        [fetchCharacters.pending.type]: (state: CharactersState, action) => {
            state.characters = []
            state.error = ''
            state.isLoading = true
        },
        [fetchCharacters.fulfilled.type]: (state: CharactersState, action: PayloadAction<{data: Character[]}>) => {
            state.isLoading = false
            state.characters = action.payload.data
        },
        [fetchCharacters.rejected.type]: (state: CharactersState, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default charactersSlice.reducer

export const {
    setSelectedCharacter,
    setFilteredCharacters
} = charactersSlice.actions