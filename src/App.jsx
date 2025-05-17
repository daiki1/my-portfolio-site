import './App.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Links from './components/Links';
import Skills from './components/Skills';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {

  return (
    <>
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
