import React, { useState } from 'react';

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState('');

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const goToTicket = () => {
    send('DONE')
  }

  const submit = (e) => {
    e.preventDefault();
    send('ADD', { newPassenger: value})
    changeValue('');
  }
  const { passengers } = state.context;
  return (
    <form onSubmit={submit} className='flex flex-col justify-center items-center px-2'>
      <p className='text-xl'>Agrega a las personas que van a volar ✈️</p>
      {passengers.map((person, idx)=> <p className='text-base my-1 w-full text-left' key={ `person-${idx}`}> {person} </p> )}
      <input 
        className='text-base my-4 rounded-lg p-2 w-full box-border'
        id="name" 
        name="name" 
        type="text" 
        placeholder='Escribe el nombre completo' 
        required 
        value={value} 
        onChange={onChangeInput}
      />
      <div className='grid grid-cols-2 gap-4 w-full mt-2'>
        <button 
          className='bg-white/80 py-2 px-4 text-[#4F54A7] font-bold cursor-pointer  rounded-lg transition-all hover:bg-[#293684] hover:text-white'
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          className='ml-auto bg-[#4F54A7] py-2 px-4 text-white font-bold cursor-pointer hover:bg-[#293684] rounded-lg'
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};