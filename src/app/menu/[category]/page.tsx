import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item=>(
        <Link href={`/product/${item.id}`} className='w-full h-[60vh] border-r-2 border-b-2 flex flex-col justify-between border-red-500 lg:w-1/3 sm:w-1/2 p-4 group even:bg-fuchsia-50' key={item.id}>
          {/* image container */}
          {item.img && 
          <div className='relative h-[80%]'>
            <Image src={item.img} alt='' fill className='object-contain' />
          </div> 
          }
          {/* text container */}
          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button className='hidden group-hover:block text-white bg-red-500 p-2 uppercase rounded-md'>Add To Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage