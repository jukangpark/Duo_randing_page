'use client';

import { useState } from 'react';

export default function PreRegister() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 전화번호 입력 핸들러 - 숫자만 허용
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 추출
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // 전화번호를 문자열로 명시적으로 변환 (엑셀에서 앞의 0이 사라지지 않도록)
      const phoneNumberString = String(phoneNumber);
      
      // Discord webhook을 통한 사전 예약 등록
      const discordResponse = fetch('/api/discord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: phoneNumberString }),
      });

      // Google Apps Script를 통한 사전 예약 등록
      const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL || '';
      const gasPromise = GAS_URL 
        ? fetch(GAS_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({ phoneNumber: phoneNumberString }),
          })
        : Promise.resolve();

      // 두 요청을 병렬로 실행
      await Promise.all([discordResponse, gasPromise]);

      setIsSubmitted(true);
      setPhoneNumber('');
    } catch (error) {
      console.error('제출 에러:', error);
      alert('오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 배경 장식 (은은한 브랜드 컬러 블러 효과) */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]" 
          style={{ backgroundColor: '#ea7e94' }}
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px]" 
          style={{ backgroundColor: '#ea7e94' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-6 lg:p-16 border border-[#ea7e94]/10 shadow-[0_20px_50px_rgba(234,126,148,0.1)] text-center">
          {/* 로고 배치 */}
          <div className="flex justify-center mb-4 lg:mb-10">
            <img 
              src="/transparent_logo.png" 
              alt="Duo Logo" 
              className="h-24 sm:h-28 lg:h-40 w-auto max-w-[90%] object-contain"
            />
          </div>

          <div className="space-y-2 mb-6 lg:mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              사전 예약 이벤트
            </h2>
            <p className="text-xl text-gray-500 mb-4">
              Duo 출시 소식을 가장 먼저 받아보세요
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ea7e94] to-[#f5a5b8] text-white font-bold text-lg shadow-lg">
              <span className="text-2xl">🎁</span>
              <span>사전 예약 시 <strong>20코인</strong> 무료 지급!</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              (2,000원 상당의 코인을 입력해주신 번호로 지급해드립니다)
            </p>
          </div>
          
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto p-1 sm:p-2 bg-gray-50 rounded-[2rem] border border-gray-200 focus-within:border-[#ea7e94] focus-within:ring-2 focus-within:ring-[#ea7e94]/10 transition-all duration-300"
          >
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="휴대전화번호를 입력하세요 (예: 01012345678)"
              required
              disabled={isSubmitting}
              pattern="[0-9]+"
              minLength={10}
              maxLength={11}
              className="flex-1 px-4 sm:px-8 py-3 sm:py-4 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none rounded-full text-base sm:text-lg disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg whitespace-nowrap text-white disabled:bg-gray-400 cursor-pointer"
              style={{ backgroundColor: isSubmitting ? '#9ca3af' : '#ea7e94' }}
            >
              {isSubmitting ? '처리 중...' : '알림 받기'}
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-8 flex items-center justify-center gap-2 text-[#ea7e94] animate-fade-in">
              <span className="text-2xl font-bold">✓</span>
              <span className="font-semibold text-lg">전화번호가 등록되었습니다! 앱 출시 시 20코인을 지급해드릴게요.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

