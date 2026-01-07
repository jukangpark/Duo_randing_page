'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 플로팅 다운로드 버튼 (스크롤 시 나타남) */}
      <div 
        className={`fixed bottom-8 right-6 z-50 flex flex-col gap-3 transition-all duration-500 transform ${
          showFloating ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <a
          onClick={() => {
            alert('곧 출시 예정입니다 사전 예약 알림을 받아보세요');
          }}
          className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
          title="App Store에서 다운로드"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </a>
        <a 
          onClick={() => {
            alert('곧 출시 예정입니다 사전 예약 알림을 받아보세요');
          }} 
          className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
          title="Google Play에서 다운로드"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
        </a>
      </div>

      {/* 비디오 배경 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      
      {/* 오버레이 (비디오 위에 약간의 그라데이션) */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-white/80 to-purple-50/80 z-10"></div>
      
      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* 핸드폰 목업 + 텍스트 컨텐츠 */}
          <div className="flex flex-col space-y-8 items-center w-full">
            {/* 스마트폰 목업 (iPhone 16 Pro Max Style) */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-[260px] lg:w-[300px] aspect-[9/19.5]">
                {/* 스마트폰 외곽 프레임 (티타늄 느낌) */}
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-[3.5rem] p-[10px] shadow-[0_50px_100px_-12px_rgba(0,0,0,0.5)] border-[1px] border-white/10">
                  <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative ring-[1px] ring-white/5">
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30 ring-[1px] ring-white/10"></div>
                    
                    {/* 앱 실행 화면 */}
                    <div className="w-full h-full bg-gray-950 flex items-center justify-center relative z-20">
                      <img 
                        src="/duo_preview.PNG" 
                        alt="Duo Preview" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 텍스트 컨텐츠 - 아래쪽 */}
            <div className="text-center space-y-6 w-full">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                혼자라 어색했던 소개팅은 끝,<br />
                이제 친구와 <span className="text-[#ea7e94] font-bold">Duo</span> 하세요!
              </p>
              <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/duoapp_official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 underline hover:text-gray-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@duoapp_official</span>
            </a>
          </div>
              
              {/* 다운로드 버튼 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

