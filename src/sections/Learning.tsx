import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import udemy from "../assets/udemy-react-ts-course.png"

const learningList = [
  {
    title: 'React × TypeScript 入門講座',
    image: udemy,
    description: 'Udemy講座。家計簿アプリを通してReact, TypeScript, Firebaseのフルスタック開発を学習中。',
    progress: '40%',
  },
  // 将来的に他講座追加可
];

const Learning = () => (
  <Box id="learning" sx={{ py: 8, px: 2, textAlign: 'center' }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      Learning
    </Typography>

    <Divider sx={{ width: 80, mx: "auto", borderColor: "grey.500"}} />

    <Typography variant="body1" sx={{ py: 6 }}>
      Udemyの講座を通じて、実践的なフロントエンド技術の習得に取り組んでいます。
    </Typography>

    <Stack
      spacing={4}
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      sx={{ mt: 4, flexWrap: 'wrap' }}
    >
      {learningList.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 400, mx: 'auto' }}>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {item.description}
            </Typography>
            <Chip label={`進捗: ${item.progress}`} size="small" />
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Learning;
