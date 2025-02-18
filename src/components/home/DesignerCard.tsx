import Category from './Category'
import ArrowIcon from '../../../public/img/arrow-right.svg'
import Rating from './Rating'
import Profile from './Profile'
import { Link } from 'react-router-dom'
import { CategoryType } from './HotNewCard'

interface Props {
    designer: string
    tag: CategoryType[]
    reservationRate: number
    reviewCount: number
    profileImg: string
    shop: string
    rating: number
}

export default function DesignerCard({
    designer,
    tag,
    profileImg,
    shop,
    rating,
}: Props) {
    return (
        <Link
            to='#'
            className='flex w-full items-center gap-14 rounded-12 bg-gray-100 px-12 py-10 shadow-[0_1px_12px_rgba(0,0,0,0.08)]'>
            <Profile size='lg' imgUrl={profileImg} />
            <div className='flex flex-col items-start gap-6 grow'>
                <div className='flex flex-col items-start'>
                    <div className='flex items-center justify-center gap-6'>
                        <span className='font-semibold text-body1 text-gray-1300'>
                            {designer}
                        </span>
                        <Rating rating={rating} textColor='black' />
                    </div>
                    <span className='text-body2 text-[#939393]'>{shop}</span>
                </div>
                <div className='flex gap-4'>
                    {tag.map((t) => (
                        <Category value={t} />
                    ))}
                </div>
            </div>
            <img src={ArrowIcon} alt='오른쪽 화살표 아이콘' />
        </Link>
    )
}
