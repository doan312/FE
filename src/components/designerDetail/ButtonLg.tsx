import React from 'react'

interface ButtonLgProps {
    text: string
    available: boolean
}

const ButtonLg: React.FC<ButtonLgProps> = ({ text, available }) => {
    return (
        <div
            className={`fixed bottom-[1.88rem] z-30 mb-[1rem] ml-[1rem] mr-[1rem] mt-[0.62rem] flex h-[3rem] w-[90%] items-center justify-center rounded-xl text-body2 font-medium ${
                available ? 'bg-gray-1200 text-white' : 'bg-gray-600 text-white'
            }`}>
            {text}
        </div>
    )
}

export default ButtonLg
