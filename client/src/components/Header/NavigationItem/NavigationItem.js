import style from "./NavigationItem.module.css";

const NavigationItem = (props) => {
    return (
        <li className={style.listItem}>
            <a href="https://ps.w.org/404page/assets/screenshot-1.jpg?rev=2367441" className={style.navListItem}>{props.children}</a>
        </li>
    );

}

export default NavigationItem;