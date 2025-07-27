import { useState } from "react"


const NavBar = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <nav className='bg-black w-screen h-[70px] relative'>
                <button onClick={() => { setShow(!show) }} className='absolute right-3 top-5 h-auto w-auto bg-transparent grid gap-2'>
                    <div className='bg-white w-[23px] h-[2px]'></div>
                    <div className='bg-white w-[23px] h-[2px]'></div>
                    <div className='bg-white w-[23px] h-[2px]'></div>
                </button>
            </nav>
            {show && <section className='bg-black h-screen w-[100px] absolute right-0'></section>
            }
        </>
    )
}

export default NavBar
