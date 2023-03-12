import {Character} from "../types/CharacterType";

export const filterByName = (value: string, characters: Character[]) => {
    return characters.filter(character => {
        if(!value){
            return character
        }else if(character.name.toLowerCase().includes(value.toLowerCase())){
            return character
        }
    })
}

export const orderCharacters = (characters: Character[]) => {
    let charactersSorted = [...characters]
    charactersSorted.sort((a,b) => a.name.split(' ')[0] > b.name.split(' ')[0] ? 1 : -1)
    return charactersSorted
}

export const  capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }