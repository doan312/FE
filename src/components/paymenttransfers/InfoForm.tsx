import React from "react";

interface InfoFormProps {
  request: string;
  setRequest: (value: string) => void;
}

const InfoForm: React.FC<InfoFormProps> = ({ request, setRequest }) => {
  return (
    <div className="mt-[24px] pt-[8px]">
      <p className="font-bold text-black text-[18px]">정보 입력</p>
      <div className="mt-[12px] flex items-center gap-x-[24px] font-semibold">
        <p className="text-gray-600 text-[16px]">이름</p>
        <p className="text-[14px] text-black">박수현</p>
      </div>
      <div className="mt-[4px] flex items-center gap-x-[24px] font-semibold">
        <p className="text-gray-600 text-[16px]">이메일</p>
        <p className="text-[14px] text-black">parksu@gmail.com</p>
      </div>

      {/* 요청사항 입력 */}
      <div className="mt-[32px]">
        <div className="flex justify-between items-center">
          <p className="text-gray-900 text-[16px] font-medium">요청사항</p>
          <p className="text-gray-600 text-[16px]">{request.length}/200</p>
        </div>
        <textarea
          className="w-full h-[144px] p-[12px] bg-transparent border-[1px] border-gray-500 rounded-[12px] mt-[8px] text-[16px] placeholder-gray-600 focus:outline-none focus:ring-[1px] focus:ring-gray-400"
          placeholder="디자이너 분께 요청하실 내용을 적어주세요."
          maxLength={200}
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InfoForm;