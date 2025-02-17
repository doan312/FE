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
        <div
            className={`flex gap-18 rounded-8 px-8 py-13 ${selected && 'bg-purple-30'}`}
            onClick={() => setSelected(item)}>
            <input
                type='radio'
                id={item}
                name={item}
                value={item}
                checked={selected}
                className={`checked:ring-3 h-20 w-20 border border-gray-500 bg-white checked:border-3 checked:border-purple-500`}></input>
            <label htmlFor={item} className='text-body1 text-gray-1200'>
                {item}
            </label>
        </div>
    )
}
