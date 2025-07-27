import {useState} from 'react'

const NavBar = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <nav className='bg-black w-screen h-[70px] absolute z-10'>
                <button onClick={() => { setShow(!show) }} className={`absolute right-3 top-5 h-auto w-auto bg-transparent grid gap-2`}>
                    <div className='bg-white w-[23px] h-[2px]'></div>
                    <div className='bg-white w-[23px] h-[2px]'></div>
                    <div className='bg-white w-[23px] h-[2px]'></div>
                </button>
            </nav>
                <section className={`z-0 mt-[70px] bg-black h-screen w-[200px] absolute right-0 text-white grid justify-items-center transition-transform  duration-1000   ${show ? 'translate-x-0' : 'translate-x-full'}`}>
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
