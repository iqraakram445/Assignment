import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import { format } from "date-fns";

export function ProjectCard({ project, onClick }) {
  return (
    <Card onClick={onClick} sx={{ cursor: "pointer", maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={project.imageUrl}
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {project.title}
        </Typography>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Avatar src={project.owner.avatar} alt={project.owner.name} />
            <Typography variant="body2" color="text.secondary">
              {project.owner.name}
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
            {project.createdAt
              ? format(project.createdAt, "dd MMM, yyyy")
              : "Date unknown"}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
