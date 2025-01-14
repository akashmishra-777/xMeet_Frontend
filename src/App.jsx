
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ForgetPassword from './components/ForgetPassword'
import Home from './components/Home'
import Login from  './components/Login'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sign-in' element={<Login/>} />
          <Route path='/forget-password' element={<ForgetPassword/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
