import "./Navbar.Module.css";
import { CartWidget } from "../cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div className="header-top">
      <div className="logo">
        <h5>-logo a definir-</h5>
      </div>
      <div className="container-menu">
        <nav className="secciones">
          <ul>
            <li className="nav-item">
              <a class="nav-link" href="#">
                <span className="nav-link-title">Temáticas</span>
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#">
                <span className="nav-link-title">Autores</span>
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#">
                <span className="nav-link-title">Editoriales</span>
              </a>
            </li>
            <CartWidget />
          </ul>
          <div></div>
        </nav>
      </div>
    </div>
  );
};
