import StarIcon from '../../../public/img/star-sm.svg'

interface Props {
    rating: number
}

export default function Rating({ rating }: Props) {
    return (
        <div className='flex items-center gap-2'>
            <img src={StarIcon} alt='별 아이콘' />
            <span className='text-caption text-gray-1300'>{rating}</span>
        </div>
    )
}
