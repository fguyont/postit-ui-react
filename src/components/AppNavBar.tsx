import { Link } from "react-router-dom";

type AppNavBarProps = {
  isLogged: boolean;
};

export function AppNavBar({ isLogged }: AppNavBarProps) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="">
              <button>Home</button>
            </Link>
          </li>
          {isLogged == true ? (
            <li>
              <Link to="">
                <button>Logout</button>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
