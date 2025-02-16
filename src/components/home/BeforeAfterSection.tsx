import BeforeAfterCard from './BeforeAfterCard'

export default function BeforeAfterSection() {
    return (
        <section className='flex flex-col items-start gap-14'>
            <span className='font-bold text-black text-body1'>
                비포 & 애프터 🔮
            </span>
            <div className='flex gap-11'>
                <BeforeAfterCard />
                <BeforeAfterCard />
                <BeforeAfterCard />
            </div>
        </section>
    )
}
