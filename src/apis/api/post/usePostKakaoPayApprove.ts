import { useMutation } from "@tanstack/react-query";
import { authApi } from "../..";

// 카카오페이 승인 요청 타입 정의
interface KakaoPayApproveRequest {
    tid: string;
    designerScheduleId: string;
    pg_token: string;
}

// API 호출 훅
export const usePostKakaoPayApprove = () => {
    return useMutation({
        mutationFn: async (data: KakaoPayApproveRequest) => {
            const res = await authApi.post("/kakaoPay/approve", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res.data;
        },
    });
};