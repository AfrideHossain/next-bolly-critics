import { Link } from "@mui/material";

export const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
];
const Links = () => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          variant="body1"
          color="inherit"
          underline="none"
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;
