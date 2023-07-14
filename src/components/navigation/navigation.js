import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/products"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
