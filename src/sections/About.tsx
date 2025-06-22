import { Box, Typography, Avatar, Divider } from '@mui/material';
import profile from '../assets/profile.jpeg';

const About = () => {
  return (
    // 複数要素を返す
    <>
      <Box sx={{py: 8}}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          About
        </Typography>

        <Divider sx={{ width: 80, mx: "auto", borderColor: "grey.500"}} />
      </Box>

      <Box
        id="about"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          px: 2,
          textAlign: 'left',
        }}
      >
        <Avatar
          alt="プロフィール画像"
          src={profile}
          sx={{ width: 150, height: 150 }}
        />
        <Box maxWidth="600px">
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            フロントエンドエンジニアを目指し、React / TypeScript を中心とした開発スキルの習得に取り組んでいます。<br />
            UI/UX にもこだわり、使いやすく美しいフロントエンドの実装を意識した制作を行っています。<br />
            現在は副業や個人開発を通じてスキルを磨き、将来的にはフリーランスとして独立することを目標としています。<br />
            IT業界での経験はまだ2年目と浅いですが、常に学び、成長し続ける姿勢で取り組んでいます。ご縁がありましたら、どうぞよろしくお願いいたします。
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
