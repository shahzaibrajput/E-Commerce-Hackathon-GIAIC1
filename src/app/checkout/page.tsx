// // 'use client'
// // import React, { useEffect, useState } from "react";
// // import { Product } from "../../../types/products";
// // import { getCartItems } from "../actions/actions";
// // import { error } from "console";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { urlFor } from "@/sanity/lib/image";
// // import {CgChevronRight} from  'react-icons/cg';

// // const CheckOut = () => {
// //   const [cartItems, setCartItems] = useState<Product[]>([]);
// //   const [discount, setDiscount] = useState<number>(0);
// //   const [formValues, setFormValues] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     zipCode: "",
// //     city: "",
// //   });

// //   const [formErrors, setFormErrors] = useState({
// //     firstName: false,
// //     lastName: false,
// //     email: false,
// //     phone: false,
// //     address: false,
// //     zipCode: false,
// //     city: false,
// //   });
// //   useEffect(() => {
// //     setCartItems(getCartItems());
// //     const appliedDiscount = localStorage.getItem('appliedDiscount')
// //     if(appliedDiscount){
// //         setDiscount(Number(appliedDiscount))
// //     }
// //   },[]);

// //    const subTotal = cartItems.reduce(
// //     (total, item) => total + item.price * item.quantity, 0)
// //      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //       setFormValues({
// //         ...formValues,
// //         [e.target.id] : e.target.value
// //       })
// //      }

// //      const validateForm = () => {
// //       const errors = {
// //         firstName : ! formValues.firstName,
// //         lastName : !formValues.lastName,
// //         email: !formValues.email.includes('@'),
// //         phone : !formValues.phone.match(/^[0-9]{10}$/),
// //         address : !formValues.address,
// //         zipCode : !formValues.zipCode.match(/^[0-9]{6}$/),
// //         city : !formValues.city,
// //       };
// //       setFormErrors(errors);
// //       return Object.values(errors).every((error)=> !error);
// //      }
// //      const handlePlaceOrder = () => {
// //       if(validateForm()){
// //         localStorage.removeItem('appliedDiscount')
// //       }
// //      }
    
// //   return(
// //     <div className="min-h-screen bg-gray-100 ">
// //       <div className="mt-6">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6">
// //          <nav className="flex items-center gap-2 py-4 ">
// //           <Link href={'/cart'}
// //           className="text-[#666666] hover:text-black transition text-sm ">
// //           Cart
// //           </Link>
// //           <CgChevronRight />
// //           <span>
// //             CheckOut
// //           </span>
// //          </nav>
// //         </div>
// //       </div>
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 py-8 ">
// //      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 ">
// //       <div className="bg-white border rounded-lg p-6 space-y-6 ">
// //         <h2 className="text-lg font-semibold mb-4 ">
// //           Order Summary
// //         </h2>
// //         {
// //   cartItems.length > 0 ? (
// //     cartItems.map((item) => ( // ✅ Curly braces `{}` hata ke `()` use kiya, taake return ho.
// //       <div key={item._id} className="flex items-center gap-4 py-3 border-b">  
// //         <div className="w-16 h-16 rounded overflow-hidden">
// //           {item.image && (
// //             <Image
// //               src={urlFor(item.image).url()}
// //               alt="Image"
// //               width={50}
// //               height={50}
// //               className="object-cover w-full h-full"
// //             />
// //           )}
// //         </div>
// //         <div className="flex-1">
// //           <h3 className="text-sm font-medium ">{item.name}</h3>
// //           <p className="text-xs text-gray-500 ">Quantity: {item.quantity}</p>
// //           <p>${item.price * item.quantity}</p>
// //         </div>
// //       </div> // ✅ Yeh div properly close ho gaya
// //     )) // ✅ Parentheses use kiya taake implicit return ho
// //   ) : (
// //     <p className="text-xs font-medium">No items in cart</p>
// //   )
// // }
// // <div className="text-right pt-4 ">
// //   <p className="text-sm">
// //     Subtotal: <span>${subTotal}</span>
// //   </p>
// //   <p className="text-sm ">
// //     Discount: <span className="font-medium ">${discount}</span>
// //   </p>
// //   <p className="text-lg font-semibold">
// //     Total: ${subTotal.toFixed(2)}
// //   </p>
// // </div>
// //         {/* {
// //           cartItems.length > 0 ?  (
// //             cartItems.map((item)=> (
// //               <div key={item._id}>{
// //                 <div className="image">
// //                   {
// //                     item.image && (
// //                       <Image
// //                       src={urlFor(item.image).url()}
// //                       alt="Image"
// //                       width={50}
// //                       height={50}
// // // //                       className="object-cover"
// // // //                       />
// // // //                     )
// // // //                   }
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3>
// // // //                     {item.name}
// // // //                   </h3>
// // // //                   <p>
// // // //                     Quantity: {item.quantity}
// // // //                   </p>
                  
// // // //                   <p>
// // // //                     ${item.price * item.quantity}
// // // //                   </p>
                
// // // //               </div>
// // // //               </div>
// // // //             ))
// // // //           ) : (
// // // //                    <p>No items in cart </p>
// // // //           )
// // // //         } */}
// // // //       </div>
// // // //       <div className="min-h-screen bg-gray-100">
// // // //         <h2>Billing Information</h2>
// // // //         <div className="min-h-screen bg-gray-100 mt-1 py-4  sm:px-6 lg:px-8">
// // // //           <div className="">
// // // //             <label>First Name  </label>
// // // //             <input
// // // //             type = 'text'
// // // //             id="firstName"
// // // //             placeholder="Enter Your First Name"
// // // //             value={formValues.firstName}
// // // //             onChange={handleInputChange}
// // // //             />
// // // //              {formErrors.firstName && (
// // // //               <p className="text-sm text-red-600"> First Name is Required</p>
// // // //             )}
// // // //           </div>
// // // //           <div className="mt-2 w-full">
// // // //             <label className="mt-12">Last Name  </label>
// // // //             <input
// // // //             type = 'text'
// // // //             id="lastName"
// // // //             placeholder="Enter Your Last Name"
// // // //             value={formValues.lastName}
// // // //             onChange={handleInputChange}
// // // //             />
// // // //             {formErrors.lastName && (
// // // //               <p className="text-sm text-red-600"> Last Name is Required</p>
// // // //             )}
// // // //           </div>
// // // //           <div className="mt-2 w-full">
// // // //             <label>Address  </label>
// // // //             <input
// // // //             type = 'text'
// // // //             id="address"
// // // //             placeholder="Enter Your Address"
// // // //             value={formValues.address}
// // // //             onChange={handleInputChange}
// // // //             />
// // // //              {formErrors.lastName && (
// // // //               <p className="text-sm text-red-600"> Address is Required</p>
// // // //             )}
// // // //           </div>
// // // //           <div className="mt-2 w-full">
// // // //             <label>Email  </label>
// // // //             <input
// // // //             type = 'text'
// // // //             id="email"
// // // //             placeholder="Enter Your Email"
// // // //             value={formValues.email}
// // // //             onChange={handleInputChange}
// // // //             />
// // // //              {formErrors.email && (
// // // //               <p className="text-sm text-red-600"> Email is Required</p>
// // // //             )}
// // // //           </div>
// // // //           <div className="mt-2 w-full">
// // // //             <label>Phone Number  </label>
// // // //             <input
// // // //             type = 'number'
// // // //             id="phone"
// // // //             placeholder="Enter Your Phone Number"
// // // //             value={formValues.phone}
// // // //             onChange={handleInputChange}
// // // //             />
// // // //              {formErrors.phone && (
// // // //               <p className="text-sm text-red-600"> Phone Number is Required</p>
// // // //             )}
// // // //           </div>
// // // //           <div className="mt-2 w-full">
// // // //             <label>City  </label>
// // // //             <input
// // // //             type = 'text'
// // // //             id="city"
// // // //             placeholder="Enter Your City"
// // // //             value={formValues.city}
// // // //             onChange={handleInputChange}
// // // //             />
// //              {formErrors.city && (
// //                <p className="text-sm text-red-600"> City name is Required</p>
// //              )}
// //            </div>
// //            <div className="mt-2 w-full">
// //              <label>Zip Code  </label>
// //              <input
// //              type = 'number'
// //              id="zipCode"
// //              placeholder="Enter Your City Zip Code"
// //             value={formValues.zipCode}
// //              onChange={handleInputChange}
// //                       className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
// //              />
// //              {formErrors.zipCode && (
// //                <p className="text-sm text-red-600 "> Zip Code  is Required</p>
// //             )}
            
