import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import todo from "../assets/todo-app.png";
import weather from "../assets/weather-app.png";
import chat from "../assets/chat-app.png";

const projectList = [

  {
    title: 'ToDo管理アプリ',
    image: todo,
    description: 'シンプルで使いやすいタスク管理アプリ。React + TypeScript + Vite で構築。',
    stack: ['React', 'TypeScript', 'Vite'],
    links: {
      github: 'https://github.com/tatsuki0502/todo-app',
      demo: 'https://tatsuki0502.github.io/todo-app',
    },
  },

  {
    title: '天気アプリ',
    image: weather,
    description: 'React + TypeScript + OpenWeatherMap API を用いた天気予報アプリ。',
    stack: ['React', 'TypeScript', 'API'],
    links: {
      github: 'https://github.com/tatsuki0502/weather-app',
      demo: 'https://tatsuki0502.github.io/weather-app',
    },
  },

  {
    title: 'チャットアプリ',
    image: chat,
    description: 'React + Firebase を使ったリアルタイムチャットアプリ。Googleログイン対応。',
    stack: ['React', 'TypeScript', 'Firebase'],
    links: {
      github: 'https://github.com/tatsuki0502/chat-app',
      demo: 'https://chat-app-mu-liard.vercel.app',
    },
  },
  
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Projects
      </Typography>

      <Divider sx={{ width: 80, mx: "auto", borderColor: "grey.500"}} />

      <Typography variant="body1" sx={{ mt: 1 }}>
      React × TypeScriptを中心に、API連携や状態管理、UIライブラリの活用まで幅広く対応可能です。
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        {projectList.map((project, index) => (
          <Box key={index} sx={{ width: 300 }}>
            <ProjectCard {...project} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
