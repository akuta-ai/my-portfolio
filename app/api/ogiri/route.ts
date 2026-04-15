import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `あなたはプロの大喜利審査員です。お題に対するユーザーの回答を100点満点で採点し、必ず以下のJSONフォーマットのみで返答してください。

{"score": <0から100の整数>, "comment": "<審査員らしい日本語のコメント。面白ければ褒め、惜しければアドバイス。50文字以内。>"}

採点基準：
- 発想の独自性・意外性（30点）
- ユーモアのセンス（30点）
- お題との関連性（20点）
- 言葉のキレ・テンポ（20点）

JSONのみを返してください。それ以外のテキストは絶対に含めないでください。`;

export async function POST(request: NextRequest) {
  try {
    const { question, answer } = await request.json();

    if (!question || !answer) {
      return NextResponse.json(
        { error: "question と answer は必須です。" },
        { status: 400 }
      );
    }

    if (answer.trim().length === 0) {
      return NextResponse.json(
        { error: "回答を入力してください。" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 256,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `お題：${question}\n回答：${answer}`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text.trim() : "";

    let result: { score: number; comment: string };
    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: "採点結果の解析に失敗しました。もう一度お試しください。" },
        { status: 500 }
      );
    }

    if (
      typeof result.score !== "number" ||
      result.score < 0 ||
      result.score > 100
    ) {
      return NextResponse.json(
        { error: "採点結果が不正です。もう一度お試しください。" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      score: Math.round(result.score),
      comment: result.comment,
    });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      return NextResponse.json(
        { error: "APIキーが無効です。環境変数を確認してください。" },
        { status: 401 }
      );
    }
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json(
        { error: "リクエストが多すぎます。しばらく待ってから再試行してください。" },
        { status: 429 }
      );
    }
    return NextResponse.json(
      { error: "採点中にエラーが発生しました。もう一度お試しください。" },
      { status: 500 }
    );
  }
}
