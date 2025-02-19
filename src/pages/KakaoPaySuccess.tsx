import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const KakaoPaySuccess: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // ✅ URL에서 `pg_token` 추출
        const urlParams = new URLSearchParams(location.search);
        const pg_token = urlParams.get("pg_token");

        if (!pg_token) {
            console.error("🚫 결제 승인 토큰(pg_token)이 없습니다.");
            navigate("/paymentfailed"); // ❌ 결제 실패 시 다른 페이지로 이동
            return;
        }

        console.log("✅ 결제 승인 토큰(pg_token):", pg_token);

        // 🔹 세션에 pg_token 저장
        sessionStorage.setItem("pg_token", pg_token);

        // 🔹 예약 등록 페이지로 이동
        navigate("/payment");
    }, [location.search, navigate]);

    return (
        <div className="flex items-center justify-center h-screen">
            <h2 className="text-2xl font-bold">결제 확인 중...</h2>
        </div>
    );
};

export default KakaoPaySuccess;