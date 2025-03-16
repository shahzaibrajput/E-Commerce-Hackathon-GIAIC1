//ye code is lia comment krky save kar raha hun agr me neechy different chezein try karun ga or arror agaya to ye mery ps already save he jo blkul thk code he work kar raha he 
// import { client } from "@/sanity/lib/client";
// //import {ProductListing} from "@/app/productlist/page";
// import ProductListing from "@/app/productlist/page"
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// // import Product from "../component/product";
// import { Product } from '../../../types/products';

// interface ProductPageProps {
//   params: { slug: string }
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug]{
//       _id,
//       name,
//       _type,
//       image,
//       price,
//       description,
    
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params } : ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className="aspect-square">
//           {product.image && (
//             <Image
//              src={urlFor(product.image).url()}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           )}
//         </div>
//         <div className="flex flex-col gap-8">
//           <h1 className="text-4xl font-bold">{product.name}</h1>
//           <p className="text-2xl font-sans">${product.price}</p>
//           <p className="text-2xl font-sans">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }



//Applying add to card functionalities 
import { client } from "@/sanity/lib/client";
//import {ProductListing} from "@/app/productlist/page";
import ProductListing from "@/app/productlist/page"
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
// import Product from "../component/product";
import { Product } from '../../../types/products';

interface ProductPageProps {
  params: { slug: string }
}

async function getProduct(slug: string): Promise<Product> {
  return await client.fetch(
    groq`*[_type == product && slug.current == ${slug}][0]{
      _id,
      name,
      slug : slug.current,
      _type,
      image,
      price,
      description,
       isHot,
    }`,
    { slug }
  );
  
}

export default async function ProductPage({ params } : ProductPageProps) {
  //yahan sy meny await remove kia he params sy
  const  slug  =  params.slug;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
             src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-sans">${product.price}</p>
          <p className="text-2xl font-sans">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
