import BeforeAfterCard from './BeforeAfterCard'

export default function BeforeAfterSection() {
    return (
        <section className='flex flex-col items-start px-4 gap-14'>
            <span className='font-bold text-black text-body1'>
                비포 & 애프터 🔮
            </span>
            <div className='flex w-screen gap-12 -ml-20 overflow-x-scroll'>
                <div className='w-8'></div>
                <BeforeAfterCard />
                <BeforeAfterCard />
                <BeforeAfterCard />
                <div className='w-8'></div>
            </div>
        </section>
    )
}
