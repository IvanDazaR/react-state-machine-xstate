import React, { useState } from 'react';

export const Search = ({ state, send }) => {
  const [flight, setFlight] = useState('');

  const goToPassengers = () => {
    send('CONTINUE', {selectedCountry: flight})
  }

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const options = state.context.countries;

  return (
    <div className='flex flex-col'>
      <p className='text-xl text-center'>Busca tu destino</p>
      <select id="country" className='text-base my-4 rounded-lg p-2' value={flight} onChange={handleSelectChange}>
        <option value="" disabled defaultValue>Escoge un país</option>
        {options.map((option) => <option value={option.name.common} key={option.name.common}>{option.name.common}</option>)}
      </select>
      <button onClick={goToPassengers} disabled={flight === ''} className='ml-auto bg-[#4F54A7] py-2 px-4 text-white font-bold cursor-pointer hover:bg-[#293684] rounded-lg'>Continue</button>
    </div>
  );
}; 