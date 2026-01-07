'use client';

export default function Features() {
  const features = [
    {
      title: '어색하지 않는 2:2 팀 매칭',
      description: '친구와 함께라 더 즐겁고 자연스러운 분위기에서 새로운 인연을 만날 수 있어요.',
      icon: '👥',
    },
    {
      title: '철저한 프로필 인증 시스템',
      description: '꼼꼼한 사진 검증과 본인 확인을 통해 신뢰할 수 있는 환경을 제공해요.',
      icon: '✨',
    },
    {
      title: '우리 지역 듀오만 콕!',
      description: '멀리 갈 필요 있나요? 내가 사는 지역의 듀오들만 추천해 드립니다. 실제 만남으로 이어지기 가장 좋은 거리죠.',
      icon: '📍',
    },
    {
      title: '매칭 즉시 시작되는 채팅',
      description: '매칭 성공 시 열리는 채팅방에서 듀오들과 함께 대화를 나누어 보세요!',
      icon: '💬',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            혼자보다 즐거운 만남<br />
            <div className="text-[#ea7e94] mt-2">Duo로 시작하는 새로운 소셜 라이프</div>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            2:2로 즐기는 소셜 팀 매칭 서비스 <br/>핵심 기능을 소개합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-10 rounded-[2.5rem] bg-white border border-[#ea7e94]/10 shadow-[0_20px_50px_rgba(234,126,148,0.1)] hover:shadow-[0_20px_50px_rgba(234,126,148,0.15)] transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
