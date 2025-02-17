import React from "react";

const ReservationInfo: React.FC = () => {
  return (
    <div className="mt-[16px] inline-flex w-fit p-[16px] bg-transparent border-[1px] border-gray-500 rounded-[16px] mx-auto">
      {/* 한 줄 정렬 */}
      <div className="flex items-center gap-x-[8px] whitespace-nowrap">
        <span className="px-[8px] py-[4px] font-semibold text-blue-600 bg-blue-100 rounded-[6px] text-[14px] mr-[4px]">
          온라인
        </span>
        <p className="text-gray-950 font-semibold text-[18px]">
          05.26(일) 오후 1:00~오후 1:30
        </p>
      </div>
    </div>
  );
};

export default ReservationInfo;