// "use client";

// import Image from "next/image"; // Importing Next.js Image component

// const EcommerceUI = () => {
//   return (

//     <section className="py-8 text-white bg-slate-900 mb-25">
//     <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-700 ease-in-out transform hover:translate-y-[-5px] hover:text-red-600">
//       Discover Luxury & Comfort | Premium Furniture Collection
//     </h2>
//     <p className="text-center m-4 mt-4 text-lg text-white sm:text-base md:mb-12 lg:mb-6 animate-fade-in-up delay-800">
//       Transform your home with our exclusive range of premium furniture.
//       <br />
//       Explore top-quality sofas, tables, beds, and more designed to elevate your living space.
//       Experience a perfect blend of style, durability, and functionality.
//     </p>
//     <div className="mx-auto max-w-7xl px-5">
//       <h1 className="text-3xl font-bold text-center my-6 text-white animate-color-change">
//         Explore Our Categories
//       </h1>
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 animate-fade-in-up delay-300">
//         {["Sofas & Couches", "Dining Tables", "Beds & Mattresses", "Chairs", "Office Furniture", "Outdoor Furniture", "Storage & Shelves", "Lighting & Decor", "Rugs & Carpets", "Bathroom Essentials"].map((category, index) => (
//           <div
//             key={index}
//             className="relative group p-6 rounded-lg shadow-lg bg-white text-black text-center font-semibold transition-all duration-700 ease-in-out transform hover:translate-y-[-5px] hover:bg-red-600 hover:text-white"
//           >
//             {category}
//           </div>
//         ))}
//       </div>
//     </div>
//     <p className="text-sm md:text-base text-white mb-6 px-4 animate-fade-in-down delay-300 mt-10 text-center">
//       Upgrade your home with timeless elegance and modern design. Browse our collection now and find the perfect furniture pieces that match your style and comfort needs.
//     </p>
//   </section>
//     //     <div className="bg-black text-white min-h-screen">
//     //       {/* Header */}
//     //       {/* <header className="text-center py-10">
//     //         <h1 className="text-indigo-400 font-semibold text-xl">UX</h1>
//     //         <h2 className="text-4xl font-bold mt-4">E-Commerce Website</h2>
//     //         <h2 className="text-4xl font-bold">UI</h2>
//     //         <h2 className="text-4xl font-bold">Shahzaib Rajput (ID : 00113362)</h2>
//     //       </header> */}
//     // {/* me ye jo products kahee bhi add karskta hun kisi bhi component me jahan zrurt ho */}
//     //       {/* Product Section */}
//     //       <section className="py-16">
//     //         <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//     //           {/* Product 1 */}
//     //           <div className="text-left hover:scale-105 transform transition-all duration-300">
//     //             <Image
//     //               src="/chair.png"
//     //               alt="The Dandy Chair"
//     //               width={500}
//     //               height={500}
//     //               className="w-full h-80 object-cover rounded-lg"
//     //             />
//     //             <h3 className="text-lg mt-4">The Dandy Chair</h3>
//     //             <p className="text-gray-400">£250</p>
//     //           </div>

//     //           {/* Product 2 */}
//     //           <div className="text-left hover:scale-105 transform transition-all duration-300">
//     //             <Image
//     //               src="/lamp.png"
//     //               alt="New Lamp"
//     //               width={500}
//     //               height={500}
//     //               className="w-full h-80 object-cover rounded-lg"
//     //             />
//     //             <h3 className="text-lg mt-4">New Lamp</h3>
//     //             <p className="text-gray-400">£350</p>
//     //           </div>

//     //           {/* Product 3 */}
//     //           <div className="text-left hover:scale-105 transform transition-all duration-300">
//     //             <Image
//     //               src="/table.png"
//     //               alt="The Stanley Table"
//     //               width={500}
//     //               height={500}
//     //               className="w-full h-80 object-cover rounded-lg"
//     //             />
//     //             <h3 className="text-lg mt-4">The Stanley Table</h3>
//     //             <p className="text-gray-400">£125</p>
//     //           </div>

