import { CategoryType } from './HotNewCard'

const valuesColorData = {
    온라인: {
        textColor: 'text-TXT-blue',
        bgColor: 'bg-BG-blue',
    },
    직접: {
        textColor: 'text-TXT-pink',
        bgColor: 'bg-BG-pink',
    },
    염색: {
        textColor: 'text-gray-700',
        bgColor: 'bg-gray-300',
    },
    탈염색: {
        textColor: 'text-gray-700',
        bgColor: 'bg-gray-300',
    },
    펌: {
        textColor: 'text-gray-700',
        bgColor: 'bg-gray-300',
    },
}

interface Props {
    value: CategoryType
}

export default function Category({ value }: Props) {
    const style = `${valuesColorData[value].textColor} ${valuesColorData[value].bgColor}`

    return (
        <div
            className={`flex w-fit items-center justify-center rounded-4 px-5 py-2 text-caption font-medium ${style}`}>
            {value}
        </div>
    )
}
