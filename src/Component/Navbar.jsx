import React from 'react'

function Navbar({setQuery}) {

const cities = [
    {
        id:1,
        title: 'Shimla'
    },
    {
        id:1,
        title:'Solan'
    },  
    {
        id:1,
        title:'Chandigarh'
    },  
    {
        id:1,
        title:'Delhi'
    },
    {
        id:1,
        title:'Pune'
    }
]

  return (
  <div className='flex items-center justify-around my-6'>
    {cities.map((city)=>(
        <button 
        key={city.id} 
        className='text-white text-lg font-medium'
        onClick={() => setQuery ({q: city.title})}
        >
            {city.title}
            </button>
    ))}
  </div>
  );
}

export default Navbar;
