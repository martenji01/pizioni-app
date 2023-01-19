import React from 'react'
import { routes } from '../utils/routes'
import {Link, useNavigate} from "react-router-dom"
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setUserToken } from '../state/user'

const Login = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const logIn = ()=>{
    const token = "iAmAToken"
    dispatch(setUserToken(token))
    navigation(routes.HOME)
  }

  return (
    <div>
      <Button onClick={logIn}>LogIn</Button>
      <Link to={routes.SLASH + routes.REGISTER} >Register</Link>
    </div>
  )
}

export default Login