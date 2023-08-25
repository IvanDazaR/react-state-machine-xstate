import React from "react";

export const Nav = ({ state, send }) => {
    const goToWelcome = () => {
        send('CANCEL')
    }
    return (
        <nav className='flex justify-between w-[470px]  bg-white/80 p-4 rounded-t-xl'>
            <h1 className="text-[#293684] text-3xl font-bold">Book a fly ✈</h1>
            {!state.matches('initial') &&
                <button onClick={goToWelcome} className='bg-white/80 py-2 px-4 text-[#4F54A7] font-bold cursor-pointer  rounded-lg transition-all hover:bg-[#293684] hover:text-white'>Cancel</button>
            }
        </nav>
    );
}