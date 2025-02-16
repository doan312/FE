import React from 'react'

interface ButtonLgProps {
    text: string
}

const ButtonLg: React.FC<ButtonLgProps> = ({ text }) => {
    return (
        <div className='flex h-12 items-center justify-center rounded-xl bg-gray-1200'>
            {text}
        </div>
    )
}

export default ButtonLg
