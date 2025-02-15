import React from "react";
import PaymentInfo from "../../components/reservationcompletes/PaymentInfo"; // 결제 정보 컴포넌트
import ReservationInfo from "../../components/reservationcompletes/ReservationInfo"; // 예약 정보 컴포넌트
import ReservationCompleteIcon from "../../assets/icons/Reservation complete.svg"; // 상대 경로

const ReservationComplete: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-10 pb-24">
   {/* SVG 아이콘 적용 */}
   <div className="mb-6">
        <img src={ReservationCompleteIcon} alt="예약 완료 아이콘" className="w-16 h-16" />
      </div>

      {/* 예약 완료 텍스트 */}
      <h2 className="text-2xl font-bold text-gray-900">예약이 완료됐어요</h2>

      {/* 예약 정보 컴포넌트 삽입 */}
      <ReservationInfo />

      {/* 결제 정보 컴포넌트 삽입 */}
      <PaymentInfo />

    {/* 하단 고정 버튼 그룹 */}
<div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
  {/* 계좌 복사 버튼 */}
  <div className="flex flex-col items-center px-6">
    <button
      className="w-full max-w-sm px-4 py-3 bg-purple-100 text-gray-900 text-lg rounded-full shadow-md mb-12"
      onClick={() => navigator.clipboard.writeText("000-0000-000")}
    >
      계좌번호가 복사됐어요.
    </button>
  </div>

  {/* 구분선: 양 끝까지 닿도록 수정 */}
  <hr className="w-full border-t border-gray-500" />

  {/* 하단 버튼들 */}
  <div className="px-4 py-5 flex flex-col items-center">
    <div className="flex w-full max-w-sm gap-4">
      <button className="w-1/2 px-6 py-3 bg-black text-white text-lg font-medium rounded-xl shadow-md">
        예약 확인
      </button>
      <button className="w-1/2 px-6 py-3 bg-black text-white text-lg font-medium rounded-xl shadow-md">
        홈
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ReservationComplete;