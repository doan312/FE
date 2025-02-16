import HomeActiveIcon from '../../../public/img/home-active.svg'
import HomeInactiveIcon from '../../../public/img/home-inactive.svg'
import ReservationActiveIcon from '../../../public/img/reservation-active.svg'
import ReservationInactiveIcon from '../../../public/img/reservation-inactive.svg'
import { useTabStore } from '../../store/useStore'
import { TabType } from './TabBar'

interface Props {
    type: TabType
}

const tabItemData = {
    home: {
        text: '상담 예약',
        activeIcon: HomeActiveIcon,
        inactiveIcon: HomeInactiveIcon,
    },
    reservation: {
        text: '예약 조회',
        activeIcon: ReservationActiveIcon,
        inactiveIcon: ReservationInactiveIcon,
    },
}

export default function TabItem({ type }: Props) {
    const { currentTab, setCurrentTab } = useTabStore()
    const { activeIcon, inactiveIcon } = tabItemData[type]

    const isActive = type === currentTab

    return (
        <button
            type='button'
            className='flex flex-col items-center gap-2 bg-transparent'
            onClick={() => setCurrentTab(type)}>
            <img src={isActive ? activeIcon : inactiveIcon} alt='탭 아이콘' />
            <span
                className={`text-caption font-medium ${isActive ? 'text-purple-500' : 'text-[#ADB5BD]'}`}>
                {tabItemData[type].text}
            </span>
        </button>
    )
}
