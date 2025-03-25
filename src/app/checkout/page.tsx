//order succes message sweetalert message new
'use client'
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from 'react-icons/cg';
import Swal from 'sweetalert2'; // Import SweetAlert
import { useRouter } from "next/navigation"; // For routing after success
import { client } from "@/sanity/lib/client";




const CheckOut = () => {
  const router = useRouter();
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

  const handlePlaceOrder = async () => {

        if (validateForm()) {
      Swal.fire({
        title: "Place Order?",
        text: "Please confirm your billing information",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3b82f6",
        cancelButtonColor: "#ef4444",
        confirmButtonText: "Yes, Place Order!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Success!", "Your order has been placed successfully", "success");
          localStorage.removeItem('appliedDiscount');
          setCartItems([]); // Optional: Clear cart
          router.push('/'); // Redirect to home or thank you page
        }
      });
    }

           const orderData = {
            _type : 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems : cartItems.map(item => ({
              _type : 'reference',
              _ref : item._id
            })),
            total : subTotal,
            discount : discount,
            orderDate : new Date().toISOString
           };
           try {
            await client.create(orderData)
            localStorage.removeItem('appliedDiscount')
           }
           catch (error){
            console.error('error creating order',error)
            
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
