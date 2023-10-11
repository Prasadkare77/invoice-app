import React from 'react'

const ClientDetials = ({clientName, clientAddress}) => {
  return (
    <>
        <section className='mt-3'>
                <h2 className='text-4xl text-uppercase'>{clientName}</h2>
                <p>{clientAddress}</p>
        </section>
    </>
  )
}

export default ClientDetials