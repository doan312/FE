import { Region } from './BottomSheet'

interface Props {
    selected?: boolean
    item: Region
    setSelected: React.Dispatch<React.SetStateAction<Region>>
}

export default function RadioItem({
    selected = false,
    item,
    setSelected,
}: Props) {
    return (
        <label
            className={`flex gap-18 rounded-8 px-8 py-13 transition duration-200 ease-in-out ${selected && 'bg-purple-30'}`}
            onClick={() => setSelected(item)}>
            <div
                className={`h-20 w-20 rounded-xl bg-gray-100 transition duration-200 ease-in-out ${selected ? 'border-5 border-purple-500' : 'border-[1.7px] border-gray-500'}`}></div>
            <span className='text-body1 text-gray-1200'>{item}</span>
        </label>
    )
}
