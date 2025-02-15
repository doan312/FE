//디자이너 상세 페이지(예약 정보 입력 페이지)

import React from 'react'
import DesignerInfo from '../../components/designerDetail/DesignerInfo'
import Reservation from '../../components/designerDetail/Reservation'
import Divider from '../../components/designerDetail/Divider'

const DesignerDetail: React.FC = () => {
    return (
        <div className='relative min-h-screen w-screen flex-auto flex-col items-center justify-center'>
            <img
                src='http://localhost:5173/img/Banner.png'
                alt='designer'
                className='h-2/5 w-full object-cover'
            />

            <div className='relative z-10 -mt-20 w-full flex-auto rounded-t-2xl bg-white shadow-md'>
                <DesignerInfo />
                <Divider />
                <Reservation />
            </div>
        </div>
    )
}

export default DesignerDetail
