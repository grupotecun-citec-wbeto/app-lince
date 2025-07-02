//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "@pages/Main";
import Equipment from "@/pages/Equipment";
import Client from "@/pages/Client";
import QuestionSections from "@/pages/QuestionSections";
import Question from './pages/Question';

//import { Button, Box, Heading } from "@chakra-ui/react";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/searchequipment" element={<Equipment />} />
        <Route path="/client" element={<Client />} />
        <Route path="/questionsections" element={<QuestionSections />} />
        <Route path="/question/:id" element={<Question />} />
      </Routes>
    </Router>
  )
}

export default App