// //           </div>
// //           <button className="w-full rounded-md mt-4 h-10 bg-blue-500 hover:bg-blue-700 text-white""
// //           onClick={handlePlaceOrder}>
// //             Place Order
// //           </button>
// //         </div>
// //       </div>
// //      </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // export default CheckOut;
// // //new code new billibg style 
// // // 'use client'
// // // import React, { useEffect, useState } from "react";
// // // import { Product } from "../../../types/products";
// // // import { getCartItems } from "../actions/actions";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { urlFor } from "@/sanity/lib/image";
// // // import {CgChevronRight} from  'react-icons/cg';

// // // const CheckOut = () => {
// // //   const [cartItems, setCartItems] = useState<Product[]>([]);
// // //   const [discount, setDiscount] = useState<number>(0);
// // //   const [formValues, setFormValues] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     phone: "",
// // //     address: "",
// // //     zipCode: "",
// // //     city: "",
// // //   });

// // //   const [formErrors, setFormErrors] = useState({
// // //     firstName: false,
// // //     lastName: false,
// // //     email: false,
// // //     phone: false,
// // //     address: false,
// // //     zipCode: false,
// // //     city: false,
// // //   });

// // //   useEffect(() => {
// // //     setCartItems(getCartItems());
// // //     const appliedDiscount = localStorage.getItem('appliedDiscount');
// // //     if(appliedDiscount){
// // //         setDiscount(Number(appliedDiscount));
// // //     }
// // //   }, []);

// // //   const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

// // //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     setFormValues({
// // //       ...formValues,
// // //       [e.target.id] : e.target.value
// // //     });
// // //   }

// // //   const validateForm = () => {
// // //     const errors = {
// // //       firstName : !formValues.firstName,
// // //       lastName : !formValues.lastName,
// // //       email: !formValues.email.includes('@'),
// // //       phone : !formValues.phone.match(/^[0-9]{10}$/),
// // //       address : !formValues.address,
// // //       zipCode : !formValues.zipCode.match(/^[0-9]{6}$/),
// // //       city : !formValues.city,
// // //     };
// // //     setFormErrors(errors);
// // //     return Object.values(errors).every((error) => !error);
// // //   }

// // //   const handlePlaceOrder = () => {
// // //     if(validateForm()){
// // //       localStorage.removeItem('appliedDiscount');
// // //     }
// // //   }

