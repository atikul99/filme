import React from 'react'

function Modal({data, img, onClose}) {
  return (
    <>
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className="bg-white rounded-lg shadow-lg flex items-center space-x-8 w-1/2">
                <div className="w-1/3">
                    <img
                        src={`${img + data.poster_path}`}
                        alt={data.title}
                        className='rounded-t-lg'
                    />
                </div>
                <div className="w-1/2">
                    <h3 className='font-semibold text-4xl my-4'>{data.title}</h3>
                    <p className='text-justify leading-6 my-4'>{data.overview}</p>
                    <p className='bg-orange-200 p-2 rounded font-bold'>Rating: <span>{data.vote_average.toFixed(1)}</span></p>
                    <p className='bg-green-200 p-2 rounded font-bold my-4'>Release Date: {data.release_date}</p>
                    <div className='flex justify-between mt-10'>
                        <button className='bg-red-400 text-white py-2 px-4 rounded shadow-lg cursor-pointer'>Watch Now</button>
                        <button
                            className='bg-zinc-200 font-bold py-2 px-4 rounded shadow-lg cursor-pointer'
                            onClick={onClose}
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal
