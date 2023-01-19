import './App.css';
import NavBar from './components/NavBar.js'
import React, { useState } from 'react'
import News from './components/News';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
 const pageSize = 6;
  const apikey = process.env.REACT_APP_NEWS_API
  
 
  const [progress,setProgress] = useState(0)

  

    return (
      <div>
        <BrowserRouter>
       <NavBar/>
       <LoadingBar
       height={5}
        color='#f11946'
        progress={progress}
      />
       <Routes>
        <Route path="/" element={<News setProgress={setProgress} apikey={apikey}  key="General" pageSize={pageSize} country="in" category='General'/>}/>
        <Route path="/General" element={<News setProgress={setProgress} apikey={apikey}  key="General" pageSize={pageSize} country="in" category='General'/>}/>
        <Route path="/Business" element={<News setProgress={setProgress} apikey={apikey}  key="Business" pageSize={pageSize} country="in" category='Business'/>}/>
        <Route path="/Technology" element={<News setProgress={setProgress} apikey={apikey}  key="Technology" pageSize={pageSize} country="in" category='Technology'/>}/>
        <Route path="/Health" element={<News setProgress={setProgress} apikey={apikey}  key="Health" pageSize={pageSize} country="in" category='Health'/>}/>
        <Route path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="Entertainment" pageSize={pageSize} country="in" category='Entertainment'/>}/>
        <Route path="/Science" element={<News setProgress={setProgress} apikey={apikey}  key="Science" pageSize={pageSize} country="in" category='Science'/>}/>
        <Route path="/Sports" element={<News setProgress={setProgress} apikey={apikey}  key="Sports" pageSize={pageSize} country="in" category='Sports'/>}/>
       </Routes>
       </BrowserRouter>
      </div>
    )
  }
  

export default App 