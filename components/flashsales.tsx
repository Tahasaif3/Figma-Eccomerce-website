'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

// ?height=300&width=300
const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    image: "/fss1.png",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
  },
  {
    name: "AK-900 Wired Keyboard",
    image: "/fss2.png",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    name: "IPS LCD Gaming Monitor",
    image: "/fss3.png",
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
  },
  {
    name: "S-Series Comfort Chair",
    image: "/fss4.png",
    price: 375,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
  },
]

function FlashSales() {
  return (
    <div className='w-full flex justify-center items-center mt-4 mb-1 pt-10 sm:pt-20'>
      <div className='w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%] pb-10'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0'>
          <div>
            <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
              Today`s
            </h3>
            <h1 className='text-slate-800 font-bold text-2xl sm:text-3xl lg:text-4xl pt-2'>Flash Sales</h1>
          </div>
 
          {/* countdown timer */}
    <div className='w-[702px] h-[50px] relative flex justify-between items-center ml-10'>

{/* day */}
<div className='left-0 top-0 absolute flex-col gap-1 inline-flex'>
<div className='w-[31px] text-black font-medium font-["Poppins"] leading-[18px]'>
 Days
</div>
<div className='w-[46px] h-7 text-black text-[32px] font-bold font-["Inter"] leading-[30px] tracking-wider'>
03
</div> 
</div>

{/* {hours section */}
<div className='w-[42px] h-[50px] left-[84px] top-0 absolute flex-col justify-start items-center gap-1 inline-flex '>
<div className='w-[35px] text-black font-medium font-["Poppins] leading-[18px]'>
Hours </div>
<div className='text-black text-[32px] font-bold font-["Inter"] leading-[30px] tracking-wider'>23
</div>
</div> 

{/* minutes section */}
<div className='w-[49px] h-[50px] left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex'>
<div className='w-[49px] text-black font-medium font-["Poppins"] leading-[18px]'>
Minutes
</div> 
<div className='w-[39px] h-7  text-black text-[32px] font-bold font-["Inter"] leading-[30px] tracking-wider'>
19
</div>  
</div>
{/* seconds section */}

<div className='w-[51px] h-[50px] left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex'> <div className='w-[52px] text-black font-medium font-["Poppins"] leading-[18px]'> Seconds </div> <div className='text-black text-[32px] font-bold font-["Inter"] leading-[30px] tracking-wider'> 56 </div> </div>
{/* separate timer dots days*/}

<div className='left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex'> <div className='w-1 h-1 bg-red-500 rounded-full'></div> <div className='w-1 h-1 bg-red-500 rounded-full'></div> </div>
{/* separate timer dots hours */}
<div className='left-[143px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex'> <div className='w-1 h-1 bg-red-500 rounded-full'></div> <div className='w-1 h-1 bg-red-500 rounded-full'></div> </div>
{/* separate timer dots minutes */}
<div className='left-[230px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex'> <div className='w-1 h-1 bg-red-500 rounded-full'></div> <div className='w-1 h-1 bg-red-500 rounded-full'></div> </div> </div>

          {/* navigation */}
          <div className='flex gap-2 mt-4 sm:mt-0'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
              <FaArrowLeft className='text-black' />
            </div>
            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
              <FaArrowRight className='text-black' />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="bg-red-500 hover:bg-red-600">
            View All Products
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FlashSales

