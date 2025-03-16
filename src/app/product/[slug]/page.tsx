







// import { client } from "@/sanity/lib/client";
// //import {ProductListing} from "@/app/productlist/page";
// //import ProductListing from "@/app/productlist/page"
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import ProductListing from "@/app/productlist/page";

// interface ProductPageProps {
//   params: Promise <{ slug: string }>;
// }

// async function getProduct(slug: string): Promise< Product | null> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       name,
//       _type,
//       image { asset -> { _ref, _type } },
//       price,
//       description,
//       slug { current }
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className="aspect-square">
//           {product?.image && (
//             <Image
//              // src={urlFor(product.image.asset._ref).url()}
//              src={urlFor(product.image.asset._ref).url()}
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


// AI box
// Define the Product interface
"use client"
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import { urlFor } from "../../../sanity/lib/image";
// import Image from "next/image";
// import ProductListing from "@/app/productlist/page";
// import StarRating from "@/app/AllRating/Star";


// // Define the Product interface
// interface Product {
//   _id: string;
//   name: string;
//   _type: string;
//   image: {
//     asset?: {
//       _ref?: string;
//       _type: string;
//     };
//   };
//   price: number;
//   description: string;
//   slug: {
//     current: string;
//   };
// }

// interface ProductPageProps {
//   // params: Promise<{ slug: string }>;
//   params: { slug: string };
// }

// async function getProduct(slug: string): Promise<Product | null> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       name,
//       _type,
//       image ,
//       price,
//       description,
//       slug { current }
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   // const { slug } = await params;
//   const { slug } =  params;
//   const product = await getProduct(slug);
//   console.log("Product in Component:", product); // Check if product is coming
//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     // <div className="max-w-7xl mx-auto px-4">
//     //   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//     //     <div className="aspect-square ">
//     //       {product.image?.asset?._ref ?  (
//     //         <Image
//     //           src={urlFor(product.image).url()}
//     //           alt={product.name}
//     //           width={500}
//     //           height={800}
//     //           className="rounded-lg shadow-md"
//     //         />
          
//     //       ):(
//     //         <div className="w-[500px] h-[500x] flex items-center justify-center bg-gray-200 text-gray-500">
//     //           No image available
//     //         </div>
//     //       )}
            
        
//     //     </div>
//     //     <div className="flex flex-col gap-8">
//     //       <h1 className="text-4xl font-bold mt-30">{product.name}</h1>
//     //       <p className="text-2xl font-sans mb-12">${product.price}</p>
//     //       <p className="text-2xl font-sans mb-12">{product.description}</p>
//     //       <StarRating />
//     //     </div>
        
        

//     //   </div>
//     // </div>
//     //animation set new

//   );
// }




// interface Product {
//   _id: string;
//   name: string;
//   _type: string;
//   image: {
//     asset?: {
//       _ref?: string;
//       _type: string;
//     };
//   };
//   price: number;
//   description: string;
//   slug: {
//     current: string;
//   };
// }



// Define the Product interface

//interactive UI
"use client"; // Next.js ke liye zaroori

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  _type: string;
  image: {
    asset?: {
      _ref?: string;
      _type: string;
    };
  };
  price: number;
  description: string;
  slug: {
    current: string;
  };
}

interface ProductPageProps {
  params: { slug?: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current =="${slug}"][0]{
      _id,
      name,
      "slug" : slug.current,
      _type,
      image,
      price,
      "description",
      
    }`,
    { slug }
  );
}

// ⭐ Star Rating Component
function StarRating({ defaultRating = 5, interactive = true }) {
  const [rating, setRating] = useState(defaultRating);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2 text-3xl pt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer transition-all duration-300 ${
            (hover || rating) >= star ? "text-yellow-400 scale-110" : "text-gray-300"
          }`}
          onClick={() => interactive && setRating(star)}
          onMouseEnter={() => interactive && setHover(star)}
          onMouseLeave={() => interactive && setHover(0)}
        />
      ))}
    </div>
  );
}

// 📌 Main Product Page
export default async function ProductPage({ params }: ProductPageProps) {
 // const {slug } = params.slug;
 //const slug: string | undefined = params.slug;
 const slug = params.slug ?? "";

 
  if (!slug) {
    return <div className="text-center text-gray-500 mt-20">Product not found</div>;
  }
  const product = await getProduct(slug);

  if (!product) {
    return <div className="text-center text-gray-500 mt-20">Product not found</div>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 📷 Product Image */}
        <div className="aspect-square">
          {product.image?.asset?._ref ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={800}
              className="rounded-lg shadow-md object-cover"
            />
          ) : (
            <div className="w-[500px] h-[500px] flex items-center justify-center bg-gray-200 text-gray-500">
              No image available
            </div>
          )}
        </div>

        {/* 📝 Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-sans text-gray-700">${product.price}</p>
          <p className="text-lg font-sans text-gray-600">{product.description}</p>

          {/* ⭐ Star Rating */}
          <div className="flex flex-col items-start">
            <span className="text-lg font-semibold">Rate this product:</span>
            <StarRating interactive={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
