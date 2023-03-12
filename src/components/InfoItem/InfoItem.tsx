import React, {FC} from 'react';
import { Character } from '../../types/CharacterType';
import { capitalizeFirstLetter } from '../../utils';
import styles from './InfoItem.module.css'

type InfoItemProps = {
    type: keyof Omit<Character, 'id' | 'location' | 'image'>;
    character: Character
}

const InfoItem: FC<InfoItemProps> = ({type, character}) => {
    const name = capitalizeFirstLetter(type)
    const value =  type === 'origin' ? character[type].name : character[type]
    return (
        <div className={styles.infoItem}>
            <div className={styles.type}>{name}</div>
            <div className={styles.value}>{value}</div>
            <div className={styles.line}/>
        </div>
    );
};

export default InfoItem;