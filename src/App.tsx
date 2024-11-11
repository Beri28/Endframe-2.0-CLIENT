import Signup from './pages/auth/register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/login'
import SearchPage from './pages/screens/Search'
import LandingPage from './pages/screens/main'
import TemplatePage from './pages/screens/viewTemplate'
import ProfilePage from './pages/screens/profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/templates' element={<TemplatePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/:userId' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App