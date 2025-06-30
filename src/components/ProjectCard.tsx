import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
} from '@mui/material';

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  links: {
    github: string;
    demo: string;
  };
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  links,
}) => {
  return (
    <Card sx={{ maxWidth: 400, mx: 'auto' }}>
      <CardMedia
        component="img"
        height="200"
        src={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            size="small"
            href={links.github}
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            size="small"
            href={links.demo}
            target="_blank"
          >
            Demo
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
