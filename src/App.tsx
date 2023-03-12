import React, {useEffect} from 'react';
import AppRoutes from "./components/Router/AppRoutes";
import {useAppDispatch} from "./hooks";
import {fetchCharacters} from "./store/reducers/characters/actionCreators";
import {store} from "./store";
import {debounce} from "debounce";
import {saveState} from "./store/reducers/characters/charactersSlice";

store.subscribe(
    debounce(() => {
        saveState(store.getState());
    }, 800)
);

const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])
    return <AppRoutes/>
};

export default App;