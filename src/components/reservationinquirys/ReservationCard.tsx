import React, { useState } from "react";
import CancelPopup from "./CancelPopup"; // 팝업 컴포넌트 추가
import { CalendarIcon, ClockIcon, MapPinIcon, ClipboardIcon } from "@heroicons/react/24/outline"; // Hero

interface Reservation {
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    status: "결제 완료" | "입금 확인중" | "상담 완료" | "상담 취소";
    online: boolean;
    profileImage?: string;
    type: "직접" | "온라인"; // 직접 방문 or 온라인 추가
  }

// 상태에 따른 테두리 및 텍스트 색상 설정 (배경 투명)
const getStatusBadgeStyle = (status: string) => {
  switch (status) {
    case "결제 완료":
      return "border border-gray-700 text-gray-700 bg-transparent";
    case "입금 확인중":
      return "border border-red-500 text-red-600 bg-transparent";
    case "상담 완료":
      return "border border-gray-700 text-gray-700 bg-transparent";
    case "상담 취소":
      return "border border-red-500 text-red-600 bg-transparent";
    default:
      return "border border-gray-700 text-gray-700 bg-transparent";
  }
};

const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("주소가 복사되었습니다!"); // 복사 완료 알림 (추후 토스트 메시지로 변경 가능)
  };
  
// 예약 방식에 따른 배지 스타일 설정
const getTypeBadgeStyle = (type: string) =>
  type === "온라인"
    ? "bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
    : "bg-red-100 text-red-600 px-2 py-1 rounded text-xs";


// 공통 버튼 스타일
const getButtonStyle = (disabled: boolean) =>
  `w-full py-2 rounded-xl bg-white font-medium border-gray-500 select-none ${
    disabled
      ? "cursor-not-allowed text-gray-400 border-gray-500 pointer-events-none"
      : "text-black"
  }`;

const ReservationCard: React.FC<{ reservation: Reservation }> = ({ reservation }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCancelClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirmCancel = () => {
    setIsPopupOpen(false);
    alert("예약이 취소되었습니다."); // 실제 로직 추가 가능
  };

  return (
    <div
      className="bg-white p-3 mb-4 rounded-2xl relative"
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      {/* 상태 배지 */}
      <span
        className={`absolute top-12 left-12 text-xs px-3 py-1 rounded-full ${getStatusBadgeStyle(reservation.status)}`}
      >
        {reservation.status}
      </span>

      {/* 상단 정보 */}
      <div className="flex items-center gap-4 mt-10">
        <div className="w-12 h-12  mr-3 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm font-bold">
          {reservation.profileImage ? (
            <img
              src={reservation.profileImage}
              alt={reservation.name}
              className="w-12 h-12 rounded-full object-cover border border-gray-300"
            />
          ) : (
            "👤"
          )}
        </div>
        <div>
          <h4 className="text-lg font-bold text-black">{reservation.name}</h4>

        {/* 예약 방식 (온라인 / 직접 방문) 배지 표시 */}
        <span className={getTypeBadgeStyle(reservation.type)}>{reservation.type}</span>
        </div>
      </div>

        {/* 예약 정보 */}
        <div className="mt-4 text-base bg-gray-200 p-3 rounded-lg">
       {/* 날짜 */}
       <p className="text-gray-950 flex items-center gap-2 mb-0.5">
        <CalendarIcon className="w-5 h-5 text-gray-600 mr-1" title="날짜" />
        {reservation.date} ({new Date(reservation.date).toLocaleDateString("ko-KR", { weekday: "short" })})
      </p>

      {/* 시간 */}
      <p className="text-gray-950 flex items-center gap-2 mb-0.5">
        <ClockIcon className="w-5 h-5 text-gray-600 mr-1" title="시간" />
        {reservation.time}
      </p>

      {/* 위치 */}
      <p className="text-gray-950 flex items-center gap-2 mb-0.5">
        <MapPinIcon className="w-5 h-5 text-gray-600 mr-1" title="위치" />
        {reservation.location}
        {/* 복사 아이콘 */}
        <ClipboardIcon
          className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-600 transition-all duration-150"
          onClick={() => handleCopyToClipboard(reservation.location)}
          title="주소 복사"
        />
      </p>

      {/* 입금 확인중일 경우 추가 문구 */}
      {reservation.status === "입금 확인중" && (
          <div className="flex justify-start gap-4  text-gray-700">
            <p>기업은행 000-0000-0000</p>
            <p className="font-semibold">30,000원</p> {/* 금액을 굵게 표시 */}
          </div>
        )}
      </div>

      {/* 버튼 */}
      <div className="mt-3 flex gap-9">
        {reservation.status === "결제 완료" ? (
          <button className={getButtonStyle(false)} onClick={handleCancelClick}>
            예약 취소
          </button>
        ) : reservation.status === "입금 확인중" ? (
          <>
            <button className={getButtonStyle(false)} onClick={handleCancelClick}>
              예약 취소
            </button>
            <button className={getButtonStyle(false)}>미팅 입장하기</button>
          </>
        ) : (
          <>
            <button className={getButtonStyle(true)} disabled>
              요약 리포트
            </button>
            <button className={getButtonStyle(true)} disabled>
              후기 남기기
            </button>
          </>
        )}
      </div>

      {/* 예약 취소 팝업 */}
      <CancelPopup isOpen={isPopupOpen} onClose={handleClosePopup} onConfirm={handleConfirmCancel} />
    </div>
  );
};

export default ReservationCard;