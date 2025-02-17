import React, { useEffect } from "react";
import PaymentInfo from "../../components/reservationcompletes/PaymentInfo"; // 결제 정보 컴포넌트
import ReservationInfo from "../../components/reservationcompletes/ReservationInfo"; // 예약 정보 컴포넌트
import ReservationCompleteIcon from "../../assets/icons/Reservation complete.svg"; // 상대 경로
import { useLocation, useNavigate } from "react-router-dom";
import heartAnimation from "../../assets/lotties/heart.json"; // Lottie 파일 import
import Lottie from "lottie-react";

const ReservationComplete: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 전달된 결제 방식 정보
  const paymentMethod = location.state?.paymentMethod || "알 수 없음";

  // 콘솔 출력 (결제 방식만 확인)
  useEffect(() => {
    console.log("📢 결제 방식:", paymentMethod);
  }, [paymentMethod]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-white px-[24px] py-[40px] pb-[96px]">
      {/* SVG 아이콘 적용 */}
      <div className="relative w-[64px] h-[64px] mb-[24px] flex flex-col items-center justify-end">
        {/* Lottie 애니메이션 (아래쪽으로 정렬) */}
        <div className="w-[88px] h-[88px] opacity-70">
          <Lottie animationData={heartAnimation} loop={false} />
        </div>

        {/* 기존 아이콘 (하단 배치) */}
        <img
          src={ReservationCompleteIcon}
          alt="예약 완료 아이콘"
          className="w-[64px] h-[64px]"
        />
      </div>

      {/* 예약 완료 텍스트 */}
      <h2 className="text-[24px] font-bold text-gray-900">예약이 완료됐어요</h2>

      {/* 예약 정보 컴포넌트 삽입 */}
      <div className="mb-[4px]">
        <ReservationInfo />
      </div>

      {/* 결제 정보 컴포넌트 삽입 - 결제 방식이 "bankTransfer"일 때만 표시 */}
      {paymentMethod === "bankTransfer" && <PaymentInfo />}

      {/* 하단 고정 버튼 그룹 */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
        {/* 계좌 복사 버튼 */}
        {paymentMethod === "bankTransfer" && (
          <div className="flex flex-col items-center px-[24px]">
            <button
              className="w-full max-w-[400px] px-[16px] py-[12px] bg-purple-100 text-gray-900 text-[18px] rounded-[50px] shadow-md mb-[48px]"
              onClick={() => navigator.clipboard.writeText("000-0000-000")}
            >
              계좌번호가 복사됐어요.
            </button>
          </div>
        )}

        {/* 구분선: 양 끝까지 닿도록 수정 */}
        <hr className="w-full border-t-[1px] border-gray-300" />

        {/* 하단 버튼들 */}
        <div className="px-[16px] py-[20px] flex flex-col items-center">
          <div className="flex w-full max-w-[400px] gap-[16px]">
            <button
              className="w-[50%] px-[24px] py-[12px] bg-black text-white text-[18px] font-medium rounded-[12px] shadow-md"
              onClick={() => navigate("/reservationinquiry")}
            >
              예약 확인
            </button>
            <button
              className="w-[50%] px-[24px] py-[12px] bg-black text-white text-[18px] font-medium rounded-[12px] shadow-md"
              onClick={() => navigate("/")}
            >
              홈
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationComplete;