import "./MenuItem.css";

const MenuItem = ({ children }) => {
    return (
        <li className="menu-item">
            <a href="https://ps.w.org/404page/assets/screenshot-1.jpg?rev=2367441">{ children }</a>
        </li>
    );
}

export default MenuItem;