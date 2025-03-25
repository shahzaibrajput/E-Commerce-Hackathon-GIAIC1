// import Image from "next/image";

// export default function ShoppingCart() {
//   return (
//     <div className="container mx-auto px-4 py-8 ">
//       <h1 className="text-3xl font-bold mb-6">Your shopping cart</h1>
//       <div className="space-y-6">
//         {/* Shopping Cart Item 1 */}
//         <div className="flex items-center justify-between border-b pb-4">
//           <div className="flex items-center">
//             <Image
//               src="/vaseleave.png" // Replace with actual image path
//               alt="Graystone Vase"
//               width={100}
//               height={100}
//               className="w-20 h-20 object-cover rounded-lg"
//             />
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold">Graystone vase</h2>
//               <p className="text-sm text-gray-500">
//                 A timeless ceramic vase with a tri color grey glaze.
//               </p>
//               <p className="text-sm font-bold mt-1">£85</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button className="border px-2 py-1 text-gray-500 hover:text-gray-700">-</button>
//             <span>1</span>
//             <button className="border px-2 py-1 text-gray-500 hover:text-gray-700">+</button>
//           </div>
//           <p className="font-bold">£85</p>
//         </div>

//         {/* Shopping Cart Item 2 */}
//         <div className="flex items-center justify-between border-b pb-4">
//           <div className="flex items-center">
//             <Image
//               src="/leave.png" 
//               alt="Basic White Vase"
//               width={100}
//               height={100}
//               className="w-20 h-20 object-cover rounded-lg"
//             />
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold">Basic white vase</h2>
//               <p className="text-sm text-gray-500">
//                 Beautiful and simple&apo;, this one is for the classics.
//               </p>
//               <p className="text-sm font-bold mt-1">£125</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button className="border px-2 py-1 text-gray-500 hover:text-gray-700">-</button>
//             <span>1</span>
//             <button className="border px-2 py-1 text-gray-500 hover:text-gray-700">+</button>
//           </div>
//           <p className="font-bold">£125</p>
//         </div>
//       </div>

//       {/* Subtotal */}
//       <div className="mt-6 flex justify-end">
//         <div>
//           <p className="text-lg font-semibold">
//             Subtotal: <span className="font-bold">£210</span>
//           </p>
//           <p className="text-sm text-gray-500 lg:pr-16">
//             Taxes and shipping are calculated at checkout.
//           </p>
//         </div>
//       </div>

//       {/* Checkout Button */}
//       <div className="mt-6 flex justify-end">
//         <button
//           id="bg"
//           className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
//         >
//           Go to checkout
//         </button>
//       </div>
//     </div>
//   );
// }
//meny apna code lagaya he 
// "use client";
// import React, { useEffect, useState } from "react";
// import { Product } from "../../../types/products";
// import Image from "next/image";
// import {
//   getCartItems,
//   removeFromCart,
//   updateCartQuantity,
// } from "../actions/actions";
// import Swal from "sweetalert2";
// import { Trash2 } from "lucide-react"; // Attractive Delete Icon
// import { urlFor } from "@/sanity/lib/image";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to recover this item!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#ef4444",
//       cancelButtonColor: "#3b82f6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems((prev) => prev.filter((item) => item._id !== id));
//         Swal.fire("Removed!", "Item has been removed", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id ? { ...item, quantity: quantity } : item
//       )
//     );
//   };

//   const calculatedTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Proceed to Checkout?",
//       text: "Please review your cart before checkout",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3b82f6",
//       cancelButtonColor: "#ef4444",
//       confirmButtonText: "Yes, Proceed!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Success!", "Your order has been successfully processed", "success");
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-600 text-center">Your cart is empty.</p>
//         ) : (
//           <>
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div key={item._id} className="flex items-center justify-between w-full border-b py-4">
//                   <div className="flex items-center space-x-4 flex-1 min-w-0">
//                     {item.image && (
//                       <Image
//                         src={urlFor(item.image).url()}
//                         alt={item.name}
//                         width={500}
//                         height={500}
//                         className="w-16 h-16 rounded-md object-cover"
//                       />
//                     )}
//                     <div className="flex-1 min-w-0">
//                       <h3 className="truncate text-lg font-semibold text-gray-800">{item.name}</h3>
//                       <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 flex-shrink-0">
//                     <div className="flex items-center gap-2 w-[120px] justify-center">
//                       <button
//                         onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
//                         className="w-10 h-10 flex items-center justify-center bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition disabled:opacity-50"
//                         disabled={item.quantity <= 1}
//                       >
//                         -
//                       </button>
//                       <span className="w-8 text-center text-lg font-semibold">{item.quantity}</span>
//                       <button
//                         onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
//                         className="w-10 h-10 flex items-center justify-center bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
//                       >
//                         +
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => handleRemove(item._id)}
//                       className="text-red-600 hover:text-red-800 transition flex-shrink-0"
//                     >
//                       <Trash2 size={26} className="hover:scale-110 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 text-right">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Total: ${calculatedTotal().toFixed(2)}
//               </h3>
//               <button
//                 onClick={handleProceed}
//                 className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
    


//practicing rating stars 
"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import Image from "next/image";
import {getCartItems,removeFromCart,updateCartQuantity} from "../actions/actions";
import Swal from "sweetalert2";
import { Trash2 } from "lucide-react"; // Attractive Delete Icon
import { urlFor } from "@/sanity/lib/image";



const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#3b82f6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems((prev) => prev.filter((item) => item._id !== id));
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between w-full border-b py-4">
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={500}
                        height={500}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="truncate text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="flex items-center gap-2 w-[120px] justify-center">
                      <button
                        onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-lg font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-red-600 hover:text-red-800 transition flex-shrink-0"
                    >
                      <Trash2 size={26} className="hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right">
              <h3 className="text-xl font-semibold text-gray-800">
                Total: ${calculatedTotal().toFixed(2)}
              </h3>
              <button
                onClick={handleProceed}
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
    
