import styles from './Header.module.scss'
import images from '../../../../assets/image';
import {Wrapper as ProperWrapper} from '../../../Proper/Wrapper';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import AccountItem from '../../../AccountItem/AcountItem';
import Button from '../../../Button/index';

function Header(){
    const [resultSearch, setResultSearch] = useState([1,2]);
    return (
            <header className={styles['wrap-header']}>
                
                <div className={styles['contain-header']}>
                    <div className={styles.logo}>
                        <img src={images.logo} alt='Tiktok'/>
                    </div>
                    <Tippy
                        visible={resultSearch.length>0}
                        interactive={true}
                        render={attrs => (
                            <div className={styles['search-result']} tabIndex="-1" {...attrs}>
                                <ProperWrapper>
                                    <p className={styles['search-title']}>Account</p>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                </ProperWrapper>
                            </div>
                        )}
                    >
                    <div className={styles.search}>
                        <input type='text' placeholder='Search account and video' spellCheck='false'/>
                        
                        <button className={styles.close}>
                            <FontAwesomeIcon icon={faCircleXmark}/>    
                        </button>
                        <button className={styles.load}>
                            <FontAwesomeIcon icon={faSpinner}/>
                        </button>
                        <button className={styles['search-btn']}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                    </Tippy>
                    <div className={styles.action}>
                        <Button text>Upload</Button>
                        <Button rounded>Login</Button>
                    </div>
                </div>
            </header>
    )
}
export default Header;