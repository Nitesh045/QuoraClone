import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QuoraApp } from './components/QuoraApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuoraApp/>
    </>
  )
}

export default App
