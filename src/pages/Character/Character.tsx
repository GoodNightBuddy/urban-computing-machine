import React, { useEffect } from 'react';
import styles from './Character.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoItem from "../../components/InfoItem/InfoItem";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Link, useParams } from "react-router-dom";
import { setSelectedCharacter } from "../../store/reducers/characters/charactersSlice";
import { displayTypes } from '../../types/DisplayTypes';

const Character = () => {
    const { selectedCharacter, characters } = useAppSelector(state => state.characters)
    const dispatch = useAppDispatch()
    const { characterId } = useParams()

    useEffect(() => {
        dispatch(setSelectedCharacter(Number(characterId)))
    }, [characterId, dispatch, characters])
    return (
        <div className={styles.character}>
            {Object.keys(selectedCharacter).length &&
                <>
                    <Link to={'/'} className={styles.backWrapper}>
                        <ArrowBackIcon className={styles.backIcon} />
                        <span>Go back</span>
                    </Link>
                    <img className={styles.characterImage} src={selectedCharacter.image} alt="Character image" />
                    <h1 className={styles.name}>{selectedCharacter.name}</h1>
                    <div className={styles.infoText}>Informations</div>
                    {displayTypes.map(type => <InfoItem type={type} character={selectedCharacter} key={type}/>)}
                </>
            }
        </div>
    );
};

export default Character;