import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/Index'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Layout/>} />
     </Routes>
    </>
  )
}

export default App
