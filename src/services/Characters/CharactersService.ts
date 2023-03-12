import {CharacterResponse} from "../../types/ResponseType";
import {Character} from "../../types/CharacterType";

export default class CharactersService {
    static async getCharacters(): Promise<CharacterResponse>{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        return data
    }

    static async getCharacterById(characterId: number): Promise<Character>{
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        const data = await response.json()
        return data
    }
}