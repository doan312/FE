import React, { useState, useEffect } from 'react'
import PaymentModal from '../../components/paymenttransfers/PaymentModal'
import InfoForm from '../../components/paymenttransfers/InfoForm' // 분리된 폼 컴포넌트 import
import DefaultHearImage from '../../assets/images/default_hear.png' // 상대 경로
import { useGetProfile } from '../../apis/api/get/useGetProfile'

export interface UserData {
    name: string
    email: string
}

const PaymentTransfer: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const [request, setRequest] = useState('')
    const [userData, setUserData] = useState<UserData | null>(null)

    const res = useGetProfile()

    useEffect(() => {
        if (res.isSuccess && res.data !== null) {
            setUserData(res.data.data.data)
        }
    }, [res.isSuccess])

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

    return (
        <div className='flex min-h-screen flex-col items-center bg-white'>
            {/* 상단 헤더 */}
            <div className='fixed top-0 flex w-full items-center justify-between bg-white px-2 py-4'>
                <button className='border-none bg-transparent p-2'>
                    <div className='flex h-6 w-6 items-center justify-center bg-transparent'>
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
                <h2 className='text-lg font-semibold text-black'>예약하기</h2>
                <div className='w-6'></div> {/* 우측 여백 맞추기 */}
            </div>
            {/* 본문 영역 */}
            <div className='mt-16 w-full max-w-md px-4 pt-4'>
                {/* 디자이너 정보 */}

                <div className='mb-6 h-44 w-full overflow-hidden rounded-lg'>
                    <img
                        src={DefaultHearImage}
                        alt='디자이너 이미지'
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
            {/* 본문 영역 */}
            <div className='w-full max-w-md px-5'>
                {/* 디자이너 정보 */}
                <h3 className='text-2xl font-bold text-black'>박수연 실장</h3>
                <p className='text-md text-black'>준오헤어 반포점</p>

                {/* 일정 정보 */}
                <div className='mt-2 flex items-center gap-x-16 pb-6'>
                    <p className='text-md font-semibold text-gray-600'>일정</p>
                    <p className='text-lg font-semibold text-black'>
                        05.26(일) 오후 1:00~오후 1:30
                    </p>
                </div>
                {/* 구분선 추가 */}
                <div className='relative mb-7 w-full'>
                    <div className='absolute left-0 w-full border-t-1 border-gray-400'></div>
                </div>
                {/* 결제 금액 */}
                <div className='flex w-full items-center justify-between pb-12'>
                    <p className='text-xl font-bold text-gray-600'>결제금액</p>
                    <div className='flex items-center gap-x-1'>
                        <span className='mr-1.5 rounded-md bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600'>
                            온라인
                        </span>
                        <p className='text-xl font-bold text-purple-600'>
                            45,000원
                        </p>
                    </div>
                </div>
            </div>

            {/* 구분선 추가 */}
            <div className='w-full border-t-10 border-gray-400'></div>
            {/* 본문 영역 */}
            <div className='w-full max-w-md px-5 pb-40'>
                {/* 정보 입력 폼 (컴포넌트 사용) */}
                <InfoForm
                    request={request}
                    setRequest={setRequest}
                    userData={userData}
                />
            </div>
            {/* 결제 버튼 */}
            <div className='fixed bottom-0 left-0 w-full bg-white'>
                {/* 구분선 */}
                <div className='absolute left-0 top-0 w-full border-t-1 border-gray-400'></div>

                {/* 버튼 영역 */}
                <div className='p-4'>
                    <button
                        className='w-full rounded-xl bg-black py-4 text-lg font-semibold text-white'
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
