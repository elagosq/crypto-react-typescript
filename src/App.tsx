
import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import { useCriptoStore } from "./store"

function App() {
 const fetchCryptos = useCriptoStore(state => state.fetchCryptos)

 useEffect(() => {
   fetchCryptos()
 },[])

  return (
    <>
      <div className="container">
         <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>        
          </h1>
         <div className="content">
           <CriptoSearchForm />
           <CryptoPriceDisplay />
         </div>
      </div>
    </>
  )
}

export default App
