import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './login'
import Home from './Home'
import Thanks from './Thanks'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Signup/>}> </Route>
  <Route path='/login' element={<Login/>}> </Route>
  <Route path='/Home' element={<Home/>}> </Route>
  <Route path='/thanks' element={<Thanks/>}> </Route>
</Routes>
</BrowserRouter>
  </div>
  )
}

export default App
