import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// 동적 임포트 (코드 스플리팅 적용)
const Home = lazy(() => import("../pages/Home"));

// 로딩 중 표시할 컴포넌트
const Loading = () => <div className="loading">Loading...</div>;

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
  // 나머지 라우트 설정
      </Routes>
    </Suspense>
  );
};

export default Router;