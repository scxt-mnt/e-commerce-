import React from 'react'

const NavBar = () => {
  return (
 <>
    <nav className='bg-black w-screen h-[70px] relative'>
        <button className='absolute right-3 top-5 h-auto w-auto bg-transparent grid gap-2'>
            <div className='bg-white w-[20px] h-[2px]'></div>
            <div className='bg-white w-[20px] h-[2px]'></div>
            <div className='bg-white w-[20px] h-[2px]'></div>
        </button>
    </nav>
 </>
  )
}

export default NavBar
