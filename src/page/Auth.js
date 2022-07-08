import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import { useState } from 'react'

export default function Auth(props) {

  const [isSignIn, setSignIn] = useState(false)

  return isSignIn ? <SignIn setToken={props.setToken} toggle={() => setSignIn(false)} /> : <SignUp toggle={() => setSignIn(true)} />
}