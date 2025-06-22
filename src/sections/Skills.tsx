import { Box, Typography, Divider } from "@mui/material";
import TSLogo from "../assets/TS-icon.jpg";
import ReactLogo from "../assets/react-logo.png";

const Skills = () => {
  return (
    <Box sx={{ py: 8, px: 2, maxWidth: 800, mx: "auto", textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Skills
      </Typography>

      <Divider sx={{ mb: 4, width: 80, mx: "auto", borderColor: "grey.500" }} />

      {/* アイコン画像の配置 */}
      <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={4}>
        <Box component="img" src={TSLogo} alt="TypeScript" sx={{ height: 100 }} />
        <Typography variant="h2" fontWeight="bold">+</Typography>
        <Box component="img" src={ReactLogo} alt="React" sx={{ height: 100 }} />
      </Box>

      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
        React / TypeScript を中心としたフロントエンド開発に強みがあります。<br />
        UI/UXにこだわり、拡張性とメンテナンス性に優れた実装を意識して開発を行っています。<br />
        現在個人開発に取り組みながら、SPA構築、状態管理（Redux / Context API など）API連携、レスポンシブ対応といった幅広いフロントエンド技術
        に取り組んできました。<br />
        今後はさらにデザインと開発の橋渡しができるエンジニアを目指してスキルアップを継続中です。
      </Typography>

    </Box>
  );
};

export default Skills;
