import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <Header />
      </div>
    </>
  )
}

export default App
