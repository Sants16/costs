import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Message from '../layout/Message';
import Container from '../layout/Container'
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard';
import styles from './Projects.module.css'
const Projects = () => {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => { //aqui nesse caso so coloquei o setTimeout para poder ver o componente do loading funcionando pq localmente o carregamento das informações é bem rápido e não dá pra ver o loading funcionando
        setTimeout( () => {
            fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeProjects(id) { //pega todos os projetos que ja temos no bancdo de dados e exclui o que tem o id igual ao da requisição
        fetch(`http://localhost:500/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            // aqui nos filtramos que o novo valor de projects sera todos os projetos que tem o id diferente da requisição
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }

    return ( 
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/newproject' text='Criar projeto'/>
            </div>
            {message && <Message type='sucess' msg={message}/>}
            {projectMessage && <Message type='sucess' msg={projectMessage}/>}
            <Container customClass='start'>
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard 
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProjects}
                        />
                    ))
                }
                {!removeLoading && <Loading/>} {/*caso o valor de removeLoading seja true o componente Loading.jsx será exibido, o valor de removeLoading so sera true enquanto a requisição dos projetos que estão no banco de dados não for terminada */}
                {removeLoading && projects.length === 0 && (
                    <p>Não a projetos cadastrados!</p>
                )}
            </Container>
        </div>
     );
}
 
export default Projects;