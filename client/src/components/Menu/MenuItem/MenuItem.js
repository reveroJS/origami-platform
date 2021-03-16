import "./MenuItem.css";

const MenuItem = ({ children }) => {
    return (
        <li className="menu-item">
            <a href="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1">{ children }</a>
        </li>
    );
}

export default MenuItem;