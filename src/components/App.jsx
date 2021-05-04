import '../styles/index.scss';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
