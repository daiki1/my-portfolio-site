import './App.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Links from './components/Links';
import Skills from './components/Skills';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import FallingLeaves from './components/FallingLeaves';

/**
 *  App component
 * The main component of the application that renders all other components.
 * 
 * @returns {JSX.Element}
 */
function App() {

  return (
    <> 
      <FallingLeaves />
      <Header />
      <main className="lg:ml-[33.33%] max-w-3xl mx-auto p-4">       
        <LanguageSwitcher />
        <AboutMe />
        <Projects />        
        <Skills />
        <Links />
        <Footer />      
      </main>
    </>
  )
}

export default App
