import style from "./NavigationItem.module.css";

const NavigationItem = (props) => {
    return (
        <li className={style.listItem}>
            <a href="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" className={style.navListItem}>{props.children}</a>
        </li>
    );

}

export default NavigationItem;