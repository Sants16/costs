import React from 'react';
import styles from './Select.module.css'

const Select = ({text, name, options, handleOnChange, value}) => {
    return ( 
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
            <option>Selecione uma opção</option>
            {options.map((option) => ( //usamos o () inves de {} pois queremos renderizar um jsx para cada opção do select
                <option 
                    value={option.id}
                    key={option.id}
                >
                    {option.name}
                </option>
            ))}
        </select>
    </div> 
);
}
 
export default Select;