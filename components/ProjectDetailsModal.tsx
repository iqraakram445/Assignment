import { format } from "date-fns";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Avatar,
} from "@mui/material";

export const ProjectDetailsModal = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent>
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{ width: "100%", height: "auto", borderRadius: 8 }}
        />
        <Typography variant="body1" sx={{ mt: 2 }}>
          {project.description}
        </Typography>
        <div className="flex items-center gap-2 mt-4">
          <Avatar src={project.owner.avatar} alt={project.owner.name} />
          <div>
            <Typography variant="subtitle2">{project.owner.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {format(project.createdAt, "PPP")}
            </Typography>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
