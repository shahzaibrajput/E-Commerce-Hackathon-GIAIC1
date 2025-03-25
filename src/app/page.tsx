import Image from "next/image";
import Hero from "./component/hero";
import Card1 from "./component/card1";
import Product from "./component/product";
import ProductTwo from "./component/product2";
import CardLast from "./component/lastcard";
import {client} from "../sanity/lib/client"
// import DenyChair from "./component/denychair";
import  SignUp from "./component/signup";
import About from "./about/page";
import HomePage from "./homepage/page";
// import Page from "./product/page";
import ProductListing from "./productlist/page";
import EcommerceUI from "./uiux/page"

// import { Component } from "react";/
export const metadata = {
  title: "Home"
}


export default async function Home() {
  const query =`*[_type == "product" ]{
    _id,
    name,
    _type,
    image,
    price,
    description,
  }`
  
  const data=await client.fetch(query)
  console.log("Data", JSON.stringify(data, null, 2)); 
  return (
   <div>
    {/* <Component /> */}
    <Hero />
    <Card1/>
    <Product />
    <ProductTwo />
    <SignUp />
    <CardLast />
  
     {/* <DenyChair />  */}
    
     {/* <About />  */}
     {/* <HomePage />  */}
    {/* <Page />  */}
     {/* <ProductListing />  */}
     {/* <ShoppingCart />  */}
    {/* < EcommerceUI /> */}
    </div>
 
  );
}
