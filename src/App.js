import './input.css';
import { useState, useEffect } from 'react';
import Header from './header';
import Hero from './hero';
import FeatureSection from './featureSection';
import AboutSection from './aboutSection';
import SectionReady from './sectionReady';
import 'animate.css';
import Footer from './footer';
import FooterSocial from './footerSocial';
import { BrowserRouter } from 'react-router-dom';
import Recipes from './recipes';
import { Routes, Route } from 'react-router-dom';
import Explore from './explore';
import RecetasCard from './recetasCard';
import Filters from './filters';
const featuresArray = [

  {
    icon: '/icon-whole-food-recipes.svg',
    title: 'Whole-food recipes',
    description: 'Each dish uses everyday,unprocessed ingredients',
  },
  {
    icon: '/icon-minimum-fuss.svg',
    title: 'Minimum fuss',
    description: 'All recipes are designed to make eating healty quick and easy',
  },
  
  {
    icon: '/icon-search-in-seconds.svg',
    title: 'Search in seconds',
    description: 'Filter by name or ingredient and jump straight to the recipe you need',
  },
];  


const socialIconsArray = [
  {
    icon: '/icon-instagram.svg',
  },
  {
    icon: '/icon-tiktok.svg',
  },
  {
    icon: '/icon-bluesky.svg',
  },
];

function App() {
  const [recetas, setRecetas] = useState([]);
  const [newRecetas, setNewRecetas] = useState([]);
useEffect(() => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            setRecetas(data);
            setNewRecetas(data);
        })
        .catch(error => console.error('Error:', error));
}, []);

  return (
    <BrowserRouter>
    <div className="App min-h-screen   bg-[#F6F5F1] overflow-x-hidden p-4">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
          <Hero />
          <FeatureSection title="What you'll get" features={featuresArray} />
          <AboutSection />
          <SectionReady />
          </>
      
      } />
        <Route path="/recipes" element={
          <>

          <Explore />
          <Filters recetas={recetas} setNewRecetas={setNewRecetas} />
          <RecetasCard recetas={newRecetas} />
          </>
        } />
      </Routes>
  
      <Footer emoji="❤️" emoji2="🍲" footerSocials={socialIconsArray} />
    </div>
    </BrowserRouter>
  );
}

export default App;
