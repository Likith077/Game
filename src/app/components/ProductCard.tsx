"use client"
import React from 'react'
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
    img: string;
    title: string;
    rating: number;
    gamePath?: string;
}

const ProductCard: React.FC<propsType> = ({img, title, rating, gamePath}) => {

  const generateRating = (rating: number) => {
    switch (rating){
      case 1:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        )
      case 2:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        )
      case 3:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        )
      case 4:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        )
      case 5:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        )
      default:
        return null;
    }
  }

  const handleClick = () => {
    if (gamePath) {
      window.location.href = gamePath;
    }
  };

  return (
    <div 
      className='w-[250px] border border-gray-200 rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col' 
      onClick={handleClick}
    >
      <div className='flex-grow'>
        <Image 
          className="w-full h-auto"
          src={img} 
          width={250}
          height={200}
          alt={title} 
        />
      </div>
      
      <div className='p-4 bg-white'>
        <h2 className='text-accent font-medium uppercase text-lg truncate mb-2'>{title}</h2>
        <div>{generateRating(rating)}</div>
      </div>
    </div>
  )
}

export default ProductCard