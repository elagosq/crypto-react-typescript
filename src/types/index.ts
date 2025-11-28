import {z} from "zod"
import type {  CryptoPriceSchema, CrytoCurrencyResponseSchema, CurrencySchema, PairSchema } from "../schema/cripto-schema"

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CrytoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
