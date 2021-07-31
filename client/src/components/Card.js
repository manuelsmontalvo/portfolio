import React from 'react';

function Card({ img, projectName, projectDescription, liveSite, github }) {
    return (
        <div className='py-10 justify-center flex flex-row min-w-max space-x-2 w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
            <div className='card rounded-2xl p-6 flex flex-row min-w-sm border border-gray-700 bg-gray-700 text-gray-50 justify-center items-center  transition-shadow shadow-xl hover:shadow-xl min-w-max'>
                
                <div className='card__media'>
                    <img src={img} className='rounded-2xl mr-5 h-48 w-96' alt='project' />
                </div>

                <div className='flex items-center p-4 max-w-md my-6'>
                    <div className='relative flex flex-col items-center w-full justify-center  items-center'>
                        <div className='flex flex-col  space-y-1  -mt-12 w-full'>
                            <span className='text-md whitespace-nowrap  text-gray-50 font-semibold'>
                                {projectName}
                            </span>
                            <p className='text-sm text-gray-200 text-left md:break-words'>{projectDescription}</p>
                            <div className='py-2 flex space-x-2'>
                                <a href={liveSite} target="_blank" rel="noreferrer">
                                    <button className='flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-400 text-purple-400 hover:border-purple-800 hover:border-purple-500 px-4 py-1 flex items-center hover:shadow-lg'>
                                        <span className='mr-2'></span>Live Site
                                        <span className='ml-2'></span>
                                    </button>
                                </a>
                                <a href={github} target="_blank" rel="noreferrer">
                                    <button className='flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg'>
                                        <span className='mr-2'></span>
                                        Github <span className='ml-2'></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
