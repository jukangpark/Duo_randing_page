import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phoneNumber, agreedToPrivacy, agreedAt } = body;


    if (!phoneNumber) {
      console.error('전화번호 누락');
      return NextResponse.json(
        { error: '전화번호가 필요합니다.' },
        { status: 400 }
      );
    }

    if (!agreedToPrivacy) {
      console.error('개인정보 동의 누락');
      return NextResponse.json(
        { error: '개인정보 수집 및 이용에 동의해주세요.' },
        { status: 400 }
      );
    }

    let webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('❌ NEXT_PUBLIC_DISCORD_WEBHOOK_URL 환경변수가 설정되지 않았습니다.');
      return NextResponse.json(
        { error: '서버 설정 오류: Discord webhook URL이 없습니다.' },
        { status: 500 }
      );
    }

    // URL에 프로토콜이 없으면 https:// 추가
    webhookUrl = webhookUrl.trim();
    if (!webhookUrl.startsWith('http://') && !webhookUrl.startsWith('https://')) {
      webhookUrl = 'https://' + webhookUrl;
    }

    // URL 검증
    try {
      new URL(webhookUrl);
    } catch (urlError) {
      console.error('❌ 잘못된 Discord webhook URL 형식:', webhookUrl);
      return NextResponse.json(
        { error: '서버 설정 오류: Discord webhook URL 형식이 올바르지 않습니다.' },
        { status: 500 }
      );
    }


    // Discord 메시지 생성
    const agreedAtFormatted = agreedAt 
      ? new Date(agreedAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
      : 'N/A';
    const registeredAt = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    const discordMessage = {
      content: `🎉 새로운 사전 예약 등록!\n**전화번호:** ${phoneNumber}\n**개인정보 동의:** ${agreedToPrivacy ? '✅ 동의' : '❌ 미동의'}\n**동의 일시:** ${agreedAtFormatted}\n**등록 시간:** ${registeredAt}`,
      username: 'Duo 사전예약 봇',
    };


    // Discord webhook에 메시지 전송
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    });


    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error('❌ Discord webhook 오류:', {
        status: discordResponse.status,
        statusText: discordResponse.statusText,
        error: errorText,
      });
      return NextResponse.json(
        { 
          error: `Discord 전송 실패: ${discordResponse.status} ${discordResponse.statusText}`,
          details: errorText 
        },
        { status: 500 }
      );
    }

    const responseData = await discordResponse.json().catch(() => null);

    return NextResponse.json({ success: true, message: '등록되었습니다!' });
  } catch (error) {
    console.error('❌ API 오류 상세:', error);
    if (error instanceof Error) {
      console.error('에러 메시지:', error.message);
      console.error('에러 스택:', error.stack);
    }
    return NextResponse.json(
      { 
        error: '서버 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
