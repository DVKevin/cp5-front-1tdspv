import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './componets/layout'
import { NotFound } from './pages/not-found'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/add" /><Route />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
