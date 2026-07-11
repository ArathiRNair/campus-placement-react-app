import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegistration from './component/AddRegistration'
import SearchRegistration from './component/SearchRegistration'
import DeleteRegistration from './component/DeleteRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddRegistration/>
      <SearchRegistration/>
      <DeleteRegistration/>
    </>
  )
}

export default App
