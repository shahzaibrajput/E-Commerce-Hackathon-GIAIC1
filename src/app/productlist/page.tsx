//ye code is lia comment krky save kar raha hun agr me neechy different chezein try karun ga or arror agaya to ye mery ps already save he jo blkul thk code he work kar raha he
// export default ProductListing;
// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Product } from '../../../types/products';
// import { client } from '@/sanity/lib/client';
// import { allproducts } from '@/sanity/lib/queries';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';

// const ProductListing = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchproduct() {
//      // const fetchedProduct: Product[] = await client.fetch(allproducts);
//     // const data = await client.fetch(*[_type == "product"])
//       //console.log(fetchedProduct); // Debugging: Check if data is fetched correctly
//       const fetchedProduct = await client.fetch(`*[_type == "product"]`)
//       setProducts(fetchedProduct);
//     }
//     fetchproduct();
//   }, []);

//   return (
//     <div className='w-full h-auto text-[#FFFFFF] bg-[#FAFAFA] mt-19'>
//       <h1 className='text-2xl font-bold mb-6 text-center text-black mt-20'>Our Products</h1>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'
//           >
//             <Link href={`/product/${product.slug.current}`}>
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt='Product Image'
//                 width={150}
//                 height={200}
//                 className='w-full h-48 object-cover rounded-md'
//               />
//             )}
//             <h1 className='text-lg font-semibold mt-4 text-black'>
//               {product.name || 'Unnamed Product'}
//             </h1>
//             <p className='text-lg font-semibold text-black'>${product.price}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



// export default ProductListing;
//Applying add to card functionalities
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
import StarRating from "../AllRating/Star";



const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      // const fetchedProduct: Product[] = await client.fetch(allproducts);
      // const data = await client.fetch(*[_type == "product"])
      //console.log(fetchedProduct); // Debugging: Check if data is fetched correctly
      const fetchedProduct = await client.fetch(`*[_type == "product"]`);
      setProducts(fetchedProduct);
    }
    fetchproduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
       position : "top-right",
       icon : "success",
       title: `${product.name} added to cart`,
       showConfirmButton : false,
       timer : 1000,

    })
    addToCart(product);
    
    
  };


  return (
    <div className="w-full h-auto text-[#FFFFFF] bg-[#FAFAFA] mt-19">
      <h1 className="text-2xl font-bold mb-6 text-center text-black mt-20">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {product.isHot && (
  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
    🔥 Hot Product
  </div>
)}

            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="Product Image"
                  width={150}
                  height={200}
                  className="w-full h-48 object-cover rounded-md hover:scale-105 transform transition-all duration-600"
                />
              )}
               <StarRating />
              <h1 className="text-lg font-semibold mt-4 text-black hover:scale-105 transform transition-all duration-300">
                {product.name || "Unnamed Product"}
              </h1>
              <p className="text-lg font-semibold text-black hover:scale-105 transform transition-all duration-300">
                ${product.price}
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
             hover:scale-110 transition-transform duration-300 ease-in-out "
             onClick={(e) => handleAddToCart(e,product)} >
                 Add To Cart
             </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
