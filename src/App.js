import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skill/Skill";
import Footer from "./components/Footer/Footer"
  
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
