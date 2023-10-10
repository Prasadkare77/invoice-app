import React from 'react'

const MainDetails = ({name, address}) => {
  return (
    <>
        <section className='flex flex-col text-end justify-content-end'> 
                <h2 className='text-4xl text-uppercase'>{name}</h2>
                <p>{address}</p>
        </section>
    </>
  )
}

export default MainDetails