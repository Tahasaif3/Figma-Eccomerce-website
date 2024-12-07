import React from 'react'
import { BsSmartwatch } from 'react-icons/bs';
import { FaArrowLeft, FaArrowRight, FaCamera, FaMobileAlt } from 'react-icons/fa';
import { FaHeadphones, } from 'react-icons/fa6';
import { HiOutlineComputerDesktop, } from 'react-icons/hi2';
import { TbDeviceGamepad } from 'react-icons/tb';

const CategoryBox = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(16.66%-1rem)] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative'>
    <Icon className='text-5xl font-bold' />
    <p className='font-bold'>{title}</p>
  </div>
);

function Categories() {
  return (
    <section className='py-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6'>
          <div>
            <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'> Categories </h3>
            <h1 className='text-slate-900 font-bold text-2xl sm:text-3xl pt-4'>Browse By Category</h1>
          </div>

          <div className='flex gap-2 mt-4 sm:mt-0'>
            <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
              <FaArrowLeft className='text-black'/>
            </div>
            <div className='w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer'>
              <FaArrowRight className='text-black'/>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-center sm:justify-between gap-4'>
          <CategoryBox icon={FaMobileAlt} title="Phones" />
          <CategoryBox icon={HiOutlineComputerDesktop} title="Computer" />
          <CategoryBox icon={BsSmartwatch} title="Smart Watch" />
          <CategoryBox icon={FaCamera} title="Camera" />
          <CategoryBox icon={FaHeadphones} title="Headphones" />
          <CategoryBox icon={TbDeviceGamepad} title="Gaming" />
        </div>
      </div>
    </section>
  )
}

export default Categories;

