import '../styles/index.scss';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
