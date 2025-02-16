import ArrowIcon from '../../../public/img/arrow-down.svg'
import { useHomeStore } from '../../store/useStore'

export default function RegionSectionButton() {
    const { toggleSheet } = useHomeStore()

    return (
        <button
            type='button'
            onClick={toggleSheet}
            className='flex items-center gap-4 py-6 bg-transparent'>
            <span className='text-black text-body2'>서울 전체</span>
            <img src={ArrowIcon} />
        </button>
    )
}
