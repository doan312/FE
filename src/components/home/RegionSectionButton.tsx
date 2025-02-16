import ArrowIcon from '../../../public/img/arrow-down.svg'

export default function RegionSectionButton() {
    return (
        <div className='flex items-center gap-4 py-6'>
            <span className='text-black text-body2'>서울 전체</span>
            <img src={ArrowIcon} />
        </div>
    )
}
