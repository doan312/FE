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
        <div className='mt-6 pt-2'>
            <p className='font-xl font-bold text-black'>정보 입력</p>
            <div className='mt-3 flex items-center gap-x-22 font-semibold'>
                <p className='text- text-gray-600'>이름</p>
                <p className='font-sm text-black'>{userData?.name}</p>
            </div>
            <div className='mt-1 flex items-center gap-x-22 font-semibold'>
                <p className='text-md text-gray-600'>이메일</p>
                <p className='font-sm text-black'>{userData?.email}</p>
            </div>

            {/* 요청사항 입력 */}
            <div className='mt-8'>
                <div className='flex items-center justify-between'>
                    <p className='text-md font-medium text-gray-900'>
                        요청사항
                    </p>
                    <p className='text-md text-gray-600'>
                        {request.length}/200
                    </p>
                </div>
                <textarea
                    className='text-md mt-2 h-36 w-full rounded-xl border border-gray-500 bg-transparent p-3 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400'
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
