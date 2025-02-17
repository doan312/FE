import React from "react";
import Logo from "../assets/Logo.svg"; // 로고 파일 import

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white flex items-center py-[24px] px-[16px] z-50">
      <img src={Logo} alt="로고" className="h-[24px]" /> {/* 로고 왼쪽 정렬 */}
    </header>
  );
};

export default Header;