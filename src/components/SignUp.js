import Form from './Form'
import Input from './Input'
import Select from './Select'
import { useState } from 'react'
import axios from 'axios'

export default function SignUp(props) {

  const roleList = [
    'Guest',
    'User',
    'Supervisor',
    'Administrator'
  ]

  const [role, setRole] = useState(roleList[0])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function register(data) {
    if (data.password !== data.passwordConfirm) window.alert('Passwords are not the same')
    else {
      axios.post('https://tensionx.herokuapp.com/api/auth/register', {role, email, password})
        .then(() => {
          window.alert('Successfully registered. Now you can logged in')
        })
        .catch(err => {
          let errorMessage = err.response.data.message
          if (Array.isArray(errorMessage)) errorMessage = errorMessage.join('\n')
          window.alert(errorMessage)
        })
    }
  }

  return (
    <Form title='Sign Up' onSubmit={() => register({role, email, password, passwordConfirm})}>
      <Select label='Role' list={roleList} id='select' value={role} onChange={setRole}/>
      <Input label='Email address' id='email' type='email' value={email} onChange={setEmail}/>
      <Input label='Password' id='password' type='password' value={password} onChange={setPassword}/>
      <Input label='Password confirmation' id='password-confirmation' type='password' value={passwordConfirm} onChange={setPasswordConfirm}/>
      <button type='submit' className='btn btn-primary'>Sign Up</button>
      <span className='ms-2'>or <a className='ms-1' href="#" onClick={props.toggle}>Sign In</a></span>
    </Form>
  )
}