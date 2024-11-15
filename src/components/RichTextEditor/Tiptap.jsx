"use client";

import { Box } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

const Tiptap = ({ onChange, content }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {},
  });

  return (
    <Box sx={{ px: 2, width: "100%" }}>
      <ToolBar editor={editor} />
      <EditorContent style={{ whiteSpace: "pre-line", outline: "none" }} editor={editor} />
    </Box>
  );
};

export default Tiptap;
