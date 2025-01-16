import { Link } from "react-router-dom";

function ButtonLink({ children, path, classes }) {
  return (
    <Link to={path} className={classes}>
      {children}
    </Link>
  );
}

export default ButtonLink;
