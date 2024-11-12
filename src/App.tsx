import Signup from './pages/auth/register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
