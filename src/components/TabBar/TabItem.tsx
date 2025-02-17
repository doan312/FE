import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 추가
import HomeActiveIcon from "../../../public/img/home-active.svg";
import HomeInactiveIcon from "../../../public/img/home-inactive.svg";
import ReservationActiveIcon from "../../../public/img/reservation-active.svg";
import ReservationInactiveIcon from "../../../public/img/reservation-inactive.svg";
import { useTabStore } from "../../store/useStore";
import { TabType } from "./TabBar";

interface Props {
  type: TabType;
}

// 탭 데이터 (페이지 경로 추가)
const tabItemData = {
  home: {
    text: "상담 예약",
    activeIcon: HomeActiveIcon,
    inactiveIcon: HomeInactiveIcon,
    path: "/", // 홈 페이지 경로
  },
  reservation: {
    text: "예약 조회",
    activeIcon: ReservationActiveIcon,
    inactiveIcon: ReservationInactiveIcon,
    path: "/reservationinquiry", // 예약 조회 페이지 경로
  },
};

export default function TabItem({ type }: Props) {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용
  const { currentTab, setCurrentTab } = useTabStore();
  const { activeIcon, inactiveIcon, path } = tabItemData[type];

  const isActive = type === currentTab;

  const handleClick = () => {
    setCurrentTab(type); // 현재 탭 변경
    navigate(path); // 해당 경로로 이동
  };

  return (
    <button
      type="button"
      className="flex flex-col items-center gap-[4px] bg-transparent"
      onClick={handleClick}
    >
      <img
        src={isActive ? activeIcon : inactiveIcon}
        alt="탭 아이콘"
        className="w-[24px] h-[24px]"
      />
      <span
        className={`text-[14px] font-medium ${
          isActive ? "text-purple-500 font-bold" : "text-[#ADB5BD]"
        }`}
      >
        {tabItemData[type].text}
      </span>
    </button>
  );
}