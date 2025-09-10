import MenuItems from './Menu/MenuItems';
import styles from './SideBar.module.scss'
import routes from '../../routeConfig/routes'
import Menu from './Menu/Menu';
import {HomeIconRegular, UserGroupIconRegular, LiveIconRegular, HomeIconActive, UserGroupIconActive, LiveIconActive} from '../Icon/index'
import SuggestAccount from '../SuggestAccount/SuggestAccount';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SideBar(){
    return (
        <aside className={cx('wrapper-sidebar')}>
            <Menu>
                <MenuItems title='For you' icon={<HomeIconRegular/>} activeIcon={<HomeIconActive/>} to={routes.home}></MenuItems>
                <MenuItems title='Following' icon={<UserGroupIconRegular/>} activeIcon={<UserGroupIconActive/>} to={routes.following}></MenuItems>
                <MenuItems title='LIVE' icon={<LiveIconRegular/>} activeIcon={<LiveIconActive/>} to={routes.live}></MenuItems>
            </Menu>
            <SuggestAccount label='Suggested Account'></SuggestAccount>
            <SuggestAccount label='Following Account'></SuggestAccount>
        </aside>
    )
}
export default SideBar;