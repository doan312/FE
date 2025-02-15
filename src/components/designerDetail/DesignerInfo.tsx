//디자이너 상세 페이지(예약 정보 입력 페이지)

import React from 'react'

const DesignerInfo: React.FC = () => {
    const chips = ['직접', '온라인', '염색전문']
    const designerInfo = {
        name: '박수연 실장',
        location: '준오헤어 반포점',
        rate: '4.7',
        comment: '가치를 높여주는 이상적인 스타일을 찾아 드려요',
        price: {
            offline: '30,000',
            online: '20,000',
        },
    }
    return (
        <div className='flex flex-col gap-16 p-5 pb-12'>
            {/* 디자이너 정보 */}
            <div className='flex flex-col gap-5'>
                <div className='flex space-x-2'>
                    {chips.map((chip, index) => (
                        <span
                            key={index}
                            className='rounded-full bg-gray-200 px-2 py-1 text-xs text-[#fe6d81]'>
                            {chip}
                        </span>
                    ))}
                </div>
                <div className='text-h2 font-bold text-gray-1300'>
                    박수연 실장
                </div>
                <div className='text-body1 font-normal text-gray-1300'>
                    {designerInfo.location}
                </div>
                <div className='flex flex-row'>
                    <img
                        src='http://localhost:5173/img/star-on.svg'
                        alt='star'
                    />
                    <div className='flex items-end text-body2 font-normal text-gray-1300'>
                        {designerInfo.rate}
                    </div>
                </div>
            </div>

            {/* 코멘트 */}
            <div className='align-center flex w-full flex-row gap-2.5 rounded-xl bg-neutral-100 p-3'>
                <img
                    src='http://localhost:5173/img/logo-s-svg.svg'
                    alt='logo'
                />
                <div className='flex w-4/5 items-end text-body2 font-normal text-gray-1300'>
                    {designerInfo.comment}
                </div>
            </div>
            {/* 가격 정보 */}
            <div className='flex flex-col gap-6 pr-2'>
                <div className='flex flex-row justify-between'>
                    <span className='text-body1 font-normal text-gray-1300'>
                        직접
                    </span>
                    <span className='text-body1 font-normal text-purple-500'>
                        {designerInfo.price.offline} ~
                    </span>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-body1 font-normal text-gray-1300'>
                        온라인
                    </span>
                    <span className='text-body1 font-normal text-purple-500'>
                        {designerInfo.price.online} ~
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DesignerInfo
