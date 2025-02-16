import ChatIcon from '../../../public/img/chat.svg'
import CheckIcon from '../../../public/img/check.svg'
import Profile from './Profile'
import DesignerImg from '../../../public/img/Banner.png'
import Category from './Category'

export default function HotNewCard() {
    return (
        <div className='w-150 py-18 border=[#eeeeee] flex h-fit flex-col items-center gap-13 rounded-8 bg-gray-100 shadow-[0_1px_12px_rgba(0,0,0,0.08)]'>
            <Profile size='lg' imgUrl={DesignerImg} />
            <div className='flex flex-col items-center gap-2'>
                <span className='font-semibold text-black text-body1'>
                    김민수 디자이너
                </span>
                <Category value='직접' />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='flex gap-2'>
                    <img src={CheckIcon} alt='체크 아이콘' />
                    <span className='text-body2 text-[#808080]'>
                        예약률 98%
                    </span>
                </div>
                <div className='flex gap-2'>
                    <img src={ChatIcon} alt='챗 아이콘' />
                    <span className='text-body2 text-[#808080]'>리뷰 312</span>
                </div>
            </div>
        </div>
    )
}
