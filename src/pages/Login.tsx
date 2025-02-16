//로그인

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Login: React.FC = () => {
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GOOGLE_LOGIN_REDIRECT_URI}&scope=openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code`

    const handleGoogleLogin = () => {
        window.location.href = googleLoginUrl
    }

    const location = useLocation()
    useEffect(() => {
        if (location.search.includes('code')) {
            const code = location.search.split('=')[1]
            console.log(code)
        }
    }, [location])
    //로그인 callback처리

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

            <button
                onClick={handleGoogleLogin}
                className='absolute bottom-[1.88rem] flex h-[3rem] w-[80%] flex-row items-center justify-center gap-[0.25rem] rounded-[0.625rem]'>
                <img src='http://localhost:5173/img/google.svg' alt='google' />
                <span className='text-body1 font-normal'>구글로 시작하기 </span>
            </button>
        </div>
    )
}

export default Login
