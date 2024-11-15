"use client";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const ToolBar = ({ editor }) => {
  return (
    <Box sx={{ wdith: "100%", display: "flex", gap: 2, alignItems: "center" }}>
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
      >
        <FormatBold />
      </IconButton>
    </Box>
  );
};

export default ToolBar;
