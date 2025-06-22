import { Box, keyframes, Typography } from "@mui/material";
import ReactLogo from "../assets/react-logo.png";

const Hero = () => {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Box sx={{ position: "relative", display: "inline-block"}}>
        <Typography variant="h3" fontWeight="bold" zIndex={1}>
          Bringing ideas to life with React.
        </Typography>
        <Typography variant="h6" >
          Reactでアイデアをカタチにする
        </Typography>

        {/* Reactアイコンの位置 */}
        <Box 
          component="img"
          src={ReactLogo}
          alt="React Logo"
          sx={{
            position: "absolute",
            bottom: -30,
            right: 170,
            width: 60,
            height: 60,
            zIndex: 0,
          }}
        />

      </Box>

    </Box>

  );
};

export default Hero;
