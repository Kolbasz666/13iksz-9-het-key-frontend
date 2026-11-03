import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Header text={'Keys'}/>
      <Main bgColor={'lime'}/>
      <Footer name={'Zsár Dániel'} className={'9.i'}/>
   </>
  )
}

export default App
