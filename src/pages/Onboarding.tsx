//온보딩 화면

import React from 'react'

const Onboarding: React.FC = () => {
    return (
        <div className='flex items-center justify-center w-full min-h-screen p-4 bg-gray-100'>
            <div className='flex flex-col w-full max-h-screen overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg max-w-7xl md:flex-row'>
                <div className='flex flex-col justify-center p-6 text-left md:w-1/2 md:p-8 lg:p-10'>
                    <p className='text-5xl font-bold text-blue-600'>test</p>
                    <p className='text-lg text-gray-600'>test</p>
                </div>
            </div>
        </div>
    )
}

export default Onboarding
