import HomeActiveIcon from '../../../public/img/home-active.svg'
import HomeInactiveIcon from '../../../public/img/home-inactive.svg'
import ReservationActiveIcon from '../../../public/img/reservation-active.svg'
import ReservationInactiveIcon from '../../../public/img/reservation-inactive.svg'

interface Props {
    type: 'home' | 'reservation'
    isActive?: boolean
}

const tabItemData = {
    home: {
        text: '상담 예약',
        active: HomeActiveIcon,
        inactive: HomeInactiveIcon,
    },
    reservation: {
        text: '예약 조회',
        active: ReservationActiveIcon,
        inactive: ReservationInactiveIcon,
    },
}

export default function TabItem({ type, isActive = false }: Props) {
    const { active, inactive } = tabItemData[type]

    return (
        <div className='flex flex-col items-center'>
            <img src={isActive ? active : inactive} alt='탭 아이콘' />
            <span
                className={`text-caption font-medium ${isActive ? 'text-purple-500' : 'text-[#ADB5BD]'}`}>
                {tabItemData[type].text}
            </span>
        </div>
    )
}
