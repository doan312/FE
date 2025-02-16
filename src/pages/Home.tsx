// 홈 화면

import React from 'react'
import Logo from '../components/home/Logo'
import MainSection from '../components/home/MainSection'
import Banner from '../components/home/Banner'
import RescheduleBanner from '../components/home/RescheduleBanner'
import HotNewSection from '../components/home/HotNewSection'
import BeforeAfterSection from '../components/home/BeforeAfterSection'
import TabBar from '../components/TabBar/TabBar'

const Home: React.FC = () => {
    return (
        <div className='relative w-full px-16 bg-gray-100 -z-10 pb-155'>
            <div className='absolute left-0 right-0 top-0 -z-10 -m-16 h-[852px] bg-gradient-to-b from-purple-50 to-gray-100'></div>
            <Logo />
            <MainSection />
            <Banner />
            <RescheduleBanner />
            <HotNewSection />
            <BeforeAfterSection />
            <TabBar />
        </div>
    )
}

export default Home
