import React from "react";

interface CancelPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CancelPopup: React.FC<CancelPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"

  >
    <div
      className="bg-white rounded-2xl shadow-lg p-5 w-80"
      onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
    >
      <h3 className="text-xl font-bold text-center mb-1 text-black mt-2">결제 방식 선택</h3>
      <h3 className="text-md font-base text-center mb-4 text-black ">결제 방식을 선택해 주세요.</h3>
      <div className="flex justify-between gap-6">
         {/* 계좌 이체 버튼 */}
    <button
          className="w-1/2 px-2 py-3 bg-black text-white rounded-xl"
      // 계좌 이체 선택
        >
          취소
        </button>
        {/* 카카오페이 버튼 */}
        <button
          className="w-1/2 px-4 py-3 bg-black text-white rounded-xl"
          onClick={onClose} // 빈 공간 클릭 시 닫기
        >
          닫기
        </button>
      </div>

      {/* 닫기 버튼 추가 */}
    </div>
  </div>
  );
};

export default CancelPopup;