import {
  Modal,
  Box,
  TextField,
  IconButton,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import CloseIcon from "@mui/icons-material/Close";

export function ProjectDetailsModal({ project, open, onClose }) {
  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          width: 600,
          boxShadow: 24,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6">Detail</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ width: "40%" }}>Booking ID:</Typography>
                <TextField
                  fullWidth
                  defaultValue="12345678"
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ width: "40%" }}>Rooms:</Typography>
                <TextField
                  fullWidth
                  defaultValue="4"
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ width: "40%" }}>Number of Guests:</Typography>
                <TextField
                  fullWidth
                  defaultValue="4"
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ width: "40%" }}>Booked Date:</Typography>
                <TextField
                  fullWidth
                  defaultValue={format(project.createdAt, "dd MMM, yyyy")}
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={project.imageUrl}
              alt="Booking Image"
              sx={{
                width: "70%",
                height: "50%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 3,
            mt: 3,
          }}
        >
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderRadius: "20px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#7B5AFF",
              color: "white",
            }}
          >
            Ok
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
