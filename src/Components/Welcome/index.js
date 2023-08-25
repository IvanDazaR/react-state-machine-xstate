import React from 'react';

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send('START');
  };

  return (
    <div className='flex flex-col text-center gap-4 p-4'>
      <p className='text-2xl font-semibold'>¡Hoy es el día!</p>
      <p className='text-left font-medium'>Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las maravillas que hay para explorar</p>
      <button onClick={startBooking} className='ml-auto bg-[#4F54A7] py-2 px-4 text-white font-bold cursor-pointer hover:bg-[#293684] rounded-lg'>Comenzar</button>
    </div>
  );
}; 