import React from 'react';
import { Box, Typography, Stack, Link, IconButton, Divider } from '@mui/material';
import { GitHub, Twitter } from '@mui/icons-material';
import coconara from "../assets/coconala-icon.jpg";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact
      </Typography>

      <Divider sx={{ width: 80, mx: "auto", borderColor: "grey.500"}} />

      <Typography variant="body1" sx={{ py: 4 }}>
        お仕事のご依頼・ご相談などお気軽にご連絡ください。
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        📩 <Link href="mailto:kouno.t0502@gmail.com">kouno.t0502@gmail.com</Link>
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton href="https://github.com/tatsuki0502" target="_blank" aria-label="GitHub">
          <GitHub />
        </IconButton>
        <IconButton href="https://twitter.com/yourname" target="_blank" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton href="https://coconala.com/users/yourid" target="_blank" aria-label="Coconala">
          <img src={coconara} alt="Coconala" width={24} height={24} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact;
