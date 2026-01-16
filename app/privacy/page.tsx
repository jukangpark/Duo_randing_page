export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
          개인정보 처리방침
        </h1>
        
        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Duo</strong>(이하 "회사" 또는 "서비스")는 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 준수하며, 이용자의 개인정보 보호를 매우 중요하게 생각합니다.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              본 개인정보 처리방침은 회사가 제공하는 서비스 이용 시 수집되는 개인정보의 항목, 수집 및 이용 목적, 보유 및 이용 기간, 개인정보의 제3자 제공, 개인정보 처리 위탁, 이용자의 권리 및 행사 방법 등에 관한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">1. 개인정보의 수집 및 이용 목적</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold mb-2">1.1 사전 예약 서비스 제공</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>서비스 출시 알림 발송</li>
                  <li>사전 예약 이벤트 혜택(코인) 지급</li>
                  <li>서비스 관련 안내 및 공지사항 전달</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">2. 수집하는 개인정보의 항목</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold mb-2">2.1 사전 예약 시 수집 항목</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>필수 항목:</strong> 휴대전화 번호</li>
                  <li><strong>자동 수집 항목:</strong> 동의 일시, 접속 IP 주소, 쿠키, 접속 로그</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">3. 개인정보의 보유 및 이용 기간</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">3.1 사전 예약 정보</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>보유 기간:</strong> 서비스 오픈 후 1개월 또는 목적 달성 시까지</li>
                  <li>목적 달성 후에는 지체 없이 파기합니다.</li>
                  <li>단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">4. 개인정보의 제3자 제공</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">5. 개인정보 처리 위탁</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">수탁업체</th>
                      <th className="text-left py-2 font-semibold">위탁업무 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Google (Google Sheets)</td>
                      <td className="py-2">사전 예약 정보 저장 및 관리</td>
                    </tr>
                    <tr>
                      <td className="py-2">Discord</td>
                      <td className="py-2">사전 예약 알림 수신</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                회사는 위탁계약 체결 시 개인정보보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">6. 정보주체의 권리·의무 및 행사 방법</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                이용자는 다음과 같은 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>개인정보 열람 요구</li>
                <li>개인정보 정정·삭제 요구</li>
                <li>개인정보 처리정지 요구</li>
                <li>개인정보 수집·이용·제공에 대한 동의 철회</li>
              </ul>
              <p className="mt-3">
                위 권리 행사는 회사에 대해 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
              </p>
              <p className="mt-3">
                <strong className="text-gray-900">동의 거부 권리:</strong> 귀하는 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를 거부하시는 경우 사전 예약 서비스 이용 및 이벤트 혜택(코인) 지급이 제한될 수 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">7. 개인정보의 파기</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
              </p>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">7.1 파기 절차</h3>
                <p>이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">7.2 파기 방법</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                  <li>종이에 출력된 정보: 분쇄기로 분쇄하거나 소각</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">8. 개인정보 보호책임자</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong className="text-gray-900">개인정보 보호책임자</strong></p>
                <p className="mt-2">이메일: codeking@codekingbuilder.com</p>
              </div>
              <p className="mt-3">
                정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">9. 개인정보의 안전성 확보 조치</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">10. 광고성 정보 전송</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                회사는 사전 예약 알림 및 이벤트 안내를 위해 문자메시지(SMS)를 발송할 수 있습니다.
              </p>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">10.1 광고성 문자 발송 시 준수 사항</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>제목 시작에 <strong>(광고)</strong> 표기</li>
                  <li>발송 주체 명시: [Duo]</li>
                  <li>하단에 무료 수신거부 번호(080) 포함</li>
                </ul>
              </div>
              <p className="mt-3">
                <strong className="text-gray-900">무료 수신거부:</strong> 080-XXXX-XXXX (문자 발송 대행 업체 신청 후 번호 할당 예정)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">11. 개인정보 처리방침 변경</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                이 개인정보 처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </div>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              본 방침은 2025년 1월 1일부터 시행됩니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
