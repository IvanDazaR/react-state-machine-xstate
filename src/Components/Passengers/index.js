import React, { useState } from 'react';

export const Passengers = ({ state, send }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const goToTicket = () => {
    send('DONE')
  }

  const submit = (e) => {
    e.preventDefault();
    send('ADD', { newPassenger: name, newEmailPassenger: email})
    // send('ADD', { newPassenger: name})
    setName('');
    setEmail('');
  }
  const { passengers, emails } = state.context;
  
  return (
    <form onSubmit={submit} className='flex flex-col justify-center items-center px-2'>
      <p className='text-xl'>Add the people who are going to fly ✈️</p>
      {passengers.map((person, idx) => <p className='text-base my-1 w-full text-left' key={ `person-${idx}`}>{person} - {emails[idx]} </p> )}
      <input 
        className='text-base my-4 rounded-lg p-2 w-full box-border'
        id="name" 
        name="name" 
        type="text" 
        placeholder='Write the full name' 
        required 
        value={name} 
        onChange={onChangeName}
      />
      <input 
        className='text-base my-4 rounded-lg p-2 w-full box-border'
        id="name" 
        name="name" 
        type="email" 
        placeholder='Correo@correo.com' 
        required 
        value={email} 
        onChange={onChangeEmail}
      />
      <div className='grid grid-cols-2 gap-4 w-full mt-2'>
        <button 
          className='bg-white/80 py-2 px-4 text-[#4F54A7] font-bold cursor-pointer  rounded-lg transition-all hover:bg-[#293684] hover:text-white'
          type="submit"
        >
          Add Passenger
        </button>
        {passengers.length > 0 && 
          <button
            className='ml-auto bg-[#4F54A7] py-2 px-4 text-white font-bold cursor-pointer hover:bg-[#293684] rounded-lg'
            type="button"
            onClick={goToTicket}
          >
            See my ticket
          </button>
        
        }
      </div>
    </form>
  );
};