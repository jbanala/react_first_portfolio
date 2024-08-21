
import './App.module.css'
import styles from "./App.module.css";
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import {AboutMe} from "./components/AboutMe/AboutMe"; 
import { Hero } from './components/Hero/Hero'; 
import { Navbar } from './components/navbar/Navbar';
import { Projects } from './components/Projects/Projects';



function App() {

  return (
    <div className={styles.App}>
     
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;  
