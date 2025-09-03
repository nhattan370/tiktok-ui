import styles from './Header.module.scss'
import images from '../../../../assets/image';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../../../Button/index';
import Menu from '../../../Proper/Menu';
import { MessageIcon, UploadIcon } from '../../../Icon';
import Image from '../../../Image';
import Search from '../../../Search';

function Header(){
    const cx = classNames.bind(styles); 
    const currentUser = false;
    const handleChange = (item) => {
        console.log(item);
    }
    const MENU_ITEMS = [
        {
            icon:<FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
            title:'English',
            children:{
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title:'English'
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tieng Viet'
                    }
                ]
            }
        },
        {
            icon:<FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
            title:'Feedback And Help', 
            to: '/feedback'
        },
        {
            icon:<FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
            title:'Keyboard And Shortcuts'
        },
    ]
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]
    return (
            <header className={styles['wrap-header']}>
                
                <div className={styles['contain-header']}>
                    <div className={styles.logo}>
                        <img src={images.logo} alt='Tiktok'/>
                    </div>
                    <Search/>
                    <div className={cx('action')}>
                        {
                            currentUser ? (
                                <>
                                    <Button text>Upload</Button>
                                    <Button primary>Login</Button>
                                    <Menu  items={MENU_ITEMS} className={cx('menu-wrapper')} onChange={handleChange}>
                                        <button className={cx('more-button')}>
                                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                                        </button>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <Tippy delay={[0.200]} content='Upload' placement='bottom'>
                                        <button className={cx('cloud-upload-btn')}>
                                            <UploadIcon/>
                                        </button>
                                    </Tippy>
                                    <Tippy delay={[0,200]} content='Message' placement='bottom'>
                                        <button className={cx('message-btn')}><MessageIcon/></button>
                                    </Tippy>
                                    <Menu  items={userMenu} className={cx('menu-wrapper')} onChange={handleChange}>
                                        <Image className={cx('user-avatar')} src={images.avatar} alt='Nguyen Van A'></Image>
                                        {/* <Image className={cx('user-avatar')} src='fgdfgd' fallback='https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png' alt='Nguyen Van A'></Image> */}

                                    </Menu>
                                </>
                            )

                        }
                    </div>
                    
                </div>
            </header>
    )
}
export default Header;