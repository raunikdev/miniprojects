import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';

import Proj1 from './components/images/proj1.png';
import Proj2 from './components/images/proj2.png';
import Proj3 from './components/images/proj3.png';


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
          
        {/* <Projects 
          image={Proj1} 
          link=""
          heading="Still Working" 
          description="In Progress..."/>
        <Projects 
          image={Proj1} 
          link=""
          heading="Still Working" 
          description="In Progress..."/>
        <Projects 
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
