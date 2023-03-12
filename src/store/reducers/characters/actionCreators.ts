import {createAsyncThunk} from "@reduxjs/toolkit";
import CharactersService from "../../../services/Characters/CharactersService";

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters',
    async (args, thunkAPI) => {
    try{
        const data = await CharactersService.getCharacters()
        return {data: data.results}
    }catch(e){
        return thunkAPI.rejectWithValue('Error while fetching characters.')
    }
})