import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Services from "./pages/Services.tsx"
import Reviews from "../src/pages/Reviews.tsx";
import Templates from './pages/Templates.tsx'
import EPKForm from './pages/Profile.tsx'
import EPKView from './pages/EPKView.tsx'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/templates' element={<Templates />}/>
          <Route path='/profile' element={<EPKForm />} />
          <Route path='/view' element={<EPKView />}/>
        </Routes>
    </BrowserRouter>
      
  )
}

export default App
