import './App.css'
import { ReactPortal } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Features/Header'
import ProductList from './Features/ProductList'
function App() {
  return (
    <div>
      <Header/>
      <ToastContainer/>
      <ProductList/>
    </div>
  )
}

export default App