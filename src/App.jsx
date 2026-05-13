import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Services from './Services/Services'
import WorkProcess from './WorkProcess/WorkProcess'

function App()
{
  return (
    <>
      <Header />
      <Services />
      <WorkProcess />
      <Footer/>
    </>
  )
}

export default App
