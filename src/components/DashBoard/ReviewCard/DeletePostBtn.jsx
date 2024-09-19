// "use client";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePostById } from "@/lib/action";

const deletePostHandler = async (id) => {
  console.log(id);
  const deleteResult = await deletePostById(id);
  console.log(deleteResult);
};

const DeletePostBtn = ({ id }) => {
  return (
    <Button
      variant="contained"
      color={"error"}
      sx={{ position: "absolute", top: 5, right: 5 }}
      onClick={() => deletePostHandler(id)}
    >
      <DeleteIcon />
    </Button>
  );
};

export default DeletePostBtn;
