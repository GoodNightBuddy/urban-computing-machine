import React, {FC} from 'react';
import styles from './CharacterList.module.css'
import CharacterItem from "../CharacterItem/CharacterItem";
import {Character} from "../../types/CharacterType";

const CharacterList: FC<{characters: Character[]}> = ({characters}) => {
    return (
        <div className={styles.list}>
            {
                characters.map(character => <CharacterItem key={character.id} character={character}/>)
            }
        </div>
    );
};

export default CharacterList;