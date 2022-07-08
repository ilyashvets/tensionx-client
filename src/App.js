import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import jwtDecode from 'jwt-decode'
import Home from './page/Home'
import Auth from './page/Auth'

function App() {

  const tokenFromStorage = window.localStorage.getItem('tensionx-auth')

  const [token, setToken] = useState(tokenFromStorage)
  const [socket, setSocket] = useState(null)

  function resetAuth() {
    setToken(null)
    window.localStorage.removeItem('tensionx-auth')
  }

  useEffect(() => {
    let timeout

    if (token) {
      const {exp} = jwtDecode(token)
      const endTime = exp * 1000

      if (endTime - Date.now() > 0) {
        window.localStorage.setItem('tensionx-auth', token)
        timeout = setTimeout(resetAuth, endTime - Date.now())

        const socket = io('http://localhost:5556', {auth: {token}})
        setSocket(socket)

      } else resetAuth()
    }

    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [token])

  return (
    <div className='container pt-5'>
      <div className='row pt-5 mt-5'>
        <div className='col-6 offset-3 mt-5'>
          {token ? <Home getContent={(contentFor, setContent) => socket.emit('getContent', contentFor, setContent)} /> : <Auth setToken={setToken}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
