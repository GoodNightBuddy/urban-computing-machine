import React, {FC} from 'react';
import styles from './CharacterItem.module.css'
import {Character} from "../../types/CharacterType";
import {useNavigate} from "react-router-dom";

const CharacterItem: FC<{character: Character}> = ({character}) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`characters/${character.id}`)} className={styles.item}>
            <img src={character.image} alt="Card" className={styles.itemImage}/>
            <div className={styles.itemDescription}>
                <h2 className={styles.name}>{character.name}</h2>
                <div className={styles.species}>{character.species}</div>
            </div>
        </div>
    );
};

export default CharacterItem;