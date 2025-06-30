import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from '@mui/material';
import sample from '../assets/saqmple.png';

const productsList = [
  {
    title: 'TaskBill',
    description: 'タスク・請求書・収支管理が一体となった業務支援アプリ。',
    status: '10月開発開始',
    release: '2026年4月リリース予定',
    commercial: true,
  },
]

const Products = () => {
  return (
    <Box id="products" sx={{ py: 10, px: 4}}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Products
      </Typography>

      <Divider sx={{ width: 80, mx: "auto", borderColor: "grey.500"}} />

      <Typography variant="body1" textAlign="center" sx={{ py: 6 }}>
        商用化予定のアプリを紹介しています。
      </Typography>

      {/* Flexコンテナ */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {productsList.map((app) => (
          <Card
            key={app.title}
            sx={{
              width: 320,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              transition: '0.3s',
            }}
          >
            <CardMedia
              component="img"
              height="180"
              // 仮
              image={sample}
              alt={app.title}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {app.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {app.description}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                

              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Products