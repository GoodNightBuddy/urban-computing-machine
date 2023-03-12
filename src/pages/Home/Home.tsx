import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './Home.module.css'
import InputField from "../../components/InputField/InputField";
import HomeImage from '../../assets/HomeImage.png'
import CharacterList from "../../components/CharacterList/CharacterList";
import {useAppDispatch, useAppSelector} from "../../hooks";
import Loader from '../../components/Loader/Loader'
import {filterByName, orderCharacters} from "../../utils";
import {setFilteredCharacters} from "../../store/reducers/characters/charactersSlice";
import Login from "../../components/Auth/Login/Login";


const Home = () => {
    const {isLoading, error, characters, filteredCharacters, inputValue} = useAppSelector(state => state.characters)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(inputValue)

    useEffect(() => {
        if(characters.length > 0){
            if(!filteredCharacters.length){
                dispatch(setFilteredCharacters({characters: orderCharacters(characters), value: ''}))
            }
        }
    }, [characters, dispatch])

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        dispatch(setFilteredCharacters({characters: orderCharacters(
            filterByName(e.target.value, characters)), value: e.target.value}))
    }

    return (
        <div className={styles.home}>
            {
                error ? <div>Error...</div> : (isLoading || !filteredCharacters) ? <Loader/> :
                    <>
                        <Login/>
                        <img className={styles.homeImage} src={HomeImage} alt="Home"/>
                        <InputField value={value} onChange={onInputChange}/>
                        <CharacterList characters={filteredCharacters}/>
                    </>
            }
        </div>
    );
};

export default Home;