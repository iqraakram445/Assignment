"use client";

import { useState } from "react";

import "../styles/globals.css";
import { useProjects } from "../hooks/useProjects";
import { ProjectCard } from "../components/ProjectCard";
import { AddProjectModal } from "../components/AddProjectModal";
import { ProjectDetailsModal } from "../components/project-details-modal";

import {
  Box,
  Typography,
  Button,
  Grid,
  CardMedia,
  Badge,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Home() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const { projects, addProject } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = (data) => {
    setOpenModal(true);
    setSelectedProject(data);
  };
  return (
    <Box sx={{ padding: 2 }}>
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{ padding: "0 16px" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "#7B5AFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Logo
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                backgroundColor: "#7B5AFF",
              }}
            >
              Feedback
            </Button>

            <IconButton>
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <InfoIcon />
            </IconButton>
            <img alt="Remy Sharp" src="/images/Avatar.jpg" />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          height: "279px",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          mb: 4,
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardMedia
          component="img"
          height="279"
          image="/images/Rectangle.png"
          alt="Banner"
          sx={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            color: "white",
            padding: 3,
          }}
        >
          <Box
            sx={{
              mt: 3,
            }}
          >
            <Typography variant="h4">Hi! 👋 James Doe</Typography>
            <Typography sx={{ mt: 1 }}>
              Lorem ipsum dolor sit amet, something important to say here.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                textTransform: "none",
                borderRadius: "20px",
                backgroundColor: "#7B5AFF",
              }}
              onClick={() => setAddModalOpen(true)}
            >
              Add Check In
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "500" }}>
          Added CheckIns
        </Typography>
        <img alt="Remy Sharp" src="/images/Vector.png" />
      </Box>

      <Grid container spacing={2}>
        {projects.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <ProjectCard project={item} onClick={() => handleClick(item)} />
          </Grid>
        ))}
      </Grid>
      <AddProjectModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={addProject}
      />
      <ProjectDetailsModal
        project={selectedProject}
        open={openModal}
        onClose={() => setSelectedProject(null)}
      />
    </Box>
  );
}
