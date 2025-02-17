import { ClipLoader } from 'react-spinners'
export const Loading = () => {
    return (
        <div className='relative flex h-screen w-screen flex-col items-center justify-center gap-[2rem] bg-gradient-to-b from-[#d8c4fc] to-white'>
            <span className='text-h2 font-normal text-gray-900'>
                Loading...
            </span>
            <div className='flex flex-col items-center justify-center'>
                <ClipLoader color='#894ef7' loading={true} size={50} />
            </div>
        </div>
    )
}
