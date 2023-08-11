import { BrowserRouter } from "react-router-dom"
import { Router } from "./global/routes/Router"
import Nav from './global/components/Nav/Nav'
import Footer from './global/components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <Router />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
