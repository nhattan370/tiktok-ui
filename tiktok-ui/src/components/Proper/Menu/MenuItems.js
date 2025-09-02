import Button from "../../Button";
import styles from './Menu.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function MenuItems({data, onClick}){
    return(
        <div>
            <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')} onClick={onClick}>{data.title}</Button>
        </div>
    )
}
export default MenuItems;