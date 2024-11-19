"use client";
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const HeaderMain = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className='border-b border-gray-200 py-6'>
      <div className='container sm:flex items-center justify-between'>
        <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
          GAME SPACE
        </div>

        <form onSubmit={handleSearch} className='w-full sm:w-[300px] md:w-[70%] relative'>
          <input 
            type="text" 
            placeholder='Search' 
            className='w-full px-4 border-gray-200 border p-2 rounded-lg'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className='absolute right-0 top-0 mr-3 mt-3 text-gray-400'>
            <BsSearch size={20} />
          </button>
        </form>


      </div> 
    </div>
  )
}

export default HeaderMain