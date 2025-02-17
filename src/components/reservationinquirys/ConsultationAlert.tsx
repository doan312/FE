import React from "react";

interface ConsultationAlertProps {
  designerName: string;
  consultationType: string;
  profileImage: string;
}

const ConsultationAlert: React.FC<ConsultationAlertProps> = ({
  designerName,
  consultationType,
  profileImage,
}) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-100 bg-opacity-40 w-full max-w-lg">
      {/* 디자이너 프로필 이미지 */}
      <img src={profileImage} alt="디자이너" className="w-12 h-12 rounded-full border border-gray-300 mr-2" />

      {/* 텍스트 영역 */}
      <div className="flex-1">
        <p className="text-md font-semibold text-purple-600">
          {designerName}
          <span className="text-black"> 님과의 </span>
          <span className="text-black">{consultationType}</span>
          <span className="text-black"> 컨설팅이 다가오고 있어요!</span>
        </p>
      </div>
    </div>
  );
};

export default ConsultationAlert;