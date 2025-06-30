import React, { useState } from 'react';
import { Box, Typography, Divider, TextField, Button } from '@mui/material';

const Contact = () => {

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert(res.ok ? '送信しました！' : '送信に失敗しました');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact
      </Typography>

      <Divider sx={{ width: 80, mx: "auto", borderColor: "grey.500"}} />

      <Typography variant="body1" sx={{ py: 4 }}>
        お仕事のご依頼・ご相談などお気軽にご連絡ください。
      </Typography>

      <TextField fullWidth margin="normal" label="お名前" name="name" value={form.name} onChange={handleChange} />
      <TextField fullWidth margin="normal" label="メールアドレス" name="email" value={form.email} onChange={handleChange} />
      <TextField fullWidth margin="normal" label="お問い合わせ内容" name="message" value={form.message} multiline rows={4} onChange={handleChange} />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>送信</Button>
    </Box>
  );
};

export default Contact;
