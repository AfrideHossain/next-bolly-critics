import { Button } from "@mui/material";
import Image from "next/image";

const GithubBtn = () => {
  const handleGithubLogin = async () => {
      "use server";
      await
  };
  return (
    <>
      <form action={handleGithubLogin}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            py: 2,
            textTransform: "none",
            display: "flex",
            gap: 1,
            fontSize: 18,
          }}
        >
          <Image
            src="/.images/icons/github.png"
            alt=""
            width={32}
            height={32}
          />
          Login with github
        </Button>
      </form>
    </>
  );
};

export default GithubBtn;
