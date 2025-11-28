import { useMemo } from "react"
import { useCriptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
  const result = useCriptoStore(state => state.result)
  const loading = useCriptoStore(state => state.loading)
  const hasResult = useMemo(() => !Object.values(result).includes('') ,[result])

  return (
    <div className="result-wrapper">
      {loading ? <Spinner /> : hasResult && (
        <>
        <h2>Cotización</h2>
        <div className="result">
          <img 
            src={`https://cryptocompare.com/${result.IMAGEURL}`}
          />
        <div>
          <p>El precio es de: <span>{result.PRICE}</span></p>
          <p>El precio más alto del día: <span>{result.HIGHDAY}</span></p>
          <p>El precio más bajo del día: <span>{result.LOWDAY}</span></p>
          <p>Variación última 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
          <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
        </div> 
       </div>
      </>
     )}
      
    </div>
  )
}
