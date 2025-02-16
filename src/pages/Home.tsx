// 홈 화면

import React from 'react'
import Logo from '../components/home/Logo'
import MainSection from '../components/home/MainSection'
import Banner from '../components/home/Banner'
import RescheduleBanner from '../components/home/RescheduleBanner'
import HotNewSection from '../components/home/HotNewSection'

const Home: React.FC = () => {
    return (
        <div className='h-[852px] w-full bg-gradient-to-b from-purple-50 to-gray-100 px-16'>
            <Logo />
            <MainSection />
            <Banner />
            <RescheduleBanner />
            <HotNewSection />
        </div>
    )
}

export default Home
