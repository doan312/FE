import React, { useState, useEffect } from 'react'
import PaymentModal from '../../components/paymenttransfers/PaymentModal'
import InfoForm from '../../components/paymenttransfers/InfoForm'
import DefaultHearImage from '../../assets/images/default_hear.png'
import { useReservationStore } from '../../store/useReservationStore'
import { chips } from '../../utils/chips'
import dayjs from 'dayjs'
import { useGetDesignerInfo } from '../../apis/api/get/useGetDesignerInfo'
import { useLocation } from 'react-router-dom'

const PaymentTransfer: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const [request, setRequest] = useState('')

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showModal])

    //예약 정보 전역 상태 연동
    const { reservationDate, reservationTime, isOnline } = useReservationStore()
    const chip = isOnline
        ? chips.find((chip) => chip.text === '온라인')
        : chips.find((chip) => chip.text === '직접')

    console.log(reservationDate, reservationTime, isOnline)

    // 날짜와 시간을 포맷팅
    const formattedDate = reservationDate
        ? dayjs(reservationDate).locale('ko-KR').format('MM.DD(ddd)')
        : ''
    const formattedTime = reservationTime ? reservationTime : ''

    // 디자이너 정보 받아오기
    const [designerInfo, setDesignerInfo] = useState({
        name: '박수연 실장',
        location: '준오헤어 반포점',
        rate: '4.7',
        comment: '가치를 높여주는 이상적인 스타일을 찾아드려요',
        price: { offline: '30,000', online: '20,000' },
    })

    //디자이너 id 받아오기
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const designerId = queryParams.get('id') || ''
    const designerData = useGetDesignerInfo(designerId)
    const [bannerUrl, setBannerUrl] = useState(
        `${import.meta.env.VITE_CLIENT_URL}/img/Banner.png`
    )
    useEffect(() => {
        if (designerData.isSuccess) {
            const data = designerData.data.data.data
            setDesignerInfo({
                name: data.designerName,
                location: data.designerShop,
                rate: '4.7',
                comment: data.designerDescription,
                price: {
                    offline: data.designerContactCost,
                    online: data.designerUntactCost,
                },
            })
            setBannerUrl(data.imageUrl)
        }
    }, [designerData.isSuccess])

    return (
        <div className='flex min-h-[100vh] w-full flex-col items-center bg-white'>
            {/* 상단 헤더 */}
            <div className='fixed top-0 flex w-full min-w-[375px] max-w-[480px] items-center justify-between bg-white px-[8px] py-[16px]'>
                <button
                    className='border-none bg-transparent p-[8px]'
                    onClick={() => window.history.back()}>
                    <div className='flex h-[24px] w-[24px] items-center justify-center bg-transparent'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M15 5L8 12L15 19'
                                stroke='black'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>
                </button>
                <h2 className='text-[18px] font-semibold text-black'>
                    예약하기
                </h2>
                <div className='w-[24px]'></div>
            </div>

            {/* 본문 영역 */}
            <div className='mt-[64px] w-full max-w-[480px] px-[16px] pt-[16px]'>
                {/* 디자이너 정보 */}
                <div className='mb-[24px] h-[176px] w-full overflow-hidden rounded-[12px]'>
                    <img
                        src={bannerUrl}
                        alt='디자이너 이미지'
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>

            <div className='w-full max-w-[480px] px-[20px]'>
                <h3 className='text-[24px] font-bold text-black'>
                    {designerInfo.name}
                </h3>
                <p className='text-[16px] text-black'>
                    {designerInfo.location}
                </p>

                {/* 일정 정보 */}
                <div className='mt-[8px] flex items-center gap-x-[24px] pb-[24px]'>
                    <p className='text-[16px] font-semibold text-gray-600'>
                        일정
                    </p>
                    <p className='text-[18px] font-semibold text-black'>
                        {formattedDate} {formattedTime}
                    </p>
                </div>

                {/* 구분선 */}
                <div className='relative mb-[28px] w-full'>
                    <div className='absolute left-0 w-full border-t-[1px] border-gray-400'></div>
                </div>

                {/* 결제 금액 */}
                <div className='flex w-full items-center justify-between pb-[48px]'>
                    <p className='text-[20px] font-bold text-gray-600'>
                        결제금액
                    </p>
                    <div className='flex items-center gap-x-[4px]'>
                        <span
                            className='mr-[6px] rounded-[6px] px-[8px] py-[4px] text-[12px] font-semibold'
                            style={{
                                backgroundColor: chip?.bg,
                                color: chip?.textColor,
                            }}>
                            {chip?.text}
                        </span>
                        <p className='text-[20px] font-bold text-purple-600'>
                            {isOnline
                                ? designerInfo.price.online
                                : designerInfo.price.offline}
                            원
                        </p>
                    </div>
                </div>
            </div>

            {/* 구분선 */}
            <div className='w-full border-t-[10px] border-gray-400'></div>

            {/* 본문 영역 */}
            <div className='w-full max-w-[480px] px-[20px] pb-[160px]'>
                {/* 정보 입력 폼 (컴포넌트 사용) */}
                <InfoForm request={request} setRequest={setRequest} />
            </div>

            {/* 결제 버튼 */}
            <div className='fixed bottom-0 left-0 right-0 mx-auto w-full min-w-[375px] max-w-[480px] bg-white'>
                {/* 구분선 */}
                <div className='absolute left-0 top-0 w-full border-t-[1px] border-gray-300'></div>

                {/* 버튼 영역 */}
                <div className='p-[16px]'>
                    <button
                        className='w-full rounded-[12px] bg-black py-[16px] text-[18px] font-semibold text-white'
                        onClick={() => setShowModal(true)}>
                        결제하고 예약 확정
                    </button>
                </div>
            </div>

            {/* 모달 표시 */}
            {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default PaymentTransfer
