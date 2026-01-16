import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: '전화번호가 필요합니다.' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('NEXT_PUBLIC_DISCORD_WEBHOOK_URL 환경변수가 설정되지 않았습니다.');
      return NextResponse.json(
        { error: '서버 설정 오류' },
        { status: 500 }
      );
    }

    // Discord webhook에 메시지 전송
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `🎉 새로운 사전 예약 등록!\n**전화번호:** ${phoneNumber}\n**시간:** ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}`,
        username: 'Duo 사전예약 봇',
      }),
    });

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error('Discord webhook 오류:', errorText);
      return NextResponse.json(
        { error: 'Discord 전송 실패' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: '등록되었습니다!' });
  } catch (error) {
    console.error('API 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
