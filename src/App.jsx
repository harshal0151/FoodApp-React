
import './App.css'
import Routers from './routers/Routers'
import Footer from './components/footer/Footer'
import Navbar  from "./components/nav/Navbar"

function App() {

  return (
 <>
 <Navbar/>
    <div className='app'>
    <Routers/>
   </div>
   <Footer/>
 </>
  )   
}

export default App
