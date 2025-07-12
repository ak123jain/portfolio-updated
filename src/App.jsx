 import React from 'react'
  import { Route } from 'react-router-dom'
  import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
 
 const App = () => {
   return (
     <div>
       <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
       </Routes>
     </div>
   )
 }
 
 export default App
 