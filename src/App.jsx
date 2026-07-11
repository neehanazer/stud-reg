import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddReg from './components/AddReg'
import Searchreg from './components/Searchreg'
import Deletereg from './components/Deletereg'
import ViewStudents from './components/ViewStudents'

function App() {

  return (
    <>
     <BrowserRouter>
    <Routes>
  <Route index element={<ViewStudents />} />
  <Route path="add" element={<AddReg />} />
  <Route path="search" element={<Searchreg />} />
  <Route path="delete" element={<Deletereg />} />
  <Route path="view" element={<ViewStudents />} />
</Routes>
     </BrowserRouter>
    </>
  )
}

export default App
