// 홈 화면

import React from 'react'
import Logo from '../components/home/Logo'
import MethodSelectionCard from '../components/home/MethodSelectionCard'

const Home: React.FC = () => {
    return (
        <div className='h-[852px] w-full bg-gradient-to-b from-purple-50 to-gray-100 px-16'>
            <Logo />
            <h2 className='mb-16 font-bold text-h2 text-gray-1300'>
                어떤 방식으로 상담 받을까요?
            </h2>
            <div className='flex gap-11'>
                <MethodSelectionCard type='inPerson' />
                <MethodSelectionCard type='online' />
            </div>
        </div>
    )
}

export default Home
