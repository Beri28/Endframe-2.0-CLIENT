import Signup from './pages/auth/register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/login'
import SearchPage from './pages/screens/Search'
import LandingPage from './pages/screens/main'
import TemplatePage from './pages/screens/viewTemplate'
import ProfilePage from './pages/screens/profile'
import About from './pages/screens/about'
import CustomerReviewForm from './pages/screens/review'
import PricingPlans from './pages/screens/pricing'
import DashboardPage from './pages/Dashboard/dash'

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
        <Route path='/about' element={<About />}/>
        <Route path='/pricing' element={<PricingPlans />}/>
        <Route path='/customer-review' element={<CustomerReviewForm />}/>
        <Route path='/dashboard' element={<DashboardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App