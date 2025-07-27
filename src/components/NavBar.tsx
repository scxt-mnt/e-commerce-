import {useState} from 'react'

const NavBar = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <nav className='bg-black w-screen h-[70px] absolute z-10'>
                <button onClick={() => { setShow(!show) }} className={`absolute right-3 top-5 h-auto w-auto bg-transparent grid gap-2`}>
                    <div className={` transition-transform duration-1000 bg-white w-[23px] h-[2px] ${show ? 'rotate-45 translate-y-[2px] -translate-x-[0.5px]' : 'rotate-0'}`}></div>
                    <div className={`transition-transform transition-bg duration-1000 bg-white w-[23px] h-[2px] ${show ? '-rotate-45 -translate-y-2 bg-red-900' : 'rotate-0'}`}></div>
                    <div className='bg-white w-[23px] h-[2px]'></div>
                </button>
            </nav>
                <section className={`z-0 mt-[70px] bg-black h-screen w-[200px] absolute right-0 text-white grid justify-items-center transition-transform  duration-700  ${show ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className='grid gap-10 absolute h-auto font-poppins text-[20px]'>
                        <a href=""><li>Home</li></a>
                        <a href=""><li>about</li></a>
                        <a href=""><li>contact</li></a>
                    </ul>
                </section>
            
        </>
    )
}

export default NavBar

