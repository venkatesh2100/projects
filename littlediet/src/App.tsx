import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Blog } from "./pages/Blog"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/blog" element={ <Blog/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
