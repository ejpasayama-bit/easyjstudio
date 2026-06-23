export async function onRequestPost(context) {
  // contextの中から、リクエストデータと環境変数（APIキー）を取り出します
  const { request, env } = context;

  try {
    const formData = await request.formData();

    // 一般・ゲーム用のお問い合わせ項目のみを取得（form_type の取得や判定は不要）
    const name = formData.get("name") || "未入力";
    const email = formData.get("email") || "未入力";
    const message = formData.get("message") || "未入力";

    // 宛先・件名・本文を一般/ゲーム用に固定
    const toEmail = "info@easyjstudio.com";
    const subject = "【一般/ゲーム】公式サイトからのお問い合わせ";
    const emailBody = `以下の内容でお問い合わせがありました。\n\n【お名前】: ${name}\n【メールアドレス】: ${email}\n\n【メッセージ内容】:\n${message}`;

    // Resend APIでメール送信
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${name} <postmaster@easyjstudio.com>`,
        to: toEmail,
        reply_to: email, // お客さんのメールアドレスを返信先にセット
        subject: subject,
        text: emailBody,
      }),
    });

    return new Response(JSON.stringify({ success: resendResponse.ok }), {
      status: resendResponse.ok ? 200 : 400,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}