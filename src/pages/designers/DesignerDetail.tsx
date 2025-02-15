//디자이너 상세 페이지(예약 정보 입력 페이지)

import React from 'react'
import DesignerInfo from '../../components/designerDetail/DesignerInfo'
import Calendar from '../../components/designerDetail/Calendar'
import Divider from '../../components/designerDetail/Divider'

const DesignerDetail: React.FC = () => {
    return (
        <div className='relative h-screen w-screen flex-auto flex-col items-center justify-center'>
            <img
                src='http://localhost:5173/img/Banner.png'
                alt='designer'
                className='h-2/5 w-full object-fill pb-20'
            />

            <div className='absolute bottom-0 h-4/5 w-full rounded-t-2xl bg-white shadow-md'>
                <DesignerInfo />
                <Divider />
                <Calendar />
            </div>
        </div>
    )
}

export default DesignerDetail
