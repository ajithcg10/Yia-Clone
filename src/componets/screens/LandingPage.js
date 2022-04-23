import React, { useState } from 'react'
import Header from "../include/Header"
import Spotlight from '../screens/Spotlight';
import Tefun from '../screens/Tefun';
import Campus from '../screens/Campus';
import Topics from '../screens/Topics';
import Certifcate from '../screens/Certifcate';
import School from '../screens/School';
import StudentJoin from '../screens/StudentJoin';
import MobileApp from '../screens/MobileApp';
import Faq from '../screens/Faq';
import Footer from '../screens/Footer';
export default function LandingPage() {
  return (
    <>
    <Header />
    <div className='wrapper'>
       <Spotlight /> 
       <Tefun />
       <Campus />
       <Topics />
       <Certifcate />
       <School />
       <StudentJoin />
       <MobileApp />
       <Faq />
    </div>
    <Footer />
    </>
  )
}