//     //           {/* Product 4 */}
//     //           <div className="text-left hover:scale-105 transform transition-all duration-300">
//     //             <Image
//     //               src="/stool.png"
//     //               alt="Stool"
//     //               width={500}
//     //               height={500}
//     //               className="w-full h-80 object-cover rounded-lg"
//     //             />
//     //             <h3 className="text-lg mt-4">Stool</h3>
//     //             <p className="text-gray-400">£250</p>
//     //           </div>

//     //           {/* Product 5 */}
//     //           <div className="text-left hover:scale-105 transform transition-all duration-300">
//     //             <Image
//     //               src="/vase.png"
//     //               alt="Andel Vase"
//     //               width={500}
//     //               height={500}
//     //               className="w-full h-80 object-cover rounded-lg"
//     //             />
//     //             <h3 className="text-lg mt-4">Andel Vase</h3>
//     //             <p className="text-gray-400">£95</p>
//     //           </div>
//     //         </div>
//     //       </section>
//     //     </div>

//     <div className="bg-slate-900 shadow-lg rounded-lg p-6 mt-8  mb-8">
//       <div className="flex items-center animation-fadeIn">
//         <Image
//           className="w-16 h-22 rounded-full mr-4 object-cover border-2 bg-slate-500 border-blue-500"
//           src="/images/mycoverpi.jpeg"
//           alt="Author Image"
//           width={64}
//           height={68}
//         />

//         <div>
//           <h3 className="text-white text-xl font-bold "> Shahzaib Rajput</h3>
//           <p className="text-white">
//             Computer Scientist | Aspiring Frontend Developer | HTML | Tailwind
//             Css | TypeScript | React.js | Next.js | Exploring Cloud Applied
//             Generative AI Engineering
//           </p>
//         </div>
//       </div>

//       {/* <p className="mt-4 text-white leading-relaxed">
//         I am an Undergraduate student pursuing a BS in Computer Science at
//         Mohammed Ali Jinnah University, Karachi. Alongside my studies, I am
//         enrolled in the Cloud Applied Generative AI Engineer course at Governor
//         House, Karachi. I am also an active member of my university's ACM
//         society, where I help organize and manage coding events. Additionally, I
//         am part of Xeven Solutions Karachi's team, where I contribute to
//         organizing events for the CEO, Sir Irfan Malik, a renowned guru in AI
//         and Data Science.
//       </p> */}
//       <p className="mt-4 text-white leading-relaxed">
//         I am an Undergraduate Student pursuing a BS in Computer Science at
//         Mohammed Ali Jinnah University, Karachi. Alongside my studies, I am
//         enrolled in the Cloud Applied Generative AI Engineer course at Governor
//         House, Karachi. I am also an active member of my university&apos;s ACM
//         society, where I help organize and manage coding events. Additionally, I
//         am part of Xeven Solutions Karachi&apos;s team, where I contribute to
//         organizing events for the CEO, Sir Irfan Malik, a renowned guru in AI
//         and Data Science.
//       </p>

//       <div className="mt-4 space-x-3">
//         <a
//           href="https://www.linkedin.com/in/shahzaib-rajput-93360628b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//           target="blank"
//           className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-black transition duration-300"
//         >
//           LinkdIn
//         </a>
//         <a
//           href="https://www.instagram.com/shahzaibrajput240?utm_source=qr&igsh=MWV5NzQ2bmJieHF3dg=="
//           target="blank"
//           className="px-4 py-2 text-white bg-blue-600 md:mb-12 rounded-md hover:bg-black transition duration-300"
//         >
//           Instagram
//         </a>
//         <a
//           href="https://www.facebook.com/share/1ECNMB5epu/"
//           target="blank"
//           className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-black transition duration-300"
//         >
//           Facebook
//         </a>
//         <a
//           href="https://youtube.com/@shahzaibrajput7246?si=Nqrb6P27ele6W0Gy"
//           target="blank"
//           className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-black transition duration-300"
//         >
//           Youtube
//         </a>
//       </div>
//     </div>
//   );
// };

