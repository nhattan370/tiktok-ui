import TippyHeadless from '@tippyjs/react/headless';
import styles from './Search.module.scss'
import {Wrapper as ProperWrapper} from '../Proper/Wrapper';
import { useState, useRef } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faMagnifyingGlass, faSpinner, } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../AccountItem/AccountItem';
import classNames from 'classnames/bind';
import { SearchIcon } from '../Icon';

const cx = classNames.bind(styles);
function Search(){
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([1,2]);
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef();

    const handleClickOutside = () => {
        setShowResult(false)
    }
    return (
        <TippyHeadless
            visible={showResult && resultSearch.length>0}
            interactive={true}
            onClickOutside={handleClickOutside}
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
            <input type='text' 
                   ref={inputRef}
                   placeholder='Search account and video' 
                   spellCheck='false' 
                   value={searchValue}
                   onChange={(e)=>setSearchValue(e.target.value)} 
                   onFocus={()=>{setShowResult(true)}}
                   />
            
            {/* <button className={cx('load')}>
                <FontAwesomeIcon icon={faSpinner}/>
                </button> */}
            {!!searchValue && (
                <button className={cx('close')}>
                    <FontAwesomeIcon icon={faCircleXmark} onClick={()=>{
                        inputRef.current.focus()
                        setSearchValue('')
                    }}/>    
                </button>
            )}
            <button className={styles['search-btn']}>
                <SearchIcon></SearchIcon>
            </button>
        </div>
        </TippyHeadless>
    )
}
export default Search;