import React, {ChangeEvent, FC} from 'react';
import styles from './InputField.module.css'
import SearchIcon from '@mui/icons-material/Search';

type InputFieldProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({value, onChange}) => {
    return (
        <div className={styles.inputWrapper}>
            <SearchIcon className={styles.searchIcon}/>
            <input value={value} onChange={onChange} placeholder={'Filter by name...'} type="text" className={styles.input}/>
        </div>
    );
};

export default InputField;