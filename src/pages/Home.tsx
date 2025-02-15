// 홈 화면

import React from 'react'
import Logo from '../components/home/Logo'

const Home: React.FC = () => {
    return (
        <div className='h-[852px] w-full bg-gradient-to-b from-purple-50 to-gray-100'>
            <Logo />
        </div>
    )
}

export default Home
