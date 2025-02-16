import { Link } from 'react-router-dom'
import Image from '../../../public/img/before-after-0.png'
import Rating from './Rating'

export default function BeforeAfterCard() {
    return (
        <Link
            to='#'
            className='relative h-[320px] w-[256px] overflow-hidden rounded-10'>
            <img src={Image} alt='비포애프터 이미지' />
            <div className='absolute bottom-0 left-0 right-0 w-full px-14 pb-14'>
                <span className='font-bold text-gray-100 text-h4'>
                    단발에서 긴머리로 변신 💇🏻‍♀️
                </span>
                <div className='flex items-center gap-4 text-gray-100 text-body2'>
                    <span>김서연 디자이너</span>
                    <Rating rating={4.7} />
                </div>
                <span className='text-caption text-[#e5e5e5]'>
                    이번이 두번재 예약인데 기억해주시더라구요!! 일단 감동하면서
                    앉았습니다. 처음 자를 때 너무 깔...
                </span>
            </div>
        </Link>
    )
}
