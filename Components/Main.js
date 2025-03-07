"use client"
import Link from 'next/link'
import React, { useRef } from 'react'



const Main = () => {
  return (
    <>
    <section className="text-gray-600 body-font bg">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" id='snacks'>Categories</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-200 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6 bg-contain" src="/Images/Beverage.jpg" alt="Beverages" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">category</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Beverages</h2>
          <p className="leading-relaxed text-base mb-4">Savor every sip with our handcrafted beverages, brewed to perfection, offering a refreshing taste for every moment.</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 my-4 cursor-pointer" href={'#Beverage'}>Browse </Link>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-200 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6 bg-contain" src="/Images/pasta.jpg" alt="Pasta" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">category</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Pasta</h2>
          <p className="leading-relaxed text-base mb-4">Indulge in our delicious pasta, crafted with rich flavors, fresh ingredients, and love for the perfect bite every time</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 my-4 cursor-pointer" href={'#Pasta'}>Browse </Link>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-200 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6 bg-contain" src="/Images/Maggie.jpg" alt="Maggie" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">category</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Noodles</h2>
          <p className="leading-relaxed text-base mb-4">Enjoy hot, flavorful Maggi, cooked to perfection with savory spices — a quick, tasty treat for every craving.</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 my-4 cursor-pointer" href={'#Noodles'}>Browse </Link>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-200 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6 bg-contain" src='/Images/Snacks.jpg' alt="Snacks" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">category</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Snacks</h2>
          <p className="leading-relaxed text-base mb-4">Delight in our crispy, savory snacks — perfect bites to satisfy your hunger with fresh flavors and tasty goodness</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 my-4 cursor-pointer" href={'#Snacks'}>Browse </Link>
        </div>
      </div>
    </div>
  </div>
</section>

              {/* Menu Section  */}

              {/* Beverages */}
<section className="text-gray-600 body-font">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" id='Beverage'>Beverages</h1>
<div className="h-1 w-20 bg-indigo-500 rounded"></div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/icecoffee.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beverages</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Ice Coffee</h2>
          <p className="mt-1 mb-3">$16.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/cappuccino.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beverages</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Cappuccino</h2>
          <p className="mt-1 mb-3">$21.15</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-cover" src="/Images/Menu/cokezero3.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beverages</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Coke Zero</h2>
          <p className="mt-1 mb-3">$12.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/sprite.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beverages</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Sprite</h2>
          <p className="mt-1 mb-3">$18.40</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/tea.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beverages</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Tea</h2>
          <p className="mt-1 mb-3">$16.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/hotchocolate.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beverages</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Hot Chocolate</h2>
          <p className="mt-1 mb-3">$21.15</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/latte.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beverages</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Latte</h2>
          <p className="mt-1 mb-3">$12.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/coldcoffee.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Beverages</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Classic Cold Coffee</h2>
          <p className="mt-1 mb-3">$18.40</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
    </div>
  </div>
</section>

                              {/* Pasta */}

<section className="text-gray-600 body-font ">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" id='Pasta'>Pasta</h1>
<div className="h-1 w-20 bg-indigo-500 rounded"></div>
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

                            {/* Noodles */}

<section className="text-gray-600 body-font ">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" id='Noodles'>Noodles</h1>
<div className="h-1 w-20 bg-indigo-500 rounded"></div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block image" src="/Images/Menu/Noodles1.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Noodles</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Hot Noodles</h2>
          <p className="mt-1 mb-3">$16.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'> Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/Noodles2.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Noodles</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Mexican Noodles</h2>
          <p className="mt-1 mb-3">$21.15</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-cover" src="/Images/Menu/Noodles3.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Noodles</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Italian Noodles</h2>
          <p className="mt-1 mb-3">$12.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/Noodles6.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Noodles</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Super Special Noodles</h2>
          <p className="mt-1 mb-3">$18.40</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/Noodles5.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Noodles</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Tomatoe Noodles</h2>
          <p className="mt-1 mb-3">$16.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      
    </div>
  </div>
</section>
<section className="text-gray-600 body-font ">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" id='Snacks'>Snacks</h1>
<div className="h-1 w-20 bg-indigo-500 rounded"></div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block image" src="/Images/Menu/pizza.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Snacks</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Spcecial Pizza</h2>
          <p className="mt-1 mb-3">$16.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'> Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/burger1.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Snacks</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Mexican Burger</h2>
          <p className="mt-1 mb-3">$21.15</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-cover" src="/Images/Menu/burger2.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Snacks</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Italian Burger</h2>
          <p className="mt-1 mb-3">$12.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/fries.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Snacks</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Super Special Fries</h2>
          <p className="mt-1 mb-3">$18.40</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/chips.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Snacks</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Tomatoe Chips</h2>
          <p className="mt-1 mb-3">$16.00</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Images/Menu/cornflakes.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Snacks</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Corn flakes</h2>
          <p className="mt-1 mb-3">$21.15</p>
          <Link className="mr-8 text-white  hover:text-yellow-200 bg-blue-800 rounded p-1 cursor-pointer" href='/BrowseBrowse'>Add to Cart </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Main