import React from 'react'
import man from "../assests/man.jpg"
import { useNavigate } from 'react-router';
const Home = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navigate = useNavigate()

    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}
            </style>

            <section>
                 <nav className='flex items-center justify-between w-full md:px-16 lg:px-24 xl:px-32 py-4'>
                    <a className='font-semibold' href='/'>
                        Expense Tracker
                    </a>

                    {/* MENU LINKS */}
                    <div className={`max-md:fixed max-md:inset-0 max-md:bg-white/50 max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:text-lg max-md:backdrop-blur flex items-center gap-8 ${ menuOpen ? 'max-md:w-full' : 'max-md:w-0' }`} >
                        
                        
                        <button onClick={() =>navigate("/signup")} className='md:hidden px-6 py-2.5 bg-[#4F39F6] hover:bg-[#3e2fcc] active:scale-95 rounded-full text-white text-sm'>Get Started</button>

                        
                        <button aria-label='close menu' className='size-6 md:hidden' onClick={() => setMenuOpen(false)}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-x'>
                                <path d='M18 6 6 18M6 6l12 12' />
                            </svg>
                        </button>
                    </div>

                   
                    <button onClick={() =>navigate("/signup")} className='max-md:hidden px-6 py-2.5 bg-[#4F39F6] hover:bg-[#3e2fcc] active:scale-95 rounded-full text-white text-sm cursor-pointer'>Get Started</button>
               

                    {/* BURGER MENU */}
                    <button aria-label='menu burger' className='size-6 md:hidden' onClick={() => setMenuOpen(true)}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-align-justify'>
                            <path d='M3 12h18M3 18h18M3 6h18' />
                        </svg>
                    </button>
                </nav>
                <div className='w-full md:px-106 lg:px-24 xl:px-32 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-11'>
                    {/* Left */}
                    <div className='flex flex-col items-start'>
                        

                        <h1 className="text-center lg:text-left text-neutral-900 text-4xl md:text-5xl lg:text-[52px]/16 leading-tight font-semibold max-w-[610px] ">
                            Tracker Expense Easily
                        </h1>
                        <p className="text-center lg:text-left text-base/7 text-neutral-600 max-w-md mt-4 mx-auto md:mx-0">
                            No complexity. No unnecessary clutter. Just a simple, reliable way to track your expenses, manage your budget, and stay in control of your finances.
                        </p>

                        

                       
                    </div>

                    {/* Right */}
                    <div className='w-full max-w-md md:max-w-lg'>
                        <img className='w-full h-auto object-contain' src={man} alt="Dashboard Preview" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home