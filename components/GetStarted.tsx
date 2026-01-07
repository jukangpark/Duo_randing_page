export default function GetStarted() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            시작하기
          </h2>
          <p className="text-xl mb-8 opacity-90">
            DuoApp과 함께 새로운 만남을 시작해보세요
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 text-left">
            <h3 className="text-2xl font-bold mb-4">설치 및 실행</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-black/20 rounded-lg p-4">
                <p className="text-pink-200 mb-2"># 의존성 설치</p>
                <code className="text-white">npm install</code>
              </div>
              <div className="bg-black/20 rounded-lg p-4">
                <p className="text-pink-200 mb-2"># 개발 서버 시작</p>
                <code className="text-white">npm start</code>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              앱 다운로드
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-lg border-2 border-white/50 hover:bg-white/30 transition-all duration-300">
              문서 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

