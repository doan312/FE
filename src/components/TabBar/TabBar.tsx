import TabItem from './TabItem'

export default function TabBar() {
    return (
        <div className='pb-26 fixed bottom-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-gray-100 px-80 pt-10 shadow-[0_-2px_13px_rgba(0,0,0,0.08)]'>
            <TabItem isActive type='home' />
            <TabItem type='reservation' />
        </div>
    )
}
