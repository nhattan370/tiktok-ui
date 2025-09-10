import styles from './Menu.module.scss';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);
function MenuItems({title, to, icon, activeIcon}){
    return(
        <NavLink className={(nav)=>cx('menu-items', {active: nav.isActive})} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    )
}
export default MenuItems;