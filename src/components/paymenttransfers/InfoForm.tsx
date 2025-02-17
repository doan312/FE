import React from 'react'
import { UserData } from '../../pages/designers/PaymentTransfer'

interface InfoFormProps {
    request: string
    setRequest: (value: string) => void
    userData: UserData | null
}

const InfoForm: React.FC<InfoFormProps> = ({
    request,
    setRequest,
    userData,
}) => {
    return (
        <div className='mt-[24px] pt-[8px]'>
            <p className='text-[18px] font-bold text-black'>정보 입력</p>
            <div className='mt-[12px] flex items-center gap-x-[24px] font-semibold'>
                <p className='text-[16px] text-gray-600'>이름</p>
                <p className='text-[14px] text-black'>{userData?.name}</p>
            </div>
            <div className='mt-[4px] flex items-center gap-x-[24px] font-semibold'>
                <p className='text-[16px] text-gray-600'>이메일</p>
                <p className='text-[14px] text-black'>{userData?.email}</p>
            </div>

            {/* 요청사항 입력 */}
            <div className='mt-[32px]'>
                <div className='flex items-center justify-between'>
                    <p className='text-[16px] font-medium text-gray-900'>
                        요청사항
                    </p>
                    <p className='text-[16px] text-gray-600'>
                        {request.length}/200
                    </p>
                </div>
                <textarea
                    className='mt-[8px] h-[144px] w-full rounded-[12px] border-[1px] border-gray-500 bg-transparent p-[12px] text-[16px] placeholder-gray-600 focus:outline-none focus:ring-[1px] focus:ring-gray-400'
                    placeholder='디자이너 분께 요청하실 내용을 적어주세요.'
                    maxLength={200}
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                />
            </div>
        </div>
    )
}

export default InfoForm
