import axios from "axios"
import type { Pair } from "../types"
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/cripto-schema"

const baseurl = 'https://min-api.cryptocompare.com/data/'

/*
 *  Obtén una lista de las 20 monedas más populares según su capitalización de mercado.
*/
export async function getCryptos(){
    try {
     const url = `${baseurl}top/mktcapfull?limit=20&tsym=USD`
     const { data : { Data }} = await axios(url)
     const result = CryptoCurrenciesResponseSchema.safeParse(Data)
     if(result.success){
      return result.data
     }
    } catch(error) {
      console.log(error)
    }
}

/*
*  Obtén precio actual de la moneda crypto.
*/
export async function fetchCurrentCryptoPrice(pair:Pair){
  try {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptcurrency}&tsyms=${pair.currency}`
    const { data:{DISPLAY}} = await axios(url)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptcurrency][pair.currency])
    if(result.success){
      return result.data
    }	
  } catch(error){
    console.log(error)
  }
}