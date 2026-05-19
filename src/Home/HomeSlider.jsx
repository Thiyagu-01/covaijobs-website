import React from 'react'
import Home from '../pages/Home';
import AboutUs from '../Home/AboutUs';
import LogoSlider from '../Home/Logo';
import Testimonial from './Testimonial';
import GrowthRoadmap from './GrowthRoadmap';

const HomeSlider = () => {
  return (
    <div>
    <Home></Home> 
     <AboutUs/>
     <GrowthRoadmap/>
     <Testimonial/>
     <LogoSlider />
     
     
    </div>

  )
}

export default HomeSlider