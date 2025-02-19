import ArrowIcon from '../../../public/img/arrow-down.svg'
import { destrictDict } from '../../data/designers'
import { useHomeStore } from '../../store/useStore'

export default function RegionSectionButton() {
    const { toggleSheet, currentRegion } = useHomeStore()

    return (
        <button
            type='button'
            onClick={toggleSheet}
            className='flex items-center gap-4 py-6 bg-transparent'>
            <span className='text-black text-body2'>
                {destrictDict[currentRegion]}
            </span>
            <img src={ArrowIcon} />
        </button>
    )
}
