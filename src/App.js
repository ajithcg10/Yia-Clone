
import { useEffect, useState } from 'react';
import './App.css';
import Exam from './componets/screens/ExamQuestions/ExamQuestions';
import Exmination from './componets/screens/ExminationCompleted/Exmination';
import Fillstudent from './componets/screens/FillStudent/Fillstudent';
import LandingPage from './componets/screens/LandingPage';
import ExamInsturaction from './componets/screens/VideoPage/ExamInsturction/ExamInsturaction';
import VideoPage from './componets/screens/VideoPage/VideoPage';
import ExamQuestions from './componets/screens/ExamQuestions/ExamQuestions';
import Course from './componets/include/Course';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseProfile from './componets/screens/choose/ChooseProfile';
function App() {


  return (
    <BrowserRouter>
          <Routes>
             <Route path='/'  element={<LandingPage />} />
             <Route path='/FillStudent/'  element={<Fillstudent />} />
             <Route path='/VideoPage/'  element={<VideoPage/>} />
             <Route path='/Examination/'  element={<Exmination />} />
             <Route path='/ExamInsturactiond/'  element={<ExamInsturaction/>} />
             <Route path='/ExamQuestionsd/'  element={<ExamQuestions />} />
             <Route path='/Chosse/' element={<ChooseProfile />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App;
