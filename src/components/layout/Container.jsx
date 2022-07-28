import styles from './Container.module.css'

function Container(props) {
    return ( 
        //serve para mostrar onde o conteudo sera exibido, é somente um elemento de exibição
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
     );
}

export default Container;