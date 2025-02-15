import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ToggleButton: React.FC = () => {
    const [selected, setSelected] = useState<'직접' | '온라인'>('직접')

    return (
        <div
            className='relative flex h-12 w-full cursor-pointer rounded-10 bg-gray-300 pl-1 pr-1 pt-1'
            onClick={() =>
                setSelected(selected === '직접' ? '온라인' : '직접')
            }>
            <motion.div
                className='absolute flex h-10 w-1/2 flex-1 items-center justify-center rounded-10 bg-white text-body2 font-medium text-gray-1300'
                animate={{ x: selected === '온라인' ? '100%' : '0%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                {selected}
            </motion.div>
            <div className='flex flex-1 items-center justify-center text-body2 font-normal text-gray-800'>
                직접
            </div>
            <div className='flex flex-1 items-center justify-center text-body2 font-normal text-gray-800'>
                온라인
            </div>
        </div>
    )
}

export default ToggleButton
