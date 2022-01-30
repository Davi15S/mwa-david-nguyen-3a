import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return(
      <div className='flex flex-col items-center'>
          <div className='flex p-5 space-x-4'>
            <button className='p-2 bg-white border-black border rounded-sm focus:bg-gray-200' onClick={() => setCount(count+1)}>
              Increment
            </button>
            <button className='p-2 bg-white border-black border rounded-sm focus:bg-gray-200' onClick={() => setCount(count-1)}>
              Decrement
            </button>
          </div>

          <div className=''>
              {count}
            </div>
      </div>
  );
}

export default Counter;
