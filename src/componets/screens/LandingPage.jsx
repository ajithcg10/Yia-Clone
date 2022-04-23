import React, { useState } from 'react'
import Header from "../include/Header"
import Spotlight from './Spotlight';
import Tefun from './Tefun';
import Campus from './Campus';
import Topics from './Topics';
import Certifcate from './Certifcate';
import School from './School';
import StudentJoin from './StudentJoin';
import MobileApp from './MobileApp';
import Faq from './Faq';
import Footer from './Footer';
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
