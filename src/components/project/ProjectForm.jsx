import React from 'react';
import { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'

const ProjectForm = ({ btnText }) => {

    const [categories, setCategories] = useState([])

   useEffect(() => {
     //fizemos a requisição para o backend fake feito com o json-server (db.json que a nossa api/banco de dados)
     fetch("http://localhost:5000/categories", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json()) //pegamos a response do fetchApi e convertemos para json
    .then((data) => setCategories(data)) //pegamos a resp.json e a colocamos dentro do state das categories que foi definido como padrão um array vazio []
    .catch((erro) => console.log(erro)) //caso tenha um erro ele sera exibido no console
   }, []) //colocamos o [] pq o useEffect espera um valor inicial para verificar se houve mudança, acredito que seja na mesma logica que o useState

    return ( 
        <form className={styles.form}>
            <Input
                type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto'
            />
            <Input
                type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Insira o orçamento total'
            />
            <Select
                name='category_id'
                value='Selecione a categoria'
                options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
     );
}
 
export default ProjectForm;