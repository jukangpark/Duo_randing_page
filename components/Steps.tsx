'use client';

export default function Steps() {
  const steps = [
    {
      number: '01',
      title: '프로필 등록 및 사진 승인',
      description: '기본 정보와 함께 본인 사진을 업로드해 주세요. 관리자 승인이 완료되면 모든 기능을 이용할 수 있습니다.',
    },
    {
      number: '02',
      title: '친구 초대 및 듀오 구성',
      description: '함께 활동할 친구를 초대하거나 랜덤 매칭을 통해 2인 듀오를 결성하세요.',
    },
    {
      number: '03',
      title: '지역기반 듀오 탐색 및 LIKE',
      description: '우리 지역의 매력적인 듀오 카드들을 스와이프하며 마음에 드는 듀오에게 LIKE를 보내보세요.',
    },
    {
      number: '04',
      title: '매칭 성공 & 채팅',
      description: '상대 듀오도 우리를 선택하면 매칭 성공! 채팅방에서 약속을 잡아보세요.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#ea7e94]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">이렇게 시작해요!</h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          {steps.map((step, index) => (
            <div key={index}>
              {/* 카드 형태의 내용 */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-[#ea7e94]/10 shadow-[0_20px_50px_rgba(234,126,148,0.1)] hover:shadow-[0_20px_50px_rgba(234,126,148,0.15)] transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 break-keep">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed break-keep">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
