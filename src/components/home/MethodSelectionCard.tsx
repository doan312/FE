import InPersonIcon from '../../../public/img/in-person.svg'
import OnlineIcon from '../../../public/img/online.svg'

const methodData = {
    inPerson: {
        copy: '디자이너와\n직접 만나서',
        price: 30000,
        icon: InPersonIcon,
    },
    online: {
        copy: '편하게\n온라인으로',
        price: 20000,
        icon: OnlineIcon,
    },
}

interface Props {
    type: 'inPerson' | 'online'
}

export default function MethodSelectionCard({ type }: Props) {
    const { copy, price, icon } = methodData[type]
    return (
        <div className='w-166 h-150 relative grow rounded-lg border-[1.5px] border-purple-50 bg-gray-100 p-14'>
            <div className='flex flex-col justify-between h-full'>
                <span className='font-bold text-purple-800 whitespace-pre-wrap text-h4'>
                    {copy}
                </span>
                <div className='flex items-center gap-2 text-caption text-gray-1300'>
                    <span className='font-bold text-body2'>
                        {`${price.toLocaleString('ko-KR')}원`}
                    </span>
                    <span>부터</span>
                </div>
            </div>
            <img
                src={icon}
                alt={`${type} 아이콘`}
                className='absolute bottom-0 right-0'
            />
        </div>
    )
}
