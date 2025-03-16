import { groq } from "next-sanity";



export const allproducts = groq`*[_type == 'product' && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    price,
    image,
    description,
}`;
   
export const four = groq`*[_type == 'product'][0..3]`;