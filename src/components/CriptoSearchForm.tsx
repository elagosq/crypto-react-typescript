import { useState, type ChangeEvent, type FormEvent } from "react"
import type { Pair } from "../types"
import { currencies } from "../data"
import ErrorMessage from "./ErrorMessage"
import { useCriptoStore } from "../store"

export default function CriptoSearchForm() {
  const cryptocurrencies = useCriptoStore(state => state.cryptocurrencies)
  const fetchData = useCriptoStore(state => state.fetchData)
  const [pair,setPair] = useState<Pair>({
    currency:'',
    criptcurrency:''
  })
  const [error,setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault()
      setPair({ 
        ...pair,
        [e.target.name] : [e.target.value]
      })  
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(Object.values(pair).includes('')){
      setError('Todos los campos son obligatorio')
      return 
    }

    setError('')

    //Consultar api
    fetchData(pair)
  }

  return (
    <form 
      className="form"
      onSubmit={handleSubmit}
     >
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
       <label htmlFor="currency">Moneda:</label>
       <select
         name="currency"
         id="currency"
         onChange={handleChange}
         value={pair.currency}
       >
         <option value="">-- Seleccione --</option>
         {currencies.map(currency => (
           <option key={currency.code} value={currency.code}>{currency.name}</option>
         ))}
       </select>
      </div>
      <div className="field">
        <label htmlFor="criptcurrency">Criptomoneda:</label>
        <select
         name="criptcurrency"
         id="criptcurrency"
         onChange={handleChange}
         value={pair.criptcurrency}
        >
          <option value="">-- Seleccione --</option>
          {cryptocurrencies.map(crypto => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>
      <input 
        type="submit"
        value="Cotizar"
      />
    </form>
  )
}
