import TippyHeadless from '@tippyjs/react/headless';
import styles from './Search.module.scss'
import {Wrapper as ProperWrapper} from '../Proper/Wrapper';
import { useState, useRef, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faSpinner, } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../AccountItem/AccountItem';
import classNames from 'classnames/bind';
import { SearchIcon } from '../Icon';
import UseDebounce from '../../hooks/useDebounce';

const cx = classNames.bind(styles);
function Search(){
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounce = UseDebounce(searchValue, 500);

    useEffect(()=>{
        if(!debounce.trim()) {
            setResultSearch([])
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        .then(res => res.json())
        .then((res)=>{
            setResultSearch(res.data);
            setLoading(false)
        })
    },[debounce])

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
                        {resultSearch.map((result)=>{
                            return <AccountItem key={result.id} data={result}/>
                        })}
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
            
            {loading && <button className={cx('load')}><FontAwesomeIcon icon={faSpinner}/></button>}
            {!loading && !!searchValue && (
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