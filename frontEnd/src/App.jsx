import { useState } from 'react'
import './App.css'
import HomePage from './pages/home'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import About from './pages/AboutUs'
function App() {
  const [count, setCount] = useState(0)
    return <div id="Parent">
    <HomePage/>
    </div>
  }


export default App
