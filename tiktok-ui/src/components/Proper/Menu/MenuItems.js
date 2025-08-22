import Button from "../../Button";
import styles from './Menu.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function MenuItems({data}){
    return(
        <div>
            <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}>{data.title}</Button>
        </div>
    )
}
export default MenuItems;