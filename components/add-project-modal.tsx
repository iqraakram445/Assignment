import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function AddProjectModal({ open, onClose, onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      await addDoc(collection(db, "projects"), {
        title,
        description,
        createdAt: serverTimestamp(),
        imageUrl: "/placeholder.svg",
        owner: {
          name: "James Doe",
          avatar: "https://i.pravatar.cc/150?u=james",
        },
      });

      setTitle("");
      setDescription("");
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error adding project:", error);
    } finally {
      setUploading(false);
    }
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
          <Box
            sx={{
              mt: 2,
              p: 3,
              border: "2px dashed #ccc",
              borderRadius: 1,
              textAlign: "center",
            }}
          >
            <CloudUpload sx={{ fontSize: 48, color: "text.secondary" }} />
            <p>Click or drag file to this area to upload</p>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={uploading}>
            {uploading ? "Adding..." : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
