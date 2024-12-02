import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import { format } from "date-fns";

export const ProjectCard = ({ project, onClick }) => (
  <>
    <Card
      onClick={onClick}
      sx={{ borderRadius: "20px", overflow: "hidden", boxShadow: 3 }}
    >
      <Box sx={{ position: "relative" }}>
        <span className="badge">Checked in</span>
        <CardMedia
          component="img"
          height="140"
          image={project.imageUrl}
          alt={project.imageUrl}
        />
      </Box>
      <CardContent>
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {format(project.createdAt, "dd MMM, yyyy")}{" "}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Avatar
            src={project.owner.avatar}
            alt={project.owner.name}
            sx={{ width: 30, height: 30, mr: 1 }}
          />
          <Typography variant="body2">Owner: {project.owner.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  </>
);
