// 홈 화면

import React from 'react'
import Logo from '../components/home/Logo'
import MainSection from '../components/home/MainSection'

const Home: React.FC = () => {
    return (
        <div className='h-[852px] w-full bg-gradient-to-b from-purple-50 to-gray-100 px-16'>
            <Logo />
            <MainSection />
        </div>
    )
}

export default Home
