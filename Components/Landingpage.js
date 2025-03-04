import React from 'react'
import Main from './Main';
import Link from 'next/link';
const landingpage = () => {
  return (
    <>
    <section className="text-white body-font bg-[url('./coffee-background2.jpg')] bg-cover">
  <div className="container mx-auto flex px-auto py-65 items-center justify-center flex-col">
    {/* <img className="lg:w-3/6 md:w-3/6 w-6/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
    <div className="text-center lg:w-2/3 w-full h-60vh">
      <h1 className="title-font  sm:text-4xl text-3xl my-5 font-bold text-white">Eversity Cafe</h1>
      <p className="mb-8 leading-relaxed">Where every cup is crafted with passion and precision. Step into a cozy ambiance filled with rich aromas, warm smiles, and handcrafted flavors. Whether you're here for your morning boost or a relaxing break, our brews promise to energize your soul and brighten your day. Sip, savor, and let every moment brew something special.</p>
      <div className="flex justify-center">
        <Link className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href='/Menu'>Browse Menu</Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default landingpage