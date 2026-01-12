import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { AppNavBar } from "./components/AppNavBar"

function App() {
  return (
    <div className="App">
      <AppNavBar isLogged={true}></AppNavBar>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
      </Routes>
    </div>
  )
}

export default App