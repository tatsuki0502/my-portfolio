import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import TaskPort from "../assets/TaskPort.png";

const learningList = [
  {
    title: "タスク管理アプリ『TaskPort』",
    image: TaskPort,
    description:
      "タスクの進捗をガントチャートで見えるサービス。進捗率も管理できるWEBタスク管理アプリ。",
    demo: "https://taskport-nine.vercel.app/",
  },
  // 将来的に他サービス追加
];

const Service = () => (
  <Box id="learning" sx={{ py: 8, px: 2, textAlign: "center" }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      Service
    </Typography>

    <Divider sx={{ width: 80, mx: "auto", borderColor: "grey.500" }} />

    <Typography variant="body1" sx={{ py: 6 }}>
      現在公開中のサービス一覧になります。
    </Typography>

    <Stack
      spacing={4}
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      sx={{ mt: 4, flexWrap: "wrap" }}
    >
      {learningList.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 400, mx: "auto" }}>
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
            {item.demo && (
              <Button
                variant="contained"
                color="primary"
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                WEB
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Service;
