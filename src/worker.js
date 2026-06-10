export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS対策（フロントからのアクセスを許可）
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // ★ 対策：末尾のスラッシュ（/api/form/ など）があっても無くても一致するように正規化
    const normalizedPath = url.pathname.replace(/\/$/, "");

    // URLが「/api/form」の場合の処理
    if (normalizedPath === "/api/form") {
      if (request.method === "POST") {
        try {
          const formData = await request.formData();
          const formType = formData.get("form_type");
          
          const name = formData.get("name") || "未入力";
          const email = formData.get("email") || "未入力";
          const message = formData.get("message") || "未入力";

          let toEmail = "";
          let subject = "";
          let emailBody = "";

          if (formType === "local") {
            const company = formData.get("company") || "未入力";
            const phone = formData.get("phone") || "未入力";
            const bank = formData.get("introduction_bank") || "なし";
            const staff = formData.get("introduction_staff") || "なし";

            toEmail = "local@easyjstudio.com";
            subject = "【地元企業案件】特設ページからのお問い合わせ";
            emailBody = `以下の内容でローカル案件のお問い合わせがありました。\n\n【会社名/屋号】: ${company}\n【お名前】: ${name}\n【メールアドレス】: ${email}\n【お電話番号】: ${phone}\n\n【ご紹介元金融機関】: ${bank}\n【ご紹介担当者様】: ${staff}\n\n【ご相談内容】:\n${message}`;
          } else {
            toEmail = "info@easyjstudio.com";
            subject = "【一般/ゲーム】公式サイトからのお問い合わせ";
            emailBody = `以下の内容でお問い合わせがありました。\n\n【お名前】: ${name}\n【メールアドレス】: ${email}\n\n【メッセージ内容】:\n${message}`;
          }

          // Resend APIでメール送信
          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "EasyJ Studio System <system@easyjstudio.com>",
              to: toEmail,
              subject: subject,
              text: emailBody,
            }),
          });

          return new Response(JSON.stringify({ success: resendResponse.ok }), {
            status: resendResponse.ok ? 200 : 400,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
          });

        } catch (error) {
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
          });
        }
      } else {
        // POST以外のメソッドが来たら明示的にエラーを返す
        return new Response("Method Not Allowed", { status: 405 });
      }
    }

    // お問い合わせ（/api/form）以外のURLへのアクセスは、静的ファイル（React画面）をそのまま返す
    return env.ASSETS.fetch(request);
  },
};