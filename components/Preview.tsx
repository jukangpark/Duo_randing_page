export default function Preview() {
  const screens = [
    { name: '홈', description: '팀 프로필 카드를 확인하고 탐색하세요' },
    { name: '카드 상세 조회', description: '상세 정보를 확인하고 LIKE를 보내세요' },
    { name: '우리 팀', description: '우리 팀 프로필을 관리하세요' },
    { name: '프로필', description: '개인 프로필을 설정하세요' },
    { name: '코인 충전', description: '코인을 충전하여 프리미엄 기능을 이용하세요' },
    { name: '구독', description: '구독으로 더 많은 혜택을 받으세요' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            화면 미리보기
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            DuoApp의 다양한 화면을 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {screen.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

