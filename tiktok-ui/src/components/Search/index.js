import TippyHeadless from '@tippyjs/react/headless';
import styles from './Search.module.scss'
import {Wrapper as ProperWrapper} from '../Proper/Wrapper';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faMagnifyingGlass, faSpinner, } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../AccountItem/AccountItem';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Search(){
    const [resultSearch, setResultSearch] = useState([1,2]);
    return (
        <TippyHeadless
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
        <div className={cx('search')}>
            <input type='text' placeholder='Search account and video' spellCheck='false'/>
            
            <button className={cx('close')}>
                <FontAwesomeIcon icon={faCircleXmark}/>    
            </button>
            <button className={cx('load')}>
                <FontAwesomeIcon icon={faSpinner}/>
            </button>
            <button className={styles['search-btn']}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </div>
        </TippyHeadless>
    )
}
export default Search;