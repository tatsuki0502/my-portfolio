import { Box, Typography, keyframes } from "@mui/material";
import ReactLogo from "../assets/react-icon.png"; 

// アニメーション：ゆっくり回転する
const rotate = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
`;

const Hero = () => {
  return (
    <Box sx={{ py: 8, textAlign: "center", position: "relative" }}>
      {/* タイトル */}
      <Typography variant="h3" fontWeight="bold" sx={{ position: "relative", zIndex: 2 }}>
        Bringing ideas to life with React.
      </Typography>

      {/* サブタイトル */}
      <Typography variant="h6" sx={{ mt: 1, position: "relative", zIndex: 2 }}>
        Reactでアイデアをカタチにする
      </Typography>

      {/* 背景アイコン */}
      <Box
        component="img"
        src={ReactLogo}
        alt="React Logo"
        sx={{
          width: { xs: 80, sm: 100, md: 120 },
          height: "auto",
          my: "auto",
          animation: `${rotate} 20s linear infinite`,
          objectFit: "contain",
          mx: "auto",
          display: "block",
          opacity: 0.8,
        }}
      />
    </Box>
  );
};

export default Hero;
