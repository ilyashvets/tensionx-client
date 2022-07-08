import { useState } from 'react'
import Form from './Form'
import Input from './Input'
import axios from 'axios'

export default function SignIn(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function login(data) {
    axios.post(`http://localhost:3000/api/auth/login`, data)
      .then(res => {
        props.setToken(res.data.token)
      })
      .catch(err => {
        let errorMessage = err.response.data.message
        if (Array.isArray(errorMessage)) errorMessage = errorMessage.join('\n')
        window.alert(errorMessage)
      })
  }

  return (
    <Form title='Sign In' onSubmit={() => login({email, password})}>
      <Input label='Email address' id='email' type='email' value={email} onChange={setEmail}/>
      <Input label='Password' id='password' type='password' value={password} onChange={setPassword}/>
      <button type='submit' className='btn btn-primary'>Sign In</button>
      <span className='ms-2'>or <a className='ms-1' href="#" onClick={props.toggle}>Sign Up</a></span>
    </Form>
  )
}