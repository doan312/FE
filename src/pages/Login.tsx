//로그인

import React from 'react'

const Login: React.FC = () => {
    return (
        <div className='relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-[#d8c4fc] to-white'>
            <div className='flex flex-col items-center justify-center'>
                <img
                    src='http://localhost:5173/img/Logo-l.svg'
                    alt='logo'
                    className='relative h-[2.1876rem] object-cover'
                />
                <div className="font-['Bellota Text'] text-base font-normal text-[#894ef7]">
                    Style That Speaks, Beauty That Lasts
                </div>
            </div>

            <button className='absolute bottom-[1.88rem] flex h-[3rem] w-[80%] flex-row items-center justify-center gap-[0.25rem] rounded-[0.625rem]'>
                <img src='http://localhost:5173/img/google.svg' alt='google' />
                <span className='text-body1 font-normal'>구글로 시작하기 </span>
            </button>
        </div>
    )
}

export default Login
