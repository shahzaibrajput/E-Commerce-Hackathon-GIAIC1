import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './catagory'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category,order],
}