// export default EcommerceUI;
//
"use client";

import Image from "next/image";



function EcommerceUI() {
  return (
    <>
      <section className="py-8 text-white bg-slate-900 mb-25">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-center transition-all duration-700 ease-in-out transform hover:translate-y-[-5px] hover:text-red-600">
          Discover Luxury & Comfort | Premium Furniture Collection
        </h2>
        <p className="text-center m-4 mt-4 text-lg text-white sm:text-base md:mb-12 lg:mb-6">
          Transform your home with our exclusive range of premium furniture.
          <br />
          Explore top-quality sofas, tables, beds, and more designed to elevate
          your living space. Experience a perfect blend of style, durability,
          and functionality. <br />
          Upgrade your home with timeless elegance and modern design. Browse our
          collection now and find the perfect furniture pieces that match your
          style and comfort needs.
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-6 text-white transition-all duration-700 ease-in-out transform hover:translate-y-[-5px] hover:text-red-600">
            Explore Our Categories
          </h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[
              "Sofas & Couches",
              "Dining Tables",
              "Beds & Mattresses",
              "Chairs",
              "Office Furniture",
              "Outdoor Furniture",
              "Storage & Shelves",
              "Lighting & Decor",
              "Rugs & Carpets",
              "Bathroom Essentials",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 rounded-lg shadow-lg bg-white text-black text-center font-semibold transition-all duration-700 ease-in-out transform hover:translate-y-[-5px] hover:bg-red-600 hover:text-white"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm md:text-base text-white mb-6 px-4 mt-10 text-center"></p>
      </section>
      <div className="bg-slate-900 shadow-lg rounded-lg p-6 mt-8 mb-8">
        <div className="flex items-center">
          <Image
            className="w-16 h-22 rounded-full mr-4 object-cover border-2 border-blue-500"
            src="/images/mycoverpi.jpeg"
            alt="Shahzaib Rajput"
            width={64}
            height={68} />
          <div>
            <h3 className="text-white text-xl font-bold">Shahzaib Rajput</h3>
            <p className="text-white">
              Computer Scientist | Aspiring Frontend Developer | HTML | Tailwind
              CSS | TypeScript | React.js | Next.js | Exploring Cloud Applied
              Generative AI Engineering
            </p>
          </div>
        </div>

        <p className="mt-4 text-white leading-relaxed">
          I am an Undergraduate Student pursuing a BS in Computer Science at
          Mohammad Ali Jinnah University, Karachi. Alongside my studies, I am
          enrolled in the Cloud Applied Generative AI Engineer course at
          Governor House, Karachi. I am also an active member of my
          university&apos;s ACM society, where I help organize and manage coding
          events. Additionally, I am part of Xeven Solutions Karachi&apos;s
          team, where I contribute to organizing events for the CEO, Sir Irfan
          Malik, a renowned guru in AI and Data Science.
        </p>

        <div className="mt-4 space-x-3 flex flex-wrap items-center">
        {/* <div className="flex items-center gap-3 whitespace-nowrap mt-2"> */}
          {/* <a
            href="https://www.linkedin.com/in/shahzaib-rajput-93360628b"
            target="_blank"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-black transition duration-300"
          >
            LinkedIn
          </a> */}
          <a
            href="https://www.instagram.com/shahzaibrajput240"
            target="_blank"
            className="px-4 py-2 text-white bg-pink-600 rounded-md hover:bg-black transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1ECNMB5epu/"
            target="_blank"
            className="px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-black transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://youtube.com/@shahzaibrajput7246"
            target="_blank"
            className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-black transition duration-300"
          >
            YouTube
          </a>
        </div>
      </div>
    </>
  );
}

export default EcommerceUI;
