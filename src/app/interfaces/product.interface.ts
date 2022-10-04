import { Identification } from './identification.interface'
import { Name } from './name.interface'

export interface Product extends Identification, Name {
    image: string
    price: string
}
