// 홈 화면

import React from 'react'
import Logo from '../components/home/Logo'
import MethodSelectionCard from '../components/home/MethodSelectionCard'
import Chip from '../components/home/Chip'
import DesignerCard from '../components/home/DesignerCard'
import Button from '../components/home/Button'

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
            <div className='flex gap-6'>
                <Chip active value='전체'></Chip>
                <Chip value='탈염색'></Chip>
                <Chip value='염색'></Chip>
                <Chip value='펌'></Chip>
            </div>
            <div className='flex flex-col gap-16'>
                <DesignerCard />
                <DesignerCard />
                <DesignerCard />
                <DesignerCard />
            </div>
            <Button />
        </div>
    )
}

export default Home