// // //   return(
// // //     <div className="min-h-screen bg-gray-100">
// // //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6 py-8">
// // //         <nav className="flex items-center gap-2 py-4">
// // //           <Link href={'/cart'} className="text-[#666666] hover:text-black transition text-sm">Cart</Link>
// // //           <CgChevronRight />
// // //           <span>CheckOut</span>
// // //         </nav>
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //           {/* Order Summary */}
// // //           <div className="bg-white border rounded-lg p-6 space-y-6">
// // //             <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
// // //             {cartItems.length > 0 ? (
// // //               cartItems.map((item) => (
// // //                 <div key={item._id} className="flex items-center gap-4 py-3 border-b">  
// // //                   <div className="w-16 h-16 rounded overflow-hidden">
// // //                     {item.image && (
// // //                       <Image src={urlFor(item.image).url()} alt="Image" width={50} height={50} className="object-cover w-full h-full" />
// // //                     )}
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h3 className="text-sm font-medium">{item.name}</h3>
// // //                     <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
// // //                     <p>${item.price * item.quantity}</p>
// // //                   </div>
// // //                 </div>
// // //               ))
// // //             ) : (
// // //               <p className="text-xs font-medium">No items in cart</p>
// // //             )}
// // //             <div className="text-right pt-4">
// // //               <p className="text-sm">Subtotal: <span>${subTotal}</span></p>
// // //               <p className="text-sm">Discount: <span className="font-medium">${discount}</span></p>
// // //               <p className="text-lg font-semibold">Total: ${subTotal.toFixed(2)}</p>
// // //             </div>
// // //           </div>
// // //           {/* Billing Information */}
// // //           <div className="bg-white border rounded-lg p-6 space-y-6">
// // //             <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
// // //             {Object.keys(formValues).map((key) => (
// // //               <div key={key} className="mt-2 w-full">
// // //                 <label className="block text-sm font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
// // //                 <input
// // //                   type={key === 'phone' || key === 'zipCode' ? 'number' : 'text'}
// // //                   id={key}
// // //                   placeholder={`Enter Your ${key.replace(/([A-Z])/g, ' $1').trim()}`}
// // //                   value={formValues[key as keyof typeof formValues]}
// // //                   onChange={handleInputChange}
// // //                   className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
// // //                 />
// // //                 {formErrors[key as keyof typeof formErrors] && (
// // //                   <p className="text-sm text-red-600">{key.replace(/([A-Z])/g, ' $1').trim()} is required</p>
// // //                 )}
// // //               </div>
// // //             ))}
// // //             <button className="w-full rounded-md mt-4 h-10 bg-blue-500 hover:bg-blue-700 text-white" onClick={handlePlaceOrder}>
// // //               Place Order
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// //mera code comment free
// 'use client'
// import React, { useEffect, useState } from "react";
// import { Product } from "../../../types/products";
// import { getCartItems } from "../actions/actions";
// import Link from "next/link";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from 'react-icons/cg';

// const CheckOut = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     zipCode: "",
//     city: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     email: false,
//     phone: false,
//     address: false,
//     zipCode: false,
//     city: false,
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem('appliedDiscount');
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subTotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       email: !formValues.email.includes('@'),
//       phone: !formValues.phone.match(/^[0-9]{10}$/),
//       address: !formValues.address,
//       zipCode: !formValues.zipCode.match(/^[0-9]{6}$/),
//       city: !formValues.city,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every(error => !error);
//   };

