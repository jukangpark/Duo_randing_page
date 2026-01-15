'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import faqData from './faqData';

// 카테고리 목록 (순서 고정)
const categories = [
  '전체',
  '계정 및 프로필',
  '팀',
  '매칭',
  '신고 및 개인정보 보호',
  '개인정보 보호',
  '친구 초대 & 코인 지급',
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // 검색 및 필터링
  const filteredFAQs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory = selectedCategory === '전체' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      className="min-h-screen transition-colors duration-200"
      style={{
        backgroundColor: '#F5F5F5',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* 로고 - 왼쪽 상단 */}
        <div className="mb-6 sm:mb-8">
          <div className="relative w-32 sm:w-40 h-auto">
            <Image
              src="/hero_logo.JPG"
              alt="Duo Logo"
              width={160}
              height={160}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* 헤더 */}
        <div className="mb-8 sm:mb-12">
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{
              color: '#11181C',
            }}
          >
            도움말
          </h1>
          <p
            className="text-base sm:text-lg"
            style={{
              color: '#666',
            }}
          >
            Duo 사용 중 궁금한 점을 찾아보세요
          </p>
        </div>

        {/* 검색 바 */}
        <div className="mb-6">
          <div
            className="relative rounded-2xl border transition-colors"
            style={{
              backgroundColor: '#fff',
              borderColor: '#EAEAEA',
            }}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3.5 pr-12 bg-transparent outline-none text-base"
              style={{
                color: '#11181C',
              }}
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                color: '#666',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer"
                style={{
                  backgroundColor:
                    selectedCategory === category
                      ? '#FFF4F6'
                      : '#fff',
                  color:
                    selectedCategory === category
                      ? '#ea7e94'
                      : '#11181C',
                  border: `1px solid ${
                    selectedCategory === category
                      ? '#F3C6D0'
                      : '#EAEAEA'
                  }`,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ 목록 */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-3">
            {filteredFAQs.map((item) => {
              const isOpen = openItems.has(item.id);
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border transition-all overflow-hidden"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: '#EAEAEA',
                  }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-4 sm:px-5 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <div className="flex-1">
                      <div
                        className="text-xs font-bold mb-1.5"
                        style={{
                          color: '#ea7e94',
                        }}
                      >
                        {item.category}
                      </div>
                      <h3
                        className="text-base sm:text-lg font-semibold"
                        style={{
                          color: '#11181C',
                        }}
                      >
                        {item.question}
                      </h3>
                    </div>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        color: '#666',
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      className="px-4 sm:px-5 pb-4 sm:pb-5 border-t transition-colors"
                      style={{
                        borderColor: '#EAEAEA',
                      }}
                    >
                      <p
                        className="pt-4 text-sm sm:text-base leading-relaxed whitespace-pre-line"
                        style={{
                          color: '#666',
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="rounded-2xl border p-12 text-center"
            style={{
              backgroundColor: '#fff',
              borderColor: '#EAEAEA',
            }}
          >
            <svg
              className="w-12 h-12 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                color: '#666',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p
              className="text-base font-semibold mb-2"
              style={{
                color: '#11181C',
              }}
            >
              검색 결과가 없습니다
            </p>
            <p
              className="text-sm"
              style={{
                color: '#666',
              }}
            >
              다른 검색어로 시도해보세요
            </p>
          </div>
        )}

        {/* 추가 도움말 섹션 */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#EAEAEA' }}>
          <h2
            className="text-xl font-bold mb-4"
            style={{
              color: '#11181C',
            }}
          >
            추가 도움이 필요하신가요?
          </h2>
          <div
            className="rounded-2xl border p-6"
            style={{
              backgroundColor: '#fff',
              borderColor: '#EAEAEA',
            }}
          >
            <p
              className="text-sm mb-4"
              style={{
                color: '#666',
              }}
            >
              앱 내 프로필 화면에서 &quot;문의하기&quot;를 통해 직접 문의하실 수 있습니다.
            </p>
            <a
              href="mailto:codeking@codekingbuilder.com?subject=문의%20드립니다&body=--------------------%0ANickname:%20%0AUniqueId:%20%0ADuo%20App%20Version:%20%0A%0A안녕하세요.%20문의사항이%20있어%20연락드립니다.%0A%0A나의%20iPhone%20에서%20보냄."
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
              style={{
                backgroundColor: '#ea7e94',
                color: '#fff',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              이메일로 문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
