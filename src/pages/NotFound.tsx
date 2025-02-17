import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundSVG from "../assets/icons/Network.svg" // SVG 파일 추가
import Header from "../utils/Header"; // 헤더 컴포넌트 import
const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 중앙 콘텐츠 (SVG 이미지 + 텍스트 + 버튼) */}
      <div className="flex flex-col items-center justify-center ">
        {/* SVG 이미지 */}
        <img src={NotFoundSVG} alt="페이지를 찾을 수 없음" className="w-24 h-24 mb-4" />

        {/* 안내 문구 */}
        <p className="text-gray-700 text-sm mb-2">인터넷 연결을 확인해보세요</p>

        {/* 새로고침 버튼 */}
        <button
          className="text-purple-500 bg-transparent font-medium text-lg hover:underline"
          onClick={() => navigate(0)}
        >
          새로고침
        </button>
      </div>
    </div>
  );
};

export default NotFound;