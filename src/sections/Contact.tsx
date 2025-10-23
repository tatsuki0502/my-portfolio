import React, { useState } from 'react';
import { Box, Typography, Divider, TextField, Button } from '@mui/material';

// Contact コンポーネントの定義
const Contact = () => {
  // フォームの入力値を管理するステート
  // name, email, message の 3 つのフィールドを持つオブジェクト
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // 各 TextField の onChange ハンドラ
  // e.target.name（"name"|"email"|"message"）をキーとして
  // その値を form ステートに反映する
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // フォーム送信時の処理
  // e.preventDefault() でページ遷移を防ぎつつ、
  // fetch API で /api/contact エンドポイントに POST リクエストを送る
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //name と email が空文字、または空白のみの場合は送信しない
    if(!form.name.trim() || !form.email.trim()) {
      alert('お名前とメールアドレスは必須です。');
      return;
    }
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      // 戻り値のステータスによってアラートを出し分け
      if (res.ok) {
        alert('送信しました！');
        // 必要ならここで setForm({ name: '', email: '', message: '' }) など
      } else {
        alert('送信に失敗しました');
      }
    } catch (error) {
      console.error(error);
      alert('通信エラーが発生しました');
    }
  };

  return (
    // MUI の Box を利用してフォーム全体のレイアウトを設定
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}
    >
      {/* タイトル */}
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
        Contact
      </Typography>

      {/* タイトル下の区切り線 */}
      <Divider sx={{ width: 80, mx: 'auto', borderColor: 'grey.500' }} />

      {/* 説明文 */}
      <Typography variant="body1" sx={{ py: 4 }} textAlign="center">
        お仕事のご依頼・ご相談などお気軽にご連絡ください。
      </Typography>

      {/* 入力フィールド：お名前 */}
      <TextField
        fullWidth
        margin="normal"
        label="お名前"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      {/* 入力フィールド：メールアドレス */}
      <TextField
        fullWidth
        margin="normal"
        label="メールアドレス"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      {/* 入力フィールド：お問い合わせ内容 */}
      <TextField
        fullWidth
        margin="normal"
        label="お問い合わせ内容"
        name="message"
        multiline
        rows={4}
        value={form.message}
        onChange={handleChange}
      />
      {/* 送信ボタン */}
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        送信
      </Button>
    </Box>
  );
};

export default Contact;
