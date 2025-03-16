import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './catagory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category],
}
