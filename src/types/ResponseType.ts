import {Character} from "./CharacterType";

export interface CharacterResponse{
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    },
    results: Character[];
}