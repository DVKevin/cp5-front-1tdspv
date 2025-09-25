import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './componets/layout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/add" /><Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
