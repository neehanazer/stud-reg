import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './components/AddReg'
import Deletereg from './components/Deletereg'
import Searchreg from './components/Searchreg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddReg/>
      <Deletereg/>
      <Searchreg/>
    </>
  )
}

export default App
