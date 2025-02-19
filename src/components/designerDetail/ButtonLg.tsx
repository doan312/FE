import React from 'react'

interface ButtonLgProps {
    text: string
    available: boolean
}

const ButtonLg: React.FC<ButtonLgProps> = ({ text, available }) => {
    const handleClick = () => {
        window.location.href = '/paymenttransfer'
    }
    return (
        <div
            onClick={handleClick}
            className={`fixed bottom-[1.88rem] left-20 right-20 z-30 mx-auto mb-[1rem] mt-[0.62rem] flex h-[3rem] w-[calc(100%-40px)] max-w-[480px] items-center justify-center rounded-xl text-body2 font-medium ${
                available ? 'bg-gray-1200 text-white' : 'bg-gray-600 text-white'
            }`}>
            {text}
        </div>
    )
}

export default ButtonLg
