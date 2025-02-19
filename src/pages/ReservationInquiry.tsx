import React, { useEffect, useRef } from "react";
import ReservationList from "../components/reservationinquirys/ReservationList";
import ConsultationAlert from "../components/reservationinquirys/ConsultationAlert";
import TabBar from "../components/TabBar/TabBar";
import Logo from "../components/home/Logo";
import { useGetCurrentBooking } from "../apis/api/get/useGetCurrentBooking"; // 현재 예약 API
import { useGetPastBooking } from "../apis/api/get/useGetPastBooking"; // 과거 예약 API
import { AxiosError } from "axios"; // ✅ Axios 에러 타입 추가

interface Reservation {
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    status: "결제 완료" | "입금 확인중" | "상담 완료" | "상담 취소";
    online: boolean;
    type: "직접" | "온라인";
}

const ReservationInquiry: React.FC = () => {
    const loaderRef = useRef<HTMLDivElement | null>(null);

    // ✅ 현재 예약 API 호출
    const { data: apiReservations, error: currentError } = useGetCurrentBooking();
    
    // ✅ 과거 예약 API 호출
    const { data: apiPastReservations, error: pastError } = useGetPastBooking();

    // ✅ API 응답 전체 및 에러 바디 콘솔 출력
    useEffect(() => {
        console.log("📥 현재 예약 API 응답:", apiReservations);
        console.log("📥 과거 예약 API 응답:", apiPastReservations);

        if (currentError) {
            const axiosError = currentError as AxiosError;
            console.error("❌ 현재 예약 API 요청 실패:", axiosError);

            if (axiosError.response) {
                console.error("🛑 현재 예약 API 에러 응답 바디:", axiosError.response.data);
            }
        }

        if (pastError) {
            const axiosError = pastError as AxiosError;
            console.error("❌ 과거 예약 API 요청 실패:", axiosError);

            if (axiosError.response) {
                console.error("🛑 과거 예약 API 에러 응답 바디:", axiosError.response.data);
            }
        }
    }, [apiReservations, apiPastReservations, currentError, pastError]);

    // ✅ 초기 Mock Data 유지
    const mockReservations: Reservation[] = [
        {
            id: 1,
            name: "박수연 실장",
            date: "2025-02-15",
            time: "14:00",
            location: "준오헤어 반포점",
            status: "결제 완료",
            online: false,
            type: "직접",
        },
        {
            id: 2,
            name: "박수연 실장",
            date: "2025-02-15",
            time: "14:00",
            location: "준오헤어 반포점",
            status: "입금 확인중",
            online: true,
            type: "온라인",
        },
    ];

    const mockPastReservations: Reservation[] = [
        {
            id: 3,
            name: "박수연 실장",
            date: "2025-02-10",
            time: "14:00",
            location: "준오헤어 반포점",
            status: "상담 완료",
            online: true,
            type: "온라인",
        },
        {
            id: 4,
            name: "박수연 실장",
            date: "2025-02-08",
            time: "14:00",
            location: "준오헤어 반포점",
            status: "상담 취소",
            online: false,
            type: "직접",
        },
    ];

    // ✅ API 응답을 `Reservation[]` 형태로 변환하는 함수
    const mapApiToReservations = (apiData: any): Reservation[] => {
        if (!apiData || !Array.isArray(apiData)) return []; // 데이터가 배열이 아닌 경우 빈 배열 반환

        return apiData.map((item) => ({
            id: item.id ?? 0,
            name: item.designerName ?? "알 수 없음",
            date: item.bookingDate ?? "날짜 없음",
            time: item.bookingTime ?? "시간 없음",
            location: item.location ?? "위치 없음",
            status: item.status ?? "상태 없음",
            online: item.meetingType === "REMOTE",
            type: item.meetingType === "REMOTE" ? "온라인" : "직접",
        }));
    };

    // ✅ 실제 사용할 데이터 (API 데이터 변환 후 사용, 없으면 Mock Data)
    const reservations = apiReservations ? mapApiToReservations(apiReservations) : mockReservations;
    const pastReservations = apiPastReservations ? mapApiToReservations(apiPastReservations) : mockPastReservations;

    return (
        <div className="flex min-h-[100vh] w-full flex-col items-center bg-white">
            {/* 헤더 (고정된 위치) */}
            <Logo />
            <TabBar />

            {/* 콘텐츠를 헤더 높이만큼 아래로 이동 */}
            <div className="mt-[64px] w-full max-w-[768px] p-[20px]">
                {/* 헤더 아래 알림 컴포넌트 */}
                <div className="mb-[48px]">
                    <ConsultationAlert
                        designerName="박수연 실장"
                        consultationType="헤어 스타일링"
                        profileImage="https://via.placeholder.com/48" // 임시 프로필 이미지
                    />
                </div>

                {/* 다가오는 예약 */}
                <div className="mb-[48px]">
                    <ReservationList reservations={reservations} title="다가오는 예약" />
                </div>

                {/* 지난 컨설팅 */}
                <ReservationList reservations={pastReservations} title="지난 컨설팅" />

                {/* 로딩 인디케이터 (삭제됨) */}
                <div ref={loaderRef} className="flex items-center justify-center py-[16px]"></div>
            </div>
        </div>
    );
};

export default ReservationInquiry;