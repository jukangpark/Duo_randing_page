export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              앱 소개
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-center text-xl font-semibold text-gray-900">
              DuoApp은 <span className="text-pink-600 font-bold">2명씩 팀을 이루어(2:2)</span> 다른 팀과 매칭되는 소셜 앱입니다.
            </p>
            
            <p>
              사용자는 홈에서 같은 지역의 팀 프로필 카드를 확인하고, 카드를 열어 상세 정보를 본 뒤{' '}
              <span className="font-semibold text-pink-600">LIKE</span>를 보내거나{' '}
              <span className="font-semibold text-purple-600">Next</span>로 다음 팀을 탐색할 수 있습니다.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500 mt-8">
              <p className="font-semibold text-gray-900 mb-2">🔒 안전한 매칭 경험</p>
              <p>
                <span className="font-semibold">프로필 사진 등록 → 관리자 승인</span>이 완료되어야 매칭/LIKE를 진행할 수 있도록 설계되어, 
                보다 안전한 매칭 경험을 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

