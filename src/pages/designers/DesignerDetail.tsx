import React, { useEffect, useState } from 'react'
import { useReservationStore } from '../../store/useReservationStore'
import { SlArrowLeft } from 'react-icons/sl'
import { IconContext } from 'react-icons'
import DesignerInfo from '../../components/designerDetail/DesignerInfo'
import Reservation from '../../components/designerDetail/Reservation'
import Divider from '../../components/designerDetail/Divider'
import ButtonLg from '../../components/designerDetail/ButtonLg'
import BeforeAfterSection from '../../components/home/BeforeAfterSection'
import FadePopup from '../../components/reservationcompletes/FadePopup'
import { useGetDesignerInfo } from '../../apis/api/get/useGetDesignerInfo'

const DesignerDetail: React.FC = () => {
    const { reservationTime } = useReservationStore()
    const [isButtonVisible, setIsButtonVisible] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    const handleScroll = () => {
        const bannerHeight = window.innerHeight * 0.25
        if (window.scrollY > bannerHeight) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    const handleCopyLoc = (shop: string) => {
        navigator.clipboard.writeText(shop)
        setShowPopup(true)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (reservationTime !== null) {
            setIsButtonVisible(true)
        } else {
            setIsButtonVisible(false)
        }
    }, [reservationTime])

    const handleBack = () => {
        window.history.back()
    }

    //디자이너 이미지 받아오기
    const designerData = useGetDesignerInfo()
    const [bannerUrl, setBannerUrl] = useState(
        `${import.meta.env.VITE_CLIENT_URL}/img/Banner.png`
    )
    useEffect(() => {
        if (designerData.isSuccess) {
            const data = designerData.data.data.data
            setBannerUrl(data.imageUrl)
        }
    }, [designerData.isSuccess])

    return (
        <div className='flex flex-col items-center overflow-hidden'>
            <IconContext.Provider
                value={{
                    className: isScrolled
                        ? 'fixed top-0 left-0 z-20 bg-white w-full align-start h-[3.5625rem] flex justify-start pt-[1.25rem] pb-[1.25rem] pr-[87%] '
                        : 'fixed top-0 left-0 z-20 bg-transparent w-full align-start h-[3.5625rem] pt-[1.25rem] pb-[1.25rem] pr-[87%] flex justify-start',
                }}>
                <div className='cursor-pointer'>
                    <SlArrowLeft
                        color={isScrolled ? 'black' : 'white'}
                        onClick={handleBack}
                    />
                </div>
            </IconContext.Provider>
            <img
                src={bannerUrl}
                alt='designer'
                className='relative h-[16rem] w-full object-cover'
            />

            <div className='relative z-10 -mt-20 w-[100%] flex-auto rounded-t-2xl bg-white pb-10 shadow-md'>
                <DesignerInfo handleCopyLoc={handleCopyLoc} />

                <Divider />
                <Reservation />
                <Divider />
                <div className='px-20 pb-52 pt-38'>
                    <BeforeAfterSection />
                </div>
                {/* 페이드인 팝업 */}
                <FadePopup
                    show={showPopup}
                    message='주소가 복사됐어요'
                    onClose={() => {
                        setShowPopup(false)
                    }}
                />
                <ButtonLg text='예약' available={isButtonVisible} />
            </div>
        </div>
    )
}

export default DesignerDetail
