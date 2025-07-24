// App.js
import Navbar from './Components/Navbar';
import HeroCarousel from './Components/HeroCarousal';
import ProgramCard from './Components/ProgramCard';
import TestimonialCard from './Components/TestimonialCard';
import BlogCard from './Components/BlogCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCarousel/>
      
      {/* Other sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {programs.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div> */}
        </div>
      </section>
      
      {/* Other components similarly */}
    </div>
  );
}

export default App;