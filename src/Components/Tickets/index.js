import React from 'react';


export const Tickets = ({ send, context }) => {
  const finish = () => {
    send('FINISH')
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='m-4'>Gracias por volar con book a fly 💚</p>
      <div className='grid  grid-cols-6 mb-4'>
        <div className='col-span-2 flex justify-center items-center border-r border-dashed border-[#4F54A7] bg-white p-4 rounded-tr-lg rounded-br-lg rounded-tl-md rounded-bl-md font-bold uppercase text-xl'>Colombia</div>
        <div className='col-span-4 bg-[#9795f080] p-4 rounded-tr-lg rounded-br-lg rounded-tl-md rounded-bl-md font-bold flex justify-center flex-col relative border-l border-dashed border-[#4F54A7]'>
          <span className='absolute top-[-10] right-[10] text-6xl text-[#4F54A7]'>✈</span>
        </div>
      </div>
      <button className='ml-auto bg-[#4F54A7] py-2 px-4 text-white font-bold cursor-pointer hover:bg-[#293684] rounded-lg' onClick={finish} >Finalizar</button>
    </div>
  );
}; 