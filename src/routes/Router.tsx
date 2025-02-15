import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// 동적 임포트 (코드 스플리팅 적용)
const Home = lazy(() => import("../pages/Home"));
const Onboarding = lazy(() => import("../pages/Onboarding"));//온보딩
const Login = lazy(() => import("../pages/Login"));//로그인
const BeforeAfter = lazy(() => import("../pages/BeforeAfter"));///비포애프터
const ReservationInquiry = lazy(() => import("../pages/ReservationInquiry"));//예약조회

const DesignerDetail = lazy(() => import("../pages/designers/DesignerDetail"));//디자이너 상세
const PaymentTransfer = lazy(() => import("../pages/designers/PaymentTransfer"));//결제이동
const ReservationComplete = lazy(() => import("../pages/designers/ReservationComplete"));//예약완료

// 로딩 중 표시할 컴포넌트
const Loading = () => <div className="loading">Loading...</div>;

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/beforeafter" element={<BeforeAfter />} />
        <Route path="/reservationinquiry" element={<ReservationInquiry />} />
        <Route path="/designerdetail" element={<DesignerDetail />} />
        <Route path="/paymenttransfer" element={<PaymentTransfer  />} />
        <Route path="/reservationcomplete" element={<ReservationComplete />} />

      </Routes>
    </Suspense>
  );
};

export default Router;