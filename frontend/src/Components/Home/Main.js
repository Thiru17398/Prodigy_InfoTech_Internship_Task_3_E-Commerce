import React from 'react';

const Main = ({children}) => {
  return (
    <main className='w-screen bg-white m-2 p-2'>
        {
            children
        }
    </main>
  )
}

export default Main