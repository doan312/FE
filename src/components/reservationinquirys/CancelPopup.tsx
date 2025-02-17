import React from "react";

interface CancelPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CancelPopup: React.FC<CancelPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] p-[20px] w-[320px]"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
      >
        <h3 className="text-[20px] font-bold text-center mb-[4px] text-black mt-[8px]">
          결제 방식 선택
        </h3>
        <h3 className="text-[16px] font-base text-center mb-[16px] text-black">
          결제 방식을 선택해 주세요.
        </h3>
        <div className="flex justify-between gap-[24px]">
          {/* 계좌 이체 버튼 */}
          <button className="w-[50%] px-[8px] py-[12px] bg-black text-white font-semibold rounded-[12px]">
            취소
          </button>
          {/* 닫기 버튼 */}
          <button className="w-[50%] px-[16px] py-[12px] bg-black text-white font-semibold rounded-[12px]" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelPopup;