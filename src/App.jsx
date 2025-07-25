// App.js
import Navbar from './Components/Navbar';
import HeroCarousel from './Components/HeroCarousal';
import ProgramCard from './Components/ProgramCard';
import TestimonialCard from './Components/TestimonialCard';
import BlogCard from './Components/BlogCard';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;