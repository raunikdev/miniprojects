import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';

import Proj1 from './components/images/proj1.png';
import Proj2 from './components/images/proj2.png';
import Proj3 from './components/images/proj3.png';
import Proj4 from './components/images/proj4.png';
import Proj5 from './components/images/proj5.png';


import './App.css'

function App() {

  return (
    <>
      <Header />
      <h1 className="project-title" id="projects">Mini Projects: Mostly React</h1>
      <div className="projects-app">
        <Projects 
          image={Proj1} 
          link="https://cardbuilder-six.vercel.app/"
          heading="Card Builder" 
          description="You can build a Card from just filing info"/>
        
        <Projects 
          image={Proj2} 
          link="https://calculator-beige-nine-22.vercel.app/"
          heading="Calculator" 
          description="Well pretty obvious it calculates"/>
          
        <Projects 
          image={Proj3} 
          link="https://todolists-woad.vercel.app/"
          heading="To Do List" 
          description="Helps you track down your work"/>
          
        <Projects 
          image={Proj4}
          link="https://clock-one-sepia.vercel.app/"
          heading="Clock" 
          description="Nothing much just tells time"/>
        <Projects 
          image={Proj5} 
          link="https://staticweatherapp.vercel.app/"
          heading="Static Weather App" 
          description="Tells you weather from it's static database"/>
        {/* <Projects 
          image={Proj1} 
          link=""
          heading="Still Working" 
          description="In Progress..."/> */}
      </div>
      
      <Footer />
    </>
  )
}

export default App;



// 1. ✅ Portfolio Website
// Features:
// •	Home, About, Projects, Contact pages
// •	Simple animations (using Framer Motion or CSS)
// •	Resume download button
// •	Skills progress bars
// What You'll Learn:
// •	React Router
// •	Component splitting
// •	Responsive layouts (Flexbox/Grid)
