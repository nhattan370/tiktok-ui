import Button from "../../Button";
import styles from './Menu.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function MenuItems({data, onClick}){
    const classes = cx('menu-item',{
        separate: data.separate,
    });
    return(
        <div>
            <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>{data.title}</Button>
        </div>
    )
}
export default MenuItems;