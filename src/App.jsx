import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { Cart } from "./components"


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= { <ItemListContainer /> } />
        <Route path="/category/:category" element= { <ItemListContainer/> } />
        <Route path="/item/:id" element= { <ItemDetailContainer/> } />
        <Route path="./components/Cart" element= { <Cart/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
