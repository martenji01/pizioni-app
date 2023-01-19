import './i18n/index'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import Play from "./pages/Play"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Rules from "./pages/Rules"
import Game from "./pages/Game"
import LeaderBoards from "./pages/LeaderBoards"
import {routes} from "./utils/routes"
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import {userSelectors} from "./state/user"
import { useEffect, useState } from 'react'
import "./scss/index.scss"

const UnloggedRoutes = () =>{
  const location = useLocation()
  const navigate = useNavigate()
  console.log({routes: "unlogged"})

  useEffect(()=>{
    console.log({location})
    if(location.pathname===routes.SLASH)
      navigate(routes.LOGIN)
  }, [location])
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.REGISTER} element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Route>
  </Routes>
  )
}

const LoggedRoutes = () =>{
  const navigate = useNavigate()
  const location = useLocation()

  console.log({routes: "logged"})

  useEffect(()=>{
    console.log({location})
    if(location.pathname===routes.SLASH || location.pathname===routes.SLASH + routes.LOGIN)
      navigate(routes.HOME)
  }, [location])

  
  return (
    <Routes>
        <Route
          element={<Layout />}
        >
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.RULES} element={<Rules />} />
          <Route path={routes.LEADERBOARDS} element={<LeaderBoards />} />
          <Route path={routes.PLAY} element={<Play />} />
          <Route path={routes.GAME} element={<Game />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  )
}

const Router = () =>{
  const userToken = useSelector(userSelectors.token)
  const [isLogged, setIsLogged] = useState(false)
  
  useEffect(()=>{
    if(userToken)
      setIsLogged(true)
    else
      setIsLogged(false)
  }, [userToken])

  useEffect(()=>{
    console.log({isLogged})
  }, [isLogged])
  return (
      <BrowserRouter>
        {isLogged ? <LoggedRoutes/> : <UnloggedRoutes />}
      </BrowserRouter>
  )
}


const App = () => {
  return (
    <div
    className="App"
    >
        <Router />
    </div>
  )
}


export default App;
