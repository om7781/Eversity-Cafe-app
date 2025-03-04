import Link from 'next/link'
import React from 'react'


const Contact = () => {
  return (
   <>
   <section className="text-gray-600 body-font ">
<h1 className='text-center  text-black sm:text-3xl text-2xl font-medium title-font mb-2' id='Pasta'>Pasta</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block image" src="/Images/Menu/moroccanpasta.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Pasta</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Moroccan Pasta</h2>
          <p className="mt-1 mb-3">$16.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'> Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/mexicanpasta.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Pasta</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Mexican Pasta</h2>
          <p className="mt-1 mb-3">$21.15</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-cover" src="/Images/Menu/italianpasta.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Pasta</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Italian Pasta</h2>
          <p className="mt-1 mb-3">$12.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/superspecialpasta.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Pasta</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Super Special Pasta</h2>
          <p className="mt-1 mb-3">$18.40</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/tomatoepasta.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Pasta</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Tomatoe Pasta</h2>
          <p className="mt-1 mb-3">$16.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      
    </div>
  </div>
</section>
   </>
     )
}

export default Contact