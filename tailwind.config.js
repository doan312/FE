/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-custom': '#AAB396',
        'brwon-custom': '#674636',
        'yellow-custom':  '#F7EED3',
        'white-custom': '#F9F9F9',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, rgba(75, 75, 75, 0) 0%, rgba(120, 120, 120, 1) 100%)',




      },

      animation: {
        'bounce-once': 'bounce 1s infinite 5s' // 5초마다 바운스 애니메이션 실행
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },

      
      rotate: {
        '180': '-180deg', // 180도 회전
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      height: {
        '50': '200px',  // lg 화면
        '75': '250px',  // md 화면
        '100': '275px', // 기본값
      },
      spacing: {
        '15vh': '17vh',
        '20vh': '20vh',
      },
      width: {
        'screen-60': '60vw', // 화면 너비의 60%
      },
      animation: {
        'bounce-200': 'bounce 1s infinite 200ms', // 200ms 지연
        'bounce-400': 'bounce 1s infinite 400ms', // 400ms 지연
        'bounce-600': 'bounce 1s infinite 600ms', // 600ms 지연
        'bounce-800': 'bounce 1s infinite 800ms', // 800ms 지연
      },
      animation: {
        'slide-out': 'slideOut 1s forwards',
        'slide-in': 'slideIn 1s forwards',
      },
      // 키프레임 정의 추가
      keyframes: {
        slideOut: {
          from: { opacity: 1, transform: 'translateX(0%)' },
          to: { opacity: 0, transform: 'translateX(-100%)' },
        },
        slideIn: {
          from: { opacity: 0, transform: 'translateX(100%)' },
          to: { opacity: 1, transform: 'translateX(0%)' },
        },
      },
      screens: {
        'custom': '923px'  // Adds a custom breakpoint at 1023px
      }
    },
  },
  
  plugins: [
    
  ],
}
