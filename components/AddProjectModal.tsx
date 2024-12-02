import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useDropzone } from "react-dropzone";

export const AddProjectModal = ({ open, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState([]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onAdd(title, description);
    setIsSubmitting(false);
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Checkin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
