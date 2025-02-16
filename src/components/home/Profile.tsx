interface Props {
    imgUrl: string
}

export default function Profile({ imgUrl }: Props) {
    return (
        <img
            src={imgUrl}
            alt='디자이너 프로필 이미지'
            className='w-74 h-74 overflow-hidden rounded-82 border-[1.37px] border-gray-100/50'
        />
    )
}
