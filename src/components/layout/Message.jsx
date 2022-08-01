import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Message.module.css'
const Message = ({ type, msg }) => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!msg) { //se a mensagem não existe o jsx da mensagem não aparece
            setVisible(false)
            return
        }

        setVisible(true) //se a mensagem existir o jsx da mensagem aparece

        //timer que ira eliminar a mensagem após 3 segundos
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        //finaliza o timer
        return () => clearTimeout(timer)

    }, [msg])

    return ( 
        <>
        {/* nesse caso foi utilizado fragment para criar uma condição para o elemento pai, no caso a div, aparecer. O fragment tambem serve para usarmos logicas como essas para elementos pais */}
            {visible && (
            <div className={`${styles.message} ${styles[type]}`}>
                {msg}
            </div>
            )}
        </>
     );
}
 
export default Message;