//   const handlePlaceOrder = () => {
//     if (validateForm()) {
//       localStorage.removeItem('appliedDiscount');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="mt-6">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6">
//           <nav className="flex items-center gap-2 py-4">
//             <Link href={'/cart'} className="text-[#666666] hover:text-black transition text-sm">Cart</Link>
//             <CgChevronRight />
//             <span>CheckOut</span>
//           </nav>
//         </div>
//       </div>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white border rounded-lg p-6 space-y-6">
//             <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div key={item._id} className="flex items-center gap-4 py-3 border-b">
//                   <div className="w-16 h-16 rounded overflow-hidden">
//                     {item.image && (
//                       <Image
//                         src={urlFor(item.image).url()}
//                         alt="Image"
//                         width={50}
//                         height={50}
//                         className="object-cover w-full h-full"
//                       />
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-sm font-medium">{item.name}</h3>
//                     <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
//                     <p>${item.price * item.quantity}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-xs font-medium">No items in cart</p>
//             )}
//             <div className="text-right pt-4">
//               <p className="text-sm">Subtotal: <span>${subTotal}</span></p>
//               <p className="text-sm">Discount: <span className="font-medium">${discount}</span></p>
//               <p className="text-lg font-semibold">Total: ${subTotal.toFixed(2)}</p>
//             </div>
//           </div>
//           <div className="bg-white border rounded-lg p-6 space-y-4">
//             <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
//             <div>
//               <label>First Name  </label>
//               <input type='text' id="firstName" placeholder="Enter Your First Name" value={formValues.firstName} onChange={handleInputChange} />
//               {formErrors.firstName && <p className="text-sm text-red-600">First Name is Required</p>}
//             </div>
//             <div>
//               <label>Last Name  </label>
//               <input type='text' id="lastName" placeholder="Enter Your Last Name" value={formValues.lastName} onChange={handleInputChange} />
//               {formErrors.lastName && <p className="text-sm text-red-600">Last Name is Required</p>}
//             </div>
//             <div>
//               <label>Address  </label>
//               <input type='text' id="address" placeholder="Enter Your Address" value={formValues.address} onChange={handleInputChange} />
//               {formErrors.address && <p className="text-sm text-red-600">Address is Required</p>}
//             </div>
//             <div>
//               <label>Email  </label>
//               <input type='text' id="email" placeholder="Enter Your Email" value={formValues.email} onChange={handleInputChange} />
//               {formErrors.email && <p className="text-sm text-red-600">Email is Required</p>}
//             </div>
//             <div>
//               <label>Phone Number  </label>
//               <input type='number' id="phone" placeholder="Enter Your Phone Number" value={formValues.phone} onChange={handleInputChange} />
//               {formErrors.phone && <p className="text-sm text-red-600">Phone Number is Required</p>}
//             </div>
//             <div>
//               <label>City  </label>
//               <input type='text' id="city" placeholder="Enter Your City" value={formValues.city} onChange={handleInputChange} />
//               {formErrors.city && <p className="text-sm text-red-600">City name is Required</p>}
//             </div>
//             <div>
//               <label>Zip Code  </label>
//               <input type='number' id="zipCode" placeholder="Enter Your City Zip Code" value={formValues.zipCode} onChange={handleInputChange} />
//               {formErrors.zipCode && <p className="text-sm text-red-600">Zip Code is Required</p>}
//             </div>
//             <button className="w-full rounded-md mt-4 h-10 bg-blue-500 hover:bg-blue-700 text-white" onClick={handlePlaceOrder}>Place Order</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;

//responsiveness
'use client'
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from 'react-icons/cg';

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });
  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem('appliedDiscount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email.includes('@'),
      phone: !formValues.phone.match(/^[0-9]{10}$/),
      address: !formValues.address,
      zipCode: !formValues.zipCode.match(/^[0-9]{6}$/),
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem('appliedDiscount');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 py-4">
          <Link href={'/cart'} className="text-[#666666] hover:text-black transition text-sm">
            Cart
          </Link>
          <CgChevronRight />
          <span>CheckOut</span>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                <div className="w-16 h-16 rounded overflow-hidden">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt="Image"
                      width={50}
                      height={50}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                  <p>${item.price * item.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs font-medium">No items in cart</p>
          )}
          <div className="text-right pt-4">
            <p className="text-sm">Subtotal: <span>${subTotal.toFixed(2)}</span></p>
            <p className="text-sm">Discount: <span className="font-medium">${discount}</span></p>
            <p className="text-lg font-semibold">Total: ${subTotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
          {Object.keys(formValues).map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                placeholder={`Enter your ${field}`}
                value={formValues[field as keyof typeof formValues]}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
              />
              {formErrors[field as keyof typeof formErrors] && (
                <p className="text-sm text-red-600">{field.replace(/([A-Z])/g, ' $1')} is required</p>
              )}
            </div>
          ))}
          <button className="w-full rounded-md mt-4 h-10 bg-blue-500 hover:bg-blue-700 text-white" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
