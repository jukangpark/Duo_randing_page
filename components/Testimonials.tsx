export default function Testimonials() {
  const testimonials = [
    {
      name: '김민수',
      rating: 5,
      comment: '친구와 함께 팀을 만들어서 더 안전하고 재미있게 사용할 수 있어요!',
      location: '서울',
    },
    {
      name: '이지은',
      rating: 5,
      comment: '사진 검증 시스템 덕분에 신뢰할 수 있는 매칭이 가능해요.',
      location: '부산',
    },
    {
      name: '박준호',
      rating: 4,
      comment: '같은 지역 사람들과만 매칭되어서 만나기도 편하고 좋아요.',
      location: '대구',
    },
    {
      name: '최수진',
      rating: 5,
      comment: '2인 팀 시스템이 독특하고, 상대방도 친구와 함께라서 부담이 없어요.',
      location: '인천',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            사용자 후기
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            DuoApp을 사용하는 분들의 생생한 후기를 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

