import { Link } from "@mui/material";

export const links = [
  {
    title: "Home",
    path: "/",
    session_required: false,
  },
  {
    title: "About",
    path: "/about",
    session_required: false,
  },
  {
    title: "FAQ",
    path: "/faq",
    session_required: false,
  },
  {
    title: "Reviews",
    path: "/reviews",
    session_required: true,
  },
  {
    title: "Post",
    path: "/dashboard/post",
    session_required: true,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    session_required: true,
  },
];
const Links = ({ session }) => {
  return (
    <>
      {links.map(
        (link) =>
          !link.session_required && (
            <Link
              key={link.title}
              href={link.path}
              variant="body1"
              color="inherit"
              underline="none"
            >
              {link.title}
            </Link>
          )
      )}
      {session &&
        links.map(
          (link) =>
            link.session_required && (
              <Link
                key={link.title}
                href={link.path}
                variant="body1"
                color="inherit"
                underline="none"
              >
                {link.title}
              </Link>
            )
        )}
      {session && (
        <>
          <Link
            href={`/dashboard/profile/${session?.user?.id}`}
            variant="body1"
            color="inherit"
            underline="none"
          >
            Profile
          </Link>
        </>
      )}
    </>
  );
};

export default Links;
