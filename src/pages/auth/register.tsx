import { useContext, useEffect, useState } from 'react';
import './Index.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext';

export interface loginResponse{
    username:string
    id:string
    token:string
}
const Signup = () => {
  const { dispatch } = useContext(AuthContext)
  const navigate=useNavigate()
  const [username,setUsername] = useState<string>('');
  const [ email,setEmail] = useState<string>('');
  const [ password,setPassword] = useState<string>('');
  const [ confirmPassword,setConfirmPassword] = useState<string>('');
  const [different,setDifferent]=useState<boolean>(false)
  const signup =async (e:any) => {
    e.preventDefault()
    console.log(username,email,password,confirmPassword)
    if(password!==confirmPassword){
      setDifferent(true)
      return
    }
    try{
      let res=await axios.post<loginResponse>('http://localhost:8080/api/register',{username,email,password:confirmPassword})
      if(res){
          console.log(res.data)
            //decode the token from the response
            const token = res.data.token
            const id = res.data.id
            const username=res.data.username
            localStorage.setItem(
              'endframe-2.0',
              JSON.stringify({
                  id: id,
                  username,
                  isAuthenticated: true,
                  token: token
              })
          )
          dispatch({ type: 'TOGGLE_AUTH', payload: {
            id: id,
            username,
            isAuthenticated: true,
            token: token
        } })
        navigate('/profile')
      }
    }catch(error){
      console.log(error)
    }
  };
  useEffect(()=>{
    setDifferent(false)
  },[])
  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-purple-500 p-12 relative overflow-hidden">
        <h2 className="brand-text">Market Your Brand With Us!</h2>
        
        <div className="circular-images">
          {/* Main large circle - Woman with jewelry */}
          <div className=" ">
            <img 
              src="/src/assets/Cameroon-music-lovers.jpg" 
              alt=" " 
              style={{filter:'grayscale(1)'}}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          
          {/* Medium circle - Man with glasses */}
          <div className="circle-secondary">
            <img 
              src="/src/assets/epk2.png" 
              alt=" " 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="circle-secondary">
            <img 
              src="/src/assets/epk2.png" 
              alt=" " 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Small circle - Drum */}
          <div className="circle-accent bg-[#87CEEB]">
            <img 
              src="/src/assets/vizu.jpeg" 
              alt=" " 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Small circle - Abstract art */}
          <div className="circle-accent-alt">
            <img
              src="/src/assets/a3.jpg" 
              alt=" " 
              className="w-full h-full object-cover bg-white"
            />
          </div>

          
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 bg-white p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-8">Create Account</h1>
          
          <form onSubmit={signup} className="space-y-6">
            <div className="form-group">
              <label className="form-group-label">Band Name/Artist Name</label>
              <input
                type="text"
                className="form-group-input"
                placeholder='Enter artist name'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-group-label">Email</label>
              <input
                type="email"
                className="form-group-input"
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-group-label">Password</label>
              <input
                type="password"
                className="form-group-input"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-group-label">Confirm Password</label>
              <input
                type="password"
                className="form-group-input"
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
              />
            </div>
              {different &&
              <p className='text-red-300 text-sm'>Passwords should be same in both password fields</p>
              }
            <button type='submit' className="submit-button bg-purple-500 hover:bg-purple-400 hover:shadow-xl">
              Create Account
            </button>
          </form>

          <div className="social-buttons-container">
            <button className="social-button hover:border-purple-500">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Signup with Google</span>
            </button>

            <button className="social-button flex items-center space-x-2 hover:border-purple-500">
              <svg className="social-icon w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#F58529", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#DD2A7B", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#515BD4", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagramGradient)" fill="none" />
                <circle cx="12" cy="12" r="4" stroke="url(#instagramGradient)" fill="none" />
                <circle cx="18" cy="6" r="1.5" fill="url(#instagramGradient)" />
              </svg>
              <span className="text">Signup with Instagram</span>
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#5D5DFF] hover:text-[#3b3bff] no-underline">
            Login
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
