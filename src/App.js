import './i18n/index'
import { BrowserRouter, Routes, Route } from "react-router-dom"
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

const Router = () =>{
return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Layout />}
          action={({ params }) => {}}
        >
          <Route index path={routes.HOME} element={<Home />} />
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.REGISTER} element={<Register />} />
          <Route path={routes.RULES} element={<Rules />} />
          <Route path={routes.LEADERBOARDS} element={<LeaderBoards />} />
          <Route path={routes.PLAY} element={<Play />} />
          <Route path={routes.GAME} element={<Game />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
}
const App = () => {
return (
  <div className="App">
      <Router />
  </div>
);
}


export default App;
