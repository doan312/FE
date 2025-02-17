import React, { useState, useEffect } from "react";
import PaymentModal from "../../components/paymenttransfers/PaymentModal";
import InfoForm from "../../components/paymenttransfers/InfoForm";
import DefaultHearImage from "../../assets/images/default_hear.png";

const PaymentTransfer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [request, setRequest] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-white">
      {/* 상단 헤더 */}
      <div className="fixed top-0 w-full bg-white py-[16px] px-[8px] flex items-center justify-between">
        <button className="p-[8px] bg-transparent border-none">
          <div className="w-[24px] h-[24px] flex items-center justify-center bg-transparent">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L8 12L15 19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        <h2 className="text-[18px] font-semibold text-black">예약하기</h2>
        <div className="w-[24px]"></div>
      </div>

      {/* 본문 영역 */}
      <div className="w-full max-w-[400px] mt-[64px] px-[16px] pt-[16px]">
        {/* 디자이너 정보 */}
        <div className="w-full h-[176px] rounded-[12px] mb-[24px] overflow-hidden">
          <img
            src={DefaultHearImage}
            alt="디자이너 이미지"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full max-w-[400px] px-[20px]">
        <h3 className="text-[24px] font-bold text-black">박수연 실장</h3>
        <p className="text-black text-[16px]">준오헤어 반포점</p>

        {/* 일정 정보 */}
        <div className="flex items-center gap-x-[24px] mt-[8px] pb-[24px]">
          <p className="text-gray-600 text-[16px] font-semibold">일정</p>
          <p className="font-semibold text-[18px] text-black">05.26(일) 오후 1:00~오후 1:30</p>
        </div>

        {/* 구분선 */}
        <div className="relative w-full mb-[28px]">
          <div className="absolute left-0 w-full border-t-[1px] border-gray-400"></div>
        </div>

        {/* 결제 금액 */}
        <div className="flex items-center justify-between w-full pb-[48px]">
          <p className="text-gray-600 text-[20px] font-bold">결제금액</p>
          <div className="flex items-center gap-x-[4px]">
            <span className="px-[8px] py-[4px] text-[12px] font-semibold text-blue-600 bg-blue-100 rounded-[6px] mr-[6px]">
              온라인
            </span>
            <p className="text-purple-600 font-bold text-[20px]">45,000원</p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full border-t-[10px] border-gray-400"></div>

      {/* 본문 영역 */}
      <div className="w-full max-w-[400px] px-[20px] pb-[160px]">
        {/* 정보 입력 폼 (컴포넌트 사용) */}
        <InfoForm request={request} setRequest={setRequest} />
      </div>

      {/* 결제 버튼 */}
      <div className="fixed bottom-0 left-0 w-full bg-white">
        {/* 구분선 */}
        <div className="w-full border-t-[1px] border-gray-300 absolute top-0 left-0"></div>

        {/* 버튼 영역 */}
        <div className="p-[16px]">
          <button
            className="w-full py-[16px] bg-black text-white text-[18px] font-semibold rounded-[12px]"
            onClick={() => setShowModal(true)}
          >
            결제하고 예약 확정
          </button>
        </div>
      </div>

      {/* 모달 표시 */}
      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default PaymentTransfer;