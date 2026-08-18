import React from 'react'

export default function Example() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-white text-gray-800/70">
               <p className='text-2xl text-gray-800'>Expense Tracker</p>
                <p className="mt-4 text-center">Copyright © 2025 <a href="https://prebuiltui.com">Expense Tracker</a>. All rights reservered.</p>
                <div className="flex items-center gap-4 mt-6">
                    <a href="#" className="font-medium text-gray-550 hover:text-black transition-all">
                        Brand Guidelines
                    </a>
                    <div className="h-4 w-px bg-black/20"></div>
                    <a href="#" className="font-medium text-gray-550 hover:text-black transition-all">
                        Trademark Policy
                    </a>
                </div>
            </footer>
        </>
    );
};
