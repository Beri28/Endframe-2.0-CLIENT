import Signup from './pages/auth/register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
// import './App.css'
import Login from './pages/auth/login'
import SearchPage from './pages/screens/Search'
// import LandingPage from './pages/screens/main'
import TemplatePage from './pages/screens/viewTemplate'
import ProfilePage from './pages/screens/profile'
import Home from './pages/Home'
import { useEffect } from 'react'
import AuthContextProvider from './Context/AuthContext'

// useEffect(()=>{
//   let localState=JSON.parse(localStorage.getItem('endframe-2.0')|| '')
//     if(!localState || !localState.Username){
//         localState={
//             isAuthenticated:false,
//             username:"Guest",
//             id:"",
//             token:"",
//         }
//         authReducer(initialState,{ type: 'TOGGLE_AUTH', payload: localState })
//     }else{
//         authReducer(initialState,{ type: 'TOGGLE_AUTH', payload: localState })
//     }
// },[])

function App() {
  return (
    <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            {/* <Route path='/register' element={<Register />}/> */}
            {/* <Route path='/login' element={<Login />}/> */}
            {/* <Route path='/' element={<LandingPage />} /> */}
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/templates' element={<TemplatePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/profile/:userId' element={<ProfilePage />} />
          </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
=======
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
>>>>>>> 80f08137f619c960b015f03e257d87473ae0c00a
