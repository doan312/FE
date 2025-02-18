import React from "react";
import NotFoundSVG from "../assets/icons/Online.svg"; // SVG 파일 추가
import Header from "../utils/Header"; // 헤더 컴포넌트 import

const ServerError: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-white">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 중앙 콘텐츠 (SVG 이미지 + 텍스트 + 버튼) */}
      <div className="flex flex-col items-center justify-center">
        {/* SVG 이미지 */}
        <img src={NotFoundSVG} alt="페이지를 찾을 수 없음" className="w-[96px] h-[96px] mb-[16px]" />

        {/* 안내 문구 */}
        <p className="text-gray-700 text-[14px]">서버에 오류가 발생하였습니다</p>

        {/* 안내 문구 */}
        <p className="text-gray-700 text-[14px] mb-[8px]">잠시 후 다시 접속해주세요</p>
      </div>
    </div>
  );
};

export default ServerError;