import HotNewCard from './HotNewCard'

export default function HotNewSection() {
    return (
        <section className='flex flex-col items-start mb-45 gap-14'>
            <span className='font-bold text-black text-body1'>HOT & NEW</span>
            <div className='flex gap-11'>
                <HotNewCard />
                <HotNewCard />
                <HotNewCard />
            </div>
        </section>
    )
}
