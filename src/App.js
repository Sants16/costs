import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/company' element={<Company/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/newproject' element={<NewProject/>}/>
            {/* com o : em ':id' o react router entende que essa rota ira receber uma especie de parametro dinamico */}
            <Route path='/project/:id' element={<Project/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
